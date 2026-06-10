import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

/**
 * Simple admin auth check using a password in env vars
 */
function isAuthorized(request: NextRequest): boolean {
  const authHeader = request.headers.get('x-admin-password');
  const adminPassword = process.env.ADMIN_PASSWORD || 'fairprice_admin_2026';
  return authHeader === adminPassword;
}

/**
 * GET /api/admin?tab=submissions|users|leads|alerts&page=1&limit=20&search=...
 */
export async function GET(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getServiceSupabase();
  const tab = request.nextUrl.searchParams.get('tab') || 'submissions';
  const page = parseInt(request.nextUrl.searchParams.get('page') || '1');
  const limit = parseInt(request.nextUrl.searchParams.get('limit') || '20');
  const search = request.nextUrl.searchParams.get('search') || '';
  const offset = (page - 1) * limit;

  try {
    // Stats overview
    const [
      { count: totalSubmissions },
      { count: totalUsers },
      { count: totalLeads },
      { count: totalAlerts },
    ] = await Promise.all([
      supabase.from('submissions').select('*', { count: 'exact', head: true }),
      supabase.from('users').select('*', { count: 'exact', head: true }),
      supabase.from('leads').select('*', { count: 'exact', head: true }),
      supabase.from('alerts').select('*', { count: 'exact', head: true }),
    ]);

    const stats = {
      submissions: totalSubmissions || 0,
      users: totalUsers || 0,
      leads: totalLeads || 0,
      alerts: totalAlerts || 0,
    };

    // Fetch data based on tab
    let data: unknown[] = [];
    let count = 0;

    if (tab === 'submissions') {
      let query = supabase
        .from('submissions')
        .select('*', { count: 'exact' })
        .order('submitted_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (search) {
        query = query.or(`service_type.ilike.%${search}%,company_name.ilike.%${search}%,zip_code.ilike.%${search}%`);
      }

      const result = await query;
      data = result.data || [];
      count = result.count || 0;
    } else if (tab === 'users') {
      let query = supabase
        .from('users')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (search) {
        query = query.ilike('email', `%${search}%`);
      }

      const result = await query;
      data = result.data || [];
      count = result.count || 0;
    } else if (tab === 'leads') {
      let query = supabase
        .from('leads')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (search) {
        query = query.or(`name.ilike.%${search}%,email.ilike.%${search}%,service_type.ilike.%${search}%`);
      }

      const result = await query;
      data = result.data || [];
      count = result.count || 0;
    } else if (tab === 'alerts') {
      let query = supabase
        .from('alerts')
        .select('*', { count: 'exact' })
        .order('created_at', { ascending: false })
        .range(offset, offset + limit - 1);

      if (search) {
        query = query.or(`email.ilike.%${search}%,service_type.ilike.%${search}%`);
      }

      const result = await query;
      data = result.data || [];
      count = result.count || 0;
    }

    return NextResponse.json({
      stats,
      data,
      pagination: {
        page,
        limit,
        total: count,
        totalPages: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Server error';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * DELETE /api/admin?tab=submissions|leads&id=xxx — Delete a record
 */
export async function DELETE(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getServiceSupabase();
  const tab = request.nextUrl.searchParams.get('tab');
  const id = request.nextUrl.searchParams.get('id');

  if (!tab || !id) {
    return NextResponse.json({ error: 'tab and id are required' }, { status: 400 });
  }

  const validTabs = ['submissions', 'leads', 'alerts'];
  if (!validTabs.includes(tab)) {
    return NextResponse.json({ error: 'Invalid tab' }, { status: 400 });
  }

  const { error } = await supabase
    .from(tab)
    .delete()
    .eq('id', id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: `${tab} record deleted.` });
}


/**
 * POST /api/admin — Bulk CSV import of submissions
 */
export async function POST(request: NextRequest) {
  if (!isAuthorized(request)) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const supabase = getServiceSupabase();

  try {
    const body = await request.json();
    const { csv } = body;

    if (!csv || typeof csv !== 'string') {
      return NextResponse.json({ error: 'CSV data is required' }, { status: 400 });
    }

    // Parse CSV
    const lines = csv.trim().split('\n');
    if (lines.length < 2) {
      return NextResponse.json({ error: 'CSV must have a header row and at least one data row' }, { status: 400 });
    }

    // Parse header
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const requiredHeaders = ['service_type', 'category_id', 'zip_code', 'price_paid'];
    const missingHeaders = requiredHeaders.filter(h => !headers.includes(h));

    if (missingHeaders.length > 0) {
      return NextResponse.json({
        error: `Missing required columns: ${missingHeaders.join(', ')}`,
      }, { status: 400 });
    }

    const validCategories = [
      'plumbing', 'electrical', 'auto-repair', 'home-exterior', 'landscaping',
      'dental', 'moving', 'hvac', 'appliance-repair', 'pest-control',
      'cleaning', 'home-security', 'carpentry', 'interior-design',
    ];

    // Parse data rows
    const rows: Record<string, unknown>[] = [];
    const errors: string[] = [];

    for (let i = 1; i < lines.length; i++) {
      const line = lines[i].trim();
      if (!line) continue; // skip empty lines

      // Handle CSV with commas in quoted fields
      const values = parseCSVLine(line);

      if (values.length !== headers.length) {
        errors.push(`Column count mismatch (expected ${headers.length}, got ${values.length})`);
        continue;
      }

      const row: Record<string, unknown> = {};
      headers.forEach((header, idx) => {
        row[header] = values[idx]?.trim() || null;
      });

      // Validate required fields
      if (!row.service_type || !row.category_id || !row.zip_code || !row.price_paid) {
        errors.push(`Missing required field (service_type, category_id, zip_code, or price_paid)`);
        continue;
      }

      // Validate category_id
      if (!validCategories.includes(row.category_id as string)) {
        errors.push(`Invalid category_id "${row.category_id}"`);
        continue;
      }

      // Validate zip_code
      const zipCode = String(row.zip_code);
      if (!/^\d{5,6}$/.test(zipCode)) {
        errors.push(`Invalid zip_code "${row.zip_code}" (must be 5 or 6 digits)`);
        continue;
      }

      // Validate price_paid
      const pricePaid = parseFloat(row.price_paid as string);
      if (isNaN(pricePaid) || pricePaid <= 0) {
        errors.push(`Invalid price_paid "${row.price_paid}" (must be a positive number)`);
        continue;
      }

      // Build submission record
      const submission: Record<string, unknown> = {
        service_type: (row.service_type as string).toLowerCase().trim(),
        category_id: (row.category_id as string).toLowerCase().trim(),
        zip_code: zipCode,
        price_paid: pricePaid,
        units: row.units ? parseFloat(row.units as string) : null,
        unit_type: row.unit_type || null,
        company_name: row.company_name || null,
        job_description: row.job_description || null,
      };

      rows.push(submission);
    }

    if (rows.length === 0) {
      return NextResponse.json({
        error: 'No valid rows to import',
        errors,
      }, { status: 400 });
    }

    // Insert in batches of 50
    let imported = 0;
    const batchSize = 50;

    for (let i = 0; i < rows.length; i += batchSize) {
      const batch = rows.slice(i, i + batchSize);
      const { data, error } = await supabase
        .from('submissions')
        .insert(batch)
        .select();

      if (error) {
        errors.push(`Batch ${Math.floor(i / batchSize) + 1} failed: ${error.message}`);
      } else {
        imported += (data?.length || 0);
      }
    }

    return NextResponse.json({
      success: true,
      imported,
      total: rows.length,
      errors: errors.length > 0 ? errors : undefined,
      message: `Imported ${imported} of ${rows.length} rows.${errors.length > 0 ? ` ${errors.length} rows had errors.` : ''}`,
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Import failed';
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

/**
 * Parse a CSV line handling quoted fields (commas inside quotes)
 */
function parseCSVLine(line: string): string[] {
  const result: string[] = [];
  let current = '';
  let inQuotes = false;

  for (let i = 0; i < line.length; i++) {
    const char = line[i];

    if (char === '"') {
      inQuotes = !inQuotes;
    } else if (char === ',' && !inQuotes) {
      result.push(current);
      current = '';
    } else {
      current += char;
    }
  }
  result.push(current);

  return result;
}

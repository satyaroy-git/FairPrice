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

import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

/**
 * POST /api/contractors — Register a new contractor/service provider
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { businessName, ownerName, email, phone, categoryId, zipCodes, description, website, experience } = body;

    // Validation
    if (!businessName || !ownerName || !email || !phone || !categoryId || !zipCodes) {
      return NextResponse.json(
        { error: 'Missing required fields.' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    // Check for existing registration
    const { data: existing } = await supabase
      .from('contractors')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: 'This email is already registered. Contact support if you need to update your profile.' },
        { status: 409 }
      );
    }

    // Parse ZIP codes
    const zipArray = zipCodes.split(',').map((z: string) => z.trim()).filter((z: string) => z.length >= 5);

    const { data: contractor, error } = await supabase
      .from('contractors')
      .insert({
        business_name: businessName.trim(),
        owner_name: ownerName.trim(),
        email: email.toLowerCase().trim(),
        phone: phone.trim(),
        category_id: categoryId,
        zip_codes: zipArray,
        description: description?.trim() || null,
        website: website?.trim() || null,
        experience: experience || null,
        status: 'pending',
        verified: false,
      })
      .select()
      .single();

    if (error) {
      console.error('Contractor insert error:', error);
      return NextResponse.json({ error: 'Failed to register. Please try again.' }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      contractor: { id: contractor.id, businessName, email },
      message: 'Registration submitted! We will verify your business within 48 hours.',
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}

/**
 * GET /api/contractors — List contractors (for admin)
 */
export async function GET(request: NextRequest) {
  const categoryId = request.nextUrl.searchParams.get('category');
  const zipCode = request.nextUrl.searchParams.get('zip');

  const supabase = getServiceSupabase();

  let query = supabase
    .from('contractors')
    .select('*')
    .eq('status', 'approved')
    .eq('verified', true);

  if (categoryId) {
    query = query.eq('category_id', categoryId);
  }

  if (zipCode) {
    query = query.contains('zip_codes', [zipCode]);
  }

  const { data, error } = await query.order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ contractors: data || [] });
}

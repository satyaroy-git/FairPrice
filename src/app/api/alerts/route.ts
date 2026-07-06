import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

/**
 * GET /api/alerts?email=xxx — List all alerts for a user
 */
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const supabase = getServiceSupabase();
  const normalizedEmail = email.toLowerCase().trim();

  const { data: alerts, error } = await supabase
    .from('alerts')
    .select('*')
    .eq('email', normalizedEmail)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ alerts: alerts || [] });
}

/**
 * POST /api/alerts — Create a new price alert
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, serviceType, categoryId, zipCode, targetPrice, frequency } = body;

    if (!email || !email.includes('@') || !serviceType || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields: email, serviceType, zipCode' },
        { status: 400 }
      );
    }

    if (!/^\d{5,6}$/.test(zipCode)) {
      return NextResponse.json(
        { error: 'Invalid ZIP/PIN code format.' },
        { status: 400 }
      );
    }

    const supabase = getServiceSupabase();

    // Check if alert already exists for this user + service + zip
    const { data: existing } = await supabase
      .from('alerts')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .eq('service_type', serviceType.toLowerCase().trim())
      .eq('zip_code', zipCode)
      .maybeSingle();

    if (existing) {
      return NextResponse.json(
        { error: 'You already have an alert for this service and area.' },
        { status: 409 }
      );
    }

    const { data: alert, error } = await supabase
      .from('alerts')
      .insert({
        email: email.toLowerCase().trim(),
        service_type: serviceType.toLowerCase().trim(),
        category_id: categoryId || null,
        zip_code: zipCode,
        target_price: targetPrice || null,
        frequency: frequency || 'weekly',
        active: true,
      })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      alert,
      message: `Alert set! We'll notify you when prices for "${serviceType}" change in your area.`,
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body.' }, { status: 400 });
  }
}

/**
 * DELETE /api/alerts?id=xxx — Delete a price alert
 */
export async function DELETE(request: NextRequest) {
  const alertId = request.nextUrl.searchParams.get('id');

  if (!alertId) {
    return NextResponse.json({ error: 'Alert ID is required' }, { status: 400 });
  }

  const supabase = getServiceSupabase();

  const { error } = await supabase
    .from('alerts')
    .delete()
    .eq('id', alertId);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ success: true, message: 'Alert deleted.' });
}

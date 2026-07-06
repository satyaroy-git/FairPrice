import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';
import { getServiceSupabase } from '@/lib/supabase';

/**
 * POST /api/leads — Store a new lead and send notification email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, phone, email, serviceType, categoryId, zipCode, units, unitType, priceRangeLow, priceRangeHigh, priceRangeAvg, contractors } = body;

    // Validation
    if (!name || !phone || !email || !serviceType || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields: name, phone, email, serviceType, zipCode' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Store lead in database
    const { data: lead, error: insertError } = await supabase
      .from('leads')
      .insert({
        name,
        phone,
        email: email.toLowerCase().trim(),
        service_type: serviceType,
        category_id: categoryId || null,
        zip_code: zipCode,
        units: units || null,
        unit_type: unitType || null,
        price_range_low: priceRangeLow || null,
        price_range_high: priceRangeHigh || null,
        price_range_avg: priceRangeAvg || null,
        contractors_matched: contractors || null,
        status: 'new',
        notification_sent: false,
      })
      .select()
      .single();

    if (insertError) {
      console.error('Lead insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to save your request. Please try again.' },
        { status: 500 }
      );
    }

    // Send notification email to user via Supabase Edge Function or direct email
    let emailSent = false;
    try {
      emailSent = await sendQuoteEmail({
        to: email.toLowerCase().trim(),
        name,
        serviceType,
        zipCode,
        priceRangeLow,
        priceRangeHigh,
        priceRangeAvg,
        contractors: contractors || [],
        units,
        unitType,
      });

      // Update lead status
      if (emailSent) {
        const serviceClient = getServiceSupabase();
        await serviceClient
          .from('leads')
          .update({ notification_sent: true, status: 'notified' })
          .eq('id', lead.id);
      }
    } catch (emailErr) {
      console.error('Email send error:', emailErr);
      // Don't fail the request if email fails - lead is still stored
    }

    // Also track this lookup for follow-up email (2 weeks later)
    try {
      await supabase
        .from('lookup_followups')
        .insert({
          email: email.toLowerCase().trim(),
          service_type: serviceType.toLowerCase().trim(),
          category_id: categoryId || null,
          zip_code: zipCode,
          quote_amount: priceRangeAvg || null,
        });
    } catch {
      // Non-critical — don't fail the main request
    }

    return NextResponse.json({
      success: true,
      leadId: lead.id,
      emailSent,
      message: emailSent
        ? 'Your request has been saved! Check your email for quote details.'
        : 'Your request has been saved! Our team will connect you with professionals shortly.',
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}

/**
 * Send quote details email to user
 * Uses Supabase's built-in email (via auth.admin) or a simple SMTP approach
 */
async function sendQuoteEmail(params: {
  to: string;
  name: string;
  serviceType: string;
  zipCode: string;
  priceRangeLow?: number;
  priceRangeHigh?: number;
  priceRangeAvg?: number;
  contractors: string[];
  units?: number;
  unitType?: string;
}): Promise<boolean> {
  const { to, name, serviceType, zipCode, priceRangeLow, priceRangeHigh, priceRangeAvg, contractors, units, unitType } = params;

  // Determine currency
  const isIndia = zipCode.length === 6;
  const symbol = isIndia ? '₹' : '$';
  const formatPrice = (amount: number) => `${symbol}${amount.toLocaleString(isIndia ? 'en-IN' : 'en-US')}`;

  // Build email content
  const priceInfo = priceRangeAvg
    ? `Price Range: ${formatPrice(priceRangeLow || 0)} — ${formatPrice(priceRangeHigh || 0)} (Average: ${formatPrice(priceRangeAvg)})`
    : 'Price data being gathered for your area.';

  const unitsInfo = units && unitType ? `\nFor: ${units} ${unitType}` : '';

  const contractorList = contractors.length > 0
    ? contractors.map((c, i) => `${i + 1}. ${c}`).join('\n')
    : 'We are finding the best professionals in your area.';

  const emailBody = `
Hi ${name},

Thank you for using FairPrice! Here are the quote details for your request:

Service: ${serviceType.charAt(0).toUpperCase() + serviceType.slice(1)}${unitsInfo}
Area: ${isIndia ? 'PIN' : 'ZIP'} ${zipCode}

${priceInfo}

Top-Rated Professionals in Your Area:
${contractorList}

What happens next:
• 2-3 vetted professionals will contact you within 24 hours
• They will provide personalized quotes for your specific needs
• Compare quotes and choose the best option

Tips for getting the best deal:
• Get at least 2-3 quotes before deciding
• Ask about warranties and guarantees
• Check reviews and past work
• Negotiate — the fair price range gives you leverage!

Need help? Reply to this email anytime.

Best regards,
The FairPrice Team
💰 Know What You Should Really Pay
`.trim();

  // Try sending via Resend API (if RESEND_API_KEY is configured)
  const resendKey = process.env.RESEND_API_KEY;
  if (resendKey) {
    try {
      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: process.env.EMAIL_FROM || 'FairPrice <satya.bit123@gmail.com>',
          to: [to],
          subject: `Your ${serviceType} Quote Details — FairPrice`,
          text: emailBody,
        }),
      });

      if (response.ok) {
        console.log(`Email sent to ${to} for ${serviceType}`);
        return true;
      } else {
        const err = await response.json();
        console.error('Resend API error:', err);
        return false;
      }
    } catch (err) {
      console.error('Resend fetch error:', err);
      return false;
    }
  }

  // Fallback: Store email content in a notifications queue table for manual sending
  // This ensures no leads are lost even without email integration
  try {
    const serviceClient = getServiceSupabase();
    await serviceClient
      .from('leads')
      .update({
        status: 'pending_email',
      })
      .eq('email', to)
      .order('created_at', { ascending: false })
      .limit(1);
  } catch {
    // Silent fail
  }

  console.log(`Email queued for ${to} (no RESEND_API_KEY configured)`);
  return false;
}

/**
 * GET /api/leads — Get leads (for admin purposes)
 */
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email) {
    return NextResponse.json({ error: 'Email parameter required' }, { status: 400 });
  }

  const serviceClient = getServiceSupabase();
  const { data, error } = await serviceClient
    .from('leads')
    .select('*')
    .eq('email', email.toLowerCase().trim())
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ leads: data });
}

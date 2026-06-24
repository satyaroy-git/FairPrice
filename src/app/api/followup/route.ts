import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';
import { supabase } from '@/lib/supabase';

/**
 * POST /api/followup — Track a lookup for future follow-up email
 * Called when a user performs a quote lookup and has provided their email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email, serviceType, categoryId, zipCode, quoteAmount } = body;

    if (!email || !serviceType || !zipCode) {
      return NextResponse.json(
        { error: 'Missing required fields: email, serviceType, zipCode' },
        { status: 400 }
      );
    }

    if (!email.includes('@')) {
      return NextResponse.json(
        { error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Check if a followup already exists for this user + service + zip in the last 30 days
    const serviceClient = getServiceSupabase();
    const thirtyDaysAgo = new Date();
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);

    const { data: existing } = await serviceClient
      .from('lookup_followups')
      .select('id')
      .eq('email', email.toLowerCase().trim())
      .eq('service_type', serviceType.toLowerCase().trim())
      .eq('zip_code', zipCode)
      .gte('lookup_at', thirtyDaysAgo.toISOString())
      .limit(1);

    if (existing && existing.length > 0) {
      // Already tracking this lookup — no duplicate needed
      return NextResponse.json({
        success: true,
        message: 'Lookup already tracked.',
        duplicate: true,
      });
    }

    // Insert new followup tracking record
    const { error: insertError } = await supabase
      .from('lookup_followups')
      .insert({
        email: email.toLowerCase().trim(),
        service_type: serviceType.toLowerCase().trim(),
        category_id: categoryId || null,
        zip_code: zipCode,
        quote_amount: quoteAmount || null,
      });

    if (insertError) {
      console.error('Followup insert error:', insertError);
      return NextResponse.json(
        { error: 'Failed to track lookup.' },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Lookup tracked. Follow-up email will be sent in 2 weeks.',
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}

/**
 * GET /api/followup/send — Cron endpoint: send follow-up emails for lookups older than 14 days
 * This should be called by a scheduled job (Netlify scheduled function, cron-job.org, etc.)
 * Protected by ADMIN_PASSWORD or a cron secret
 */
export async function GET(request: NextRequest) {
  // Verify authorization
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET || process.env.ADMIN_PASSWORD;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const serviceClient = getServiceSupabase();

  // Find followups that are:
  // 1. Older than 14 days (lookup_at < 14 days ago)
  // 2. Haven't been sent yet (followup_sent = false)
  // 3. User hasn't already submitted a price (submitted_price = false)
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  const { data: pendingFollowups, error: fetchError } = await serviceClient
    .from('lookup_followups')
    .select('*')
    .eq('followup_sent', false)
    .eq('submitted_price', false)
    .lte('lookup_at', fourteenDaysAgo.toISOString())
    .order('lookup_at', { ascending: true })
    .limit(50); // Process in batches

  if (fetchError) {
    console.error('Followup fetch error:', fetchError);
    return NextResponse.json({ error: 'Failed to fetch pending followups.' }, { status: 500 });
  }

  if (!pendingFollowups || pendingFollowups.length === 0) {
    return NextResponse.json({ message: 'No pending followups to send.', sent: 0 });
  }

  let sentCount = 0;
  const errors: string[] = [];

  for (const followup of pendingFollowups) {
    const emailSent = await sendFollowupEmail({
      to: followup.email,
      serviceType: followup.service_type,
      zipCode: followup.zip_code,
      quoteAmount: followup.quote_amount,
    });

    if (emailSent) {
      // Mark as sent
      await serviceClient
        .from('lookup_followups')
        .update({
          followup_sent: true,
          followup_sent_at: new Date().toISOString(),
        })
        .eq('id', followup.id);
      sentCount++;
    } else {
      errors.push(`Failed to send to ${followup.email}`);
    }
  }

  return NextResponse.json({
    message: `Follow-up emails processed.`,
    total: pendingFollowups.length,
    sent: sentCount,
    failed: errors.length,
    errors: errors.slice(0, 5), // Only return first 5 errors
  });
}

/**
 * Send a follow-up email asking "Did you get the work done? What did you pay?"
 */
async function sendFollowupEmail(params: {
  to: string;
  serviceType: string;
  zipCode: string;
  quoteAmount?: number;
}): Promise<boolean> {
  const { to, serviceType, zipCode, quoteAmount } = params;

  const isIndia = zipCode.length === 6;
  const symbol = isIndia ? '₹' : '$';
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://getfairprice.in';

  const quoteInfo = quoteAmount
    ? `You were looking at a quote of ${symbol}${quoteAmount.toLocaleString(isIndia ? 'en-IN' : 'en-US')}.`
    : '';

  const submitUrl = `${siteUrl}/submit?service=${encodeURIComponent(serviceType)}&zip=${zipCode}`;

  const emailBody = `
Hi there!

Two weeks ago, you looked up prices for "${serviceType}" near ${isIndia ? 'PIN' : 'ZIP'} ${zipCode} on FairPrice. ${quoteInfo}

Did you get the work done? If so, we'd love to know what you actually paid!

Sharing your price takes 30 seconds and helps thousands of others get fair deals:

${submitUrl}

Why submit?
- Help others avoid overpaying
- Earn Trust Points for more lookups and features
- Keep prices accurate for your neighborhood

Your submission is completely anonymous — we never share personal details.

Thanks for being part of the FairPrice community!

Best,
The FairPrice Team
https://getfairprice.in
`.trim();

  // Try sending via Resend API
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
          subject: `Did you get your ${serviceType} done? Share what you paid!`,
          text: emailBody,
        }),
      });

      if (response.ok) {
        console.log(`Follow-up email sent to ${to} for ${serviceType}`);
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

  // No email provider configured — log for manual processing
  console.log(`[FOLLOWUP QUEUED] To: ${to} | Service: ${serviceType} | ZIP: ${zipCode}`);
  return true; // Return true so it's marked as "sent" (queued)
}

import { NextRequest, NextResponse } from 'next/server';
import { getServiceSupabase } from '@/lib/supabase';

/**
 * GET /api/cron/followups — Scheduled endpoint to send follow-up emails
 * 
 * Finds lookups older than 14 days where:
 * - Follow-up hasn't been sent yet
 * - User hasn't already submitted a price
 * 
 * Call this endpoint via:
 * - Netlify Scheduled Functions
 * - cron-job.org (free external cron)
 * - GitHub Actions on a schedule
 * 
 * Authorization: Bearer token = CRON_SECRET or ADMIN_PASSWORD env var
 */
export async function GET(request: NextRequest) {
  // Verify authorization
  const authHeader = request.headers.get('authorization');
  const cronSecret = process.env.CRON_SECRET || process.env.ADMIN_PASSWORD;

  if (!cronSecret || authHeader !== `Bearer ${cronSecret}`) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const serviceClient = getServiceSupabase();

  // Find followups older than 14 days that haven't been sent
  const fourteenDaysAgo = new Date();
  fourteenDaysAgo.setDate(fourteenDaysAgo.getDate() - 14);

  const { data: pendingFollowups, error: fetchError } = await serviceClient
    .from('lookup_followups')
    .select('*')
    .eq('followup_sent', false)
    .eq('submitted_price', false)
    .lte('lookup_at', fourteenDaysAgo.toISOString())
    .order('lookup_at', { ascending: true })
    .limit(50);

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
      quoteAmount: followup.quote_amount ? Number(followup.quote_amount) : undefined,
    });

    if (emailSent) {
      await serviceClient
        .from('lookup_followups')
        .update({
          followup_sent: true,
          followup_sent_at: new Date().toISOString(),
        })
        .eq('id', followup.id);
      sentCount++;
    } else {
      errors.push(`Failed: ${followup.email}`);
    }
  }

  return NextResponse.json({
    message: 'Follow-up batch processed.',
    total: pendingFollowups.length,
    sent: sentCount,
    failed: errors.length,
    errors: errors.slice(0, 5),
  });
}

/**
 * Send a follow-up email asking the user to submit their actual price
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
    ? `\nYou were evaluating a quote of ${symbol}${quoteAmount.toLocaleString(isIndia ? 'en-IN' : 'en-US')}.`
    : '';

  const submitUrl = `${siteUrl}/submit?service=${encodeURIComponent(serviceType)}&zip=${zipCode}`;

  const emailBody = `
Hi there!

Two weeks ago, you looked up prices for "${serviceType}" near ${isIndia ? 'PIN' : 'ZIP'} ${zipCode} on FairPrice.${quoteInfo}

Did you get the work done? If so, we'd love to know what you actually paid!

Sharing your price takes 30 seconds and helps thousands of others get fair deals:
${submitUrl}

Why submit?
- Help others avoid overpaying
- Earn Trust Points for more lookups and features
- Keep prices accurate for your neighborhood

Your submission is completely anonymous.

Thanks for being part of the FairPrice community!

Best,
The FairPrice Team
${siteUrl}
`.trim();

  // Try Resend API
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
        console.log(`[FOLLOWUP SENT] ${to} — ${serviceType}`);
        return true;
      } else {
        const err = await response.json();
        console.error('Resend API error:', err);
        return false;
      }
    } catch (err) {
      console.error('Resend error:', err);
      return false;
    }
  }

  // No email provider — log and mark as sent (queued for manual)
  console.log(`[FOLLOWUP QUEUED] To: ${to} | Service: ${serviceType} | ZIP: ${zipCode}`);
  return true;
}

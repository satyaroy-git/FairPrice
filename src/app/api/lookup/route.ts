import { NextRequest, NextResponse } from 'next/server';
import { lookupPrice } from '@/lib/pricing';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const serviceType = searchParams.get('service');
  const zipCode = searchParams.get('zip');
  const quoteParam = searchParams.get('quote');

  if (!serviceType || !zipCode) {
    return NextResponse.json(
      { error: 'Missing required parameters: service and zip' },
      { status: 400 }
    );
  }

  if (!/^\d{5,6}$/.test(zipCode)) {
    return NextResponse.json(
      { error: 'Invalid ZIP/PIN code format. Must be 5 or 6 digits.' },
      { status: 400 }
    );
  }

  const userQuote = quoteParam ? parseFloat(quoteParam) : undefined;

  if (userQuote !== undefined && (isNaN(userQuote) || userQuote <= 0)) {
    return NextResponse.json(
      { error: 'Invalid quote amount.' },
      { status: 400 }
    );
  }

  const result = lookupPrice(serviceType, zipCode, userQuote);

  return NextResponse.json(result);
}

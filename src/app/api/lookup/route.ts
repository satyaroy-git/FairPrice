import { NextRequest, NextResponse } from 'next/server';
import { lookupPrice } from '@/lib/pricing';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const serviceType = searchParams.get('service');
  const zipCode = searchParams.get('zip');
  const quoteParam = searchParams.get('quote');
  const unitsParam = searchParams.get('units');
  const categoryId = searchParams.get('category') || undefined;

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
  const units = unitsParam ? parseFloat(unitsParam) : undefined;

  if (userQuote !== undefined && (isNaN(userQuote) || userQuote <= 0)) {
    return NextResponse.json(
      { error: 'Invalid quote amount.' },
      { status: 400 }
    );
  }

  try {
    const result = await lookupPrice(serviceType, zipCode, userQuote, categoryId, units);
    return NextResponse.json(result);
  } catch (err) {
    console.error('Lookup error:', err);
    return NextResponse.json(
      { error: 'Failed to look up prices. Please try again.' },
      { status: 500 }
    );
  }
}

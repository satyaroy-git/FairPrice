import { NextRequest, NextResponse } from 'next/server';
import { searchServices } from '@/lib/pricing';

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q') || '';

  const results = searchServices(query);

  return NextResponse.json({ services: results });
}

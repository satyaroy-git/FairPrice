import { NextRequest, NextResponse } from 'next/server';
import { addSubmission } from '@/lib/pricing';
import { categories } from '@/data/categories';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, categoryId, zipCode, pricePaid, companyName, jobDescription } = body;

    // Validation
    if (!serviceType || !categoryId || !zipCode || !pricePaid) {
      return NextResponse.json(
        { error: 'Missing required fields: serviceType, categoryId, zipCode, pricePaid' },
        { status: 400 }
      );
    }

    if (!/^\d{5}$/.test(zipCode)) {
      return NextResponse.json(
        { error: 'Invalid ZIP code format. Must be 5 digits.' },
        { status: 400 }
      );
    }

    if (typeof pricePaid !== 'number' || pricePaid <= 0) {
      return NextResponse.json(
        { error: 'Price paid must be a positive number.' },
        { status: 400 }
      );
    }

    const validCategory = categories.find(c => c.id === categoryId);
    if (!validCategory) {
      return NextResponse.json(
        { error: 'Invalid category ID.' },
        { status: 400 }
      );
    }

    const newSubmission = addSubmission({
      serviceType: serviceType.toLowerCase().trim(),
      categoryId,
      zipCode,
      pricePaid,
      companyName: companyName || undefined,
      jobDescription: jobDescription || undefined,
    });

    return NextResponse.json({
      success: true,
      submission: newSubmission,
      message: 'Thank you! You earned 10 trust points for contributing.',
    }, { status: 201 });
  } catch {
    return NextResponse.json(
      { error: 'Invalid request body.' },
      { status: 400 }
    );
  }
}

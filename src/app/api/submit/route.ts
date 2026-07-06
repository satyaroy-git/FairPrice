import { NextRequest, NextResponse } from 'next/server';
import { addSubmission } from '@/lib/pricing';
import { getServiceSupabase } from '@/lib/supabase';
import { categories } from '@/data/categories';

/**
 * Calculate user tier based on trust points
 */
function calculateTier(points: number): string {
  if (points >= 200) return 'moderator';
  if (points >= 100) return 'power';
  if (points >= 50) return 'trusted';
  if (points >= 10) return 'contributor';
  return 'new';
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { serviceType, categoryId, zipCode, pricePaid, units, unitType, companyName, jobDescription, email } = body;

    // Validation
    if (!serviceType || !categoryId || !zipCode || !pricePaid) {
      return NextResponse.json(
        { error: 'Missing required fields: serviceType, categoryId, zipCode, pricePaid' },
        { status: 400 }
      );
    }

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email is required to earn trust points.' },
        { status: 400 }
      );
    }

    if (!/^\d{5,6}$/.test(zipCode)) {
      return NextResponse.json(
        { error: 'Invalid ZIP/PIN code format. Must be 5 or 6 digits.' },
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

    const normalizedEmail = email.toLowerCase().trim();

    // Use service role client to bypass RLS for user operations
    const supabase = getServiceSupabase();

    // Add submission to database
    const newSubmission = await addSubmission({
      serviceType: serviceType.toLowerCase().trim(),
      categoryId,
      zipCode,
      pricePaid,
      units: units || undefined,
      unitType: unitType || undefined,
      companyName: companyName || undefined,
      jobDescription: jobDescription || undefined,
      userEmail: normalizedEmail,
    });

    // Check if user exists
    console.log('=== USER LOOKUP ===', normalizedEmail);
    const { data: existingUser, error: lookupError } = await supabase
      .from('users')
      .select('*')
      .eq('email', normalizedEmail)
      .maybeSingle();

    console.log('Existing user:', existingUser, 'Lookup error:', lookupError);

    let userPoints = 10;
    let userTier = 'contributor';
    let submissionsCount = 1;

    if (existingUser) {
      // Update existing user — increment points
      userPoints = (existingUser.trust_points || 0) + 10;
      submissionsCount = (existingUser.submissions_count || 0) + 1;
      userTier = calculateTier(userPoints);

      console.log('=== UPDATING USER ===', { userPoints, submissionsCount, userTier });
      const { error: updateError } = await supabase
        .from('users')
        .update({
          trust_points: userPoints,
          submissions_count: submissionsCount,
          tier: userTier,
        })
        .eq('email', normalizedEmail);

      if (updateError) {
        console.error('!!! User UPDATE error:', updateError);
      } else {
        console.log('User updated successfully');
      }
    } else {
      // Create new user
      userTier = calculateTier(10);
      console.log('=== INSERTING NEW USER ===', normalizedEmail);
      const { data: insertedUser, error: insertError } = await supabase
        .from('users')
        .insert({
          email: normalizedEmail,
          trust_points: 10,
          submissions_count: 1,
          tier: userTier,
        })
        .select()
        .single();

      if (insertError) {
        console.error('!!! User INSERT error:', insertError);
      } else {
        console.log('User inserted successfully:', insertedUser);
      }
    }

    return NextResponse.json({
      success: true,
      submission: newSubmission,
      user: {
        email: normalizedEmail,
        trust_points: userPoints,
        submissions_count: submissionsCount,
        tier: userTier,
      },
      message: `Thank you! You earned 10 trust points. Total: ${userPoints} points (${userTier} tier).`,
    }, { status: 201 });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'Something went wrong';
    return NextResponse.json(
      { error: message },
      { status: 500 }
    );
  }
}

import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

/**
 * GET /api/user?email=xxx — Look up user by email, return their points and tier
 */
export async function GET(request: NextRequest) {
  const email = request.nextUrl.searchParams.get('email');

  if (!email || !email.includes('@')) {
    return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
  }

  const normalizedEmail = email.toLowerCase().trim();

  const { data: user, error } = await supabase
    .from('users')
    .select('*')
    .eq('email', normalizedEmail)
    .single();

  if (error || !user) {
    // User doesn't exist yet
    return NextResponse.json({
      exists: false,
      email: normalizedEmail,
      trust_points: 0,
      submissions_count: 0,
      tier: 'new',
    });
  }

  return NextResponse.json({
    exists: true,
    email: user.email,
    trust_points: user.trust_points,
    submissions_count: user.submissions_count,
    tier: user.tier,
    created_at: user.created_at,
  });
}

/**
 * POST /api/user — Create or get user by email
 */
export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { email } = body;

    if (!email || !email.includes('@')) {
      return NextResponse.json({ error: 'Valid email is required' }, { status: 400 });
    }

    const normalizedEmail = email.toLowerCase().trim();

    // Try to find existing user
    const { data: existingUser } = await supabase
      .from('users')
      .select('*')
      .eq('email', normalizedEmail)
      .single();

    if (existingUser) {
      return NextResponse.json({
        user: existingUser,
        isNew: false,
      });
    }

    // Create new user
    const { data: newUser, error } = await supabase
      .from('users')
      .insert({ email: normalizedEmail })
      .select()
      .single();

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({
      user: newUser,
      isNew: true,
    }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Invalid request body' }, { status: 400 });
  }
}

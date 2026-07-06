import { createClient, SupabaseClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';

// Client for frontend/API routes (uses anon key with RLS)
// Gracefully handle missing env vars to prevent crash at module import time
let supabase: SupabaseClient;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  // Create a dummy client that won't crash but will return errors on queries
  console.warn('⚠️ Supabase environment variables not configured. API calls will return empty results.');
  supabase = createClient('https://placeholder.supabase.co', 'placeholder-key');
}

export { supabase };

// Server client for admin operations (uses service role key, bypasses RLS)
export function getServiceSupabase() {
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY || '';
  if (!supabaseUrl || !serviceRoleKey) {
    console.warn('⚠️ Supabase service role key not configured.');
    return supabase; // fallback to anon client
  }
  return createClient(supabaseUrl, serviceRoleKey);
}

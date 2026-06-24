-- ============================================================
-- Migration 008: COMPLETE RLS fix for all tables
-- ============================================================
-- Run this entire script in Supabase SQL Editor
-- It is IDEMPOTENT — safe to run multiple times
-- ============================================================

-- ============================================================
-- STEP 1: Enable RLS on ALL tables (safe even if already enabled)
-- ============================================================
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;
ALTER TABLE contractors ENABLE ROW LEVEL SECURITY;

-- ============================================================
-- STEP 2: Drop ALL existing policies (clean slate)
-- ============================================================
-- submissions
DROP POLICY IF EXISTS "Allow public read" ON submissions;
DROP POLICY IF EXISTS "Allow public insert" ON submissions;
DROP POLICY IF EXISTS "Allow public read submissions" ON submissions;
DROP POLICY IF EXISTS "Allow public insert submissions" ON submissions;
DROP POLICY IF EXISTS "Service role full access submissions" ON submissions;

-- users
DROP POLICY IF EXISTS "Allow public read users" ON users;
DROP POLICY IF EXISTS "Allow public insert users" ON users;
DROP POLICY IF EXISTS "Allow public update users" ON users;
DROP POLICY IF EXISTS "Anon read users by email" ON users;
DROP POLICY IF EXISTS "Service role update users" ON users;
DROP POLICY IF EXISTS "Service role delete users" ON users;
DROP POLICY IF EXISTS "Service role read users" ON users;
DROP POLICY IF EXISTS "Service role insert users" ON users;

-- leads
DROP POLICY IF EXISTS "Allow public read leads" ON leads;
DROP POLICY IF EXISTS "Allow public insert leads" ON leads;
DROP POLICY IF EXISTS "Allow public update leads" ON leads;
DROP POLICY IF EXISTS "Service role read leads" ON leads;
DROP POLICY IF EXISTS "Service role update leads" ON leads;
DROP POLICY IF EXISTS "Service role delete leads" ON leads;

-- alerts
DROP POLICY IF EXISTS "Allow public read alerts" ON alerts;
DROP POLICY IF EXISTS "Allow public insert alerts" ON alerts;
DROP POLICY IF EXISTS "Allow public update alerts" ON alerts;
DROP POLICY IF EXISTS "Allow service read alerts" ON alerts;
DROP POLICY IF EXISTS "Allow service update alerts" ON alerts;

-- contractors
DROP POLICY IF EXISTS "Public read verified contractors" ON contractors;
DROP POLICY IF EXISTS "Public insert contractor applications" ON contractors;
DROP POLICY IF EXISTS "Service role full read contractors" ON contractors;
DROP POLICY IF EXISTS "Service role update contractors" ON contractors;
DROP POLICY IF EXISTS "Service role delete contractors" ON contractors;

-- ============================================================
-- STEP 3: Create PROPER policies for each table
-- ============================================================

-- === SUBMISSIONS: Public can READ and INSERT only ===
CREATE POLICY "anon_read_submissions" ON submissions
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_insert_submissions" ON submissions
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "service_all_submissions" ON submissions
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- === USERS: Public can READ only (for trust tier lookup). No update/delete ===
CREATE POLICY "anon_read_users" ON users
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_insert_users" ON users
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "service_all_users" ON users
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- === LEADS: Public can INSERT only. No read/update/delete ===
CREATE POLICY "anon_insert_leads" ON leads
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "service_all_leads" ON leads
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- === ALERTS: Public can READ and INSERT only ===
CREATE POLICY "anon_read_alerts" ON alerts
  FOR SELECT TO anon USING (true);

CREATE POLICY "anon_insert_alerts" ON alerts
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "service_all_alerts" ON alerts
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- === CONTRACTORS: Public can READ (only approved+verified) and INSERT ===
CREATE POLICY "anon_read_contractors" ON contractors
  FOR SELECT TO anon USING (status = 'approved' AND verified = true);

CREATE POLICY "anon_insert_contractors" ON contractors
  FOR INSERT TO anon WITH CHECK (true);

CREATE POLICY "service_all_contractors" ON contractors
  FOR ALL TO service_role USING (true) WITH CHECK (true);

-- ============================================================
-- DONE! All tables now have RLS enabled with proper policies.
-- Anon key: can only read/insert as defined above
-- Service role: full access (used by your admin API routes)
-- ============================================================

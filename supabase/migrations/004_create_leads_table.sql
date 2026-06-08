-- Leads table for "Get 3 Free Quotes" feature
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS leads (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  category_id TEXT,
  zip_code TEXT NOT NULL,
  units NUMERIC,
  unit_type TEXT,
  price_range_low NUMERIC,
  price_range_high NUMERIC,
  price_range_avg NUMERIC,
  status TEXT DEFAULT 'new',
  contractors_matched TEXT[],
  notification_sent BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes
CREATE INDEX IF NOT EXISTS idx_leads_email ON leads(email);
CREATE INDEX IF NOT EXISTS idx_leads_zip ON leads(zip_code);
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads(status);

-- Enable RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow insert from frontend
CREATE POLICY "Allow public insert leads" ON leads
  FOR INSERT WITH CHECK (true);

-- Allow read (for admin/service role only in practice)
CREATE POLICY "Allow public read leads" ON leads
  FOR SELECT USING (true);

-- Allow update (for status changes)
CREATE POLICY "Allow public update leads" ON leads
  FOR UPDATE USING (true);

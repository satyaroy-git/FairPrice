-- Price Alerts table
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS alerts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  category_id TEXT,
  zip_code TEXT NOT NULL,
  target_price NUMERIC,
  frequency TEXT DEFAULT 'weekly',
  active BOOLEAN DEFAULT TRUE,
  last_sent_at TIMESTAMP,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_alerts_email ON alerts(email);
CREATE INDEX IF NOT EXISTS idx_alerts_active ON alerts(active);
CREATE INDEX IF NOT EXISTS idx_alerts_zip ON alerts(zip_code);

ALTER TABLE alerts ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow public insert alerts" ON alerts FOR INSERT TO anon WITH CHECK (true);
CREATE POLICY "Allow public read alerts" ON alerts FOR SELECT TO anon USING (true);
CREATE POLICY "Allow public delete alerts" ON alerts FOR DELETE TO anon USING (true);
CREATE POLICY "Allow service insert alerts" ON alerts FOR INSERT TO service_role WITH CHECK (true);
CREATE POLICY "Allow service read alerts" ON alerts FOR SELECT TO service_role USING (true);
CREATE POLICY "Allow service delete alerts" ON alerts FOR DELETE TO service_role USING (true);

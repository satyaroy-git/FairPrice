-- ============================================================
-- Migration 009: Create lookup_followups table
-- Tracks users who performed a price lookup so we can send
-- them a follow-up email 2 weeks later asking "What did you pay?"
-- ============================================================

CREATE TABLE IF NOT EXISTS lookup_followups (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL,
  service_type TEXT NOT NULL,
  category_id TEXT,
  zip_code TEXT NOT NULL,
  quote_amount NUMERIC,
  lookup_at TIMESTAMP DEFAULT NOW(),
  followup_sent BOOLEAN DEFAULT FALSE,
  followup_sent_at TIMESTAMP,
  submitted_price BOOLEAN DEFAULT FALSE, -- did they come back and submit?
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_followups_email ON lookup_followups(email);
CREATE INDEX IF NOT EXISTS idx_followups_pending ON lookup_followups(followup_sent, lookup_at);
CREATE INDEX IF NOT EXISTS idx_followups_service ON lookup_followups(service_type, zip_code);

-- Enable RLS
ALTER TABLE lookup_followups ENABLE ROW LEVEL SECURITY;

-- Anon can only INSERT (track their own lookups)
CREATE POLICY "anon_insert_followups" ON lookup_followups
  FOR INSERT TO anon WITH CHECK (true);

-- Service role has full access (for cron job to read/update)
CREATE POLICY "service_all_followups" ON lookup_followups
  FOR ALL TO service_role USING (true) WITH CHECK (true);

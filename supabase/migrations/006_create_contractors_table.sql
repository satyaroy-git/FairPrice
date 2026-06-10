-- Contractors / Service Providers table
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS contractors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  business_name TEXT NOT NULL,
  owner_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT NOT NULL,
  category_id TEXT NOT NULL,
  zip_codes TEXT[] DEFAULT '{}',
  description TEXT,
  website TEXT,
  experience TEXT,
  status TEXT DEFAULT 'pending',
  verified BOOLEAN DEFAULT FALSE,
  leads_received INT DEFAULT 0,
  rating NUMERIC DEFAULT 0,
  created_at TIMESTAMP DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_contractors_email ON contractors(email);
CREATE INDEX IF NOT EXISTS idx_contractors_category ON contractors(category_id);
CREATE INDEX IF NOT EXISTS idx_contractors_status ON contractors(status);

ALTER TABLE contractors DISABLE ROW LEVEL SECURITY;

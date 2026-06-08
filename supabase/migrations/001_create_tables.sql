-- FairPrice Database Schema
-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Submissions table (the core data)
CREATE TABLE IF NOT EXISTS submissions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  service_type TEXT NOT NULL,
  category_id TEXT NOT NULL,
  zip_code TEXT NOT NULL,
  price_paid NUMERIC NOT NULL,
  company_name TEXT,
  job_description TEXT,
  submitted_at TIMESTAMP DEFAULT NOW(),
  trust_points INT DEFAULT 10,
  created_at TIMESTAMP DEFAULT NOW()
);

-- Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_submissions_service ON submissions(service_type);
CREATE INDEX IF NOT EXISTS idx_submissions_zip ON submissions(zip_code);
CREATE INDEX IF NOT EXISTS idx_submissions_category ON submissions(category_id);
CREATE INDEX IF NOT EXISTS idx_submissions_zip_prefix ON submissions(substring(zip_code, 1, 3));

-- Enable Row Level Security
ALTER TABLE submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to read submissions (public data)
CREATE POLICY "Allow public read" ON submissions
  FOR SELECT USING (true);

-- Allow anyone to insert submissions (anonymous contributions)
CREATE POLICY "Allow public insert" ON submissions
  FOR INSERT WITH CHECK (true);

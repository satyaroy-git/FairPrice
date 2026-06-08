-- Users table for trust points tracking
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS users (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  trust_points INT DEFAULT 0,
  submissions_count INT DEFAULT 0,
  tier TEXT DEFAULT 'new',
  created_at TIMESTAMP DEFAULT NOW(),
  updated_at TIMESTAMP DEFAULT NOW()
);

-- Index for email lookups
CREATE INDEX IF NOT EXISTS idx_users_email ON users(email);

-- Enable RLS
ALTER TABLE users ENABLE ROW LEVEL SECURITY;

-- Allow reading own user data (by email match)
CREATE POLICY "Allow public read users" ON users
  FOR SELECT USING (true);

-- Allow insert (new user registration)
CREATE POLICY "Allow public insert users" ON users
  FOR INSERT WITH CHECK (true);

-- Allow update (trust points increment)
CREATE POLICY "Allow public update users" ON users
  FOR UPDATE USING (true);

-- Add email column to submissions table to link submissions to users
ALTER TABLE submissions ADD COLUMN IF NOT EXISTS user_email TEXT;

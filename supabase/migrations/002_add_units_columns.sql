-- Add units and unit_type columns to submissions table
-- Run this in Supabase SQL Editor

ALTER TABLE submissions ADD COLUMN IF NOT EXISTS units NUMERIC;
ALTER TABLE submissions ADD COLUMN IF NOT EXISTS unit_type TEXT;

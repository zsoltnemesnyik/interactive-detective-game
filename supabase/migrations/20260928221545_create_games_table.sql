-- Create difficulty enum
CREATE TYPE difficulty AS ENUM ('easy', 'medium', 'hard');

-- Create games table
CREATE TABLE games (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  difficulty difficulty NOT NULL,
  title VARCHAR(255) NOT NULL,
  city VARCHAR(255) NOT NULL,
  description TEXT,
  cover_image TEXT,
  estimated_duration_min INTEGER,
  is_published BOOLEAN DEFAULT FALSE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE games ENABLE ROW LEVEL SECURITY;

-- Public read for published games
CREATE POLICY "published games are publicly readable"
  ON games FOR SELECT
  USING (is_published = TRUE);

-- Grant
GRANT SELECT ON games TO anon, authenticated;
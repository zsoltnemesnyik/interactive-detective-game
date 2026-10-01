-- Create session status enum
CREATE TYPE session_status AS ENUM ('waiting', 'in_progress', 'completed');

-- Create sessions table
CREATE TABLE sessions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  game_id uuid REFERENCES games(id) ON DELETE CASCADE,
  join_code VARCHAR(255) UNIQUE NOT NULL,
  status session_status DEFAULT 'waiting' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  finished_at TIMESTAMPTZ,
  lives_remaining INTEGER DEFAULT 5
);

-- Enable RLS
ALTER TABLE sessions ENABLE ROW LEVEL SECURITY;

-- Public read for published sessions
CREATE POLICY "sessions are publicly readable"
  ON sessions FOR SELECT
  USING (true);

-- Grant
GRANT SELECT ON sessions TO anon, authenticated;
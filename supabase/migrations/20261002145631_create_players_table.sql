-- 1. enum létrehozása
CREATE TYPE player_role AS ENUM ('field', 'terminal');

-- 2. players tábla
CREATE TABLE players (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  session_id uuid REFERENCES sessions(id) ON DELETE CASCADE,
  name VARCHAR(255) NOT NULL,
  role player_role DEFAULT 'terminal' NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. RLS engedélyezése
ALTER TABLE players ENABLE ROW LEVEL SECURITY;

-- 4. policy: publikus olvasás (mint a sessions-nél)
CREATE POLICY "players are publicly readable"
  ON players FOR SELECT
  USING (true);

-- 5. GRANT SELECT anon, authenticated
GRANT SELECT ON players TO anon, authenticated;

-- 6. Realtime publication (ezt még nem csináltuk — új elem lesz)
ALTER PUBLICATION supabase_realtime ADD TABLE players;
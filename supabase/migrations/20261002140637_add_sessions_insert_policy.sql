CREATE POLICY "sessions are insertable by anyone"
  ON sessions FOR INSERT
  WITH CHECK (true);

GRANT INSERT ON sessions TO anon, authenticated;
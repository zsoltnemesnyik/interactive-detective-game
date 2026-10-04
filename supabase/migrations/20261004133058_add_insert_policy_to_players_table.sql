CREATE POLICY "players are publicly insertable"
  ON players FOR INSERT
  WITH CHECK (true);
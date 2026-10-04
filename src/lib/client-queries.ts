import { createClient } from "@/utils/supabase/client";

export const PlayerClientQueries = {
  addPlayerToSession: async (sessionId: string, playerName: string) => {
    const supabase = createClient();

    const { data, error } = await supabase
      .from("players")
      .insert({ session_id: sessionId, name: playerName })
      .select()
      .single();

    if (error) throw new Error(error.message);

    return data;
  },
};

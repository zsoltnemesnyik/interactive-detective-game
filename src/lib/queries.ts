import { createClient } from "@/utils/supabase/server";

export const GameQueries = {
  getAllGames: async (filter?: "published" | "draft") => {
    const supabase = await createClient();

    let query = supabase
      .from("games")
      .select("*")
      .order("created_at", { ascending: false });

    if (filter === "published") {
      query = query.eq("is_published", true);
    } else if (filter === "draft") {
      query = query.eq("is_published", false);
    }

    const { data, error } = await query;

    if (error) throw new Error(error.message);

    return data;
  },
  getSingleGame: async (id: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("id", id)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },
};

export const SessionQueries = {
  getSessionByJoinCode: async (joinCode: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("sessions")
      .select("*")
      .eq("join_code", joinCode)
      .single();

    if (error) throw new Error(error.message);

    return data;
  },
};

export const PlayerQueries = {
  getPlayersBySessionId: async (sessionId: string) => {
    const supabase = await createClient();

    const { data, error } = await supabase
      .from("players")
      .select("*")
      .eq("session_id", sessionId);

    if (error) throw new Error(error.message);

    return data;
  },
};

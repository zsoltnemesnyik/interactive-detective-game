import { createClient } from "@/utils/supabase/server";

export const GameQueries = {
  getAllGames: async () => {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("games")
      .select("*")
      .eq("is_published", true)
      .order("created_at", { ascending: false });
    if (error) {
      throw new Error(error.message);
    }
    return data;
  },
};
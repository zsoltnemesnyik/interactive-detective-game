import { useState, useEffect } from "react";
import { Player } from "@/types";
import { createClient } from "@/utils/supabase/client";

export function useRealtimeLobby(sessionId: string, initialPlayers: Player[]) {
  const [players, setPlayers] = useState(initialPlayers);

  useEffect(() => {
    const supabase = createClient();

    const channel = supabase
      .channel(`players-lobby-${sessionId}`)
      .on(
        "postgres_changes",
        {
          event: "INSERT",
          schema: "public",
          table: "players",
          filter: `session_id=eq.${sessionId}`,
        },
        (payload) => {
          const newPlayer = payload.new as Player;
          setPlayers((prevPlayers) => [...prevPlayers, newPlayer]);
        },
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return players;
}

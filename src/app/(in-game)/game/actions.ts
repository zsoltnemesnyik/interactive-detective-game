"use server";

import { createClient } from "@/utils/supabase/server";
import { generateJoinCode } from "@/core/session";
import { redirect } from "next/navigation";

export const createSession = async (gameId: string) => {
  const supabase = await createClient();

  // 1. generate join code
  const joinCode = generateJoinCode();

  // 2. insert a sessions táblába
  const { error, data } = await supabase
    .from("sessions")
    .insert({
      game_id: gameId,
      join_code: joinCode
    })
    .select();

  console.log("data:", data);
  console.log("error:", error);

  if (error) throw new Error(error.message);

  // 3. redirect → /game/[joinCode]
  redirect(`/game/${joinCode}`);
};
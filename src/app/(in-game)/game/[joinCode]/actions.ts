"use server";

import { createClient } from "@/utils/supabase/server";
import { generateJoinCode } from "@/core/session";
import { redirect } from "next/navigation";
import { SessionQueries } from "@/lib/queries";

export const createSession = async (gameId: string) => {
  const supabase = await createClient();

  // 1. generate join code
  const joinCode = generateJoinCode();

  // 2. insert a sessions táblába
  await SessionQueries.joinToSession(gameId, joinCode);

  // 3. redirect → /game/[joinCode]
  redirect(`/game/${joinCode}`);
};

"use client";

import { createSession } from "@/app/(in-game)/game/[joinCode]/actions";
import { Button } from "@/components/ui/button";
import { GAMEDETAIL } from "@/lib/strings";

const StartGameButton = ({ gameId }: { gameId: string }) => {
  return (
    <Button onClick={() => createSession(gameId)}>
      {GAMEDETAIL.startButton}
    </Button>
  );
};

export default StartGameButton;

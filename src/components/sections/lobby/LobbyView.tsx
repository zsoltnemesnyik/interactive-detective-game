"use client";

import { useEffect, useState } from "react";
import { Session, Player } from "@/types";
import { GAME_DEFAULTS } from "@/lib/constants";
import { PAGELOBBY } from "@/lib/strings";
import LobbyViewPanel from "../../lobby/LobbyViewPanel";
import PlayersGrid from "@/components/PlayersGrid";
import StartButton from "@/components/lobby/StartButton";
import JoinModal from "@/components/lobby/JoinModal";

type LobbyViewProps = {
  session: Session;
  players: Player[];
};

export default function LobbyView({ session, players }: LobbyViewProps) {
  const [showModal, setShowModal] = useState(true);

  useEffect(() => {
    const playerId = localStorage.getItem(`player_id_${session.join_code}`);
    if (playerId) setShowModal(false);
  }, []);

  return (
    <>
      <LobbyViewPanel joinCode={session.join_code} />
      <PlayersGrid
        emptySlots={GAME_DEFAULTS.max_players - players.length}
        players={players}
      />
      <StartButton label={PAGELOBBY.startButton} />

      {showModal && (
        <JoinModal sessionId={session.id} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

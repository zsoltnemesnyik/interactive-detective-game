"use client";

import { useEffect, useState } from "react";
import { Session, Player } from "@/types";
import { GAME_DEFAULTS } from "@/lib/constants";
import { PAGELOBBY } from "@/lib/strings";
import LobbyViewPanel from "../../lobby/LobbyViewPanel";
import PlayersGrid from "@/components/PlayersGrid";
import StartButton from "@/components/lobby/StartButton";
import JoinModal from "@/components/lobby/JoinModal";
import { useRealtimeLobby } from "@/hooks/useRealtimeLobby";
import RoleCards from "./RoleCards";
import PlayersListWithRoles from "./PlayersListWithRoles";
import { useIsHost } from "@/hooks/useIsHost";

type LobbyViewProps = {
  session: Session;
  initialPlayers: Player[];
};

export default function LobbyView({ session, initialPlayers }: LobbyViewProps) {
  const [showModal, setShowModal] = useState(true);
  const players = useRealtimeLobby(session.id, initialPlayers);
  const isHost = useIsHost(players, session.join_code)

  useEffect(() => {
    const playerId = localStorage.getItem(`player_id_${session.join_code}`);
    if (playerId) {
      setShowModal(false)
    }
  }, []);

  return (
    <>
      <LobbyViewPanel joinCode={session.join_code} />
      <pre>{JSON.stringify({ isHost, players: players.map(p => ({ id: p.id, name: p.name })) }, null, 2)}</pre>
      <PlayersGrid
        emptySlots={GAME_DEFAULTS.max_players - players.length}
        players={players}
        isHost={isHost}
      />
      <RoleCards />
      <PlayersListWithRoles players={players} isHost={isHost} />
      {isHost && <StartButton label={PAGELOBBY.startButton} />}

      {showModal && (
        <JoinModal joinCode={session.join_code} sessionId={session.id} onClose={() => setShowModal(false)} />
      )}
    </>
  );
}

import { notFound } from "next/navigation";
import { PlayerQueries, SessionQueries } from "@/lib/queries";
import LobbyView from "@/components/lobby/LobbyView";

const PageLobby = async ({
  params,
}: {
  params: Promise<{ joinCode: string }>;
}) => {
  const { joinCode } = await params;

  const session = await SessionQueries.getSessionByJoinCode(joinCode);
  if (!session) notFound();

  const players = await PlayerQueries.getPlayersBySessionId(session.id);

  return <LobbyView session={session} players={players ?? []} />;
};

export default PageLobby;

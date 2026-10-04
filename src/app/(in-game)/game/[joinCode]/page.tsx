import { notFound } from "next/navigation";
import { PlayerQueries, SessionQueries } from "@/lib/queries";
import LobbyView from "@/components/sections/lobby/LobbyView";

const PageLobby = async ({
  params,
}: {
  params: Promise<{ joinCode: string }>;
}) => {
  const { joinCode } = await params;

  const session = await SessionQueries.getSessionByJoinCode(joinCode);
  if (!session) notFound();

  const players = await PlayerQueries.getPlayersBySessionId(session.id);

  return (
    <div className="flex min-h-screen flex-col bg-cream">
      <LobbyView session={session} players={players ?? []} />
    </div>
  );
};

export default PageLobby;

import { notFound } from "next/navigation";
import { GameQueries } from "@/lib/queries";
import GameDetail from "@/components/sections/games/GameDetail";

const PageSingleGame = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // 1. fetch game
  const game = await GameQueries.getSingleGame(id);

  // 2. if game not found
  if (!game) notFound();

  // 3. return
  return <GameDetail game={game} />
};

export default PageSingleGame;
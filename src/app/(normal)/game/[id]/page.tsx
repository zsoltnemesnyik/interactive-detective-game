import { notFound } from "next/navigation";
import { GameQueries } from "@/lib/queries";
import GameDetail from "@/components/sections/games/GameDetail";

const PageSingleGame = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  // 1. lekérés: GameQueries.getSingleGame(id)
  const game = await GameQueries.getSingleGame(id);

  // 2. ha nincs találat: notFound()
  if (!game) notFound();

  // 3. return: egyelőre csak a game.title egy <h1>-ben
  return <GameDetail game={game} />
};

export default PageSingleGame;
import { Game } from "@/types";
import GamesList from "@/components/GamesList"
import { GameQueries } from "@/lib/queries";
import { HIGHLIGHTED_GAMES } from "@/lib/strings";

const GamesHighlighted = async ({ title }: { title: string }) => {
  const games: Game[] = await GameQueries.getAllGames();

  return (
    <>
      <h2 className="mb-12 text-center text-3xl font-bold">
        {title}
      </h2>
      <GamesList games={games} />
    </>
  )
}
export default GamesHighlighted
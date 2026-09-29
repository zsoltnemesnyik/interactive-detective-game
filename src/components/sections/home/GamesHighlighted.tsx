import { Game } from "@/types";
import GamesList from "@/components/GamesList"
import { GameQueries } from "@/lib/queries";

const GamesHighlighted = async ({ title }: { title: string }) => {
  const games: Game[] = await GameQueries.getAllGames("published");

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
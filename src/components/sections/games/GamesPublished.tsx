import { Game } from "@/types";
import { GameQueries } from "@/lib/queries";
import GamesList from "@/components/GamesList";

const GamesPublished = async () => {
  const games: Game[] = await GameQueries.getAllGames();

  return (
    <GamesList games={games} />
  )
}
export default GamesPublished
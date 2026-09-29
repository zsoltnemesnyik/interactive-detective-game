import { Game } from "@/types";
import GamesList from "@/components/GamesList"
import { GameQueries } from "@/lib/queries";

const HighlightedGames = async () => {
  const games: Game[] = await GameQueries.getAllGames();

  return (
    <GamesList games={games} />
  )
}
export default HighlightedGames
import { Game } from "@/types";
import GameDetailImage from "@/components/games/game/GameDetailImage";
import GameDetailInfo from "@/components/games/game/GameDetailInfo";

const GameDetail = ({ game }: { game: Game }) => {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <div className="grid gap-12 md:grid-cols-2 md:items-center">
        <GameDetailImage src={game.cover_image} alt={game.title} />
        <GameDetailInfo game={game} />
      </div>
    </section>
  );
};

export default GameDetail;
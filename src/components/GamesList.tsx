import { Game } from "@/types";
import { GAMESLIST } from "@/lib/strings";
import CardGame from "@/components/games/CardGame";

const GamesList = ({ games }: { games: Game[] }) => {
  return (
    <section className="py-16">
      <div className="container mx-auto max-w-6xl px-6">

        {games.length === 0 ? (
          <p className="text-center text-black/30">{GAMESLIST.noGames}</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {games.map((game) => (
              <CardGame key={game.id} game={game} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GamesList;

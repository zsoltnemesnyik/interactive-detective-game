import { Game } from "@/types";
import { GAMES_LIST } from "@/lib/strings";
import CardGame from "@/components/games/CardGame";

const GamesList = ({ games }: { games: Game[] }) => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {GAMES_LIST.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesList;

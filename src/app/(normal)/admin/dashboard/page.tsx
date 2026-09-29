import Link from 'next/link';
import { redirect } from 'next/navigation';
import { Game } from '@/types';
import { ROUTES } from '@/lib/constants';
import { Button } from '@/components/ui/button';
import CardGame from '@/components/games/CardGame';
import { GameQueries } from '@/lib/queries';

export default async function PageDashboard() {
  const games = await GameQueries.getAllGames();

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-3xl font-bold">Admin Panel</h1>
        <Link href={ROUTES.admin.newGame}>
          <Button>+ Új játék</Button>
        </Link>
      </div>

      {games && games.length > 0 ? (
        <div className="grid md:grid-cols-2 gap-6">
          {games.map((game: Game) => (
            <CardGame key={game.id} game={game} />
          ))}
        </div>
      ) : (
        <div className="text-center py-20 border border-dashed rounded-2xl">
          <p className="text-muted-foreground mb-4">Még nincs egyetlen játék sem.</p>
          <Link href={ROUTES.admin.newGame}>
            <Button>Hozd létre az első játékot</Button>
          </Link>
        </div>
      )}
    </div>
  );
}
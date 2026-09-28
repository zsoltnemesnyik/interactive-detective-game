import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { GAMES_LIST } from "@/lib/strings";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const games = [
  {
    id: 1,
    title: "Rejtélyes Gyilkosság a Városban",
    city: "Budapest",
    estimated_duration_min: 90,
  },
  {
    id: 2,
    title: "Eltűnt Kincsek Nyomában",
    city: "Debrecen",
    estimated_duration_min: 120,
  },
  {
    id: 3,
    title: "Titkos Ügynökök Küldetése",
    city: "Szeged",
    estimated_duration_min: 75,
  },
];

const GamesList = () => {
  return (
    <section className="py-16">
      <div className="mx-auto max-w-6xl px-6">
        <h2 className="mb-12 text-center text-3xl font-bold">
          {GAMES_LIST.heading}
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {games.map((game) => (
            <Card key={game.id}>
              <CardHeader>
                <CardTitle>{game.title}</CardTitle>
                <CardDescription>
                  {game.city} • {game.estimated_duration_min} perc
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Link href={`/games/${game.id}`}>
                  <Button className="w-full">{GAMES_LIST.startButton}</Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GamesList;

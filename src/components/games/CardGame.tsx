import { Game } from "@/types"
import Link from "next/link"
import { GAMESLIST } from "@/lib/strings"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

const CardGame = ({ game }: { game: Game }) => {
  return (
    <Card key={game.id}>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>
          {game.city} • {game.estimated_duration_min} perc
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`/games/${game.id}`}>
          <Button className="w-full">{GAMESLIST.startButton}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
export default CardGame
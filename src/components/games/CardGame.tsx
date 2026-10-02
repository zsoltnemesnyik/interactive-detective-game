import { Game } from "@/types"
import Link from "next/link"
import { GAMESLIST } from "@/lib/strings"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ROUTES } from "@/lib/constants"

const CardGame = ({ game }: { game: Game }) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{game.title}</CardTitle>
        <CardDescription>
          {game.city} • {game.estimated_duration_min} perc
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Link href={`${ROUTES.games}/${game.id}`}>
          <Button className="w-full">{GAMESLIST.startButton}</Button>
        </Link>
      </CardContent>
    </Card>
  )
}
export default CardGame
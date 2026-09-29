import GamesPublished from "@/components/sections/games/GamesPublished"
import { PUBLISHED_GAMES } from "@/lib/strings"

const PageGames = () => {
  return (
    <>
      <section className="py-20 text-center">
        <div className="mx-auto max-w-4xl px-6">
          <h1 className="mb-6 font-heading text-5xl text-ink">{PUBLISHED_GAMES.heading}</h1>
          <p className="mb-10 text-xl text-muted-foreground">
            {PUBLISHED_GAMES.description}
          </p>
          <GamesPublished />
        </div>
      </section>
    </>
  )
}
export default PageGames
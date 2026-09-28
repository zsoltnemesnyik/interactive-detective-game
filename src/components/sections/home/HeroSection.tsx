import Link from "next/link"
import { ROUTES } from "@/lib/constants"
import { Button } from "@/components/ui/button"
import { HERO } from "@/lib/strings"

const SectionHero = () => {
  return (
    <section className="py-20 text-center">
      <div className="max-w-4xl mx-auto px-6">
        <h1 className="font-heading text-5xl text-ink mb-6">
          {HERO.heading}
        </h1>
        <p className="text-xl text-muted-foreground mb-10">
          {HERO.description}
        </p>
        <div className="flex gap-4 justify-center">
          <Button
            size="lg"
            className="text-lg px-8"
            variant="cta"
            render={
              <Link href={ROUTES.login}>{HERO.cta}</Link>
            } />
        </div>
      </div>
    </section>
  )
}
export default SectionHero
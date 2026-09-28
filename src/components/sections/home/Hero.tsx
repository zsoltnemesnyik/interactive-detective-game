import Link from "next/link";
import { ROUTES } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { HERO } from "@/lib/strings";

const Hero = () => {
  return (
    <section className="py-20 text-center">
      <div className="mx-auto max-w-4xl px-6">
        <h1 className="mb-6 font-heading text-5xl text-ink">{HERO.heading}</h1>
        <p className="mb-10 text-xl text-muted-foreground">
          {HERO.description}
        </p>
        <div className="flex justify-center gap-4">
          <Link href={ROUTES.login}>
            <Button size="lg" className="px-8 text-lg" variant="cta">
              {HERO.cta}
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;

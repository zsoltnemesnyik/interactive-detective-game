import HowItWorks from "@/components/sections/home/HowItWorks";
import Hero from "@/components/sections/home/Hero";
import HighlightedGames from "@/components/sections/home/HighlightedGames";
import { HIGHLIGHTED_GAMES } from "@/lib/strings";

export default function PageHome() {
  return (
    <main>
      <Hero />
      <HighlightedGames title={HIGHLIGHTED_GAMES.heading} />
      <HowItWorks />
    </main>
  );
}

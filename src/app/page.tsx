import HowItWorks from "@/components/sections/home/HowItWorks";
import Hero from "@/components/sections/home/Hero";
import HighlightedGames from "@/components/sections/home/HighlightedGames";

export default function PageHome() {
  return (
    <main>
      <Hero />
      <HighlightedGames />
      <HowItWorks />
    </main>
  );
}

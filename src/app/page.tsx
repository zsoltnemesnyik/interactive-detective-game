import HowItWorks from "@/components/sections/home/HowItWorks";
import Hero from "@/components/sections/home/Hero";
import GamesList from "@/components/sections/home/GamesList";

export default function PageHome() {
  return (
    <main>
      <Hero />
      <GamesList />
      <HowItWorks />
    </main>
  );
}

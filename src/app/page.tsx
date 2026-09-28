import SectionHero from "@/components/sections/home/HeroSection";
import SectionHowItWorks from "@/components/sections/home/HowItWorks";
import Image from "next/image";

export default function PageHome() {
  return (
    <main>
      <SectionHero />
      <SectionHowItWorks />
    </main>
  );
}

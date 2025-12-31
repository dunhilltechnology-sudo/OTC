import { Navbar } from "../components/Navbar";
import { Hero } from "../components/Hero";
import { CraftSection } from "../components/CraftSection";
import { PhilosophySection } from "../components/PhilosophySection";
import { WhatsHotSection } from "../components/WhatsHotSection";
import { MarqueeSection } from "../components/MarqueeSection";
import { FreshSection } from "../components/FreshSection";
import { Footer } from "../components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8f5f0] text-[#1a1a1a] selection:bg-[#d4a574]/30 selection:text-[#1a1a1a]">
      <Navbar />
      <Hero />
      <CraftSection />
      <PhilosophySection />
      <WhatsHotSection />
      <MarqueeSection />
      <FreshSection />
      <Footer />
    </main>
  );
}

import HeroSection from "@/components/HeroSection";
import { MacbookScrollDemo } from "@/components/MacbookScrollDemo";

export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.2]">
    <HeroSection />
    <MacbookScrollDemo />
    </main>
  );
}

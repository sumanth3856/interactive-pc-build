import { Navbar } from "@/components/ui/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Features } from "@/components/landing/Features";
import { Footer } from "@/components/ui/Footer";

export default function Home() {
  return (
    <main className="bg-deep-charcoal min-h-screen text-foreground selection:bg-electric-blue selection:text-white pb-20">
      <Navbar />
      <Hero />
      <Features />
      
      <Footer />
    </main>
  );
}

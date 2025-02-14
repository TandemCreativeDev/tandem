import AboutSection from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function HeroPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutSection />
    </div>
  );
}

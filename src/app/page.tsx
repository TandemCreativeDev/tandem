import AboutSection from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
export default function HeroPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}

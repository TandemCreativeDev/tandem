import AboutSection from "@/components/About";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ProjectsSection from "@/components/Projects";
import TestimonialsSection from "@/components/Testimonials";
import TeamSection from "@/components/Team";
import FooterSection from "@/components/Footer";
export default function HeroPage() {
  return (
    <div className="relative">
      <Header />
      <Hero />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <FooterSection />
    </div>
  );
}

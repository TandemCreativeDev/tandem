import AboutSection from "@/components/sections/About";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import ServicesSection from "@/components/sections/Services";
import ProjectsSection from "@/components/sections/Projects";
import TestimonialsSection from "@/components/sections/Testimonials";
import TeamSection from "@/components/sections/Team";
import FooterSection from "@/components/layout/Footer";
import ContactSection from "@/components/sections/Contact";

export default function HeroPage() {
  return (
    <>
      <Header />
      <main id="main">
        <Hero />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <TeamSection />
        <ContactSection />
        <FooterSection />
      </main>
    </>
  );
}

import AboutSection from "@/components/About";
import DescriptionSection from "@/components/Description";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/Services";
import ProjectsSection from "@/components/Projects";
import TestimonialsSection from "@/components/Testimonials";
import TeamSection from "@/components/Team";
import FooterSection from "@/components/Footer";
import ContactSection from "@/components/Contact";
export default function HeroPage() {
  return (
    <>
      <Header />
      <Hero />
      <AboutSection />
      <DescriptionSection />
      <ServicesSection />
      <ProjectsSection />
      <TestimonialsSection />
      <TeamSection />
      <ContactSection />
      <FooterSection />
    </>
  );
}

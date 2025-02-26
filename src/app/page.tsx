import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import DescriptionSection from "@/components/Description";

// Dynamically import components that aren't needed for initial render
const ServicesSection = dynamic(() => import("@/components/Services"));
const ProjectsSection = dynamic(() => import("@/components/Projects"));
const TestimonialsSection = dynamic(() => import("@/components/Testimonials"));
const TeamSection = dynamic(() => import("@/components/Team"));
const ContactSection = dynamic(() => import("@/components/Contact"));
const FooterSection = dynamic(() => import("@/components/Footer"));

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

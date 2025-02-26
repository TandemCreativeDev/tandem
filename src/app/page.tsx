import dynamic from 'next/dynamic';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import AboutSection from "@/components/About";
import DescriptionSection from "@/components/Description";

// Dynamically import components that aren't needed for initial render
const ServicesSection = dynamic(() => import("@/components/Services"), { 
  loading: () => <div className="min-h-[200px]"></div> 
});
const ProjectsSection = dynamic(() => import("@/components/Projects"), { 
  loading: () => <div className="min-h-[200px]"></div> 
});
const TestimonialsSection = dynamic(() => import("@/components/Testimonials"), { 
  loading: () => <div className="min-h-[200px]"></div> 
});
const TeamSection = dynamic(() => import("@/components/Team"), { 
  loading: () => <div className="min-h-[200px]"></div> 
});
const ContactSection = dynamic(() => import("@/components/Contact"), { 
  loading: () => <div className="min-h-[200px]"></div> 
});
const FooterSection = dynamic(() => import("@/components/Footer"), { 
  loading: () => <div className="min-h-[50px]"></div> 
});

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

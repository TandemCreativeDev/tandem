import dynamic from "next/dynamic";
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";

import AboutSection from "@/components/sections/About";

const ServicesSection = dynamic(
  () => import("@/components/sections/Services"),
  { ssr: true },
);

const ProjectsSection = dynamic(
  () => import("@/components/sections/Projects"),
  { ssr: true },
);

const TestimonialsSection = dynamic(
  () => import("@/components/sections/Testimonials"),
  { ssr: true },
);

const TeamSection = dynamic(() => import("@/components/sections/Team"), {
  ssr: true,
});

const ContactSection = dynamic(() => import("@/components/sections/Contact"), {
  ssr: true,
});

const FooterSection = dynamic(() => import("@/components/sections/Services"), {
  ssr: true,
});

export default function HeroPage() {
  return (
    <>
      <Header />
      <main>
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

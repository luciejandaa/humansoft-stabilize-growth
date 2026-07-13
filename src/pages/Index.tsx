import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EvaluationSection from "@/components/EvaluationSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionDivider from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="relative z-10">
        <HeroSection />
        <SectionDivider variant="ornament" label="HumanSoft.IT" />
        <EvaluationSection />
        <SectionDivider />
        <ServicesSection />
        <SectionDivider variant="ornament" label="Proces" />
        <ProcessSection />
        <SectionDivider />
        <WhySection />
        <SectionDivider />
        <AboutSection />
        <SectionDivider />
        <TeamSection />
        <SectionDivider />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;


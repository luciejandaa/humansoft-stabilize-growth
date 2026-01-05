import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import PhilosophySection from "@/components/PhilosophySection";
import TeamSection from "@/components/TeamSection";
import ReferencesSection from "@/components/ReferencesSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhySection />
        <ServicesSection />
        <ProcessSection />
        <PhilosophySection />
        <TeamSection />
        <ReferencesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

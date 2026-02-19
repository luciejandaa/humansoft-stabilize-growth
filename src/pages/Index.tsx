import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EvaluationSection from "@/components/EvaluationSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <EvaluationSection />
        <AboutSection />
        <WhySection />
        <ProcessSection />
        <TeamSection />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

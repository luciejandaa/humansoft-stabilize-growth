import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import EvaluationSection from "@/components/EvaluationSection";
import AboutSection from "@/components/AboutSection";
import WhySection from "@/components/WhySection";
import ServicesSection from "@/components/ServicesSection";
import ProcessSection from "@/components/ProcessSection";
import TeamSection from "@/components/TeamSection";
import Footer from "@/components/Footer";
import FunDecorations from "@/components/FunDecorations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background relative">
      <FunDecorations />
      <Navigation />
      <main className="relative z-10">
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

import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <WhySection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import logoText from "@/assets/logo-text.png";

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Dark gradient background with subtle gold */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-secondary -z-10" />
      
      {/* Gold ambient glow */}
      <motion.div 
        className="absolute top-1/4 right-1/4 w-[600px] h-[600px] rounded-full -z-10"
        style={{
          background: "radial-gradient(circle, hsl(40 75% 55% / 0.06), transparent 70%)",
        }}
        animate={{ 
          scale: [1, 1.15, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(hsl(40 75% 55%) 1px, transparent 1px), linear-gradient(90deg, hsl(40 75% 55%) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      <div className="section-container section-padding">
        <div className="w-full text-center">
          {/* Logo */}
          <motion.div
            className="mb-16 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <img 
              src={logoText} 
              alt="HumanSoft.IT" 
              className="w-full max-w-4xl h-auto brightness-110"
            />
          </motion.div>

          <motion.h1 
            className="heading-xl mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <span className="text-gradient-gold">
              {t("hero.title")}
            </span>
          </motion.h1>
          
          <motion.p 
            className="body-lg text-subtle mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div 
            className="flex justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
          >
            <Button variant="hero" onClick={scrollToContact} className="group">
              {t("hero.cta")}
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </Button>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <motion.div 
            className="w-px h-16 bg-gradient-to-b from-primary/30 to-transparent"
            animate={{ scaleY: [1, 0.7, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

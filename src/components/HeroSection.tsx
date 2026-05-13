import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      {/* Soft top-fade gradient backdrop */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 0%, hsl(152 80% 92% / 0.6), transparent 70%)",
        }}
      />

      <div className="section-container relative w-full">
        {/* Eyebrow */}
        <motion.div
          className="flex items-center justify-center gap-3 mb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="h-px w-12 bg-foreground/20" />
          <span className="eyebrow flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5" />
            HumanSoft.IT — Consulting Studio
          </span>
          <span className="h-px w-12 bg-foreground/20" />
        </motion.div>

        {/* Massive editorial headline */}
        <div className="text-center max-w-6xl mx-auto">
          <motion.h1
            className="display-hero mb-10"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="block text-foreground">{t("hero.title")}</span>
          </motion.h1>

          <motion.p
            className="body-lg text-subtle max-w-2xl mx-auto mb-12 text-balance"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {t("hero.subtitle")}
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-4 items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Button variant="gradient" size="xl" asChild className="group">
              <Link to="/hodnoceni">
                {t("hero.cta")}
                <ArrowRight className="ml-1 group-hover:translate-x-1 transition-transform" size={20} />
              </Link>
            </Button>
            <Button variant="outline" size="xl" asChild>
              <Link to="/sluzby">{t("nav.services")}</Link>
            </Button>
          </motion.div>
        </div>

        {/* Stats / proof bar */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border/60 max-w-5xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {[
            { num: "10+", label: "úspěšných transformací" },
            { num: "2023", label: "studio založeno" },
            { num: "5", label: "kroků metodiky" },
            { num: "100%", label: "lidský přístup" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="text-center md:text-left stat-tick cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 + i * 0.1 }}
            >
              <div className="font-display text-4xl md:text-5xl font-medium text-gradient leading-none mb-2">
                {stat.num}
              </div>
              <div className="text-xs uppercase tracking-widest text-subtle font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.4 }}
      >
        <span className="text-xs uppercase tracking-widest text-subtle font-mono">scroll</span>
        <motion.div
          className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"
          animate={{ scaleY: [1, 0.4, 1] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CircuitDiagram from "./CircuitDiagram";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="min-h-screen flex items-center pt-32 pb-20 relative overflow-hidden">
      <div className="section-container relative w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* LEFT — claim + CTA */}
          <div className="lg:col-span-7">
            <motion.div
              className="flex items-center gap-3 mb-8"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="lime-node" />
              <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-foreground">
                HumanSoft.IT — Consulting Studio
              </span>
            </motion.div>

            <motion.h1
              className="display-hero mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block">Přepisujeme</span>
              <span className="block">vnitřní <span className="text-gradient">kód</span></span>
              <span className="block">firem.</span>
            </motion.h1>

            <motion.p
              className="body-lg text-subtle max-w-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {t("hero.subtitle")}
            </motion.p>

            <motion.p
              className="body-md text-subtle max-w-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.p
              className="body-md text-foreground max-w-xl mb-10 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              {t("hero.outcome")}
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 items-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
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

          {/* RIGHT — living circuit of the company */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <CircuitDiagram />
          </motion.div>
        </div>

        {/* Stats strip */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 pt-12 border-t border-border max-w-5xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {[
            { num: "10+", label: t("hero.stats.transformations") },
            { num: "2023", label: t("hero.stats.founded") },
            { num: "5",   label: t("hero.stats.steps") },
            { num: "100%", label: t("hero.stats.human") },
          ].map((stat, i) => (
            <motion.div
              key={i}
              className="stat-tick cursor-default"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
            >
              <div className="font-display text-4xl md:text-5xl font-semibold text-foreground leading-none mb-2 tracking-tight">
                {stat.num}
                <span className="inline-block w-2 h-2 align-baseline ml-1 rounded-full bg-primary" />
              </div>
              <div className="text-[11px] uppercase tracking-[0.22em] text-subtle font-mono">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

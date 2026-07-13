import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import HumanComposition from "./HeroComposition";

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
              <span className="inline-block w-6 h-px bg-foreground/40" />
              <span className="text-[12px] tracking-[0.18em] uppercase text-subtle font-medium">
                HumanSoft.IT &middot; {t("hero.eyebrow")}
              </span>
            </motion.div>

            <motion.h1
              className="display-hero mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              <span className="block">{t("hero.titlePre")}</span>
              <span className="block">{t("hero.titleMid")} <span className="text-gradient">{t("hero.titleHighlight")}</span></span>
              <span className="block">{t("hero.titlePost")}</span>
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
              className="body-lg text-subtle max-w-xl mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {t("hero.description")}
            </motion.p>

            <motion.p
              className="body-lg text-foreground max-w-xl mb-10 font-medium"
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

          {/* RIGHT — the people & ideas that hold the company together */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <HumanComposition />
          </motion.div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as string[];

  return (
    <section id="o-nas" className="section-padding relative overflow-hidden">
      <div className="section-container relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-20">
              <span className="eyebrow mb-4 block">— O nás</span>
              <h2 className="heading-xl text-balance">
                {t("about.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="italic-serif text-gradient">
                  {t("about.title").split(" ").slice(-1)}
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <AnimatedCard delay={0.1}>
              <div className="editorial-card h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="eyebrow block mb-4">
                  {t("about.vision.label")}
                </span>
                <p className="body-lg text-foreground leading-relaxed relative">
                  {t("about.vision.text")}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="editorial-card h-full relative overflow-hidden bg-foreground text-background">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                <span className="eyebrow block mb-4" style={{ color: "hsl(var(--primary-glow))" }}>
                  {t("about.mission.label")}
                </span>
                <p className="body-lg leading-relaxed relative">
                  {t("about.mission.text")}
                </p>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <span className="eyebrow mb-8 block text-subtle">
                {t("about.valuesLabel")}
              </span>
              <div className="flex flex-wrap justify-center gap-3">
                {values.map((value, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-background border border-border rounded-full text-sm font-medium tracking-wide hover:border-primary hover:text-primary hover:-translate-y-1 transition-all duration-300"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          <AnimatedText delay={0.4}>
            <div className="text-center mt-16">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/kontakt" className="inline-flex items-center gap-2">
                  {t("about.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

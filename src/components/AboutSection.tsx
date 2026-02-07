import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight } from "lucide-react";

const AboutSection = () => {
  const { t } = useTranslation();
  const values = t("about.values", { returnObjects: true }) as string[];

  return (
    <section id="o-nas" className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="section-container">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <h2 className="heading-lg mb-12 text-center">{t("about.title")}</h2>
          </AnimatedSection>

          {/* Vision & Mission */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <AnimatedCard delay={0.1}>
              <div className="bg-background p-8 border border-divider rounded-xl h-full">
                <span className="text-xs font-medium tracking-wider uppercase text-primary mb-3 block">
                  {t("about.vision.label")}
                </span>
                <p className="body-lg text-foreground leading-relaxed">
                  {t("about.vision.text")}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="bg-background p-8 border border-divider rounded-xl h-full">
                <span className="text-xs font-medium tracking-wider uppercase text-primary mb-3 block">
                  {t("about.mission.label")}
                </span>
                <p className="body-lg text-foreground leading-relaxed">
                  {t("about.mission.text")}
                </p>
              </div>
            </AnimatedCard>
          </div>

          {/* Values */}
          <AnimatedSection delay={0.3}>
            <div className="text-center">
              <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground mb-6 block">
                {t("about.valuesLabel")}
              </span>
              <div className="flex flex-wrap justify-center gap-4">
                {values.map((value, index) => (
                  <span
                    key={index}
                    className="px-6 py-3 bg-background border border-divider rounded-xl text-sm font-medium tracking-wide shadow-md hover:shadow-lg hover:border-primary/30 transition-all duration-200"
                  >
                    {value}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>

          {/* CTA */}
          <AnimatedText delay={0.4}>
            <div className="text-center mt-12">
              <Button size="lg" asChild>
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

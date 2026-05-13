import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText } from "./ui/animated-section";
import { ArrowRight } from "lucide-react";

const WhySection = () => {
  const { t } = useTranslation();

  return (
    <section id="proc" className="section-padding bg-secondary/40 relative">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedSection>
            <span className="eyebrow mb-6 block">— Proč my — </span>
            <h2 className="heading-xl mb-12 text-balance">
              <span className="italic-serif text-gradient">{t("why.title")}</span>
            </h2>
          </AnimatedSection>
          
          <AnimatedText delay={0.1}>
            <p className="body-lg text-subtle text-balance">
              {t("why.description")}
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg text-foreground mt-8 font-medium text-balance">
              {t("why.conclusion")}
            </p>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="mt-12">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/reference" className="inline-flex items-center gap-2">
                  {t("references.cta")}
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

export default WhySection;

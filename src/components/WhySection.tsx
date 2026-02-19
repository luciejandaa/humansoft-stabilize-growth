import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText } from "./ui/animated-section";
import { ArrowRight } from "lucide-react";
import FunDecorations from "./FunDecorations";

const WhySection = () => {
  const { t } = useTranslation();

  return (
    <section id="proc" className="section-padding bg-gradient-to-b from-secondary/50 to-secondary relative">
      <FunDecorations variant="cool" />
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <h2 className="heading-lg mb-8">
              {t("why.title")}
            </h2>
          </AnimatedSection>
          
          <AnimatedText delay={0.1}>
            <p className="body-lg text-subtle">
              {t("why.description")}
            </p>
          </AnimatedText>
          
          <AnimatedText delay={0.2}>
            <p className="body-lg text-foreground mt-6 font-medium">
              {t("why.conclusion")}
            </p>
          </AnimatedText>

          <AnimatedText delay={0.3}>
            <div className="mt-8">
              <Button size="lg" asChild>
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

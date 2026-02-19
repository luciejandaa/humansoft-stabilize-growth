import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText } from "./ui/animated-section";
import { ArrowRight, ClipboardCheck } from "lucide-react";

const EvaluationSection = () => {
  const { t } = useTranslation();

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <AnimatedSection>
            <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
              <ClipboardCheck className="w-7 h-7" />
            </div>
            <h2 className="heading-lg mb-4">{t("evaluation.title")}</h2>
            <p className="body-lg text-subtle mb-8">{t("evaluation.subtitle")}</p>
          </AnimatedSection>
          <AnimatedText delay={0.2}>
            <Button size="lg" asChild>
              <Link to="/hodnoceni" className="inline-flex items-center gap-2">
                {t("evaluation.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </AnimatedText>
        </div>
      </div>
    </section>
  );
};

export default EvaluationSection;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight, ClipboardCheck, CheckCircle2 } from "lucide-react";
import FunDecorations from "./FunDecorations";

const EvaluationSection = () => {
  const { t } = useTranslation();
  const benefits = t("evaluation.benefits", { returnObjects: true }) as string[];

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/30 to-background relative">
      <FunDecorations />
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-primary/10 text-primary mb-6">
                <ClipboardCheck className="w-7 h-7" />
              </div>
              <h2 className="heading-lg mb-4">{t("evaluation.title")}</h2>
              <p className="body-md text-subtle max-w-2xl mx-auto">{t("evaluation.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-4 mb-10">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={0.1 + index * 0.1}>
                <div className="flex items-start gap-3 p-4 bg-background border border-divider rounded-xl">
                  <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                  <p className="body-sm text-foreground">{benefit}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedText delay={0.5}>
            <div className="text-center">
              <Button size="lg" asChild>
                <Link to="/hodnoceni" className="inline-flex items-center gap-2">
                  {t("evaluation.cta")}
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

export default EvaluationSection;

import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight, ClipboardCheck, CheckCircle2 } from "lucide-react";
import { Section } from "@/components/ui/section";

const EvaluationSection = () => {
  const { t } = useTranslation();
  const benefits = t("evaluation.benefits", { returnObjects: true }) as string[];

  return (
    <Section className="bg-foreground text-background relative overflow-hidden">
      
      
      <div className="section-container relative z-10">
        <div className="max-w-5xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-14">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl mb-8" style={{ background: "var(--gradient-primary)" }}>
                <ClipboardCheck className="w-7 h-7 text-primary-foreground" />
              </div>
              <h2 className="heading-lg mb-6 text-balance">
                {t("evaluation.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="italic-serif text-primary">
                  {t("evaluation.title").split(" ").slice(-1)}
                </span>
              </h2>
              <p className="body-lg opacity-70 max-w-2xl mx-auto text-balance">{t("evaluation.subtitle")}</p>
            </div>
          </AnimatedSection>

          <div className="grid sm:grid-cols-2 gap-3 mb-12">
            {benefits.map((benefit, index) => (
              <AnimatedCard key={index} delay={0.1 + index * 0.08} className="h-full">
                <div className="flex items-start gap-3 p-5 bg-background/5 backdrop-blur-sm border border-background/10 rounded-2xl h-full hover:bg-background/10 hover:border-primary/40 transition-all duration-300">
                  <CheckCircle2 className="w-5 h-5 mt-0.5 shrink-0" style={{ color: "hsl(var(--primary-glow))" }} />
                  <p className="body-sm">{benefit}</p>
                </div>
              </AnimatedCard>
            ))}
          </div>

          <AnimatedText delay={0.5}>
            <div className="text-center">
              <Button variant="gradient" size="xl" asChild>
                <Link to="/hodnoceni" className="inline-flex items-center gap-2">
                  {t("evaluation.cta")}
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Section>
  );
};

export default EvaluationSection;

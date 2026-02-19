import { useTranslation } from "react-i18next";
import { AnimatedSection, AnimatedText } from "./ui/animated-section";
import FunDecorations from "./FunDecorations";

const WhySection = () => {
  const { t } = useTranslation();

  return (
    <section id="proc" className="section-padding bg-gradient-to-b from-secondary/50 to-secondary relative">
      <FunDecorations />
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
        </div>
      </div>
    </section>
  );
};

export default WhySection;

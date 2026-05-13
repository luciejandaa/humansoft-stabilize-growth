import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const services = [
    {
      number: "01",
      title: t("services.restructuring.title"),
      items: t("services.restructuring.items", { returnObjects: true }) as string[],
    },
    {
      number: "02",
      title: t("services.processes.title"),
      items: t("services.processes.items", { returnObjects: true }) as string[],
    },
    {
      number: "03",
      title: t("services.leadership.title"),
      items: t("services.leadership.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <section id="sluzby" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-20">
            <span className="eyebrow mb-6 block">— Služby — </span>
...
          <div className="mt-24 pt-16 border-t border-border/60">
            <p className="heading-md text-center max-w-3xl italic-serif text-balance text-foreground/80 mb-10 mx-[220px]">
              "{t("services.quote")}"
            </p>
            <div className="text-center">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/kontakt" className="inline-flex items-center gap-2">
                  Domluvit úvodní konzultaci
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;

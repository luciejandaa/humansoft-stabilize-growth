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
            <h2 className="heading-xl text-balance">
              {t("services.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic-serif text-gradient">
                {t("services.title").split(" ").slice(-1)}
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="editorial-card reveal-arrow group h-full flex flex-col">
                <div className="flex items-baseline justify-between mb-6">
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {service.number}
                  </span>
                  <div className="w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                </div>
                <h3 className="heading-sm mb-6 text-balance">
                  {service.title}
                </h3>
                <ul className="space-y-3 flex-1">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="body-sm text-subtle flex items-start group/item"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 mr-3 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="arrow mt-6 pt-6 border-t border-border/60 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  Zjistit více <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
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
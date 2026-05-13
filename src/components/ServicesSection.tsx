import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const ServicesSection = () => {
  const { t } = useTranslation();

  const sections = t("services.sections", { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
    approach: string;
    items: string[];
    result: string;
  }[];

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

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => (
            <StaggerItem key={index}>
              <div className="editorial-card reveal-arrow group h-full flex flex-col">
                <div className="flex items-baseline justify-between mb-4">
                  <span className="font-mono text-xs tracking-widest text-primary">
                    {section.number}
                  </span>
                  <div className="w-12 h-px bg-primary/30 group-hover:w-20 group-hover:bg-primary transition-all duration-500" />
                </div>
                <h3 className="heading-sm mb-4 text-balance">
                  {section.title}
                </h3>
                <p className="body-sm text-subtle mb-3">
                  {section.description}
                </p>
                <p className="body-sm text-subtle mb-5">
                  {section.approach}
                </p>

                <ul className="space-y-2 flex-1 mb-5">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="body-sm text-subtle flex items-start group/item"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/40 rounded-full mt-2 mr-3 shrink-0 group-hover/item:bg-primary group-hover/item:scale-125 transition-all duration-300" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-border/60">
                  <p className="body-sm">
                    <span className="font-semibold text-primary">{t("servicesPage.resultLabel")}</span>{" "}
                    <span className="text-subtle">{section.result}</span>
                  </p>
                </div>

                <div className="arrow mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-primary opacity-60 group-hover:opacity-100 transition-opacity">
                  {t("services.cta")} <ArrowRight className="w-3.5 h-3.5" />
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
                  {t("services.button")}
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

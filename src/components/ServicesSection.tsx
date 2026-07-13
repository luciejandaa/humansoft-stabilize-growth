import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";
import { Button } from "./ui/button";
import { ArrowRight, Search, Compass, MessageCircle, RefreshCw, Users } from "lucide-react";
import { Section } from "@/components/ui/section";

const cardAccents = [
  { icon: Search, dot: "bg-primary", chip: "bg-primary/10 text-foreground", card: "" },
  { icon: Compass, dot: "bg-brand-petrol", chip: "bg-brand-petrol/10 text-brand-petrol", card: "bg-surface-warm/60" },
  { icon: MessageCircle, dot: "bg-brand-lime", chip: "bg-brand-lime/20 text-[hsl(30_60%_28%)]", card: "" },
  { icon: RefreshCw, dot: "bg-brand-petrol", chip: "bg-brand-petrol/10 text-brand-petrol", card: "bg-surface-warm/60" },
  { icon: Users, dot: "bg-primary", chip: "bg-primary/10 text-foreground", card: "" },
];

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

  const intro = t("services.intro", { returnObjects: true }) as string[];
  const closing = t("services.closing", { returnObjects: true }) as string[];

  return (
    <Section id="sluzby" className="relative">
      <div className="section-container">
        <AnimatedSection>
          <div className="text-center mb-12">
            <span className="eyebrow mb-6 block">— {t("services.eyebrow")} — </span>
            <h2 className="heading-lg text-balance">
              {t("services.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic-serif text-gradient">
                {t("services.title").split(" ").slice(-1)}
              </span>
            </h2>
          </div>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <div className="max-w-3xl mx-auto mb-16 space-y-4 text-center">
            {intro.map((p, i) => (
              <p key={i} className="body-lg text-subtle text-balance">
                {p}
              </p>
            ))}
          </div>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-2 gap-6">
          {sections.map((section, index) => {
            const accent = cardAccents[index % cardAccents.length];
            const Icon = accent.icon;
            return (
            <StaggerItem key={index}>
              <div className={`editorial-card reveal-arrow group h-full flex flex-col ${accent.card}`}>
                <div className="mb-5">
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${accent.chip}`}>
                    <Icon className="w-5 h-5" />
                  </div>
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
                      <span className={`w-1.5 h-1.5 ${accent.dot} rounded-full mt-2 mr-3 shrink-0 group-hover/item:scale-125 transition-all duration-300`} />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-5 border-t border-border/60">
                  <p className="body-sm">
                    <span className="font-semibold text-foreground">{t("servicesPage.resultLabel")}</span>{" "}
                    <span className="text-subtle">{section.result}</span>
                  </p>
                </div>

                <div className="arrow mt-5 pt-4 border-t border-border/60 flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-foreground opacity-60 group-hover:opacity-100 transition-opacity">
                  {t("services.cta")} <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </StaggerItem>
            );
          })}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="mt-24 pt-16 border-t border-border/60">
            <div className="max-w-3xl mx-auto text-center mb-10 space-y-4">
              {closing.map((line, i) => (
                <p
                  key={i}
                  className={
                    i === closing.length - 1
                      ? "body-lg text-subtle text-balance"
                      : "body-lg italic-serif text-balance text-foreground"
                  }
                >
                  {line}
                </p>
              ))}
            </div>
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
    </Section>
  );
};

export default ServicesSection;

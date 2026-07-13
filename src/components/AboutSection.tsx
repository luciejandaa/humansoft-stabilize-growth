import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight, Wind, Target, Sprout, Hammer, Sparkles } from "lucide-react";
import aboutImage from "@/assets/about-consulting.jpg.asset.json";
import { Section } from "@/components/ui/section";

const valueVisuals = [
  { icon: Wind, rotate: -2, className: "bg-brand-petrol/[0.06] border-brand-petrol/20" },
  { icon: Target, rotate: 1.5, className: "bg-primary/[0.07] border-primary/25" },
  { icon: Sprout, rotate: -1.5, className: "bg-brand-lime/10 border-brand-lime/30" },
  { icon: Hammer, rotate: 2, className: "bg-brand-petrol/[0.06] border-brand-petrol/20" },
  { icon: Sparkles, rotate: -2.5, className: "bg-primary/[0.07] border-primary/25" },
];

const AboutSection = () => {
  const { t } = useTranslation();
  const intro = t("about.intro", { returnObjects: true }) as string[];
  const values = t("about.values", { returnObjects: true }) as { name: string; description: string }[];

  return (
    <Section id="o-nas" className="relative overflow-hidden">
      <div className="section-container relative">
        <div className="max-w-6xl mx-auto">
          <AnimatedSection>
            <div className="text-center mb-12">
              <span className="eyebrow mb-4 block">— {t("about.eyebrow")} — </span>
              <h2 className="heading-lg text-balance">
                {t("about.title").split(" ").slice(0, -1).join(" ")}{" "}
                <span className="italic-serif text-gradient">
                  {t("about.title").split(" ").slice(-1)}
                </span>
              </h2>
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <div className="max-w-3xl mx-auto mb-14 space-y-5 text-center">
              {intro.map((p, i) => (
                <p key={i} className="body-lg text-subtle text-balance">
                  {p}
                </p>
              ))}
            </div>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <div className="mb-20 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
              <img
                src={aboutImage.url}
                alt=""
                width={1600}
                height={1104}
                loading="lazy"
                className="w-full h-[280px] md:h-[420px] object-cover"
              />
            </div>
          </AnimatedSection>


          <div className="grid md:grid-cols-2 gap-6 mb-20">
            <AnimatedCard delay={0.1}>
              <div className="editorial-card h-full relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <span className="eyebrow block mb-4">
                  {t("about.vision.label")}
                </span>
                <p className="body-lg text-foreground leading-relaxed relative">
                  {t("about.vision.text")}
                </p>
              </div>
            </AnimatedCard>

            <AnimatedCard delay={0.2}>
              <div className="editorial-card h-full relative overflow-hidden bg-foreground text-background">
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2" />
                <span className="eyebrow block mb-4" style={{ color: "hsl(var(--primary-glow))" }}>
                  {t("about.mission.label")}
                </span>
                <p className="body-lg leading-relaxed relative">
                  {t("about.mission.text")}
                </p>
              </div>
            </AnimatedCard>
          </div>

          <AnimatedSection delay={0.3}>
            <div className="text-center mb-10">
              <span className="eyebrow block text-subtle">— {t("about.valuesEyebrow")} — </span>
              <h3 className="heading-sm mt-4 text-balance">{t("about.valuesLabel")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((value, index) => {
                const visual = valueVisuals[index % valueVisuals.length];
                const Icon = visual.icon;
                return (
                  <div
                    key={index}
                    className={`editorial-card h-full text-center border-2 hover:-translate-y-1 hover:rotate-0 transition-all duration-300 ${visual.className}`}
                    style={{ transform: `rotate(${visual.rotate}deg)` }}
                  >
                    <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-background/70 flex items-center justify-center border border-border/50">
                      <Icon className="w-4 h-4 text-foreground/70" />
                    </div>
                    <h4 className="heading-sm mb-3 text-foreground">
                      {value.name}
                    </h4>
                    <p className="text-sm text-subtle leading-relaxed">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </AnimatedSection>

          <AnimatedText delay={0.4}>
            <div className="text-center mt-16">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/kontakt" className="inline-flex items-center gap-2">
                  {t("about.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </AnimatedText>
        </div>
      </div>
    </Section>
  );
};

export default AboutSection;

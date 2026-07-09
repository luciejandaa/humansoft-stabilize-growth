import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight } from "lucide-react";
import aboutImage from "@/assets/about-consulting.jpg.asset.json";
import { Section } from "@/components/ui/section";

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
              <h2 className="heading-xl text-balance">
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
              <h3 className="heading-md mt-4 text-balance">{t("about.valuesLabel")}</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {values.map((value, index) => (
                <div
                  key={index}
                  className="editorial-card h-full text-center hover:-translate-y-1 transition-transform duration-300"
                >
                  <h4 className="font-display text-lg font-semibold mb-3 text-[hsl(var(--primary-deep))]">
                    {value.name}
                  </h4>
                  <p className="text-sm text-subtle leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
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

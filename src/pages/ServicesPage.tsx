import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";
import { AnimatedSection } from "@/components/ui/animated-section";
import { Fragment } from "react";
import servicesHero from "@/assets/services-hero.jpg.asset.json";
import { Section } from "@/components/ui/section";

const ServicesPage = () => {
  const { t } = useTranslation();

  const sections = t("servicesPage.sections", { returnObjects: true }) as {
    number: string;
    title: string;
    description: string;
    approach: string;
    items: string[];
    result: string;
  }[];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-20 relative">
        {/* Hero / Intro */}
        <Section>
          <div className="section-container">
            <AnimatedSection>
              <h1 className="heading-xl mb-6 text-center">{t("servicesPage.title")}</h1>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <p className="body-lg text-subtle text-center max-w-3xl mx-auto mb-4">
                {t("servicesPage.intro1")}
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="body-base text-subtle text-center max-w-3xl mx-auto">
                {t("servicesPage.intro2")}
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="mt-16 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
                <img
                  src={servicesHero.url}
                  alt=""
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="w-full h-[260px] md:h-[420px] object-cover"
                />
              </div>
            </AnimatedSection>
          </div>
        </Section>


        {/* Service Sections */}
        <Section>
          <div className="section-container space-y-24">
            {sections.map((section, index) => (
              <Fragment key={index}>
                <AnimatedSection delay={0.1}>
                  <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-12 glow-gold-hover">
                    <div className="mb-4">
                      <h2 className="heading-sm">{section.title}</h2>
                    </div>
                    <p className="body-base text-subtle mb-4 max-w-3xl">{section.description}</p>
                    <p className="body-base text-subtle mb-8 max-w-3xl">{section.approach}</p>

                    <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-5">
                      {t("servicesPage.itemsLabel")}
                    </h3>
                    <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                      {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                        <span className="body-sm text-subtle">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border/60">
                    <p className="body-sm">
                      <span className="font-semibold text-foreground">{t("servicesPage.resultLabel")}</span>{" "}
                      <span className="text-subtle">{section.result}</span>
                    </p>
                  </div>
                  </div>
                </AnimatedSection>

                {index === 1 && (
                  <AnimatedSection delay={0.1}>
                    <InlineCTA
                      variant="lime"
                      text={t("inlineCta.evaluate.text")}
                      buttonLabel={t("inlineCta.evaluate.button")}
                      to="/hodnoceni"
                    />
                  </AnimatedSection>
                )}
                {index === 3 && (
                  <AnimatedSection delay={0.1}>
                    <InlineCTA
                      text={t("inlineCta.references.text")}
                      buttonLabel={t("inlineCta.references.button")}
                      to="/reference"
                    />
                  </AnimatedSection>
                )}
              </Fragment>
            ))}
          </div>
        </Section>


        {/* Closing */}
        <Section>
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <p className="body-lg italic text-subtle">
                  {t("servicesPage.closing")}
                </p>
              </div>
            </AnimatedSection>
          </div>
        </Section>

        {/* CTA banner */}
        <CTABanner
          eyebrow={t("servicesPage.cta.eyebrow")}
          title={t("servicesPage.cta.title")}
          subtitle={t("servicesPage.cta.subtitle")}
          primaryLabel={t("servicesPage.cta.primary")}
          primaryTo="/hodnoceni"
          secondaryLabel={t("servicesPage.cta.secondary")}
          secondaryTo="/kontakt"
        />

      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

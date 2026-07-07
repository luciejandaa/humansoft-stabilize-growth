import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection } from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

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
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        {/* Hero / Intro */}
        <section className="section-padding">
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
          </div>
        </section>

        {/* Service Sections */}
        <section className="section-padding">
          <div className="section-container space-y-24">
            {sections.map((section, index) => (
              <AnimatedSection key={index} delay={0.1}>
                <div className="bg-card border border-border/60 rounded-2xl p-8 md:p-12 glow-gold-hover">
                  <div className="mb-4">
                    <h2 className="heading-md">{section.title}</h2>
                  </div>
                  <p className="body-base text-subtle mb-4 max-w-3xl">{section.description}</p>
                  <p className="body-base text-subtle mb-8 max-w-3xl">{section.approach}</p>

                  <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-5">
                    {t("servicesPage.itemsLabel")}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {section.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 shrink-0" />
                        <span className="body-sm text-subtle">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border/60">
                    <p className="body-sm">
                      <span className="font-semibold text-[hsl(var(--primary-deep))]">{t("servicesPage.resultLabel")}</span>{" "}
                      <span className="text-subtle">{section.result}</span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>

        {/* Closing + CTA */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <p className="body-lg italic text-subtle mb-8">
                  {t("servicesPage.closing")}
                </p>
                <Button size="lg" asChild>
                  <Link to="/kontakt" className="inline-flex items-center gap-2">
                    {t("servicesPage.ctaButton")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

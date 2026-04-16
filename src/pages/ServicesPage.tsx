import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import FunDecorations from "@/components/FunDecorations";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("servicesPage.restructuring.title"),
      description: t("servicesPage.restructuring.description"),
      items: t("servicesPage.restructuring.items", { returnObjects: true }) as string[],
      result: t("servicesPage.restructuring.result"),
    },
    {
      title: t("servicesPage.processes.title"),
      description: t("servicesPage.processes.description"),
      items: t("servicesPage.processes.items", { returnObjects: true }) as string[],
      result: t("servicesPage.processes.result"),
    },
    {
      title: t("servicesPage.leadership.title"),
      description: t("servicesPage.leadership.description"),
      items: t("servicesPage.leadership.items", { returnObjects: true }) as string[],
      result: t("servicesPage.leadership.result"),
    },
  ];

  const processSteps = t("servicesPage.process.steps", { returnObjects: true }) as { title: string; description: string }[];

  const whyReasons = t("servicesPage.why.items", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <FunDecorations />

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

        {/* Service Details */}
        <section className="section-padding">
          <div className="section-container space-y-24">
            {services.map((service, index) => (
              <AnimatedSection key={index} delay={0.1}>
                <div className="bg-card border border-border rounded-2xl p-8 md:p-12 glow-gold-hover">
                  <h2 className="heading-md mb-4">{service.title}</h2>
                  <p className="body-base text-subtle mb-8 max-w-3xl">{service.description}</p>

                  <h3 className="font-display font-semibold text-foreground text-sm uppercase tracking-wider mb-5">
                    {t("servicesPage.helpLabel")}
                  </h3>
                  <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                    {service.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span className="body-sm text-subtle">{item}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-6 border-t border-border">
                    <p className="body-sm">
                      <span className="font-semibold text-primary">{t("servicesPage.resultLabel")}</span>{" "}
                      <span className="text-subtle">{service.result}</span>
                    </p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </section>
        {/* CTA between services and process */}
        <section className="pb-16 pt-4">
          <div className="section-container text-center">
            <Button size="lg" asChild>
              <Link to="/kontakt" className="inline-flex items-center gap-2">
                {t("servicesPage.ctaButton")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </section>

        {/* Process */}
        <section className="section-padding bg-secondary/30">
          <div className="section-container">
            <AnimatedSection>
              <h2 className="heading-lg mb-4 text-center">{t("servicesPage.process.title")}</h2>
              <p className="body-base text-subtle text-center mb-16 max-w-2xl mx-auto">
                {t("servicesPage.process.subtitle")}
              </p>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processSteps.map((step, index) => (
                <StaggerItem key={index}>
                  <div className="relative">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mb-4">
                      {index + 1}
                    </div>
                    <h3 className="heading-sm text-base mb-2">{step.title}</h3>
                    <p className="body-sm text-subtle">{step.description}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Why Us */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <h2 className="heading-lg mb-10 text-center">{t("servicesPage.why.title")}</h2>
            </AnimatedSection>
            <StaggerContainer className="max-w-2xl mx-auto space-y-4">
              {whyReasons.map((reason, index) => (
                <StaggerItem key={index}>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <p className="body-base text-subtle">{reason}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>

        {/* Quote + CTA */}
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <div className="text-center max-w-2xl mx-auto">
                <p className="body-lg italic text-subtle mb-6">
                  "{t("servicesPage.claim")}"
                </p>
                <p className="body-base text-subtle mb-8">
                  {t("servicesPage.ctaText")}
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

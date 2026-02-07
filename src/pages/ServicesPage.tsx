import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/ui/animated-section";
import { ArrowRight } from "lucide-react";

const ServicesPage = () => {
  const { t } = useTranslation();

  const services = [
    {
      title: t("services.restructuring.title"),
      items: t("services.restructuring.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.processes.title"),
      items: t("services.processes.items", { returnObjects: true }) as string[],
    },
    {
      title: t("services.leadership.title"),
      items: t("services.leadership.items", { returnObjects: true }) as string[],
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            <AnimatedSection>
              <h1 className="heading-xl mb-16 text-center">{t("services.title")}</h1>
            </AnimatedSection>

            <StaggerContainer className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {services.map((service, index) => (
                <StaggerItem key={index}>
                  <div className="group h-full">
                    <h2 className="heading-sm mb-6 pb-4 border-b border-divider group-hover:border-primary/30 transition-colors duration-300">
                      {service.title}
                    </h2>
                    <ul className="space-y-3">
                      {service.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="body-sm text-subtle flex items-start group/item"
                        >
                          <span className="w-1.5 h-1.5 bg-primary/60 rounded-full mt-2 mr-3 shrink-0 group-hover/item:bg-primary transition-colors duration-200" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Quote */}
            <AnimatedSection delay={0.3}>
              <div className="mt-20 pt-12 border-t border-divider">
                <p className="body-lg text-center max-w-2xl mx-auto italic text-subtle mb-8">
                  "{t("services.quote")}"
                </p>
                <div className="text-center">
                  <Button size="lg" asChild>
                    <Link to="/kontakt" className="inline-flex items-center gap-2">
                      {t("contact.cta")}
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
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

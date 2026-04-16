import { useTranslation } from "react-i18next";
import { AnimatedSection, StaggerContainer, StaggerItem } from "./ui/animated-section";

const ServicesSection = () => {
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
    <section id="sluzby" className="section-padding relative">
      <div className="section-container">
        <AnimatedSection>
          <h2 className="heading-lg mb-16 text-center">{t("services.title")}</h2>
        </AnimatedSection>

        <StaggerContainer className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <StaggerItem key={index}>
              <div className="group h-full">
                <h3 className="heading-sm mb-6 pb-4 border-b border-border group-hover:border-primary/40 transition-colors duration-300">
                  {service.title}
                </h3>
                <ul className="space-y-3">
                  {service.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="body-sm text-subtle flex items-start group/item"
                    >
                      <span className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-2 mr-3 shrink-0 group-hover/item:bg-primary transition-colors duration-200" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.3}>
          <div className="mt-20 pt-12 border-t border-border">
            <p className="body-lg text-center max-w-2xl mx-auto italic text-subtle">
              "{t("services.quote")}"
            </p>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default ServicesSection;

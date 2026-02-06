import { useTranslation } from "react-i18next";

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
    <section id="sluzby" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg mb-16 text-center">{t("services.title")}</h2>

        <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
          {services.map((service, index) => (
            <div key={index} className="group">
              <h3 className="heading-sm mb-6 pb-4 border-b border-divider">
                {service.title}
              </h3>
              <ul className="space-y-3">
                {service.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="body-sm text-subtle flex items-start"
                  >
                    <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Note */}
        <div className="mt-20 pt-12 border-t border-divider">
          <p className="body-lg text-center max-w-2xl mx-auto italic text-subtle">
            "{t("services.quote")}"
          </p>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

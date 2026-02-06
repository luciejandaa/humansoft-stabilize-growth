import { useTranslation } from "react-i18next";

const ProcessSection = () => {
  const { t } = useTranslation();

  const steps = [
    {
      number: "01",
      title: t("process.steps.step1.title"),
      description: t("process.steps.step1.description"),
    },
    {
      number: "02",
      title: t("process.steps.step2.title"),
      description: t("process.steps.step2.description"),
    },
    {
      number: "03",
      title: t("process.steps.step3.title"),
      description: t("process.steps.step3.description"),
    },
    {
      number: "04",
      title: t("process.steps.step4.title"),
      description: t("process.steps.step4.description"),
    },
  ];

  return (
    <section id="jak-pracujeme" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="heading-lg mb-16 text-center">{t("process.title")}</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-6">
                <span className="font-display text-6xl font-bold text-muted-foreground/20">
                  {step.number}
                </span>
              </div>
              <h3 className="heading-sm mb-3">{step.title}</h3>
              <p className="body-sm text-subtle">{step.description}</p>

              {/* Connector line for desktop - positioned below the number */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[4.5rem] left-[4rem] w-[calc(100%+3rem-4rem)] h-px bg-divider" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

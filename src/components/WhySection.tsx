import { useTranslation } from "react-i18next";

const WhySection = () => {
  const { t } = useTranslation();

  return (
    <section id="proc" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-8">
            {t("why.title")}
          </h2>
          
          <p className="body-lg text-subtle">
            {t("why.description")}
          </p>
          
          <p className="body-lg text-foreground mt-6 font-medium">
            {t("why.conclusion")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhySection;

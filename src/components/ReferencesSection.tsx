import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const caseKeys = ["caseA", "caseB", "caseC", "caseD", "caseE", "caseF", "caseG", "caseH", "caseI", "caseJ"];

const ReferencesSection = () => {
  const { t } = useTranslation();

  return (
    <section id="reference" className="section-padding">
      <div className="section-container">
        <h2 className="heading-lg mb-16 text-center">{t("references.title")}</h2>
        <div className="space-y-8">
          {caseKeys.slice(0, 4).map((key) => (
            <div key={key} className="pb-8 border-b border-border/60 last:border-b-0 hover:border-primary/30 transition-colors duration-300">
              <h3 className="heading-sm mb-3">{t(`references.cases.${key}.title`)}</h3>
              <blockquote className="body-sm text-subtle italic leading-relaxed">
                „{t(`references.cases.${key}.quote`)}"
              </blockquote>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link to="/reference" className="inline-flex items-center justify-center rounded-md bg-primary text-primary-foreground px-6 py-3 text-sm font-semibold hover:bg-primary/90 transition-colors font-display tracking-wide">
            {t("references.cta")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ReferencesSection;

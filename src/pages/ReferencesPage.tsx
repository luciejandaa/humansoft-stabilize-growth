import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const ReferencesPage = () => {
  const { t } = useTranslation();

  const caseStudies = [
    {
      title: t("references.cases.case1.title"),
      type: t("references.cases.case1.type"),
      situation: t("references.cases.case1.situation"),
      approach: t("references.cases.case1.approach"),
      result: t("references.cases.case1.result"),
    },
    {
      title: t("references.cases.case2.title"),
      type: t("references.cases.case2.type"),
      situation: t("references.cases.case2.situation"),
      approach: t("references.cases.case2.approach"),
      result: t("references.cases.case2.result"),
    },
    {
      title: t("references.cases.case3.title"),
      type: t("references.cases.case3.type"),
      situation: t("references.cases.case3.situation"),
      approach: t("references.cases.case3.approach"),
      result: t("references.cases.case3.result"),
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            <h1 className="heading-xl mb-16 text-center">{t("references.title")}</h1>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-divider last:border-b-0"
                >
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {study.type}
                    </span>
                    <h2 className="heading-sm mt-2">{study.title}</h2>
                  </div>

                  <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        {t("references.labels.situation")}
                      </span>
                      <p className="body-sm text-subtle">{study.situation}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        {t("references.labels.approach")}
                      </span>
                      <p className="body-sm text-subtle">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        {t("references.labels.result")}
                      </span>
                      <p className="body-sm text-subtle">{study.result}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ReferencesPage;

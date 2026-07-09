import { useTranslation } from "react-i18next";
import { Fragment } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";
import referencesImage from "@/assets/references-handshake.jpg.asset.json";

const caseKeys = ["caseA", "caseB", "caseC", "caseD", "caseE", "caseF", "caseG", "caseH", "caseI", "caseJ"];

const ReferencesPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <section className="section-padding">
          <div className="section-container">
            <h1 className="heading-xl mb-10 text-center">{t("references.title")}</h1>

            <div className="mb-16 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
              <img
                src={referencesImage.url}
                alt=""
                width={1600}
                height={912}
                loading="lazy"
                className="w-full h-[240px] md:h-[380px] object-cover"
              />
            </div>


            <div className="mb-16">
              <InlineCTA
                variant="lime"
                text={t("inlineCta.evaluate.text")}
                buttonLabel={t("inlineCta.evaluate.button")}
                to="/hodnoceni"
              />
            </div>

            <div className="space-y-16">
              {caseKeys.map((key, index) => {
                const approach = t(`references.cases.${key}.approach`, { returnObjects: true }) as string[];
                const result = t(`references.cases.${key}.result`, { returnObjects: true }) as string[];
                const situation = t(`references.cases.${key}.situation`);
                const metric = t(`references.cases.${key}.metric`);
                const quote = t(`references.cases.${key}.quote`);
                const title = t(`references.cases.${key}.title`);

                return (
                  <Fragment key={key}>
                  <div
                    className="pb-16 border-b border-border/60 last:border-b-0"
                  >
                    <h2 className="heading-sm mb-8">{title}</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                      {/* Situace */}
                      <div>
                        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                          {t("references.labels.situation")}
                        </span>
                        <p className="body-sm text-subtle">{situation}</p>
                      </div>

                      {/* Postup */}
                      <div>
                        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                          {t("references.labels.approach")}
                        </span>
                        {Array.isArray(approach) ? (
                          <ul className="body-sm text-subtle list-disc list-inside space-y-1">
                            {approach.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="body-sm text-subtle">{approach}</p>
                        )}
                      </div>

                      {/* Výsledek */}
                      <div>
                        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                          {t("references.labels.result")}
                        </span>
                        {Array.isArray(result) ? (
                          <ul className="body-sm text-subtle list-disc list-inside space-y-1">
                            {result.map((item, i) => (
                              <li key={i}>{item}</li>
                            ))}
                          </ul>
                        ) : (
                          <p className="body-sm text-subtle">{result}</p>
                        )}
                      </div>

                      {/* Metrika */}
                      <div>
                        <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                          {t("references.labels.metric")}
                        </span>
                        <p className="body-sm text-subtle">{metric}</p>
                      </div>
                    </div>

                    {/* Citace */}
                    <div className="bg-muted/50 rounded-lg p-6 border-l-4 border-primary">
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-3">
                        {t("references.labels.quote")}
                      </span>
                      <blockquote className="body-sm text-foreground italic leading-relaxed">
                        „{quote}"
                      </blockquote>
                    </div>
                  </div>
                  {index === 3 && (
                    <InlineCTA
                      text={t("inlineCta.contact.text")}
                      buttonLabel={t("inlineCta.contact.button")}
                      to="/kontakt"
                    />
                  )}
                  {index === 6 && (
                    <InlineCTA
                      variant="lime"
                      text={t("inlineCta.services.text")}
                      buttonLabel={t("inlineCta.services.button")}
                      to="/sluzby"
                    />
                  )}
                  </Fragment>
                );
              })}
            </div>

          </div>
        </section>

        <CTABanner
          title={t("references.ctaTitle")}
          subtitle={t("references.ctaSubtitle")}
          primaryLabel={t("references.ctaPrimary")}
          primaryTo="/hodnoceni"
          secondaryLabel={t("references.ctaSecondary")}
          secondaryTo="/kontakt"
        />


      </main>
      <Footer />
    </div>
  );
};

export default ReferencesPage;

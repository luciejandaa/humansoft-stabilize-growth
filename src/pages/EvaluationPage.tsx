import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import evaluationImage from "@/assets/evaluation-notebook.jpg.asset.json";
import { Section } from "@/components/ui/section";

const EvaluationPage = () => {
  const { t } = useTranslation();
  const benefits = t("evaluation.benefits", { returnObjects: true }) as string[];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <Section>
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-8">{t("evaluation.title")}</h1>
              <p className="body-lg text-subtle mb-12">{t("evaluation.subtitle")}</p>
              <Button variant="gradient" size="lg" asChild>
                <a href={`mailto:${t("contact.email")}?subject=${encodeURIComponent(t("evaluation.mailSubject"))}`}>
                  {t("evaluation.cta")}
                  <ArrowRight className="ml-2" size={18} />
                </a>
              </Button>
              <p className="body-sm text-subtle mt-6 max-w-xl mx-auto">{t("evaluation.comingSoon")}</p>
            </div>

            <div className="mt-16 mb-16 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
              <img
                src={evaluationImage.url}
                alt=""
                width={1600}
                height={1008}
                loading="lazy"
                className="w-full h-[260px] md:h-[420px] object-cover"
              />
            </div>

            {Array.isArray(benefits) && benefits.length > 0 && (
              <div className="mt-20 max-w-4xl mx-auto">
                <ul className="grid sm:grid-cols-2 gap-4 mb-12">
                  {benefits.map((b, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 p-5 rounded-xl border border-border/60 bg-card"
                    >
                      <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 shrink-0" />
                      <span className="body-sm text-foreground">{b}</span>
                    </li>
                  ))}
                </ul>

                <InlineCTA
                  variant="lime"
                  text={t("inlineCta.contact.text")}
                  buttonLabel={t("inlineCta.contact.button")}
                  to="/kontakt"
                />
              </div>
            )}
          </div>
        </Section>

        <CTABanner
          eyebrow={t("evaluation.banner.eyebrow")}
          title={t("evaluation.banner.title")}
          subtitle={t("evaluation.banner.subtitle")}
          primaryLabel={t("evaluation.banner.primary")}
          primaryTo="/kontakt"
          secondaryLabel={t("evaluation.banner.secondary")}
          secondaryTo="/sluzby"
        />
      </main>
      <Footer />
    </div>
  );
};

export default EvaluationPage;


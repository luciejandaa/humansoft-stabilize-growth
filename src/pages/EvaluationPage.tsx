import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const EvaluationPage = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <section className="section-padding">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-8">{t("evaluation.title")}</h1>
              <p className="body-lg text-subtle mb-12">{t("evaluation.subtitle")}</p>
              <Button variant="gradient" size="lg">
                {t("evaluation.cta")}
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </div>
          </div>
        </section>

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

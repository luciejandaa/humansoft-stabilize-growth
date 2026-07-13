import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import processImage from "@/assets/process-office.jpg.asset.json";
import { Section } from "@/components/ui/section";

const stepKeys = ["step1", "step2", "step3", "step4", "step5"];

const ProcessPage = () => {
  const { t } = useTranslation();

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-20">
        <Section className="bg-secondary">
          <div className="section-container">
            <h1 className="heading-xl mb-6 text-center">{t("process.title")}</h1>
            <p className="body-lg text-subtle text-center max-w-2xl mx-auto mb-10">
              {t("process.subtitle")}
            </p>

            <div className="mb-16 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
              <img
                src={processImage.url}
                alt=""
                width={1600}
                height={1008}
                loading="lazy"
                className="w-full h-[260px] md:h-[400px] object-cover"
              />
            </div>


            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-10">
              {stepKeys.map((key, index) => (
                <div key={key} className="relative">
                  <div className="mb-6">
                    <span className="font-display text-6xl font-bold text-muted-foreground/20">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h2 className="heading-sm mb-3">{t(`process.steps.${key}.title`)}</h2>
                  <p className="body-sm text-subtle">{t(`process.steps.${key}.description`)}</p>

                  {/* Connector line for desktop - positioned below the number */}
                  {index < stepKeys.length - 1 && (
                    <div className="hidden lg:block absolute top-[4.5rem] left-[4rem] w-[calc(100%+2.5rem-4rem)] h-px bg-border" />
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-16">
              <Button variant="gradient" size="lg" asChild>
                <Link to="/hodnoceni" className="inline-flex items-center gap-2">
                  {t("process.cta")}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;

import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  const { t } = useTranslation();

  const scrollToContact = () => {
    const element = document.querySelector("#kontakt");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="section-container section-padding">
        <div className="max-w-4xl">
          <h1 className="heading-xl mb-8 animate-fade-in-up">
            {t("hero.title")}
          </h1>
          
          <p className="body-lg text-subtle mb-12 max-w-3xl animate-fade-in-up delay-100">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
            <Button variant="hero" onClick={scrollToContact}>
              {t("hero.cta")}
              <ArrowRight className="ml-2" size={18} />
            </Button>
          </div>
        </div>

        {/* Decorative element */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 hidden md:block animate-fade-in delay-500">
          <div className="w-px h-16 bg-divider" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

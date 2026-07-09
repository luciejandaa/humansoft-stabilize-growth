import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { Section } from "@/components/ui/section";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <Section id="kontakt" className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Subtle pattern */}
      <div 
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, hsl(0 0% 4%) 1px, transparent 0)`,
          backgroundSize: "32px 32px",
        }}
      />
      <div className="section-container relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-lg mb-6">{t("contact.title")}</h2>
          <p className="body-lg opacity-70 mb-12">{t("contact.subtitle")}</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-background text-foreground hover:bg-background/90"
            >
              {t("contact.cta")}
              <ArrowRight className="ml-2" size={18} />
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Mail className="mr-2" size={18} />
              {t("contact.writeUs")}
            </Button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default ContactSection;

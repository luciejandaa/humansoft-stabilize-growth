import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { ArrowRight, Mail } from "lucide-react";

const ContactSection = () => {
  const { t } = useTranslation();

  return (
    <section id="kontakt" className="section-padding bg-primary text-primary-foreground">
      <div className="section-container">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="heading-lg mb-6">
            {t("contact.title")}
          </h2>
          
          <p className="body-lg opacity-80 mb-12">
            {t("contact.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
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
    </section>
  );
};

export default ContactSection;

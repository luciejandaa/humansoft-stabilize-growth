import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin } from "lucide-react";
import contactImage from "@/assets/contact-coffee.jpg.asset.json";
import { Section } from "@/components/ui/section";

const ContactPage = () => {
  const { t } = useTranslation();
  const email = t("contact.email");
  const phone = t("contact.phone");
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(t("contact.mailSubject"))}`;
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <Section>
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h1 className="heading-xl mb-6">
                {t("contact.title")}
              </h1>
              <p className="body-lg text-subtle">
                {t("contact.subtitle")}
              </p>
            </div>

            <div className="max-w-5xl mx-auto mb-16 rounded-2xl overflow-hidden border border-border/60 shadow-[0_30px_80px_-30px_hsl(0_0%_4%/0.25)]">
              <img
                src={contactImage.url}
                alt=""
                width={1600}
                height={1008}
                loading="lazy"
                className="w-full h-[260px] md:h-[380px] object-cover"
              />
            </div>


            <div className="max-w-xl mx-auto">
              <div className="flex flex-col items-center mb-16">
                <div className="flex flex-col sm:flex-row gap-4 justify-center mb-4">
                  <Button variant="default" size="lg" asChild>
                    <a href={mailtoHref}>
                      <Mail className="mr-2 h-4 w-4" />
                      {t("contact.writeUs")}
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" asChild>
                    <Link to="/hodnoceni">{t("contact.cta")}</Link>
                  </Button>
                </div>
                <p className="body-sm text-subtle">{t("contact.responseNote")}</p>
              </div>

              <div className="grid sm:grid-cols-3 gap-8 text-center">
                <a
                  href={mailtoHref}
                  className="block group"
                  aria-label={t("contact.writeUs")}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border/60 rounded-lg transition-colors group-hover:border-primary">
                    <Mail className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="body-sm text-subtle group-hover:text-foreground transition-colors">{email}</p>
                </a>
                <a
                  href={telHref}
                  className="block group"
                  aria-label={phone}
                >
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border/60 rounded-lg transition-colors group-hover:border-primary">
                    <Phone className="w-5 h-5 text-muted-foreground transition-colors group-hover:text-primary" />
                  </div>
                  <p className="body-sm text-subtle group-hover:text-foreground transition-colors">{phone}</p>
                </a>
                <div>
                  <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-border/60 rounded-lg">
                    <MapPin className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <p className="body-sm text-subtle">{t("contact.location")}</p>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
};

export default ContactPage;

import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CTABanner from "@/components/CTABanner";
import InlineCTA from "@/components/InlineCTA";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/ui/animated-section";
import { User } from "lucide-react";
import lucieJanda from "@/assets/team/lucie-janda.png";
import veronikaHegrova from "@/assets/team/veronika-hegrova.png";
import danielaKolomaznikova from "@/assets/team/daniela-kolomaznikova.png";
import pavelVresnak from "@/assets/team/pavel-vresnak.png";
import frantisekFiala from "@/assets/team/frantisek-fiala.png";
import milanKosdy from "@/assets/team/milan-kosdy.png";
import monikaKunesova from "@/assets/team/monika-kunesova.png";
import { Section } from "@/components/ui/section";

const TeamPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { key: "member1", initials: "DK", photo: danielaKolomaznikova },
    { key: "member2", initials: "PV", photo: pavelVresnak },
    { key: "member3", initials: "LJ", photo: lucieJanda },
    { key: "member4", initials: "MK", photo: milanKosdy },
    { key: "member5", initials: "FF", photo: frantisekFiala },
    { key: "member6", initials: "VH", photo: veronikaHegrova },
    { key: "member7", initials: "MK", photo: monikaKunesova },
  ];

  return (
    <div className="min-h-screen relative">
      <Navigation />
      <main className="pt-20 relative">
        <Section className="bg-gradient-to-b from-secondary/50 to-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <AnimatedSection>
                <h1 className="heading-xl mb-6">{t("team.title")}</h1>
              </AnimatedSection>
              <AnimatedText delay={0.1}>
                <p className="body-lg text-subtle">
                  {t("team.subtitle")}
                </p>
              </AnimatedText>
            </div>

            <div className="space-y-24 max-w-3xl mx-auto">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={member.key} delay={index * 0.08}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-8 md:gap-12 items-center`}>
                    <div className="relative group flex-shrink-0">
                      {member.photo ? (
                        <div className="w-52 md:w-64">
                          <img
                            src={member.photo}
                            alt={t(`team.members.${member.key}.name`)}
                            className="w-full h-auto rounded-2xl"
                            style={{ maskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 70%, transparent 100%)' }}
                          />
                        </div>
                      ) : (
                        <div className="w-40 h-40 md:w-48 md:h-48 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl flex items-center justify-center border border-border/60 shadow-sm">
                          <User className="w-16 h-16 text-muted-foreground/50" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                      <div>
                        <h2 className="heading-sm mb-2">
                          {t(`team.members.${member.key}.name`)}
                        </h2>
                        <p className="text-[hsl(var(--primary-deep))] font-semibold tracking-wide uppercase text-sm">
                          {t(`team.members.${member.key}.role`)}
                        </p>
                      </div>
                      
                      {/* Bio */}
                      <p className="text-subtle leading-relaxed text-base md:text-lg">
                        {t(`team.members.${member.key}.bio`, { defaultValue: "" }) || (
                          <span className="italic text-muted-foreground">Medailonek bude doplněn</span>
                        )}
                      </p>
                    </div>
                  </div>
                </AnimatedCard>
              ))}
            </div>

            {/* Inline CTA */}
            <AnimatedText delay={0.4}>
              <div className="mt-16 max-w-3xl mx-auto">
                <InlineCTA
                  variant="lime"
                  text={t("inlineCta.contact.text")}
                  buttonLabel={t("inlineCta.contact.button")}
                  to="/kontakt"
                />
              </div>
            </AnimatedText>
          </div>
        </Section>

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

export default TeamPage;

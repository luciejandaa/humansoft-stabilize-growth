import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/ui/animated-section";
import { ArrowRight, User } from "lucide-react";
import FunDecorations from "@/components/FunDecorations";
import lucieJanda from "@/assets/team/lucie-janda.png";
import veronikaHegrova from "@/assets/team/veronika-hegrova.png";

const TeamPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { key: "member1", initials: "DK", photo: null },
    { key: "member2", initials: "PV", photo: null },
    { key: "member3", initials: "LJ", photo: lucieJanda },
    { key: "member4", initials: "MK", photo: null },
    { key: "member5", initials: "FF", photo: null },
    { key: "member6", initials: "VH", photo: veronikaHegrova },
    { key: "member7", initials: "MK", photo: null },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20 relative">
        <FunDecorations />
        <section className="section-padding bg-gradient-to-b from-secondary/50 to-secondary">
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
                    {/* Photo placeholder */}
                    <div className="relative group">
                      <div className="w-40 h-40 md:w-48 md:h-48 flex-shrink-0 bg-gradient-to-br from-primary/5 to-accent/10 rounded-2xl flex items-center justify-center border border-divider shadow-sm group-hover:shadow-md transition-shadow duration-300 overflow-hidden">
                        {member.photo ? (
                          <img src={member.photo} alt={t(`team.members.${member.key}.name`)} className="w-full h-full object-cover" />
                        ) : (
                          <User className="w-16 h-16 text-muted-foreground/50" />
                        )}
                      </div>
                      {/* Decorative accent */}
                      <div className="absolute -bottom-2 -right-2 w-12 h-12 bg-primary/10 rounded-lg -z-10" />
                    </div>

                    <div className="flex-1 text-center md:text-left space-y-4">
                      <div>
                        <h2 className="font-display text-2xl md:text-3xl font-semibold mb-2">
                          {t(`team.members.${member.key}.name`)}
                        </h2>
                        <p className="text-primary font-medium tracking-wide uppercase text-sm">
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

            {/* CTA */}
            <AnimatedText delay={0.5}>
              <div className="text-center mt-16">
                <Button size="lg" asChild>
                  <Link to="/kontakt" className="inline-flex items-center gap-2">
                    {t("contact.cta")}
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </AnimatedText>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default TeamPage;

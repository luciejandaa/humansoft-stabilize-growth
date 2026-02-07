import { useTranslation } from "react-i18next";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { AnimatedSection, AnimatedText, AnimatedCard } from "@/components/ui/animated-section";
import { ArrowRight, User } from "lucide-react";

const TeamPage = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { key: "member1", initials: "DK" },
    { key: "member2", initials: "PV" },
    { key: "member3", initials: "LJ" },
    { key: "member4", initials: "MK" },
    { key: "member5", initials: "FF" },
    { key: "member6", initials: "VH" },
    { key: "member7", initials: "MK" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
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

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <AnimatedCard key={member.key} delay={index * 0.05}>
                  <div className="bg-background p-8 border border-divider rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                    {/* Photo placeholder */}
                    <div className="w-32 h-32 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-6 flex items-center justify-center border-2 border-dashed border-divider">
                      <User className="w-12 h-12 text-muted-foreground" />
                    </div>

                    <div className="text-center">
                      <h2 className="font-display text-xl font-semibold mb-2">
                        {t(`team.members.${member.key}.name`)}
                      </h2>
                      <p className="text-sm text-primary font-medium mb-4">
                        {t(`team.members.${member.key}.role`)}
                      </p>
                      
                      {/* Bio placeholder */}
                      <div className="pt-4 border-t border-divider">
                        <p className="text-sm text-muted-foreground italic">
                          Medailonek bude doplněn
                        </p>
                      </div>
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

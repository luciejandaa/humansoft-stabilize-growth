import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight, User } from "lucide-react";

const TeamSection = () => {
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
    <section id="tym" className="section-padding bg-gradient-to-b from-secondary/50 to-secondary">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">
              {t("team.title")}
            </h2>
          </AnimatedSection>
          <AnimatedText delay={0.1}>
            <p className="body-lg text-subtle">
              {t("team.subtitle")}
            </p>
          </AnimatedText>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={member.key} delay={index * 0.05}>
              <div className="bg-background p-6 border border-divider rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                {/* Photo placeholder */}
                <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary/10 to-accent/10 rounded-xl mb-4 flex items-center justify-center border-2 border-dashed border-divider">
                  <User className="w-10 h-10 text-muted-foreground" />
                </div>

                <div className="text-center">
                  <h3 className="font-display text-lg font-semibold mb-1">
                    {t(`team.members.${member.key}.name`)}
                  </h3>
                  <p className="text-sm text-primary font-medium">
                    {t(`team.members.${member.key}.role`)}
                  </p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        {/* CTA */}
        <AnimatedText delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/kontakt" className="inline-flex items-center gap-2">
                {t("team.cta")}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          </div>
        </AnimatedText>
      </div>
    </section>
  );
};

export default TeamSection;

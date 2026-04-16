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
    <section id="tym" className="section-padding bg-secondary/50 relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <AnimatedSection>
            <h2 className="heading-lg mb-6">{t("team.title")}</h2>
          </AnimatedSection>
          <AnimatedText delay={0.1}>
            <p className="body-lg text-subtle">{t("team.subtitle")}</p>
          </AnimatedText>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={member.key} delay={index * 0.06}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
                <div className="relative group">
                  <div className="w-28 h-28 md:w-32 md:h-32 flex-shrink-0 bg-card rounded-2xl flex items-center justify-center border border-border group-hover:border-primary/30 transition-all duration-300">
                    <User className="w-12 h-12 text-muted-foreground/50" />
                  </div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">{t(`team.members.${member.key}.name`)}</h3>
                  <p className="text-primary font-medium tracking-widest uppercase text-xs mb-2 font-display">{t(`team.members.${member.key}.role`)}</p>
                  <p className="text-sm text-subtle leading-relaxed">{t(`team.members.${member.key}.shortBio`, { defaultValue: "" })}</p>
                </div>
              </div>
            </AnimatedCard>
          ))}
        </div>

        <AnimatedText delay={0.4}>
          <div className="text-center mt-12">
            <Button variant="outline" size="lg" asChild>
              <Link to="/tym" className="inline-flex items-center gap-2">
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

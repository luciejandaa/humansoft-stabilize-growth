import { useTranslation } from "react-i18next";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    {
      name: t("team.members.member1.name"),
      role: t("team.members.member1.role"),
      focus: t("team.members.member1.focus"),
      description: t("team.members.member1.description"),
    },
    {
      name: t("team.members.member2.name"),
      role: t("team.members.member2.role"),
      focus: t("team.members.member2.focus"),
      description: t("team.members.member2.description"),
    },
    {
      name: t("team.members.member3.name"),
      role: t("team.members.member3.role"),
      focus: t("team.members.member3.focus"),
      description: t("team.members.member3.description"),
    },
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={index} delay={index * 0.1}>
              <div className="bg-background p-8 border border-divider rounded-xl shadow-sm hover:shadow-md hover:border-primary/20 transition-all duration-300">
                {/* Avatar placeholder */}
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center">
                  <span className="font-display text-2xl text-primary font-semibold">
                    {member.name.split(" ").map((n) => n[0]).join("")}
                  </span>
                </div>

                <h3 className="heading-sm mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-4">{member.role}</p>

                <div className="mb-4 pb-4 border-b border-divider">
                  <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                    {t("team.focusLabel")}
                  </span>
                  <p className="body-sm mt-1 font-medium">{member.focus}</p>
                </div>

                <p className="body-sm text-subtle">{member.description}</p>
              </div>
            </AnimatedCard>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

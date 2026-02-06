import { useTranslation } from "react-i18next";

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
    <section id="tym" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="heading-lg mb-6">
            {t("team.title")}
          </h2>
          <p className="body-lg text-subtle">
            {t("team.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-divider"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-muted mb-6 flex items-center justify-center">
                <span className="font-display text-2xl text-muted-foreground">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <h3 className="heading-sm mb-1">{member.name}</h3>
              <p className="text-sm text-subtle mb-4">{member.role}</p>

              <div className="mb-4 pb-4 border-b border-divider">
                <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  {t("team.focusLabel")}
                </span>
                <p className="body-sm mt-1">{member.focus}</p>
              </div>

              <p className="body-sm text-subtle">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

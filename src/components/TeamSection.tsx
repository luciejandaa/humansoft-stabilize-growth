import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { AnimatedSection, AnimatedText, AnimatedCard } from "./ui/animated-section";
import { ArrowRight, User } from "lucide-react";
import lucieJanda from "@/assets/team/lucie-janda.png";
import veronikaHegrova from "@/assets/team/veronika-hegrova.png";
import danielaKolomaznikova from "@/assets/team/daniela-kolomaznikova.png";
import pavelVresnak from "@/assets/team/pavel-vresnak.png";
import frantisekFiala from "@/assets/team/frantisek-fiala.png";
import milanKosdy from "@/assets/team/milan-kosdy.png";

const TeamSection = () => {
  const { t } = useTranslation();

  const teamMembers = [
    { key: "member1", initials: "DK", photo: danielaKolomaznikova },
    { key: "member2", initials: "PV", photo: pavelVresnak },
    { key: "member3", initials: "LJ", photo: lucieJanda },
    { key: "member4", initials: "MK", photo: milanKosdy },
    { key: "member5", initials: "FF", photo: frantisekFiala },
    { key: "member6", initials: "VH", photo: veronikaHegrova },
    { key: "member7", initials: "MK", photo: null },
  ];

  return (
    <section id="tym" className="section-padding bg-secondary/40 relative">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center mb-20">
          <AnimatedSection>
            <span className="eyebrow mb-6 block">— {t("team.eyebrow")} — </span>
            <h2 className="heading-xl mb-6 text-balance">
              {t("team.title").split(" ").slice(0, -1).join(" ")}{" "}
              <span className="italic-serif text-gradient">
                {t("team.title").split(" ").slice(-1)}
              </span>
            </h2>
          </AnimatedSection>
          <AnimatedText delay={0.1}>
            <p className="body-lg text-subtle">{t("team.subtitle")}</p>
          </AnimatedText>
        </div>

        <div className="space-y-12 max-w-3xl mx-auto">
          {teamMembers.map((member, index) => (
            <AnimatedCard key={member.key} delay={index * 0.06}>
              <div className={`flex flex-col ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} gap-6 md:gap-10 items-center`}>
                <div className="relative group flex-shrink-0">
                  {member.photo ? (
                    <div className="w-36 md:w-44">
                      <img
                        src={member.photo}
                        alt={t(`team.members.${member.key}.name`)}
                        className="w-full h-auto rounded-2xl mask-b-from-80"
                        style={{ maskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)', WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 100%)' }}
                      />
                    </div>
                  ) : (
                    <div className="w-28 h-28 md:w-32 md:h-32 bg-card rounded-2xl flex items-center justify-center border border-border/60">
                      <User className="w-12 h-12 text-muted-foreground/50" />
                    </div>
                  )}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">{t(`team.members.${member.key}.name`)}</h3>
                  <p className="text-[hsl(var(--primary-deep))] font-semibold tracking-widest uppercase text-xs mb-2 font-display">{t(`team.members.${member.key}.role`)}</p>
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

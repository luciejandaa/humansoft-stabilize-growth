import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Compass, Microscope, FlaskConical, Wrench, CheckCircle } from "lucide-react";
import processImage from "@/assets/process-abstract.jpg.asset.json";
import { Section } from "@/components/ui/section";

const stepIcons = [Compass, Microscope, FlaskConical, Wrench, CheckCircle];

const ProcessSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    { title: t("process.steps.step1.title"), description: t("process.steps.step1.description") },
    { title: t("process.steps.step2.title"), description: t("process.steps.step2.description") },
    { title: t("process.steps.step3.title"), description: t("process.steps.step3.description") },
    { title: t("process.steps.step4.title"), description: t("process.steps.step4.description") },
    { title: t("process.steps.step5.title"), description: t("process.steps.step5.description") },
  ];

  const size = 850;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 190;
  const angles = steps.map((_, i) => -90 + i * 72);
  const stepPositions = angles.map((deg) => {
    const rad = deg * (Math.PI / 180);
    return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
  });

  const getTextStyle = (index: number): React.CSSProperties => {
    const deg = angles[index];
    const norm = ((deg % 360) + 360) % 360;
    if (norm > 240 && norm < 300) return { position: "absolute", bottom: "100%", left: "50%", transform: "translateX(-50%)", marginBottom: "16px", textAlign: "center", width: "300px" };
    if (norm >= 300 || norm < 30) return { position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "16px", textAlign: "left", width: "200px" };
    if (norm >= 30 && norm < 100) return { position: "absolute", left: "100%", top: "50%", transform: "translateY(-50%)", marginLeft: "28px", textAlign: "left", width: "240px" };
    if (norm >= 100 && norm < 170) return { position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "28px", textAlign: "right", width: "240px" };
    return { position: "absolute", right: "100%", top: "50%", transform: "translateY(-50%)", marginRight: "16px", textAlign: "right", width: "200px" };
  };

  return (
    <Section id="jak-pracujeme" className="bg-background relative" ref={sectionRef}>
      <div className="section-container relative">
        <motion.div className="text-center mb-16" initial={{ opacity: 0, y: 15 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }}>
          <span className="eyebrow mb-6 block">​</span>
          <h2 className="heading-lg mb-6 text-balance">
            {t("process.title").split(" ").slice(0, -1).join(" ")}{" "}
            <span className="italic-serif text-gradient">{t("process.title").split(" ").slice(-1)}</span>
          </h2>
          <p className="body-lg text-subtle max-w-2xl mx-auto">{t("process.subtitle")}</p>
        </motion.div>

        {/* Mobile */}
        <div className="lg:hidden space-y-0">
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div key={index} className="relative flex gap-5" initial={{ opacity: 0, x: -20 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}>
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="w-px flex-1 bg-primary/20 min-h-[1.5rem]" />
                </div>
                <div className="pb-7 pt-1.5">
                  <h3 className="heading-sm">{step.title}</h3>
                  {(step as any).subtitle && <p className="text-sm text-[hsl(var(--primary-deep))]/70 italic">{(step as any).subtitle}</p>}
                  <p className="body-sm text-subtle mt-1">{step.description}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop */}
        <div className="hidden lg:block relative mx-auto" style={{ width: `${size}px`, height: `${size}px` }}>
          <svg className="absolute inset-0 w-full h-full" viewBox={`0 0 ${size} ${size}`}>
            <motion.circle cx={cx} cy={cy} r={radius} fill="none" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeOpacity="0.2" strokeDasharray="8 6" initial={{ pathLength: 0, opacity: 0 }} animate={isInView ? { pathLength: 1, opacity: 1 } : {}} transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }} />
          </svg>
          {steps.map((step, index) => {
            const Icon = stepIcons[index];
            return (
              <motion.div key={index} className="absolute" style={{ left: `${stepPositions[index].x}px`, top: `${stepPositions[index].y}px` }} initial={{ opacity: 0, scale: 0.8 }} animate={isInView ? { opacity: 1, scale: 1 } : {}} transition={{ duration: 0.45, delay: 0.4 + index * 0.2, ease: "easeOut" }}>
                <div className="relative w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-md glow-gold" style={{ transform: "translate(-50%, -50%)" }}>
                  <Icon className="w-5 h-5" />
                  <div style={getTextStyle(index)}>
                    <h3 className="heading-sm text-foreground text-balance leading-tight">{step.title}</h3>
                    {(step as any).subtitle && <p className="body-sm text-[hsl(var(--primary-deep))]/70 italic mt-0.5 text-balance">{(step as any).subtitle}</p>}
                    <p className="body-sm text-subtle mt-1.5 text-balance">{step.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
          <motion.div className="absolute text-center" style={{ left: "50%", top: "50%", transform: "translate(-50%, -50%)", width: "220px" }} initial={{ opacity: 0 }} animate={isInView ? { opacity: 1 } : {}} transition={{ duration: 0.5, delay: 1.6 }}>
            <p className="heading-sm text-foreground">{t("process.centerTitle")}</p>
            <p className="body-sm text-subtle mt-1">{t("process.centerSubtitle")}</p>
          </motion.div>
        </div>
      </div>
    </Section>
  );
};

export default ProcessSection;

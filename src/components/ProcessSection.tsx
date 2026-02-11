import { useTranslation } from "react-i18next";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ProcessSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const steps = [
    {
      number: "01",
      title: t("process.steps.step1.title"),
      subtitle: t("process.steps.step1.subtitle"),
      description: t("process.steps.step1.description"),
    },
    {
      number: "02",
      title: t("process.steps.step2.title"),
      subtitle: t("process.steps.step2.subtitle"),
      description: t("process.steps.step2.description"),
    },
    {
      number: "03",
      title: t("process.steps.step3.title"),
      description: t("process.steps.step3.description"),
    },
    {
      number: "04",
      title: t("process.steps.step4.title"),
      description: t("process.steps.step4.description"),
    },
    {
      number: "05",
      title: t("process.steps.step5.title"),
      description: t("process.steps.step5.description"),
    },
  ];

  // Pentagon positions as percentages for reliable CSS positioning
  // Top, top-right, bottom-right, bottom-left, top-left
  const positions = [
    { left: "50%", top: "5%" },    // step 1 – top center
    { left: "88%", top: "35%" },   // step 2 – top right
    { left: "74%", top: "82%" },   // step 3 – bottom right
    { left: "26%", top: "82%" },   // step 4 – bottom left
    { left: "12%", top: "35%" },   // step 5 – top left
  ];

  // SVG pentagon points (viewBox 0 0 100 100)
  const svgPoints = [
    { x: 50, y: 8 },
    { x: 88, y: 38 },
    { x: 74, y: 85 },
    { x: 26, y: 85 },
    { x: 12, y: 38 },
  ];

  const polygonString = svgPoints.map((p) => `${p.x},${p.y}`).join(" ");

  return (
    <section id="jak-pracujeme" className="section-padding bg-secondary" ref={sectionRef}>
      <div className="section-container">
        <motion.h2
          className="heading-lg mb-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          {t("process.title")}
        </motion.h2>
        <motion.p
          className="body-base text-subtle text-center mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 15 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
        >
          {t("process.subtitle")}
        </motion.p>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="relative flex gap-5"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.3 + index * 0.12 }}
            >
              <div className="flex flex-col items-center">
                <div className="w-11 h-11 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {step.number}
                </div>
                <div className="w-px flex-1 bg-primary/20 min-h-[1.5rem]" />
              </div>
              <div className="pb-7 pt-1.5">
                <h3 className="heading-sm text-base">{step.title}</h3>
                {step.subtitle && (
                  <p className="text-sm text-primary/60 italic">{step.subtitle}</p>
                )}
                <p className="body-sm text-subtle mt-1">{step.description}</p>
              </div>
            </motion.div>
          ))}
          <motion.div
            className="flex items-center gap-5"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.4, delay: 0.9 }}
          >
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary/50">
                  <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-subtle italic">…a cyklus pokračuje</p>
          </motion.div>
        </div>

        {/* Desktop: pentagon layout */}
        <div className="hidden md:block relative mx-auto" style={{ width: "600px", height: "550px" }}>
          {/* SVG – pentagon outline */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <motion.polygon
              points={polygonString}
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="0.4"
              strokeOpacity="0.2"
              strokeDasharray="2 1.5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
            />
          </svg>

          {/* Step cards */}
          {steps.map((step, index) => (
            <motion.div
              key={index}
              className="absolute w-36 text-center"
              style={{
                left: positions[index].left,
                top: positions[index].top,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0, y: 15 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.45,
                delay: 0.4 + index * 0.2,
                ease: "easeOut",
              }}
            >
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mx-auto mb-2 shadow-md">
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
                {step.title}
              </h3>
              {step.subtitle && (
                <p className="text-xs text-primary/60 italic mt-0.5">{step.subtitle}</p>
              )}
              <p className="text-xs text-subtle mt-1 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}

          {/* Center label */}
          <motion.div
            className="absolute text-center"
            style={{ left: "50%", top: "52%", transform: "translate(-50%, -50%)" }}
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.6 }}
          >
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/15 flex items-center justify-center mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary/30">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[0.65rem] text-subtle mt-1.5 font-medium tracking-wider uppercase">Cyklus změny</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

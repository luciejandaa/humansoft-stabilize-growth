import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

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

  const radius = 42;
  const centerX = 50;
  const centerY = 50;
  const angleOffsets = [-90, -18, 54, 126, 198];

  const getPosition = (angleDeg: number) => {
    const rad = (angleDeg * Math.PI) / 180;
    return {
      x: centerX + radius * Math.cos(rad),
      y: centerY + radius * Math.sin(rad),
    };
  };

  const points = angleOffsets.map(getPosition);

  const renderArrow = (from: { x: number; y: number }, to: { x: number; y: number }, key: number) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);
    const lineLen = Math.sqrt((to.x - from.x) ** 2 + (to.y - from.y) ** 2);

    return (
      <g key={key}>
        <motion.line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="hsl(var(--primary))"
          strokeWidth="0.4"
          strokeOpacity="0.25"
          strokeDasharray="1.5 1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={isInView ? { pathLength: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 + key * 0.15, ease: "easeOut" }}
          style={{ pathLength: 0, strokeDashoffset: 0, strokeDasharray: `${lineLen} ${lineLen}` }}
        />
        <motion.g
          transform={`translate(${midX}, ${midY}) rotate(${angle})`}
          initial={{ opacity: 0, scale: 0 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.3, delay: 1.1 + key * 0.15 }}
        >
          <path
            d="M -1.8,-1.2 L 0,0 L -1.8,1.2"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </motion.g>
      </g>
    );
  };

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

        {/* Mobile: vertical cycle */}
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

        {/* Desktop: circular pentagon layout */}
        <div className="hidden md:block relative mx-auto" style={{ width: "700px", height: "700px" }}>
          {/* SVG for connecting lines & arrows */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {points.map((point, i) => {
              const next = points[(i + 1) % points.length];
              return renderArrow(point, next, i);
            })}
          </svg>

          {/* Step cards */}
          {steps.map((step, index) => {
            const pos = points[index];
            return (
              <motion.div
                key={index}
                className="absolute w-40 text-center"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                initial={{ opacity: 0, scale: 0.6 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{
                  duration: 0.45,
                  delay: 0.4 + index * 0.18,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <div
                  className="rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mx-auto mb-2.5 shadow-md"
                  style={{ width: "3.25rem", height: "3.25rem" }}
                >
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
            );
          })}

          {/* Center icon */}
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5, delay: 1.6, ease: "easeOut" }}
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

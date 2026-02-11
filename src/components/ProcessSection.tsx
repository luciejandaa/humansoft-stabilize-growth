import { useTranslation } from "react-i18next";

const ProcessSection = () => {
  const { t } = useTranslation();

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

  // Positions for 5 items around a circle (top, then clockwise)
  // Circle center is at 50%, 50% of the container
  const positions = [
    { top: "2%", left: "50%", transform: "translate(-50%, 0)" },      // top center
    { top: "22%", left: "93%", transform: "translate(-50%, 0)" },     // top right
    { top: "68%", left: "82%", transform: "translate(-50%, 0)" },     // bottom right
    { top: "68%", left: "18%", transform: "translate(-50%, 0)" },     // bottom left
    { top: "22%", left: "7%", transform: "translate(-50%, 0)" },      // top left
  ];

  return (
    <section id="jak-pracujeme" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="heading-lg mb-4 text-center">{t("process.title")}</h2>
        <p className="body-base text-subtle text-center mb-16 max-w-2xl mx-auto">
          {t("process.subtitle")}
        </p>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-6">
              {/* Timeline line + dot */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm shrink-0">
                  {step.number}
                </div>
                {/* Connecting line (including from last to first visually) */}
                <div className="w-px flex-1 bg-primary/20 min-h-[2rem]" />
              </div>
              <div className="pb-8 pt-2">
                <h3 className="heading-sm">{step.title}</h3>
                {step.subtitle && (
                  <p className="text-sm text-primary/70 italic">{step.subtitle}</p>
                )}
                <p className="body-sm text-subtle mt-1">{step.description}</p>
              </div>
            </div>
          ))}
          {/* Closing arrow back to start */}
          <div className="flex items-center gap-6">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full border-2 border-dashed border-primary/40 flex items-center justify-center">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary/60">
                  <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-subtle italic">…a cyklus pokračuje</p>
          </div>
        </div>

        {/* Desktop: circular layout */}
        <div className="hidden md:block relative mx-auto" style={{ maxWidth: "800px", height: "580px" }}>
          {/* SVG circle with arrows */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 800 580"
            fill="none"
          >
            {/* Circular path (pentagon-ish) connecting the 5 points */}
            <path
              d="M 400,55 
                 Q 580,55 665,170 
                 Q 740,275 640,410 
                 Q 560,510 400,510 
                 Q 240,510 160,410 
                 Q 60,275 135,170 
                 Q 220,55 400,55"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeOpacity="0.2"
              strokeDasharray="8 4"
              fill="none"
            />
            {/* Arrow indicators between steps */}
            {[
              { x: 545, y: 95, rotate: 35 },
              { x: 680, y: 300, rotate: 110 },
              { x: 510, y: 490, rotate: 190 },
              { x: 280, y: 490, rotate: 250 },
              { x: 130, y: 300, rotate: 290 },
            ].map((arrow, i) => (
              <g key={i} transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.rotate})`}>
                <path
                  d="M -8,-5 L 0,0 L -8,5"
                  stroke="hsl(var(--primary))"
                  strokeWidth="2"
                  strokeOpacity="0.4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
              </g>
            ))}
          </svg>

          {/* Step cards positioned around the circle */}
          {steps.map((step, index) => (
            <div
              key={index}
              className="absolute w-44 text-center"
              style={positions[index]}
            >
              <div className="w-14 h-14 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-base mx-auto mb-3 shadow-md">
                {step.number}
              </div>
              <h3 className="font-display font-semibold text-foreground text-sm leading-tight">
                {step.title}
              </h3>
              {step.subtitle && (
                <p className="text-xs text-primary/60 italic mt-0.5">{step.subtitle}</p>
              )}
              <p className="text-xs text-subtle mt-1 leading-relaxed">{step.description}</p>
            </div>
          ))}

          {/* Center label */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-24 h-24 rounded-full border-2 border-dashed border-primary/20 flex items-center justify-center mx-auto">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="text-primary/40">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z" fill="currentColor"/>
                <path d="M12 6l-1.5 4.5L6 12l4.5 1.5L12 18l1.5-4.5L18 12l-4.5-1.5z" fill="currentColor"/>
              </svg>
            </div>
            <p className="text-xs text-subtle mt-2 font-medium tracking-wide uppercase">Cyklus změny</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

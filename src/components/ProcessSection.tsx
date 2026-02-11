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

  // Pentagon points for 5 steps, starting from top, going clockwise
  // Angles: -90°, -18°, 54°, 126°, 198° (evenly spaced by 72°)
  const radius = 42; // % of container
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

  // SVG arrow between two points (midpoint arrow head)
  const renderArrow = (from: { x: number; y: number }, to: { x: number; y: number }, key: number) => {
    const midX = (from.x + to.x) / 2;
    const midY = (from.y + to.y) / 2;
    const angle = Math.atan2(to.y - from.y, to.x - from.x) * (180 / Math.PI);

    return (
      <g key={key}>
        <line
          x1={from.x}
          y1={from.y}
          x2={to.x}
          y2={to.y}
          stroke="hsl(var(--primary))"
          strokeWidth="0.4"
          strokeOpacity="0.25"
          strokeDasharray="1.5 1"
        />
        <g transform={`translate(${midX}, ${midY}) rotate(${angle})`}>
          <path
            d="M -1.8,-1.2 L 0,0 L -1.8,1.2"
            stroke="hsl(var(--primary))"
            strokeWidth="0.5"
            strokeOpacity="0.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </g>
      </g>
    );
  };

  return (
    <section id="jak-pracujeme" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="heading-lg mb-4 text-center">{t("process.title")}</h2>
        <p className="body-base text-subtle text-center mb-16 max-w-2xl mx-auto">
          {t("process.subtitle")}
        </p>

        {/* Mobile: vertical cycle */}
        <div className="md:hidden space-y-0">
          {steps.map((step, index) => (
            <div key={index} className="relative flex gap-5">
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
            </div>
          ))}
          <div className="flex items-center gap-5">
            <div className="flex flex-col items-center">
              <div className="w-11 h-11 rounded-full border-2 border-dashed border-primary/30 flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="text-primary/50">
                  <path d="M8 13V3M8 3L4 7M8 3L12 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </div>
            <p className="text-sm text-subtle italic">…a cyklus pokračuje</p>
          </div>
        </div>

        {/* Desktop: circular pentagon layout */}
        <div className="hidden md:block relative mx-auto" style={{ width: "700px", height: "700px" }}>
          {/* SVG for connecting lines & arrows */}
          <svg
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            {/* Lines connecting steps in order, plus last→first */}
            {points.map((point, i) => {
              const next = points[(i + 1) % points.length];
              return renderArrow(point, next, i);
            })}
          </svg>

          {/* Step cards */}
          {steps.map((step, index) => {
            const pos = points[index];
            return (
              <div
                key={index}
                className="absolute w-40 text-center"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
              >
                <div className="w-13 h-13 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-display font-bold text-sm mx-auto mb-2.5 shadow-md"
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
              </div>
            );
          })}

          {/* Center icon */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <div className="w-20 h-20 rounded-full border-2 border-dashed border-primary/15 flex items-center justify-center mx-auto">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-primary/30">
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p className="text-[0.65rem] text-subtle mt-1.5 font-medium tracking-wider uppercase">Cyklus změny</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

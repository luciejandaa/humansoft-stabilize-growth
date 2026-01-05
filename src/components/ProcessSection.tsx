const steps = [
  {
    number: "01",
    title: "Diagnostika & rozhovory",
    description: "poznáme lidi, vztahy a kontext",
  },
  {
    number: "02",
    title: "Návrh řešení & roadmapa",
    description: "konkrétní a proveditelný plán změny",
  },
  {
    number: "03",
    title: "Implementace v praxi",
    description: "se zapojením týmů, ne shora",
  },
  {
    number: "04",
    title: "Upevnění změny & měření dopadu",
    description: "změna se stává standardem",
  },
];

const ProcessSection = () => {
  return (
    <section id="jak-pracujeme" className="section-padding bg-secondary">
      <div className="section-container">
        <h2 className="heading-lg mb-16 text-center">Jak pracujeme</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="mb-4">
                <span className="font-display text-5xl font-light text-muted-foreground/30">
                  {step.number}
                </span>
              </div>
              <h3 className="heading-sm mb-3">{step.title}</h3>
              <p className="body-sm text-subtle">{step.description}</p>

              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-divider -translate-x-6" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

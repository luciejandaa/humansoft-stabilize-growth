import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import processImage from "@/assets/process-office.jpg.asset.json";

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

const ProcessPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <h1 className="heading-xl mb-16 text-center">Jak pracujeme</h1>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="mb-6">
                    <span className="font-display text-6xl font-bold text-muted-foreground/20">
                      {step.number}
                    </span>
                  </div>
                  <h2 className="heading-sm mb-3">{step.title}</h2>
                  <p className="body-sm text-subtle">{step.description}</p>

                  {/* Connector line for desktop - positioned below the number */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute top-[4.5rem] left-[4rem] w-[calc(100%+3rem-4rem)] h-px bg-border" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ProcessPage;

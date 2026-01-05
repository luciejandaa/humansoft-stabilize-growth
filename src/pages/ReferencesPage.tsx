import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    title: "Technologická firma, 150 zaměstnanců",
    type: "Restrukturalizace a procesní stabilizace",
    situation:
      "Rychlý růst vedl k chaosu v rolích a odpovědnostech. Tři oddělení pracovala paralelně na stejných úkolech.",
    approach:
      "Diagnostika stavu, návrh nové organizační struktury, facilitace přechodu s klíčovými stakeholdery.",
    result:
      "Jasná struktura týmů, redukce duplicit o 40%, zvýšení spokojenosti zaměstnanců.",
  },
  {
    title: "Výrobní podnik, rodinná firma",
    type: "Leadership development & nástupnictví",
    situation:
      "Generační výměna ve vedení, nejasná vize a napětí mezi starým a novým managementem.",
    approach:
      "Práce s oběma generacemi, facilitace strategických workshopů, koučování nového vedení.",
    result:
      "Hladký přechod vedení, nová strategická vize sdílená celým týmem.",
  },
  {
    title: "IT agentura, scale-up fáze",
    type: "Procesní architektura",
    situation:
      "Růst z 20 na 80 lidí během 2 let. Procesy neexistovaly, vše drželo na jednotlivcích.",
    approach:
      "Mapování klíčových procesů, standardizace workflow, zavedení dokumentace a onboardingu.",
    result:
      "Škálovatelné procesy, zkrácení onboardingu o 60%, stabilní operativa.",
  },
];

const ReferencesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            <h1 className="heading-xl mb-16 text-center">Reference</h1>

            <div className="space-y-12">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="grid lg:grid-cols-12 gap-8 pb-12 border-b border-divider last:border-b-0"
                >
                  <div className="lg:col-span-4">
                    <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                      {study.type}
                    </span>
                    <h2 className="heading-sm mt-2">{study.title}</h2>
                  </div>

                  <div className="lg:col-span-8 grid sm:grid-cols-3 gap-6">
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        Výchozí situace
                      </span>
                      <p className="body-sm text-subtle">{study.situation}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        Náš přístup
                      </span>
                      <p className="body-sm text-subtle">{study.approach}</p>
                    </div>
                    <div>
                      <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground block mb-2">
                        Výsledek
                      </span>
                      <p className="body-sm text-subtle">{study.result}</p>
                    </div>
                  </div>
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

export default ReferencesPage;

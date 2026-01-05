import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const services = [
  {
    title: "Restrukturalizace organizace a týmů",
    items: [
      "mapování současného stavu, rolí a odpovědností",
      "identifikace slabých míst a duplicit",
      "návrh nové struktury a rozhodovacích linií",
      "doprovod při zavádění změn do praxe",
    ],
  },
  {
    title: "Nastavení procesů a fungování firmy",
    items: [
      "standardizace workflow a komunikace",
      "jasně definované kompetence a zodpovědnosti",
      "procesní a provozní stabilizace",
      "předcházení chybám a provozním kolizím",
    ],
  },
  {
    title: "Rozvoj leadershipu a týmové spolupráce",
    items: [
      "práce s manažery a klíčovými lidmi",
      "posílení self-driven přístupu v týmech",
      "kultura spolupráce místo hašení požárů",
      "dlouhodobá udržitelnost změny",
    ],
  },
];

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding">
          <div className="section-container">
            <h1 className="heading-xl mb-16 text-center">Co děláme</h1>

            <div className="grid md:grid-cols-3 gap-12 lg:gap-16">
              {services.map((service, index) => (
                <div key={index} className="group">
                  <h2 className="heading-sm mb-6 pb-4 border-b border-divider">
                    {service.title}
                  </h2>
                  <ul className="space-y-3">
                    {service.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="body-sm text-subtle flex items-start"
                      >
                        <span className="w-1.5 h-1.5 bg-foreground rounded-full mt-2 mr-3 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Note */}
            <div className="mt-20 pt-12 border-t border-divider">
              <p className="body-lg text-center max-w-2xl mx-auto italic text-subtle">
                „Naším cílem není dodat dokument. Naším cílem je firma, která skutečně funguje."
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesPage;

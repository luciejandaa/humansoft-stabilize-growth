import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const WhyPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main className="pt-20">
        <section className="section-padding bg-secondary">
          <div className="section-container">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="heading-xl mb-8">
                Proč si firmy zvou HumanSoft.IT
              </h1>
              
              <p className="body-lg text-subtle">
                Když firma roste, tlak na lidi, procesy a vedení se násobí. 
                Co dříve fungovalo, přestává stačit — roste chaos, zmatek v kompetencích a únava týmů.
              </p>
              
              <p className="body-lg text-foreground mt-6 font-medium">
                My pomáháme tyto situace otočit v příležitost ke změně a stabilizaci.
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default WhyPage;

const values = ["Svoboda", "Smysl", "Osobní růst", "Práce", "Zábava & radost"];
import { Section } from "@/components/ui/section";

const PhilosophySection = () => {
  return (
    <Section>
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-8">Naše filozofie</h2>
          <p className="body-lg text-subtle mb-6">
            Věříme ve svět, kde se technická odbornost a lidské dovednosti vzájemně posilují.
          </p>
          <p className="body-lg text-foreground mb-12">
            Pomáháme firmám růst efektivně, smysluplně a udržitelně — bez obětí na lidské straně.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <span
                key={index}
                className="px-6 py-3 bg-card border border-border/60 rounded-xl text-sm font-medium tracking-wide glow-gold-hover hover:border-primary/30 transition-all duration-200"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default PhilosophySection;

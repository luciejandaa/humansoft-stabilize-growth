const values = ["Svoboda", "Smysl", "Osobní růst", "Práce", "Zábava & radost"];

const PhilosophySection = () => {
  return (
    <section className="section-padding">
      <div className="section-container">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="heading-lg mb-8">Naše filozofie</h2>

          <p className="body-lg text-subtle mb-6">
            Věříme ve svět, kde se technická odbornost a lidské dovednosti vzájemně posilují.
          </p>

          <p className="body-lg text-foreground mb-12">
            Pomáháme firmám růst efektivně, smysluplně a udržitelně — bez obětí na lidské straně.
          </p>

          {/* Values */}
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <span
                key={index}
                className="px-5 py-2 border border-divider text-sm font-medium tracking-wide"
              >
                {value}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhilosophySection;

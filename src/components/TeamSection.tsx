const teamMembers = [
  {
    name: "Jan Novák",
    role: "Senior Partner",
    focus: "Organizační design & strategie",
    description:
      "Specializuji se na komplexní transformace firem v růstové fázi. Přináším strukturovaný pohled na procesy a schopnost propojit strategii s operativou.",
  },
  {
    name: "Petra Svobodová",
    role: "Leadership Consultant",
    focus: "Rozvoj vedení & týmová dynamika",
    description:
      "Pracuji s lídry na budování jejich autentického stylu vedení. Do týmů přináším nástroje pro efektivní komunikaci a spolupráci.",
  },
  {
    name: "Martin Černý",
    role: "Process Architect",
    focus: "Procesní optimalizace & workflow",
    description:
      "Mapuji a navrhuji procesy, které skutečně fungují. Propojuji analytický přístup s praktickou implementací v reálném prostředí.",
  },
];

const TeamSection = () => {
  return (
    <section id="tym" className="section-padding bg-secondary">
      <div className="section-container">
        <div className="max-w-3xl mb-16">
          <h2 className="heading-lg mb-6">
            Jsme partneři změny — ne externí auditoři
          </h2>
          <p className="body-lg text-subtle">
            Do firem nepřicházíme „shora". Pracujeme s lidmi, nasloucháme kontextu a společně 
            s týmy hledáme řešení, která dávají smysl v praxi. Každý z nás přináší jinou 
            zkušenost — dohromady tvoříme kombinaci analytického pohledu, lidského přístupu 
            a tahouna změny.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-background p-8 border border-divider"
            >
              {/* Avatar placeholder */}
              <div className="w-20 h-20 bg-muted mb-6 flex items-center justify-center">
                <span className="font-display text-2xl text-muted-foreground">
                  {member.name.split(" ").map((n) => n[0]).join("")}
                </span>
              </div>

              <h3 className="heading-sm mb-1">{member.name}</h3>
              <p className="text-sm text-subtle mb-4">{member.role}</p>

              <div className="mb-4 pb-4 border-b border-divider">
                <span className="text-xs font-medium tracking-wider uppercase text-muted-foreground">
                  Zaměření
                </span>
                <p className="body-sm mt-1">{member.focus}</p>
              </div>

              <p className="body-sm text-subtle">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;

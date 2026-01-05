const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-divider">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-display text-lg font-semibold">
            HumanSoft.IT
          </div>
          
          <p className="text-sm text-subtle">
            © {currentYear} HumanSoft.IT. Všechna práva vyhrazena.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

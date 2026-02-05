import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoText from "@/assets/logo-text.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: "HumanSoft" },
    { href: "/hodnoceni", label: "Ohodnoťte svoji firmu" },
    { href: "/reference", label: "Reference" },
    { href: "/blog", label: "Blog" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-divider"
          : "bg-transparent"
      }`}
    >
      <div className="section-container">
        <div className="flex items-center justify-between h-24">
          {/* Logo */}
          <Link to="/" className="block">
            <img 
              src={logoText} 
              alt="HumanSoft.IT" 
              className="h-12 md:h-16 w-auto"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                className={`text-sm font-medium transition-colors duration-200 ${
                  location.pathname === link.href
                    ? "text-foreground"
                    : "text-subtle hover:text-foreground"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button variant="outline" size="sm" asChild>
              <Link to="/kontakt">Kontaktujte nás</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-6 border-t border-divider animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-left text-base font-medium transition-colors duration-200 py-2 ${
                    location.pathname === link.href
                      ? "text-foreground"
                      : "text-subtle hover:text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <Button variant="outline" className="mt-4 w-full" asChild>
                <Link to="/kontakt" onClick={() => setIsMobileMenuOpen(false)}>
                  Kontaktujte nás
                </Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

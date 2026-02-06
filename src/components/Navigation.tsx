import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import { Menu, X } from "lucide-react";
import logoText from "@/assets/logo-text.png";
import LanguageSwitcher from "./LanguageSwitcher";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "/", label: t("nav.home"), highlight: false },
    { href: "/hodnoceni", label: t("nav.evaluation"), highlight: true },
    { href: "/reference", label: t("nav.references"), highlight: false },
    { href: "/blog", label: t("nav.blog"), highlight: false },
    { href: "/kontakt", label: t("nav.contact"), highlight: false },
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
              link.highlight ? (
                <Button key={link.href} variant="default" size="sm" asChild>
                  <Link to={link.href}>{link.label}</Link>
                </Button>
              ) : (
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
              )
            ))}
            <LanguageSwitcher />
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
                link.highlight ? (
                  <Button key={link.href} variant="default" className="w-full" asChild>
                    <Link to={link.href} onClick={() => setIsMobileMenuOpen(false)}>
                      {link.label}
                    </Link>
                  </Button>
                ) : (
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
                )
              ))}
              <div className="flex items-center gap-4 mt-4">
                <LanguageSwitcher />
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;

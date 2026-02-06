import { useTranslation } from "react-i18next";
import logoIcon from "@/assets/logo-icon.png";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-divider">
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <img 
              src={logoIcon} 
              alt="HumanSoft.IT" 
              className="h-8 w-auto"
            />
            <span className="font-display text-lg font-bold tracking-tight">
              HumanSoft.IT
            </span>
          </div>
          
          <p className="text-sm text-subtle">
            © {currentYear} HumanSoft.IT. {t("footer.rights")}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

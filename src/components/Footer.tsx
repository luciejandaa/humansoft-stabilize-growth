import { useTranslation } from "react-i18next";
import logoIcon from "@/assets/logo-icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const foundedYear = 2023;

  return (
    <motion.footer 
      className="py-12 border-t border-border"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group">
            <img 
              src={logoIcon} 
              alt="HumanSoft.IT" 
              className="h-10 w-auto transition-transform duration-300 group-hover:scale-105 brightness-110"
            />
            <span className="font-display text-xl font-bold tracking-tight">
              HumanSoft.IT
            </span>
          </div>
          <p className="text-sm text-subtle">
            © {foundedYear} HumanSoft.IT. {t("footer.rights")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

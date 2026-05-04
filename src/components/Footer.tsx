import { useTranslation } from "react-i18next";
import logoIcon from "@/assets/logo-icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const foundedYear = 2023;

  return (
    <motion.footer 
      className="pt-20 pb-10"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      <div className="section-container">
        {/* Ornament divider */}
        <div className="divider-ornament mb-12">
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase">
            HumanSoft.IT
          </span>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-3 group">
            <img 
              src={logoIcon} 
              alt="HumanSoft.IT" 
              className="h-10 w-auto transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3 invert"
            />
            <span className="font-display text-xl font-semibold tracking-tight">
              HumanSoft.IT
            </span>
          </div>
          <p className="text-sm text-subtle font-mono">
            © {foundedYear} HumanSoft.IT · {t("footer.rights")}
          </p>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

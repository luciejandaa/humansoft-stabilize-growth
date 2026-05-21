import { useTranslation } from "react-i18next";
import logoIcon from "@/assets/logo-icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const foundedYear = 2023;

  return (
    <motion.footer
      className="mt-20 relative"
      style={{ background: "hsl(var(--primary-deep))", color: "hsl(var(--background))" }}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Hairline accent at top */}
      <div className="h-px w-full" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--primary)/0.5), transparent)" }} />

      <div className="section-container py-20">
        <div className="grid md:grid-cols-12 gap-10 items-start">
          <div className="md:col-span-7">
            <div className="flex items-center gap-3 mb-6">
              <img src={logoIcon} alt="HumanSoft.IT" className="h-9 w-auto invert" />
              <span className="font-display text-2xl font-semibold tracking-tight">
                HumanSoft.IT
              </span>
            </div>
            <p className="text-2xl md:text-3xl font-display font-semibold leading-tight max-w-xl mb-4">
              {t("footer.tagline")}
            </p>
            <p className="text-xs tracking-[0.16em] uppercase opacity-70">
              {t("footer.subtagline")}
            </p>
          </div>

          <div className="md:col-span-5 md:text-right">
            <div className="text-[11px] tracking-[0.18em] uppercase opacity-60 mb-2">
              © {foundedYear} HumanSoft.IT
            </div>
            <div className="text-[11px] tracking-[0.18em] uppercase opacity-60">
              {t("footer.rights")}
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

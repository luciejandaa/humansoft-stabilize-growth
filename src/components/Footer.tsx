import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";
import logoIcon from "@/assets/logo-icon.png";
import { motion } from "framer-motion";

const Footer = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  const email = t("contact.email");
  const phone = t("contact.phone");
  const mailtoHref = `mailto:${email}?subject=${encodeURIComponent(t("contact.mailSubject"))}`;
  const telHref = `tel:${phone.replace(/\s/g, "")}`;

  const navLinks = [
    { href: "/sluzby", label: t("nav.services") },
    { href: "/hodnoceni", label: t("nav.evaluation") },
    { href: "/reference", label: t("nav.references") },
    { href: "/tym", label: t("nav.team") },
    { href: "/kontakt", label: t("nav.contact") },
  ];

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
          <div className="md:col-span-6">
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

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase opacity-60 mb-4">
              {t("footer.navHeading")}
            </div>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    to={link.href}
                    className="text-sm opacity-80 hover:opacity-100 transition-opacity"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] tracking-[0.18em] uppercase opacity-60 mb-4">
              {t("footer.contactHeading")}
            </div>
            <ul className="space-y-3">
              <li>
                <a href={mailtoHref} className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Mail size={14} />
                  {email}
                </a>
              </li>
              <li>
                <a href={telHref} className="inline-flex items-center gap-2 text-sm opacity-80 hover:opacity-100 transition-opacity">
                  <Phone size={14} />
                  {phone}
                </a>
              </li>
              <li>
                <span className="inline-flex items-center gap-2 text-sm opacity-80">
                  <MapPin size={14} />
                  {t("contact.location")}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-2">
          <div className="text-[11px] tracking-[0.18em] uppercase opacity-60">
            © {currentYear} HumanSoft.IT
          </div>
          <div className="text-[11px] tracking-[0.18em] uppercase opacity-60">
            {t("footer.rights")}
          </div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;

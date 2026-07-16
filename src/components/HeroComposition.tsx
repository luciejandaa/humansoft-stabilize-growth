import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * Warm, organic hero visual. Concept words float loosely around "Smysl"
 * like hand-placed notes rather than nodes on a wired network — the
 * previous version read as a circuit board, which is exactly the "IT"
 * association HumanSoft.IT wants to avoid despite the name.
 */
const ACCENTS = ["coral", "petrol", "mustard"] as const;

const accentClasses: Record<(typeof ACCENTS)[number], string> = {
  coral: "bg-primary/12 text-foreground border-primary/30",
  petrol: "bg-brand-petrol/10 text-brand-petrol border-brand-petrol/25",
  mustard: "bg-brand-lime/15 text-[hsl(30_60%_28%)] border-brand-lime/35",
};

const positions = [
  { top: "8%", left: "10%", rotate: -7 },
  { top: "4%", left: "62%", rotate: 5 },
  { top: "38%", left: "84%", rotate: -4 },
  { top: "78%", left: "68%", rotate: 6 },
  { top: "82%", left: "14%", rotate: -5 },
  { top: "42%", left: "0%", rotate: 4 },
];

const HeroComposition = () => {
  const { t } = useTranslation();
  const words = t("hero.circuit.nodes", { returnObjects: true }) as string[];
  const centerWord = t("hero.circuit.center");

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      {/* Soft organic blobs, drifting */}
      <div
        className="absolute top-[6%] left-[8%] w-40 h-40 bg-primary/20 animate-blob"
        style={{ borderRadius: "60% 40% 50% 50% / 50% 60% 40% 50%", filter: "blur(28px)" }}
      />
      <div
        className="absolute bottom-[10%] right-[6%] w-48 h-48 bg-brand-petrol/15 animate-blob"
        style={{ borderRadius: "50% 50% 30% 70% / 40% 60% 50% 60%", filter: "blur(32px)", animationDelay: "-6s" }}
      />
      <div
        className="absolute top-[38%] right-[18%] w-28 h-28 bg-brand-lime/25 animate-blob"
        style={{ borderRadius: "40% 60% 60% 40% / 60% 30% 70% 40%", filter: "blur(20px)", animationDelay: "-11s" }}
      />

      {/* Centre — Smysl, the binding idea */}
      <motion.div
        className="absolute left-[42%] top-[44%] -translate-x-1/2 -translate-y-1/2 z-10"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div
          className="flex items-center justify-center px-8 py-6 bg-primary text-primary-foreground text-center glow-emerald"
          style={{ borderRadius: "42% 58% 55% 45% / 48% 42% 58% 52%" }}
        >
          <span
            className="font-display font-semibold"
            style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)", letterSpacing: "-0.02em" }}
          >
            {centerWord}
          </span>
        </div>
      </motion.div>

      {/* Scattered concept words */}
      {words.map((label, i) => {
        const pos = positions[i % positions.length];
        const accent = ACCENTS[i % ACCENTS.length];
        return (
          <motion.div
            key={label}
            className="absolute"
            style={{ top: pos.top, left: pos.left }}
            initial={{ opacity: 0, scale: 0.6, rotate: pos.rotate - 10 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotate: pos.rotate,
              y: [0, -8, 0],
            }}
            transition={{
              opacity: { duration: 0.5, delay: 0.9 + i * 0.12 },
              scale: { duration: 0.5, delay: 0.9 + i * 0.12, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 4 + i * 0.4, delay: 1.4 + i * 0.12, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <span
              className={`inline-block px-4 py-2 border font-display font-medium text-sm md:text-base whitespace-nowrap ${accentClasses[accent]}`}
              style={{ borderRadius: "999px" }}
            >
              {label}
            </span>
          </motion.div>
        );
      })}
    </div>
  );
};

export default HeroComposition;

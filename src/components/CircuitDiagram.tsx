import { motion } from "framer-motion";

/**
 * Editorial "human composition" for the hero — replaces the old technical
 * circuit diagram. A calm stacked typographic composition: keywords from
 * the consulting language sit on a warm disc, one word highlighted in lime.
 * No nodes, no mono labels, no grid — reads as a studio, not an IT system.
 */
const HumanComposition = () => {
  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <svg viewBox="0 0 520 520" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="creamWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(60 11% 90%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(60 11% 96%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="petrolWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(182 82% 18%)" stopOpacity="0.18" />
            <stop offset="100%" stopColor="hsl(182 82% 18%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Warm canvas disc */}
        <motion.circle
          cx="260" cy="260" r="240"
          fill="url(#creamWash)"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Petrol depth disc — offset for asymmetry */}
        <motion.circle
          cx="190" cy="210" r="170"
          fill="url(#petrolWash)"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Stacked keyword composition — centred, editorial rhythm */}
        {/* Lidé */}
        <motion.text
          x="260" y="170" textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "44px", fontWeight: 500, letterSpacing: "-0.025em", opacity: 0.85 }}
          initial={{ opacity: 0, y: 178 }}
          animate={{ opacity: 0.85, y: 170 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          Lidé
        </motion.text>

        {/* Strategie */}
        <motion.text
          x="260" y="225" textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "38px", fontWeight: 500, letterSpacing: "-0.025em", opacity: 0.8 }}
          initial={{ opacity: 0, y: 233 }}
          animate={{ opacity: 0.8, y: 225 }}
          transition={{ duration: 0.7, delay: 0.62, ease: [0.22, 1, 0.36, 1] }}
        >
          Strategie
        </motion.text>

        {/* Smysl — accented word with lime highlighter behind it */}
        <motion.rect
          x="170" y="263" width="180" height="34" rx="4"
          fill="hsl(var(--primary))"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "170px 280px" }}
        />
        <motion.text
          x="260" y="293" textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "46px", fontWeight: 600, letterSpacing: "-0.03em" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.74 }}
        >
          Smysl
        </motion.text>

        {/* Procesy */}
        <motion.text
          x="260" y="345" textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "34px", fontWeight: 500, letterSpacing: "-0.025em", opacity: 0.8 }}
          initial={{ opacity: 0, y: 353 }}
          animate={{ opacity: 0.8, y: 345 }}
          transition={{ duration: 0.7, delay: 0.86, ease: [0.22, 1, 0.36, 1] }}
        >
          Procesy
        </motion.text>

        {/* Růst */}
        <motion.text
          x="260" y="395" textAnchor="middle"
          className="fill-foreground"
          style={{ fontFamily: "var(--font-display)", fontSize: "40px", fontWeight: 500, fontStyle: "italic", letterSpacing: "-0.025em", opacity: 0.85 }}
          initial={{ opacity: 0, y: 403 }}
          animate={{ opacity: 0.85, y: 395 }}
          transition={{ duration: 0.7, delay: 0.98, ease: [0.22, 1, 0.36, 1] }}
        >
          Růst
        </motion.text>

        {/* Thin editorial underline — a single calm gesture */}
        <motion.line
          x1="200" y1="430" x2="320" y2="430"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.35"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1, delay: 1.2, ease: "easeOut" }}
        />

        {/* Signature dot */}
        <motion.circle
          cx="260" cy="455" r="4"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
};

export default HumanComposition;

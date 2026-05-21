import { motion } from "framer-motion";

/**
 * Editorial "human composition" for the hero — replaces the old technical
 * circuit diagram. A calm stacked typographic composition: keywords from
 * the consulting language sit on a warm disc, one word highlighted in lime.
 * No nodes, no mono labels, no grid — reads as a studio, not an IT system.
 *
 * NOTE: framer-motion treats `y` on motion.* as a CSS transform, which
 * conflicts with SVG's `y` attribute. We animate ONLY opacity on text
 * elements to avoid them flying off-canvas.
 */
const HumanComposition = () => {
  const words = [
    { label: "Lidé",     y: 150, size: 44, weight: 500, italic: false, opacity: 0.85, delay: 0.5 },
    { label: "Strategie", y: 205, size: 36, weight: 500, italic: false, opacity: 0.8,  delay: 0.62 },
    // Smysl rendered separately (with highlighter) at y ≈ 280
    { label: "Procesy",   y: 340, size: 32, weight: 500, italic: false, opacity: 0.8,  delay: 0.86 },
    { label: "Růst",      y: 395, size: 40, weight: 500, italic: true,  opacity: 0.85, delay: 0.98 },
  ];

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <svg viewBox="0 0 520 520" className="w-full h-full">
        <defs>
          <radialGradient id="creamWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(60 11% 88%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(60 11% 96%)" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="petrolWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(182 82% 18%)" stopOpacity="0.20" />
            <stop offset="100%" stopColor="hsl(182 82% 18%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Warm canvas disc */}
        <motion.circle
          cx="260" cy="260" r="230"
          fill="url(#creamWash)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Petrol depth disc — offset for asymmetry */}
        <motion.circle
          cx="200" cy="220" r="170"
          fill="url(#petrolWash)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Stacked keyword composition */}
        {words.map((w) => (
          <motion.text
            key={w.label}
            x="260"
            y={w.y}
            textAnchor="middle"
            className="fill-foreground"
            style={{
              fontFamily: "var(--font-display)",
              fontSize: `${w.size}px`,
              fontWeight: w.weight,
              fontStyle: w.italic ? "italic" : "normal",
              letterSpacing: "-0.025em",
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: w.opacity }}
            transition={{ duration: 0.7, delay: w.delay, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.label}
          </motion.text>
        ))}

        {/* Smysl — accented word with lime highlighter behind it */}
        <motion.rect
          x="178" y="252" width="164" height="30" rx="3"
          fill="hsl(var(--primary))"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 1.0, ease: [0.22, 1, 0.36, 1] }}
        />
        <motion.text
          x="260" y="280"
          textAnchor="middle"
          className="fill-foreground"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "44px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.74 }}
        >
          Smysl
        </motion.text>

        {/* Thin editorial underline */}
        <motion.line
          x1="210" y1="435" x2="310" y2="435"
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
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
        />
      </svg>
    </div>
  );
};

export default HumanComposition;

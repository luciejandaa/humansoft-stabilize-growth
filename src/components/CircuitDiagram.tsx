import { motion } from "framer-motion";

/**
 * Editorial "human composition" — replaces the technical circuit diagram.
 * Soft overlapping discs in brand colours with a few keywords from the
 * consulting language (Lidé · Strategie · Smysl · Růst). No nodes, no mono
 * labels, no version stamps — reads as a studio composition, not an IT system.
 */
const HumanComposition = () => {
  const words = [
    { label: "Lidé",       x: 165, y: 150, size: 34, weight: 500 },
    { label: "Strategie",  x: 340, y: 215, size: 30, weight: 500 },
    { label: "Smysl",      x: 215, y: 305, size: 38, weight: 600, accent: true },
    { label: "Procesy",    x: 380, y: 360, size: 22, weight: 500 },
    { label: "Růst",       x: 140, y: 410, size: 26, weight: 500 },
    { label: "Odpovědnost",x: 320, y: 470, size: 20, weight: 500 },
  ];

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square">
      <svg viewBox="0 0 520 560" className="w-full h-full">
        <defs>
          <radialGradient id="petrolWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(var(--primary-deep))" stopOpacity="0.10" />
            <stop offset="100%" stopColor="hsl(var(--primary-deep))" stopOpacity="0" />
          </radialGradient>
          <radialGradient id="creamWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(60 11% 92%)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(60 11% 96%)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Soft warm disc — the canvas of the company */}
        <motion.circle
          cx="270" cy="290" r="240"
          fill="url(#creamWash)"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Petrol depth disc */}
        <motion.circle
          cx="200" cy="240" r="170"
          fill="url(#petrolWash)"
          initial={{ scale: 0.85, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Lime highlighter — the "active" idea */}
        <motion.ellipse
          cx="220" cy="298" rx="120" ry="22"
          fill="hsl(var(--primary))"
          opacity="0.85"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 0.85 }}
          transition={{ duration: 0.9, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: "100px 298px" }}
        />

        {/* Thin editorial arc — a single calm gesture */}
        <motion.path
          d="M 70 360 Q 270 470 460 320"
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.35"
          strokeWidth="1"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 1.6, delay: 0.4, ease: "easeOut" }}
        />

        {/* Keyword composition */}
        {words.map((w, i) => (
          <motion.text
            key={w.label}
            x={w.x}
            y={w.y}
            className={w.accent ? "fill-foreground" : "fill-foreground"}
            style={{
              fontFamily: "var(--font-display)",
              fontSize: `${w.size}px`,
              fontWeight: w.weight,
              letterSpacing: "-0.02em",
            }}
            initial={{ opacity: 0, y: w.y + 8 }}
            animate={{ opacity: w.accent ? 1 : 0.85, y: w.y }}
            transition={{ duration: 0.7, delay: 0.5 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
          >
            {w.label}
          </motion.text>
        ))}

        {/* Small signature dot */}
        <motion.circle
          cx="430" cy="120" r="5"
          fill="hsl(var(--primary))"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
        />
      </svg>
    </div>
  );
};

export default HumanComposition;

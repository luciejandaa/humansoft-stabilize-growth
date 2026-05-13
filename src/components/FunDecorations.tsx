import { motion } from "framer-motion";

/**
 * Background canvas — "inner circuit" of the company.
 * Quiet hairline grid + a few drifting lime / petrol nodes connected
 * by long thin lines. Avoids blobs, gradients, anything pastel.
 */
const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Hairline grid */}
      <div
        className="absolute inset-0 opacity-[0.045]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Subtle radial lift behind hero */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1100px] h-[600px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(73 100% 80% / 0.18), transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Long drifting hairlines — like nervous system / circuit traces */}
      <svg
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="none"
        viewBox="0 0 1440 900"
      >
        <g
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.07"
          strokeWidth="1"
          fill="none"
        >
          <path d="M -50 220 Q 360 180 720 280 T 1500 240" />
          <path d="M -50 540 Q 400 620 820 520 T 1500 600" strokeDasharray="4 6" />
          <path d="M 200 -50 Q 280 320 520 480 T 720 950" strokeOpacity="0.05" />
          <path d="M 1200 -50 Q 1100 320 980 520 T 900 950" strokeOpacity="0.05" />
        </g>

        {/* Petrol accents */}
        <g stroke="hsl(var(--primary-deep))" strokeOpacity="0.18" strokeWidth="1" fill="none">
          <path d="M 100 760 L 360 720 L 540 760" />
          <path d="M 1340 140 L 1180 200 L 1020 160" />
        </g>

        {/* Lime active nodes */}
        <g fill="hsl(var(--primary))">
          <motion.circle
            cx="360" cy="180" r="3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="1180" cy="200" r="3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
          />
          <motion.circle
            cx="540" cy="760" r="3"
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.6 }}
          />
        </g>
      </svg>
    </div>
  );
};

export default FunDecorations;

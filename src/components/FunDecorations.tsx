import { motion } from "framer-motion";

const FunDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Large dashed circle - top right, elegant */}
      <motion.div
        className="absolute w-36 h-36 md:w-52 md:h-52 rounded-full"
        style={{
          border: "2px dashed hsl(var(--accent) / 0.3)",
          right: "2%",
          top: "4%",
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      />

      {/* Subtle solid circle - left */}
      <motion.div
        className="absolute w-16 h-16 md:w-24 md:h-24 rounded-full"
        style={{
          backgroundColor: "hsl(var(--accent) / 0.08)",
          left: "5%",
          top: "30%",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Thin ring - bottom left */}
      <motion.div
        className="absolute w-28 h-28 md:w-40 md:h-40 rounded-full"
        style={{
          border: "1.5px solid hsl(var(--primary) / 0.15)",
          left: "8%",
          bottom: "10%",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Diagonal line cluster - top left */}
      <svg
        className="absolute hidden md:block"
        style={{ left: "10%", top: "8%", width: "80px", height: "80px", opacity: 0.2 }}
        viewBox="0 0 80 80"
        fill="none"
      >
        <line x1="5" y1="75" x2="75" y2="5" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <line x1="15" y1="75" x2="75" y2="15" stroke="hsl(var(--accent))" strokeWidth="1.5" />
        <line x1="25" y1="75" x2="75" y2="25" stroke="hsl(var(--accent))" strokeWidth="1.5" />
      </svg>

      {/* Cross / plus - refined */}
      <motion.svg
        className="absolute"
        style={{ left: "32%", top: "6%", width: "20px", height: "20px", opacity: 0.25 }}
        viewBox="0 0 20 20"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="10" y1="2" x2="10" y2="18" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
        <line x1="2" y1="10" x2="18" y2="10" stroke="hsl(var(--primary))" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Dotted arc - right side, elegant curve */}
      <svg
        className="absolute hidden md:block"
        style={{ right: "5%", bottom: "20%", width: "120px", height: "80px", opacity: 0.2 }}
        viewBox="0 0 120 80"
        fill="none"
      >
        <path
          d="M10 65 C30 10, 90 10, 110 65"
          stroke="hsl(var(--primary))"
          strokeWidth="1.5"
          strokeDasharray="4 8"
          strokeLinecap="round"
        />
      </svg>

      {/* Small diamond shape - right */}
      <motion.svg
        className="absolute"
        style={{ right: "15%", top: "35%", width: "24px", height: "24px" }}
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 180, 360], scale: [0.9, 1.05, 0.9] }}
        transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="12,2 22,12 12,22 2,12"
          stroke="hsl(var(--accent))"
          strokeWidth="1.5"
          fill="hsl(var(--accent) / 0.08)"
        />
      </motion.svg>

      {/* Concentric dashed circles - decorative, right */}
      <motion.svg
        className="absolute hidden md:block"
        style={{ right: "3%", top: "50%", width: "70px", height: "70px" }}
        viewBox="0 0 70 70"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="35" cy="35" r="28" stroke="hsl(var(--primary) / 0.12)" strokeWidth="1.5" strokeDasharray="3 6" fill="none" />
        <circle cx="35" cy="35" r="17" stroke="hsl(var(--accent) / 0.15)" strokeWidth="1.5" strokeDasharray="2 5" fill="none" />
      </motion.svg>

      {/* Small triangle - geometric accent */}
      <motion.svg
        className="absolute"
        style={{ left: "72%", top: "10%", width: "22px", height: "22px" }}
        viewBox="0 0 22 22"
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="11,2 20,19 2,19"
          stroke="hsl(var(--accent) / 0.3)"
          strokeWidth="1.5"
          fill="none"
        />
      </motion.svg>

      {/* Accent dots - intentionally placed, not random */}
      {[
        { x: "20%", y: "62%", size: 6 },
        { x: "78%", y: "28%", size: 5 },
        { x: "55%", y: "82%", size: 7 },
        { x: "88%", y: "65%", size: 5 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: i % 2 === 0 ? "hsl(var(--accent) / 0.2)" : "hsl(var(--primary) / 0.15)",
          }}
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: i * 1.2 }}
        />
      ))}

      {/* Horizontal line accent - bottom */}
      <svg
        className="absolute hidden md:block"
        style={{ left: "25%", bottom: "8%", width: "100px", height: "10px", opacity: 0.15 }}
        viewBox="0 0 100 10"
        fill="none"
      >
        <line x1="0" y1="5" x2="40" y2="5" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
        <line x1="50" y1="5" x2="70" y2="5" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
        <line x1="80" y1="5" x2="100" y2="5" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
      </svg>
    </div>
  );
};

export default FunDecorations;

import { motion } from "framer-motion";

const FunDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Solid circle - top right, large accent */}
      <motion.div
        className="absolute w-20 h-20 md:w-32 md:h-32 rounded-full"
        style={{
          backgroundColor: "hsl(var(--accent) / 0.12)",
          right: "4%",
          top: "6%",
        }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Solid small circle - left side */}
      <motion.div
        className="absolute w-10 h-10 md:w-16 md:h-16 rounded-full"
        style={{
          backgroundColor: "hsl(var(--primary) / 0.1)",
          left: "6%",
          top: "25%",
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Solid diamond - right mid */}
      <motion.svg
        className="absolute"
        style={{ right: "12%", top: "38%", width: "28px", height: "28px" }}
        viewBox="0 0 28 28"
        animate={{ rotate: [0, 90, 0], scale: [0.95, 1.05, 0.95] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon
          points="14,2 26,14 14,26 2,14"
          fill="hsl(var(--accent) / 0.18)"
        />
      </motion.svg>

      {/* Solid rounded square - bottom left */}
      <motion.div
        className="absolute w-12 h-12 md:w-20 md:h-20 rounded-xl"
        style={{
          backgroundColor: "hsl(var(--accent) / 0.1)",
          left: "8%",
          bottom: "14%",
        }}
        animate={{ rotate: [0, 15, -15, 0], scale: [1, 1.05, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Solid triangle - top area */}
      <motion.svg
        className="absolute hidden md:block"
        style={{ left: "30%", top: "5%", width: "24px", height: "24px" }}
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        <polygon
          points="12,3 21,20 3,20"
          fill="hsl(var(--primary) / 0.12)"
        />
      </motion.svg>

      {/* Solid pill / capsule shape - right bottom */}
      <motion.div
        className="absolute w-8 h-16 md:w-10 md:h-24 rounded-full"
        style={{
          backgroundColor: "hsl(var(--primary) / 0.08)",
          right: "6%",
          bottom: "22%",
        }}
        animate={{ rotate: [20, -20, 20] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Solid small circle cluster - bottom right, gives rhythm */}
      <motion.div
        className="absolute w-6 h-6 md:w-8 md:h-8 rounded-full"
        style={{
          backgroundColor: "hsl(var(--accent) / 0.15)",
          right: "18%",
          bottom: "8%",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-4 h-4 md:w-5 md:h-5 rounded-full"
        style={{
          backgroundColor: "hsl(var(--primary) / 0.12)",
          right: "22%",
          bottom: "12%",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />

      {/* Solid plus/cross shape - left upper area */}
      <motion.svg
        className="absolute"
        style={{ left: "18%", top: "60%", width: "22px", height: "22px" }}
        viewBox="0 0 22 22"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      >
        <rect x="8" y="2" width="6" height="18" rx="3" fill="hsl(var(--accent) / 0.15)" />
        <rect x="2" y="8" width="18" height="6" rx="3" fill="hsl(var(--accent) / 0.15)" />
      </motion.svg>

      {/* Large solid circle - very subtle, background depth */}
      <div
        className="absolute w-48 h-48 md:w-72 md:h-72 rounded-full hidden md:block"
        style={{
          backgroundColor: "hsl(var(--accent) / 0.04)",
          left: "-3%",
          top: "50%",
          transform: "translateY(-50%)",
        }}
      />

      {/* Solid hexagon-like shape - top center-right */}
      <motion.svg
        className="absolute hidden md:block"
        style={{ left: "65%", top: "8%", width: "30px", height: "30px" }}
        viewBox="0 0 30 30"
        animate={{ rotate: [0, 60, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon
          points="15,2 27,8 27,22 15,28 3,22 3,8"
          fill="hsl(var(--accent) / 0.12)"
        />
      </motion.svg>
    </div>
  );
};

export default FunDecorations;

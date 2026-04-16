import { motion } from "framer-motion";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";

/** Standalone sparkle/decoration layer — meant to be placed inside each section or page.
 *  Uses `fixed`-like tricks so decorations spread across the full viewport even on long pages.
 */
const FunDecorations = () => {
  return (
    <>
      {/* Fixed-position layer that stays visible across the entire page */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

        {/* === SPARKLE PARTICLES — scattered across viewport === */}
        {[
          { left: "5%", top: "12%", delay: 0, size: 3 },
          { left: "92%", top: "8%", delay: 2, size: 2.5 },
          { left: "88%", top: "55%", delay: 4, size: 2.5 },
          { left: "7%", top: "70%", delay: 1.5, size: 2 },
          { left: "50%", top: "5%", delay: 3, size: 2 },
          { left: "95%", top: "35%", delay: 5, size: 2 },
          { left: "3%", top: "45%", delay: 2.5, size: 1.5 },
          { left: "45%", top: "92%", delay: 6, size: 2 },
          { left: "75%", top: "85%", delay: 1, size: 2.5 },
          { left: "20%", top: "88%", delay: 3.5, size: 2 },
          { left: "60%", top: "50%", delay: 7, size: 1.5 },
          { left: "35%", top: "30%", delay: 4.5, size: 2 },
        ].map((spark, i) => (
          <motion.div
            key={`sparkle-${i}`}
            className="absolute rounded-full"
            style={{
              left: spark.left,
              top: spark.top,
              width: spark.size,
              height: spark.size,
              background: goldLight,
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.5, 1.3, 0.5],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: spark.delay,
              ease: "easeInOut",
            }}
          />
        ))}

        {/* === ANIMATED GOLD STRIPE — left === */}
        <motion.div
          className="absolute left-0 top-[35%] h-px w-[200px] opacity-[0.12]"
          style={{ background: `linear-gradient(90deg, transparent, ${goldLight}, ${gold}, transparent)` }}
          animate={{ x: [-80, 30, -80], opacity: [0.06, 0.14, 0.06] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* === ANIMATED GOLD STRIPE — right === */}
        <motion.div
          className="absolute right-0 top-[68%] h-px w-[160px] opacity-[0.1]"
          style={{ background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, transparent)` }}
          animate={{ x: [60, -20, 60], opacity: [0.05, 0.12, 0.05] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* === VERTICAL ACCENT — right side === */}
        <motion.div
          className="absolute right-[12%] top-[18%] w-px h-[80px] opacity-[0.06]"
          style={{ background: `linear-gradient(180deg, transparent, ${gold}, transparent)` }}
          animate={{ y: [-8, 8, -8], opacity: [0.03, 0.07, 0.03] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* === ROTATING DASHED RING — right === */}
        <motion.svg
          className="absolute right-[8%] top-[50%] w-24 h-24 opacity-[0.04]"
          viewBox="0 0 96 96"
          animate={{ rotate: [0, 360] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="48" cy="48" r="42" fill="none" stroke={gold} strokeWidth="0.8" strokeDasharray="6 10" />
          <circle cx="48" cy="48" r="30" fill="none" stroke={goldLight} strokeWidth="0.4" strokeDasharray="3 12" />
        </motion.svg>

        {/* === ROTATING DASHED RING — left bottom === */}
        <motion.svg
          className="absolute left-[6%] top-[78%] w-16 h-16 opacity-[0.05]"
          viewBox="0 0 60 60"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
        >
          <circle cx="30" cy="30" r="25" fill="none" stroke={gold} strokeWidth="0.6" strokeDasharray="4 8" />
        </motion.svg>

        {/* === ROTATING DIAMOND === */}
        <motion.svg
          className="absolute left-[14%] top-[22%] w-5 h-5 opacity-[0.07]"
          viewBox="0 0 24 24"
          animate={{ rotate: [0, 180, 360] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        >
          <polygon points="12,2 22,12 12,22 2,12" fill={gold} />
        </motion.svg>

        {/* === CROSS / STAR === */}
        <motion.svg
          className="absolute left-[52%] top-[6%] w-4 h-4 opacity-[0.06]"
          viewBox="0 0 20 20"
          animate={{ rotate: [0, 90, 0], scale: [1, 1.2, 1] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          <line x1="10" y1="2" x2="10" y2="18" stroke={goldLight} strokeWidth="1" />
          <line x1="2" y1="10" x2="18" y2="10" stroke={goldLight} strokeWidth="1" />
        </motion.svg>

        {/* === SMALL TRIANGLE — floating === */}
        <motion.svg
          className="absolute left-[30%] top-[60%] w-4 h-4 opacity-[0.05]"
          viewBox="0 0 16 16"
          animate={{ y: [-3, 4, -3], rotate: [0, 15, 0] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="8,1 15,14 1,14" fill="none" stroke={gold} strokeWidth="0.8" />
        </motion.svg>

        <motion.svg
          className="absolute right-[22%] top-[28%] w-3 h-3 opacity-[0.04]"
          viewBox="0 0 16 16"
          animate={{ y: [2, -4, 2], rotate: [0, -20, 0] }}
          transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
        >
          <polygon points="8,1 15,14 1,14" fill={gold} />
        </motion.svg>
      </div>

      {/* Scroll-relative layer for decorations tied to content position */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
        {/* === DIAGONAL LINES — top right === */}
        <svg className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
          {Array.from({ length: 12 }).map((_, i) => (
            <line key={`tr-${i}`} x1={80 + i * 30} y1={0} x2={0} y2={80 + i * 30} stroke={gold} strokeWidth="0.5" />
          ))}
        </svg>

        {/* === CONCENTRIC ARCS — bottom left === */}
        <svg className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.05]" viewBox="0 0 300 300">
          {Array.from({ length: 5 }).map((_, i) => (
            <circle key={`bl-${i}`} cx={0} cy={300} r={60 + i * 50} fill="none" stroke={gold} strokeWidth="0.5" />
          ))}
        </svg>

        {/* === DIAGONAL LINES — bottom right === */}
        <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03]" viewBox="0 0 260 260">
          {Array.from({ length: 8 }).map((_, i) => (
            <line key={`br-${i}`} x1={260} y1={60 + i * 28} x2={60 + i * 28} y2={260} stroke={gold} strokeWidth="0.5" />
          ))}
        </svg>

        {/* === DOT GRID — right side === */}
        <motion.svg
          className="absolute right-8 top-[25%] w-32 h-32 opacity-[0.05]"
          viewBox="0 0 120 120"
          animate={{ y: [-5, 5, -5] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        >
          {Array.from({ length: 5 }).map((_, row) =>
            Array.from({ length: 5 }).map((_, col) => (
              <circle key={`dot-${row}-${col}`} cx={12 + col * 24} cy={12 + row * 24} r="1.5" fill={gold} />
            ))
          )}
        </motion.svg>

        {/* === LARGE RADIAL GLOW — center top === */}
        <div
          className="absolute w-[700px] h-[700px] rounded-full opacity-[0.025]"
          style={{
            background: `radial-gradient(circle, ${gold}, transparent 70%)`,
            left: "50%",
            top: "30%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* === SECONDARY GLOW — bottom === */}
        <div
          className="absolute w-[500px] h-[500px] rounded-full opacity-[0.02]"
          style={{
            background: `radial-gradient(circle, ${goldLight}, transparent 60%)`,
            left: "20%",
            top: "70%",
            transform: "translate(-50%, -50%)",
          }}
        />
      </div>
    </>
  );
};

export default FunDecorations;

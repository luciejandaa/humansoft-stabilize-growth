import { motion } from "framer-motion";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";

const FunDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>

      {/* === DIAGONAL LINE GRID — top right === */}
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

      {/* === FLOATING DOT GRID — right === */}
      <motion.svg
        className="absolute right-8 top-1/3 w-32 h-32 opacity-[0.06]"
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

      {/* === ANIMATED GOLD STRIPE — horizontal, left side === */}
      <motion.div
        className="absolute left-0 top-[38%] h-px w-[220px] opacity-[0.12]"
        style={{ background: `linear-gradient(90deg, transparent, ${goldLight}, ${gold}, transparent)` }}
        animate={{ x: [-60, 20, -60], opacity: [0.08, 0.14, 0.08] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === ANIMATED GOLD STRIPE — horizontal, right side === */}
      <motion.div
        className="absolute right-0 top-[72%] h-px w-[180px] opacity-[0.1]"
        style={{ background: `linear-gradient(90deg, transparent, ${gold}, ${goldLight}, transparent)` }}
        animate={{ x: [40, -20, 40], opacity: [0.06, 0.12, 0.06] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === SPARKLE PARTICLES === */}
      {[
        { left: "12%", top: "15%", delay: 0, size: 3 },
        { left: "85%", top: "25%", delay: 2, size: 2 },
        { left: "78%", top: "60%", delay: 4, size: 2.5 },
        { left: "20%", top: "75%", delay: 1.5, size: 2 },
        { left: "55%", top: "10%", delay: 3, size: 1.5 },
        { left: "92%", top: "45%", delay: 5, size: 2 },
        { left: "8%", top: "50%", delay: 2.5, size: 1.5 },
        { left: "45%", top: "85%", delay: 6, size: 2 },
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
            opacity: [0, 0.4, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            delay: spark.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === ROTATING DIAMOND — left === */}
      <motion.svg
        className="absolute left-[15%] top-[20%] w-6 h-6 opacity-[0.08]"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="12,2 22,12 12,22 2,12" fill={gold} />
      </motion.svg>

      {/* === GOLD RING — right middle === */}
      <motion.svg
        className="absolute right-[10%] top-[55%] w-20 h-20 opacity-[0.05]"
        viewBox="0 0 80 80"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="40" cy="40" r="35" fill="none" stroke={gold} strokeWidth="0.8" strokeDasharray="6 8" />
        <circle cx="40" cy="40" r="25" fill="none" stroke={goldLight} strokeWidth="0.4" strokeDasharray="3 10" />
      </motion.svg>

      {/* === GOLD RING — left bottom === */}
      <motion.svg
        className="absolute left-[5%] top-[80%] w-16 h-16 opacity-[0.06]"
        viewBox="0 0 60 60"
        animate={{ rotate: [360, 0] }}
        transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="30" cy="30" r="25" fill="none" stroke={gold} strokeWidth="0.6" strokeDasharray="4 6" />
      </motion.svg>

      {/* === CROSS / STAR — top center === */}
      <motion.svg
        className="absolute left-[48%] top-[8%] w-5 h-5 opacity-[0.07]"
        viewBox="0 0 20 20"
        animate={{ rotate: [0, 90, 0], scale: [1, 1.15, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        <line x1="10" y1="2" x2="10" y2="18" stroke={goldLight} strokeWidth="1" />
        <line x1="2" y1="10" x2="18" y2="10" stroke={goldLight} strokeWidth="1" />
      </motion.svg>

      {/* === VERTICAL GOLD ACCENT LINE — right === */}
      <motion.div
        className="absolute right-[18%] top-[15%] w-px h-[100px] opacity-[0.06]"
        style={{ background: `linear-gradient(180deg, transparent, ${gold}, transparent)` }}
        animate={{ y: [-10, 10, -10], opacity: [0.04, 0.08, 0.04] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === LARGE RADIAL GLOW — center === */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background: `radial-gradient(circle, ${gold}, transparent 70%)`,
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* === SUBTLE SECONDARY GLOW — top left === */}
      <div
        className="absolute w-[400px] h-[400px] rounded-full opacity-[0.02]"
        style={{
          background: `radial-gradient(circle, ${goldLight}, transparent 60%)`,
          left: "10%",
          top: "20%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* === DIAGONAL THIN LINES — bottom right === */}
      <svg className="absolute bottom-0 right-0 w-64 h-64 opacity-[0.03]" viewBox="0 0 260 260">
        {Array.from({ length: 8 }).map((_, i) => (
          <line
            key={`br-${i}`}
            x1={260}
            y1={60 + i * 28}
            x2={60 + i * 28}
            y2={260}
            stroke={gold}
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* === SMALL FLOATING TRIANGLES === */}
      <motion.svg
        className="absolute left-[30%] top-[45%] w-4 h-4 opacity-[0.06]"
        viewBox="0 0 16 16"
        animate={{ y: [-3, 3, -3], rotate: [0, 20, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="8,1 15,14 1,14" fill="none" stroke={gold} strokeWidth="0.8" />
      </motion.svg>

      <motion.svg
        className="absolute right-[25%] top-[30%] w-3 h-3 opacity-[0.05]"
        viewBox="0 0 16 16"
        animate={{ y: [2, -4, 2], rotate: [0, -15, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="8,1 15,14 1,14" fill={gold} />
      </motion.svg>
    </div>
  );
};

export default FunDecorations;

import { motion } from "framer-motion";

const FunDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Thin diagonal lines - top right */}
      <svg className="absolute top-0 right-0 w-96 h-96 opacity-[0.04]" viewBox="0 0 400 400">
        {Array.from({ length: 12 }).map((_, i) => (
          <line
            key={`tr-${i}`}
            x1={80 + i * 30}
            y1={0}
            x2={0}
            y2={80 + i * 30}
            stroke="hsl(40 75% 55%)"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Corner accent - bottom left */}
      <svg className="absolute bottom-0 left-0 w-72 h-72 opacity-[0.05]" viewBox="0 0 300 300">
        {Array.from({ length: 5 }).map((_, i) => (
          <circle
            key={`bl-${i}`}
            cx={0}
            cy={300}
            r={60 + i * 50}
            fill="none"
            stroke="hsl(40 75% 55%)"
            strokeWidth="0.5"
          />
        ))}
      </svg>

      {/* Floating dot grid - right middle */}
      <motion.svg
        className="absolute right-8 top-1/3 w-32 h-32 opacity-[0.06]"
        viewBox="0 0 120 120"
        animate={{ y: [-5, 5, -5] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      >
        {Array.from({ length: 5 }).map((_, row) =>
          Array.from({ length: 5 }).map((_, col) => (
            <circle
              key={`dot-${row}-${col}`}
              cx={12 + col * 24}
              cy={12 + row * 24}
              r="1.5"
              fill="hsl(40 75% 55%)"
            />
          ))
        )}
      </motion.svg>

      {/* Single thin gold line - horizontal accent */}
      <motion.div
        className="absolute left-[10%] top-[65%] w-32 h-px opacity-[0.08]"
        style={{ background: "linear-gradient(90deg, transparent, hsl(40 75% 55%), transparent)" }}
        animate={{ scaleX: [0.8, 1.2, 0.8] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Small diamond */}
      <motion.svg
        className="absolute left-[15%] top-[20%] w-6 h-6 opacity-[0.08]"
        viewBox="0 0 24 24"
        animate={{ rotate: [0, 90, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      >
        <polygon points="12,2 22,12 12,22 2,12" fill="hsl(40 75% 55%)" />
      </motion.svg>

      {/* Subtle radial glow - center */}
      <div
        className="absolute w-[600px] h-[600px] rounded-full opacity-[0.03]"
        style={{
          background: "radial-gradient(circle, hsl(40 75% 55%), transparent 70%)",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
};

export default FunDecorations;

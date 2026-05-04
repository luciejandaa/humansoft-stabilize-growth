import { motion } from "framer-motion";

/**
 * Editorial decorative background.
 * Floating emerald blobs + subtle grid + grain.
 * Light, energetic, premium.
 */
const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating emerald blob top-right */}
      <motion.div
        className="absolute -top-32 -right-32 w-[600px] h-[600px] animate-blob"
        style={{
          background:
            "radial-gradient(circle, hsl(152 80% 65% / 0.35), hsl(158 75% 45% / 0.15) 50%, transparent 70%)",
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Lime accent bottom-left */}
      <motion.div
        className="absolute -bottom-40 -left-40 w-[700px] h-[700px] animate-blob"
        style={{
          background:
            "radial-gradient(circle, hsl(80 70% 70% / 0.3), hsl(152 80% 55% / 0.1) 50%, transparent 70%)",
          filter: "blur(80px)",
          animationDelay: "-6s",
        }}
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Mid floating accent */}
      <motion.div
        className="absolute top-1/2 left-1/3 w-[400px] h-[400px]"
        style={{
          background:
            "radial-gradient(circle, hsl(168 60% 60% / 0.18), transparent 70%)",
          filter: "blur(70px)",
        }}
        animate={{
          x: [0, 60, -40, 0],
          y: [0, -50, 30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export default FunDecorations;

import { motion } from "framer-motion";

interface FunDecorationsProps {
  variant?: "default" | "warm" | "cool" | "playful";
}

const FunDecorations = ({ variant = "default" }: FunDecorationsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Large soft gradient blobs */}
      <motion.div
        className="absolute w-[300px] h-[300px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--accent) / 0.12), transparent 70%)",
          left: "-5%",
          top: "10%",
        }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-[250px] h-[250px] rounded-full blur-3xl"
        style={{
          background: "radial-gradient(circle, hsl(var(--primary) / 0.08), transparent 70%)",
          right: "-3%",
          bottom: "5%",
        }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Floating geometric shapes */}
      <motion.div
        className="absolute w-16 h-16 border-2 border-accent/20 rounded-2xl"
        style={{ left: "8%", top: "25%" }}
        animate={{ rotate: [0, 90, 0], y: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute w-10 h-10 bg-primary/8 rounded-full"
        style={{ right: "12%", top: "20%" }}
        animate={{ scale: [0.8, 1.3, 0.8], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />
      <motion.div
        className="absolute w-6 h-6 bg-accent/15 rounded-full"
        style={{ left: "45%", top: "8%" }}
        animate={{ y: [0, -15, 0], x: [0, 10, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      />
      <motion.div
        className="absolute w-8 h-8 border border-primary/15 rounded-lg"
        style={{ right: "20%", bottom: "20%" }}
        animate={{ rotate: [0, -45, 0], scale: [1, 1.2, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      />

      {/* Dotted trail */}
      <motion.svg
        className="absolute"
        style={{ left: "3%", top: "55%", width: "120px", height: "120px" }}
        viewBox="0 0 120 120"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.3, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <motion.path
          d="M10 100 C30 20, 90 20, 110 100"
          stroke="hsl(var(--accent))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="4 8"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        />
      </motion.svg>

      {/* Smile / happy arc */}
      <motion.svg
        className="absolute"
        style={{ right: "8%", top: "40%", width: "70px", height: "70px" }}
        viewBox="0 0 70 70"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.35, 0.15], rotate: [0, 10, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      >
        <path d="M15 30 Q35 55 55 30" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="22" r="3" fill="hsl(var(--primary))" opacity="0.3" />
        <circle cx="50" cy="22" r="3" fill="hsl(var(--primary))" opacity="0.3" />
      </motion.svg>

      {/* Star burst */}
      <motion.svg
        className="absolute"
        style={{ left: "70%", top: "12%", width: "50px", height: "50px" }}
        viewBox="0 0 50 50"
        fill="none"
        animate={{ rotate: [0, 180, 360], scale: [0.8, 1.1, 0.8], opacity: [0.15, 0.35, 0.15] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <path d="M25 5 L28 20 L43 17 L32 27 L40 40 L25 33 L10 40 L18 27 L7 17 L22 20 Z" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent))" opacity="0.15" />
      </motion.svg>

      {/* Zigzag line */}
      <motion.svg
        className="absolute"
        style={{ left: "25%", bottom: "10%", width: "100px", height: "40px" }}
        viewBox="0 0 100 40"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      >
        <motion.path
          d="M5 30 L20 10 L35 30 L50 10 L65 30 L80 10 L95 30"
          stroke="hsl(var(--primary))"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: [0, 1, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        />
      </motion.svg>

      {/* Small confetti dots */}
      {[
        { left: "15%", top: "70%", color: "accent", size: 5, delay: 0 },
        { left: "82%", top: "55%", color: "primary", size: 4, delay: 1.5 },
        { left: "55%", top: "80%", color: "accent", size: 6, delay: 3 },
        { left: "35%", top: "15%", color: "primary", size: 4, delay: 2 },
        { left: "90%", top: "75%", color: "accent", size: 5, delay: 4 },
      ].map((dot, i) => (
        <motion.div
          key={`dot-${i}`}
          className={`absolute rounded-full bg-${dot.color}/20`}
          style={{ left: dot.left, top: dot.top, width: dot.size, height: dot.size }}
          animate={{
            scale: [0, 1.5, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
            delay: dot.delay,
          }}
        />
      ))}

      {/* Wavy circle */}
      <motion.svg
        className="absolute"
        style={{ left: "60%", bottom: "25%", width: "60px", height: "60px" }}
        viewBox="0 0 60 60"
        fill="none"
        animate={{ rotate: [0, 360], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="30" cy="30" r="22" stroke="hsl(var(--primary))" strokeWidth="1.5" strokeDasharray="3 5" fill="none" />
        <circle cx="30" cy="30" r="14" stroke="hsl(var(--accent))" strokeWidth="1" strokeDasharray="2 4" fill="none" />
      </motion.svg>

      {/* Plus signs */}
      <motion.svg
        className="absolute"
        style={{ left: "40%", top: "45%", width: "24px", height: "24px" }}
        viewBox="0 0 24 24"
        fill="none"
        animate={{ rotate: [0, 90, 0], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2.5 }}
      >
        <line x1="12" y1="4" x2="12" y2="20" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="hsl(var(--accent))" strokeWidth="2" strokeLinecap="round" />
      </motion.svg>

      {/* Heart shape */}
      <motion.svg
        className="absolute"
        style={{ right: "25%", top: "65%", width: "30px", height: "30px" }}
        viewBox="0 0 24 24"
        fill="none"
        animate={{ scale: [0.9, 1.2, 0.9], opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z" stroke="hsl(var(--accent))" strokeWidth="1.5" fill="hsl(var(--accent))" opacity="0.12" />
      </motion.svg>
    </div>
  );
};

export default FunDecorations;

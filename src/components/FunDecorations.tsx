import { motion } from "framer-motion";

interface FunDecorationsProps {
  variant?: "default" | "warm" | "cool" | "playful";
}

const FunDecorations = ({ variant = "default" }: FunDecorationsProps) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Big dashed circle - top right */}
      <motion.div
        className="absolute w-32 h-32 md:w-48 md:h-48 rounded-full"
        style={{
          border: "3px dashed hsl(var(--accent))",
          right: "3%",
          top: "5%",
          opacity: 0.55,
        }}
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />

      {/* Solid orange blob - left side */}
      <motion.div
        className="absolute w-14 h-14 md:w-20 md:h-20 rounded-full"
        style={{
          backgroundColor: "hsl(var(--accent))",
          left: "4%",
          top: "35%",
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.3, 1], y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Blue ring - bottom left */}
      <motion.div
        className="absolute w-24 h-24 md:w-36 md:h-36 rounded-full"
        style={{
          border: "3px solid hsl(var(--primary))",
          left: "8%",
          bottom: "10%",
          opacity: 0.2,
        }}
        animate={{ scale: [1, 1.12, 1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Zigzag SVG - visible */}
      <svg
        className="absolute"
        style={{ left: "12%", top: "8%", width: "160px", height: "50px", opacity: 0.4 }}
        viewBox="0 0 160 50"
        fill="none"
      >
        <path
          d="M5 40 L25 10 L45 40 L65 10 L85 40 L105 10 L125 40 L145 10"
          stroke="hsl(var(--accent))"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {/* Star / sparkle */}
      <motion.svg
        className="absolute"
        style={{ right: "12%", top: "40%", width: "50px", height: "50px" }}
        viewBox="0 0 50 50"
        animate={{ rotate: [0, 360], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      >
        <path
          d="M25 2 L29 20 L47 17 L33 28 L42 46 L25 35 L8 46 L17 28 L3 17 L21 20 Z"
          fill="hsl(var(--accent))"
          opacity="0.35"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Smiley face */}
      <motion.svg
        className="absolute"
        style={{ left: "48%", bottom: "12%", width: "70px", height: "70px" }}
        viewBox="0 0 70 70"
        animate={{ rotate: [-5, 5, -5], y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="35" cy="35" r="30" stroke="hsl(var(--accent))" strokeWidth="2.5" fill="none" opacity="0.45" />
        <circle cx="24" cy="28" r="3.5" fill="hsl(var(--primary))" opacity="0.5" />
        <circle cx="46" cy="28" r="3.5" fill="hsl(var(--primary))" opacity="0.5" />
        <path d="M20 42 Q35 56 50 42" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.5" />
      </motion.svg>

      {/* Heart */}
      <motion.svg
        className="absolute"
        style={{ right: "25%", top: "15%", width: "45px", height: "45px" }}
        viewBox="0 0 24 24"
        animate={{ scale: [0.9, 1.2, 0.9], y: [0, -8, 0] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <path
          d="M12 21C12 21 4 13.5 4 8.5C4 5.46 6.46 3 9.5 3C11.06 3 12 4 12 4C12 4 12.94 3 14.5 3C17.54 3 20 5.46 20 8.5C20 13.5 12 21 12 21Z"
          fill="hsl(var(--accent))"
          opacity="0.35"
          stroke="hsl(var(--accent))"
          strokeWidth="1"
        />
      </motion.svg>

      {/* Plus signs */}
      <svg
        className="absolute"
        style={{ left: "30%", top: "4%", width: "30px", height: "30px", opacity: 0.4 }}
        viewBox="0 0 24 24"
      >
        <line x1="12" y1="4" x2="12" y2="20" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="hsl(var(--primary))" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Another plus */}
      <svg
        className="absolute"
        style={{ right: "35%", bottom: "30%", width: "22px", height: "22px", opacity: 0.3 }}
        viewBox="0 0 24 24"
      >
        <line x1="12" y1="4" x2="12" y2="20" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
        <line x1="4" y1="12" x2="20" y2="12" stroke="hsl(var(--accent))" strokeWidth="3" strokeLinecap="round" />
      </svg>

      {/* Dotted arc */}
      <svg
        className="absolute"
        style={{ right: "6%", bottom: "18%", width: "130px", height: "90px", opacity: 0.35 }}
        viewBox="0 0 130 90"
        fill="none"
      >
        <path
          d="M10 70 C35 10, 95 10, 120 70"
          stroke="hsl(var(--primary))"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray="6 10"
        />
      </svg>

      {/* Confetti dots - static visible */}
      {[
        { x: "18%", y: "60%", color: "--accent", size: 12 },
        { x: "82%", y: "30%", color: "--primary", size: 10 },
        { x: "68%", y: "72%", color: "--accent", size: 14 },
        { x: "38%", y: "80%", color: "--primary", size: 9 },
        { x: "7%", y: "52%", color: "--accent", size: 11 },
        { x: "55%", y: "20%", color: "--primary", size: 8 },
        { x: "92%", y: "60%", color: "--accent", size: 10 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full"
          style={{
            left: dot.x,
            top: dot.y,
            width: dot.size,
            height: dot.size,
            backgroundColor: `hsl(var(${dot.color}))`,
            opacity: 0.25,
          }}
          animate={{ scale: [1, 1.5, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: i * 0.4 }}
        />
      ))}

      {/* Rotating dashed circles */}
      <motion.svg
        className="absolute"
        style={{ left: "62%", top: "55%", width: "70px", height: "70px" }}
        viewBox="0 0 60 60"
        animate={{ rotate: [0, 360] }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      >
        <circle cx="30" cy="30" r="24" stroke="hsl(var(--primary))" strokeWidth="2" strokeDasharray="4 6" fill="none" opacity="0.25" />
        <circle cx="30" cy="30" r="15" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="3 5" fill="none" opacity="0.3" />
      </motion.svg>

      {/* Small triangle */}
      <motion.svg
        className="absolute"
        style={{ left: "75%", top: "8%", width: "35px", height: "35px" }}
        viewBox="0 0 35 35"
        animate={{ rotate: [0, 120, 240, 360] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <polygon points="17.5,3 32,30 3,30" stroke="hsl(var(--accent))" strokeWidth="2" fill="none" opacity="0.35" />
      </motion.svg>
    </div>
  );
};

export default FunDecorations;

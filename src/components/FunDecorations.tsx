import { motion } from "framer-motion";

interface FloatingShape {
  className: string;
  x: string;
  y: string;
  size: string;
  delay: number;
  duration: number;
  rotate?: number;
}

const shapes: FloatingShape[] = [
  { className: "bg-accent/15 rounded-full", x: "5%", y: "20%", size: "60px", delay: 0, duration: 7, rotate: 0 },
  { className: "bg-primary/10 rounded-lg", x: "90%", y: "15%", size: "40px", delay: 1.5, duration: 9, rotate: 45 },
  { className: "bg-accent/20 rounded-full", x: "85%", y: "70%", size: "30px", delay: 0.8, duration: 6, rotate: 0 },
  { className: "bg-primary/8 rounded-xl", x: "10%", y: "75%", size: "50px", delay: 2, duration: 8, rotate: 30 },
  { className: "bg-accent/10 rounded-full", x: "50%", y: "10%", size: "24px", delay: 3, duration: 10, rotate: 0 },
  { className: "bg-primary/5 rounded-lg", x: "70%", y: "85%", size: "35px", delay: 1, duration: 7, rotate: 60 },
];

const FunDecorations = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
      {shapes.map((shape, i) => (
        <motion.div
          key={i}
          className={`absolute ${shape.className}`}
          style={{
            left: shape.x,
            top: shape.y,
            width: shape.size,
            height: shape.size,
          }}
          initial={{ opacity: 0, scale: 0.5, rotate: 0 }}
          animate={{
            opacity: [0.4, 0.8, 0.4],
            scale: [0.8, 1.1, 0.8],
            y: [0, -15, 0],
            rotate: [0, shape.rotate ?? 0, 0],
          }}
          transition={{
            duration: shape.duration,
            delay: shape.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Playful doodle-style elements */}
      <motion.svg
        className="absolute"
        style={{ left: "15%", top: "45%", width: "80px", height: "80px" }}
        viewBox="0 0 80 80"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.15, 0.3, 0.15] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      >
        <path d="M20 60 Q40 10 60 60" stroke="hsl(var(--accent))" strokeWidth="2.5" strokeLinecap="round" fill="none" />
        <circle cx="20" cy="60" r="4" fill="hsl(var(--accent))" opacity="0.5" />
        <circle cx="60" cy="60" r="4" fill="hsl(var(--accent))" opacity="0.5" />
      </motion.svg>

      <motion.svg
        className="absolute"
        style={{ right: "12%", top: "35%", width: "60px", height: "60px" }}
        viewBox="0 0 60 60"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.25, 0.1], rotate: [0, 15, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      >
        <path d="M30 5 L35 22 L52 22 L38 33 L43 50 L30 40 L17 50 L22 33 L8 22 L25 22 Z" stroke="hsl(var(--primary))" strokeWidth="1.5" fill="hsl(var(--primary))" opacity="0.1" />
      </motion.svg>

      <motion.svg
        className="absolute"
        style={{ left: "60%", bottom: "15%", width: "50px", height: "50px" }}
        viewBox="0 0 50 50"
        fill="none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0.1, 0.2, 0.1], scale: [1, 1.2, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 3 }}
      >
        <circle cx="25" cy="25" r="20" stroke="hsl(var(--accent))" strokeWidth="2" strokeDasharray="6 4" fill="none" />
      </motion.svg>
    </div>
  );
};

export default FunDecorations;

import { motion } from "framer-motion";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";

const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

      {/* === COMET 1 — top-right to bottom-left === */}
      <motion.div
        className="absolute"
        style={{ top: "8%", right: "-5%" }}
        animate={{
          x: [0, -600],
          y: [0, 400],
          opacity: [0, 0.6, 0.4, 0],
        }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 8, ease: "easeOut" }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ background: goldLight, boxShadow: `0 0 8px 2px ${gold}` }}
        />
        <div
          className="absolute top-0 left-0"
          style={{
            width: "120px",
            height: "2px",
            background: `linear-gradient(270deg, ${goldLight}, transparent)`,
            transformOrigin: "right center",
            transform: "rotate(-34deg) translateX(4px)",
            opacity: 0.5,
          }}
        />
      </motion.div>

      {/* === COMET 2 — left side, steeper angle === */}
      <motion.div
        className="absolute"
        style={{ top: "25%", left: "-3%" }}
        animate={{
          x: [0, 500],
          y: [0, 300],
          opacity: [0, 0.5, 0.3, 0],
        }}
        transition={{ duration: 5, repeat: Infinity, repeatDelay: 12, ease: "easeOut", delay: 4 }}
      >
        <div
          className="w-1.5 h-1.5 rounded-full"
          style={{ background: goldLight, boxShadow: `0 0 6px 2px ${gold}` }}
        />
        <div
          className="absolute top-0 left-0"
          style={{
            width: "90px",
            height: "1.5px",
            background: `linear-gradient(90deg, ${goldLight}, transparent)`,
            transformOrigin: "left center",
            transform: "rotate(31deg) translateX(-4px)",
            opacity: 0.4,
          }}
        />
      </motion.div>

      {/* === COMET 3 — small, fast, top area === */}
      <motion.div
        className="absolute"
        style={{ top: "5%", left: "40%" }}
        animate={{
          x: [0, 350],
          y: [0, 200],
          opacity: [0, 0.7, 0],
        }}
        transition={{ duration: 3, repeat: Infinity, repeatDelay: 15, ease: "easeOut", delay: 9 }}
      >
        <div
          className="w-1 h-1 rounded-full"
          style={{ background: goldLight, boxShadow: `0 0 4px 1px ${gold}` }}
        />
        <div
          className="absolute top-0 left-0"
          style={{
            width: "60px",
            height: "1px",
            background: `linear-gradient(270deg, ${goldLight}, transparent)`,
            transformOrigin: "right center",
            transform: "rotate(-30deg) translateX(2px)",
            opacity: 0.35,
          }}
        />
      </motion.div>

      {/* === SHOOTING STARS — tiny fast streaks === */}
      {[
        { top: "15%", left: "70%", angle: -25, delay: 2, pause: 18, len: 50 },
        { top: "60%", left: "85%", angle: -40, delay: 7, pause: 20, len: 40 },
        { top: "75%", left: "10%", angle: 30, delay: 11, pause: 22, len: 45 },
      ].map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute"
          style={{ top: star.top, left: star.left }}
          animate={{
            x: [0, Math.cos((star.angle * Math.PI) / 180) * 250],
            y: [0, -Math.sin((star.angle * Math.PI) / 180) * 250],
            opacity: [0, 0.6, 0],
          }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: star.pause, ease: "easeOut", delay: star.delay }}
        >
          <div
            style={{
              width: `${star.len}px`,
              height: "1px",
              background: `linear-gradient(90deg, ${goldLight}, transparent)`,
              transform: `rotate(${star.angle}deg)`,
              opacity: 0.5,
            }}
          />
        </motion.div>
      ))}

      {/* === GLOWING EMBERS — softly drifting upward === */}
      {[
        { left: "12%", bottom: "10%", delay: 0, dur: 8 },
        { left: "55%", bottom: "5%", delay: 3, dur: 10 },
        { left: "80%", bottom: "15%", delay: 6, dur: 9 },
        { left: "35%", bottom: "8%", delay: 1.5, dur: 11 },
        { left: "68%", bottom: "3%", delay: 4.5, dur: 7 },
      ].map((ember, i) => (
        <motion.div
          key={`ember-${i}`}
          className="absolute w-1 h-1 rounded-full"
          style={{
            left: ember.left,
            bottom: ember.bottom,
            background: gold,
            boxShadow: `0 0 4px 1px ${gold}`,
          }}
          animate={{
            y: [0, -200, -400],
            x: [0, 15, -10],
            opacity: [0, 0.4, 0],
            scale: [0.5, 1, 0.3],
          }}
          transition={{
            duration: ember.dur,
            repeat: Infinity,
            delay: ember.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* === LIGHT STREAKS — horizontal aurora-like wisps === */}
      <motion.div
        className="absolute left-0 h-px opacity-[0.08]"
        style={{
          top: "35%",
          width: "300px",
          background: `linear-gradient(90deg, transparent, ${gold}40, ${goldLight}60, ${gold}40, transparent)`,
        }}
        animate={{ x: [-100, 200, -100], opacity: [0.04, 0.1, 0.04] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-0 h-px opacity-[0.06]"
        style={{
          top: "68%",
          width: "250px",
          background: `linear-gradient(90deg, transparent, ${goldLight}50, ${gold}40, transparent)`,
        }}
        animate={{ x: [80, -150, 80], opacity: [0.03, 0.08, 0.03] }}
        transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* === NEBULA GLOW — soft ambient patches === */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "500px",
          left: "60%",
          top: "20%",
          background: `radial-gradient(circle, ${gold}08, transparent 70%)`,
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.02, 0.05, 0.02], scale: [0.9, 1.1, 0.9] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          left: "15%",
          top: "65%",
          background: `radial-gradient(circle, ${goldLight}06, transparent 65%)`,
          filter: "blur(50px)",
        }}
        animate={{ opacity: [0.015, 0.04, 0.015], scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 5 }}
      />
    </div>
  );
};

export default FunDecorations;

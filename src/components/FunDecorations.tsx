import { motion } from "framer-motion";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";
const starWhite = "hsl(45 20% 85%)";

/** Seed-based pseudo-random for consistent star placement */
const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

/** Generate static stars */
const stars = Array.from({ length: 80 }, (_, i) => ({
  left: `${seededRandom(i * 3 + 1) * 100}%`,
  top: `${seededRandom(i * 3 + 2) * 100}%`,
  size: 0.8 + seededRandom(i * 3 + 3) * 1.8,
  opacity: 0.15 + seededRandom(i * 3 + 4) * 0.35,
  delay: seededRandom(i * 3 + 5) * 6,
  color: seededRandom(i) > 0.7 ? gold : starWhite,
}));

/** Constellations — each is a set of star positions + connecting lines */
const constellations = [
  {
    // Top-right constellation
    offset: { x: 65, y: 10 },
    points: [
      [0, 0], [4, 3], [8, 1], [12, 5], [9, 8], [5, 7],
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,1]] as [number,number][],
  },
  {
    // Left-middle constellation
    offset: { x: 8, y: 40 },
    points: [
      [0, 0], [3, 4], [7, 2], [10, 6], [6, 8],
    ] as [number, number][],
    lines: [[0,1],[1,2],[1,3],[3,4]] as [number,number][],
  },
  {
    // Bottom-center constellation
    offset: { x: 40, y: 75 },
    points: [
      [0, 2], [4, 0], [8, 3], [12, 1], [6, 5],
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[1,4],[2,4]] as [number,number][],
  },
  {
    // Top-left small
    offset: { x: 18, y: 8 },
    points: [
      [0, 0], [3, 2], [6, 0], [3, 4],
    ] as [number, number][],
    lines: [[0,1],[1,2],[1,3]] as [number,number][],
  },
  {
    // Right-bottom
    offset: { x: 78, y: 60 },
    points: [
      [0, 3], [4, 0], [8, 4], [5, 7], [2, 6],
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,0]] as [number,number][],
  },
];

const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

      {/* === TWINKLING STARS === */}
      {stars.map((star, i) => (
        <motion.div
          key={`star-${i}`}
          className="absolute rounded-full"
          style={{
            left: star.left,
            top: star.top,
            width: star.size,
            height: star.size,
            background: star.color,
            boxShadow: star.size > 2 ? `0 0 ${star.size * 2}px ${star.color}` : undefined,
          }}
          animate={{
            opacity: [star.opacity * 0.4, star.opacity, star.opacity * 0.4],
            scale: [0.8, 1.1, 0.8],
          }}
          transition={{
            duration: 3 + seededRandom(i * 7) * 4,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* === CONSTELLATIONS === */}
      {constellations.map((c, ci) => (
        <motion.svg
          key={`constellation-${ci}`}
          className="absolute"
          style={{
            left: `${c.offset.x}%`,
            top: `${c.offset.y}%`,
            width: "14%",
            height: "12%",
          }}
          viewBox="-1 -1 14 10"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0.06, 0.15, 0.06] }}
          transition={{
            duration: 8 + ci * 2,
            repeat: Infinity,
            delay: ci * 3,
            ease: "easeInOut",
          }}
        >
          {/* Constellation lines */}
          {c.lines.map(([a, b], li) => (
            <motion.line
              key={`line-${ci}-${li}`}
              x1={c.points[a][0]}
              y1={c.points[a][1]}
              x2={c.points[b][0]}
              y2={c.points[b][1]}
              stroke={gold}
              strokeWidth="0.08"
              strokeOpacity="0.5"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: [0, 1] }}
              transition={{
                duration: 3,
                delay: ci * 3 + li * 0.4,
                repeat: Infinity,
                repeatDelay: 8 + ci * 2,
                ease: "easeOut",
              }}
            />
          ))}
          {/* Constellation stars */}
          {c.points.map(([x, y], pi) => (
            <circle
              key={`cstar-${ci}-${pi}`}
              cx={x}
              cy={y}
              r="0.25"
              fill={goldLight}
            />
          ))}
        </motion.svg>
      ))}

      {/* === SHOOTING STARS === */}
      {[
        { top: "12%", left: "75%", angle: -30, delay: 3, pause: 14 },
        { top: "45%", left: "90%", angle: -25, delay: 8, pause: 18 },
        { top: "70%", left: "15%", angle: 20, delay: 12, pause: 20 },
        { top: "20%", left: "30%", angle: -35, delay: 18, pause: 16 },
      ].map((s, i) => (
        <motion.div
          key={`shoot-${i}`}
          className="absolute"
          style={{ top: s.top, left: s.left }}
          animate={{
            x: [0, Math.cos((s.angle * Math.PI) / 180) * 300],
            y: [0, -Math.sin((s.angle * Math.PI) / 180) * 300],
            opacity: [0, 0.7, 0],
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatDelay: s.pause,
            ease: "easeOut",
            delay: s.delay,
          }}
        >
          {/* Head */}
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ background: goldLight, boxShadow: `0 0 6px 2px ${gold}` }}
          />
          {/* Tail */}
          <div
            className="absolute top-[2px] left-[2px]"
            style={{
              width: "80px",
              height: "1px",
              background: `linear-gradient(${180 + s.angle}deg, ${goldLight}80, transparent)`,
              transformOrigin: "left center",
            }}
          />
        </motion.div>
      ))}

      {/* === NEBULA CLOUDS === */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "600px",
          height: "400px",
          right: "-5%",
          top: "15%",
          background: `radial-gradient(ellipse, ${gold}06, ${goldLight}03, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{ opacity: [0.03, 0.06, 0.03], x: [-20, 20, -20] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px",
          height: "350px",
          left: "-3%",
          top: "55%",
          background: `radial-gradient(ellipse, ${goldLight}05, ${gold}03, transparent 65%)`,
          filter: "blur(70px)",
        }}
        animate={{ opacity: [0.02, 0.05, 0.02], x: [15, -15, 15] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px",
          height: "400px",
          left: "40%",
          top: "70%",
          background: `radial-gradient(circle, ${gold}04, transparent 60%)`,
          filter: "blur(60px)",
        }}
        animate={{ opacity: [0.015, 0.04, 0.015] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 10 }}
      />

      {/* === STARDUST PARTICLES — slowly drifting === */}
      {Array.from({ length: 15 }, (_, i) => ({
        left: `${seededRandom(i * 11 + 100) * 100}%`,
        top: `${seededRandom(i * 11 + 101) * 100}%`,
        delay: seededRandom(i * 11 + 102) * 10,
        dur: 10 + seededRandom(i * 11 + 103) * 8,
      })).map((p, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute w-[1px] h-[1px] rounded-full"
          style={{
            left: p.left,
            top: p.top,
            background: goldLight,
            boxShadow: `0 0 3px 1px ${gold}40`,
          }}
          animate={{
            y: [-20, 20, -20],
            x: [-10, 10, -10],
            opacity: [0, 0.3, 0],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            delay: p.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default FunDecorations;

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";
const starWhite = "hsl(45 20% 85%)";

/** Real constellation data — coordinates normalized to 0-100 range */
const realConstellations = [
  {
    name: "Orion",
    offset: { x: 5, y: 8 },
    scale: 0.14,
    points: [
      [50, 0],   // Betelgeuse
      [72, 8],   // Bellatrix
      [60, 35],  // shoulder mid
      [55, 50],  // belt left
      [62, 50],  // belt center (Alnilam)
      [69, 50],  // belt right
      [48, 75],  // knee left (Saiph)
      [78, 75],  // knee right (Rigel)
      [60, 62],  // sword
    ] as [number, number][],
    lines: [[0,2],[1,2],[2,3],[3,4],[4,5],[2,5],[3,6],[5,7],[4,8]],
  },
  {
    name: "Ursa Major",
    offset: { x: 60, y: 5 },
    scale: 0.18,
    points: [
      [0, 40],   // Alkaid
      [18, 35],  // Mizar
      [35, 28],  // Alioth
      [50, 30],  // Megrez
      [48, 50],  // Phecda
      [65, 50],  // Merak
      [65, 28],  // Dubhe
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]],
  },
  {
    name: "Cassiopeia",
    offset: { x: 35, y: 2 },
    scale: 0.12,
    points: [
      [0, 30],
      [22, 0],
      [45, 25],
      [68, 0],
      [90, 20],
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4]],
  },
  {
    name: "Leo",
    offset: { x: 72, y: 55 },
    scale: 0.15,
    points: [
      [0, 30],   // Denebola
      [25, 40],  // Zosma
      [38, 25],  // Chertan
      [55, 15],  // Algieba
      [65, 0],   // Adhafera
      [70, 20],  // Rasalas
      [80, 10],  // Ras Elased
      [60, 35],  // Regulus area
    ] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,1]],
  },
  {
    name: "Scorpius",
    offset: { x: 2, y: 55 },
    scale: 0.16,
    points: [
      [30, 0],   // Dschubba
      [35, 10],  // Acrab
      [25, 10],  // Fang
      [30, 25],  // Alniyat
      [28, 40],  // Antares
      [25, 55],  // Tau Sco
      [20, 68],  // curve
      [12, 78],  // curve
      [5, 85],   // Shaula
      [10, 92],  // Lesath
    ] as [number, number][],
    lines: [[0,1],[0,2],[0,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]],
  },
  {
    name: "Cygnus",
    offset: { x: 40, y: 40 },
    scale: 0.13,
    points: [
      [50, 0],   // Deneb
      [50, 35],  // Sadr
      [50, 75],  // Albireo
      [20, 35],  // wing left
      [80, 35],  // wing right
    ] as [number, number][],
    lines: [[0,1],[1,2],[3,1],[1,4]],
  },
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

const bgStars = Array.from({ length: 100 }, (_, i) => ({
  left: `${seededRandom(i * 3 + 1) * 100}%`,
  top: `${seededRandom(i * 3 + 2) * 100}%`,
  size: 0.5 + seededRandom(i * 3 + 3) * 1.5,
  opacity: 0.1 + seededRandom(i * 3 + 4) * 0.3,
  delay: seededRandom(i * 3 + 5) * 6,
  color: seededRandom(i) > 0.75 ? gold : starWhite,
}));

const FunDecorations = () => {
  const [hoveredConstellation, setHoveredConstellation] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(cx);
    mouseY.set(cy);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

      {/* === BACKGROUND STARS with parallax === */}
      {bgStars.map((star, i) => {
        const depth = 0.3 + seededRandom(i * 7) * 0.7; // parallax depth
        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: star.top,
              width: star.size,
              height: star.size,
              background: star.color,
              boxShadow: star.size > 1.8 ? `0 0 ${star.size * 2}px ${star.color}` : undefined,
              x: smoothX.get() * depth * -8,
              y: smoothY.get() * depth * -8,
            }}
            animate={{
              opacity: [star.opacity * 0.5, star.opacity, star.opacity * 0.5],
            }}
            transition={{
              duration: 3 + seededRandom(i * 7) * 3,
              repeat: Infinity,
              delay: star.delay,
              ease: "easeInOut",
            }}
          />
        );
      })}

      {/* === REAL CONSTELLATIONS — interactive === */}
      {realConstellations.map((c) => {
        const isHovered = hoveredConstellation === c.name;
        const w = c.scale * 100; // vw
        const h = c.scale * 80;  // vh approx

        return (
          <motion.svg
            key={c.name}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${c.offset.x}%`,
              top: `${c.offset.y}%`,
              width: `${w}vw`,
              height: `${h}vh`,
            }}
            viewBox="-5 -5 110 110"
            preserveAspectRatio="xMidYMid meet"
            animate={{
              opacity: isHovered ? 0.7 : 0.12,
            }}
            transition={{ duration: 0.5 }}
            onMouseEnter={(e) => {
              setHoveredConstellation(c.name);
              setTooltip({ x: e.clientX, y: e.clientY, name: c.name });
            }}
            onMouseMove={(e) => {
              if (hoveredConstellation === c.name) {
                setTooltip({ x: e.clientX, y: e.clientY, name: c.name });
              }
            }}
            onMouseLeave={() => {
              setHoveredConstellation(null);
              setTooltip(null);
            }}
          >
            {/* Invisible hit area */}
            <rect x="-5" y="-5" width="110" height="110" fill="transparent" />

            {/* Constellation lines */}
            {c.lines.map(([a, b], li) => (
              <motion.line
                key={`${c.name}-line-${li}`}
                x1={c.points[a][0]}
                y1={c.points[a][1]}
                x2={c.points[b][0]}
                y2={c.points[b][1]}
                stroke={gold}
                strokeWidth={isHovered ? 0.4 : 0.15}
                strokeOpacity={isHovered ? 0.8 : 0.4}
                animate={{
                  strokeWidth: isHovered ? 0.4 : 0.15,
                  strokeOpacity: isHovered ? 0.8 : 0.4,
                }}
                transition={{ duration: 0.4 }}
              />
            ))}

            {/* Constellation stars */}
            {c.points.map(([x, y], pi) => (
              <motion.circle
                key={`${c.name}-star-${pi}`}
                cx={x}
                cy={y}
                fill={goldLight}
                animate={{
                  r: isHovered ? 1.5 : 0.6,
                  opacity: isHovered ? 1 : 0.6,
                }}
                transition={{ duration: 0.3, delay: pi * 0.03 }}
              />
            ))}

            {/* Glow on hover */}
            {isHovered && c.points.map(([x, y], pi) => (
              <motion.circle
                key={`${c.name}-glow-${pi}`}
                cx={x}
                cy={y}
                r="4"
                fill={gold}
                opacity={0}
                animate={{ opacity: [0, 0.15, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: pi * 0.1 }}
              />
            ))}
          </motion.svg>
        );
      })}

      {/* === CONSTELLATION NAME TOOLTIP === */}
      {tooltip && (
        <motion.div
          className="fixed pointer-events-none px-3 py-1.5 rounded-full text-xs font-medium tracking-wider"
          style={{
            left: tooltip.x + 16,
            top: tooltip.y - 12,
            color: goldLight,
            background: "hsla(220, 20%, 8%, 0.85)",
            border: `1px solid ${gold}30`,
            backdropFilter: "blur(8px)",
            zIndex: 100,
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
        >
          {tooltip.name}
        </motion.div>
      )}

      {/* === SHOOTING STARS === */}
      {[
        { top: "10%", left: "80%", angle: -30, delay: 4, pause: 16 },
        { top: "50%", left: "92%", angle: -25, delay: 10, pause: 20 },
        { top: "75%", left: "12%", angle: 22, delay: 15, pause: 22 },
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
          <div
            className="absolute w-1.5 h-1.5 rounded-full"
            style={{ background: goldLight, boxShadow: `0 0 6px 2px ${gold}` }}
          />
          <div
            className="absolute top-[2px] left-[2px]"
            style={{
              width: "80px",
              height: "1px",
              background: `linear-gradient(${180 + s.angle}deg, ${goldLight}80, transparent)`,
            }}
          />
        </motion.div>
      ))}

      {/* === NEBULA CLOUDS === */}
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "500px", height: "350px",
          right: "-3%", top: "20%",
          background: `radial-gradient(ellipse, ${gold}06, transparent 70%)`,
          filter: "blur(80px)",
        }}
        animate={{ opacity: [0.02, 0.05, 0.02] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute rounded-full"
        style={{
          width: "400px", height: "300px",
          left: "-2%", top: "60%",
          background: `radial-gradient(ellipse, ${goldLight}05, transparent 65%)`,
          filter: "blur(70px)",
        }}
        animate={{ opacity: [0.015, 0.04, 0.015] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 6 }}
      />
    </div>
  );
};

export default FunDecorations;

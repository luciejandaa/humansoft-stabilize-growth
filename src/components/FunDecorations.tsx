import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useState, useCallback } from "react";

const gold = "hsl(40 75% 55%)";
const goldLight = "hsl(40 90% 65%)";
const starWhite = "hsl(45 20% 85%)";

/** Real constellation data — coordinates normalized to 0-100 range.
 *  offsetY is now in "scroll space": 0 = top of page, 100 = one viewport height.
 *  We spread constellations across a tall virtual sky so they scroll into view. */
const realConstellations = [
  {
    name: "Cassiopeia",
    offset: { x: 35, y: -10 },
    scale: 0.12,
    points: [[0, 30], [22, 0], [45, 25], [68, 0], [90, 20]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4]],
  },
  {
    name: "Ursa Minor",
    offset: { x: 78, y: -5 },
    scale: 0.1,
    points: [[50, 0], [48, 25], [45, 50], [40, 65], [55, 65], [60, 80], [35, 80]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]],
  },
  {
    name: "Ursa Major",
    offset: { x: 10, y: 5 },
    scale: 0.18,
    points: [[0, 40], [18, 35], [35, 28], [50, 30], [48, 50], [65, 50], [65, 28]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,3]],
  },
  {
    name: "Perseus",
    offset: { x: 60, y: 25 },
    scale: 0.12,
    points: [[50, 0], [45, 20], [40, 40], [30, 55], [55, 35], [65, 50], [50, 65]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[1,4],[4,5],[2,6]],
  },
  {
    name: "Orion",
    offset: { x: 8, y: 40 },
    scale: 0.15,
    points: [[50, 0], [72, 8], [60, 35], [55, 50], [62, 50], [69, 50], [48, 75], [78, 75], [60, 62]] as [number, number][],
    lines: [[0,2],[1,2],[2,3],[3,4],[4,5],[2,5],[3,6],[5,7],[4,8]],
  },
  {
    name: "Taurus",
    offset: { x: 75, y: 45 },
    scale: 0.13,
    points: [[80, 50], [60, 40], [45, 35], [30, 25], [20, 15], [55, 20], [40, 10]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[2,5],[5,6]],
  },
  {
    name: "Cygnus",
    offset: { x: 40, y: 60 },
    scale: 0.13,
    points: [[50, 0], [50, 35], [50, 75], [20, 35], [80, 35]] as [number, number][],
    lines: [[0,1],[1,2],[3,1],[1,4]],
  },
  {
    name: "Draco",
    offset: { x: 5, y: 70 },
    scale: 0.16,
    points: [[80, 10], [65, 15], [50, 25], [35, 20], [25, 35], [30, 50], [45, 55], [55, 45], [65, 55], [75, 65]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]],
  },
  {
    name: "Leo",
    offset: { x: 65, y: 85 },
    scale: 0.15,
    points: [[0, 30], [25, 40], [38, 25], [55, 15], [65, 0], [70, 20], [80, 10], [60, 35]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5],[5,6],[3,7],[7,1]],
  },
  {
    name: "Andromeda",
    offset: { x: 25, y: 95 },
    scale: 0.14,
    points: [[0, 50], [25, 40], [50, 30], [75, 20], [30, 55], [55, 15]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[1,4],[2,5]],
  },
  {
    name: "Scorpius",
    offset: { x: 5, y: 115 },
    scale: 0.16,
    points: [[30, 0], [35, 10], [25, 10], [30, 25], [28, 40], [25, 55], [20, 68], [12, 78], [5, 85], [10, 92]] as [number, number][],
    lines: [[0,1],[0,2],[0,3],[3,4],[4,5],[5,6],[6,7],[7,8],[8,9]],
  },
  {
    name: "Lyra",
    offset: { x: 55, y: 130 },
    scale: 0.1,
    points: [[50, 0], [30, 40], [70, 40], [35, 70], [65, 70]] as [number, number][],
    lines: [[0,1],[0,2],[1,3],[2,4],[3,4]],
  },
  {
    name: "Corona Borealis",
    offset: { x: 78, y: 135 },
    scale: 0.1,
    points: [[0, 50], [15, 20], [35, 5], [55, 5], [75, 20], [90, 50]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,4],[4,5]],
  },
  {
    name: "Gemini",
    offset: { x: 15, y: 150 },
    scale: 0.14,
    points: [[20, 0], [50, 0], [15, 30], [45, 25], [10, 55], [40, 50], [25, 80], [50, 75]] as [number, number][],
    lines: [[0,2],[2,4],[4,6],[1,3],[3,5],[5,7],[0,1],[2,3]],
  },
  {
    name: "Canis Major",
    offset: { x: 60, y: 165 },
    scale: 0.13,
    points: [[50, 0], [40, 25], [60, 30], [35, 50], [55, 55], [30, 75], [50, 80]] as [number, number][],
    lines: [[0,1],[0,2],[1,3],[2,4],[3,5],[4,6],[3,4]],
  },
  {
    name: "Aquila",
    offset: { x: 8, y: 185 },
    scale: 0.12,
    points: [[50, 0], [30, 30], [70, 30], [50, 60], [20, 70], [80, 70]] as [number, number][],
    lines: [[0,1],[0,2],[1,3],[2,3],[3,4],[3,5]],
  },
  {
    name: "Sagittarius",
    offset: { x: 50, y: 200 },
    scale: 0.15,
    points: [[40, 0], [55, 15], [35, 25], [50, 35], [65, 30], [45, 50], [60, 55], [30, 60], [70, 45]] as [number, number][],
    lines: [[0,1],[0,2],[1,4],[2,3],[3,5],[3,4],[4,8],[5,7],[5,6]],
  },
  {
    name: "Pegasus",
    offset: { x: 75, y: 220 },
    scale: 0.14,
    points: [[0, 0], [60, 0], [60, 60], [0, 60], [80, 30], [30, 80]] as [number, number][],
    lines: [[0,1],[1,2],[2,3],[3,0],[1,4],[3,5]],
  },
];

const seededRandom = (seed: number) => {
  const x = Math.sin(seed * 9301 + 49297) * 49297;
  return x - Math.floor(x);
};

/** More stars spread across a taller virtual sky */
const bgStars = Array.from({ length: 180 }, (_, i) => ({
  left: `${seededRandom(i * 3 + 1) * 100}%`,
  topPercent: seededRandom(i * 3 + 2) * 250, // 0-250% of viewport
  size: 0.5 + seededRandom(i * 3 + 3) * 1.5,
  opacity: 0.1 + seededRandom(i * 3 + 4) * 0.3,
  delay: seededRandom(i * 3 + 5) * 6,
  color: seededRandom(i) > 0.75 ? gold : starWhite,
  depth: 0.3 + seededRandom(i * 7) * 0.7,
}));

/** Scroll speed multiplier — how fast the sky "rotates" relative to page scroll */
const SKY_SCROLL_SPEED = 0.35;

const FunDecorations = () => {
  const [hoveredConstellation, setHoveredConstellation] = useState<string | null>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; name: string } | null>(null);
  const [scrollY, setScrollY] = useState(0);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const smoothX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  const scrollMotion = useMotionValue(0);
  const smoothScroll = useSpring(scrollMotion, { stiffness: 50, damping: 25 });

  const handleMouseMove = useCallback((e: MouseEvent) => {
    const cx = (e.clientX / window.innerWidth - 0.5) * 2;
    const cy = (e.clientY / window.innerHeight - 0.5) * 2;
    mouseX.set(cx);
    mouseY.set(cy);
  }, [mouseX, mouseY]);

  const handleScroll = useCallback(() => {
    const y = window.scrollY;
    setScrollY(y);
    scrollMotion.set(y);
  }, [scrollMotion]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleMouseMove, handleScroll]);

  const skyOffset = scrollY * SKY_SCROLL_SPEED;

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 1 }}>

      {/* === BACKGROUND STARS — scroll with the sky === */}
      {bgStars.map((star, i) => {
        const baseTop = (star.topPercent / 100) * window.innerHeight;
        const scrolledTop = baseTop - skyOffset * (0.6 + star.depth * 0.4);
        // Wrap around for infinite sky feel
        const viewH = window.innerHeight;
        const wrappedTop = ((scrolledTop % (viewH * 2.5)) + viewH * 2.5) % (viewH * 2.5) - viewH * 0.25;

        return (
          <motion.div
            key={`star-${i}`}
            className="absolute rounded-full"
            style={{
              left: star.left,
              top: wrappedTop,
              width: star.size,
              height: star.size,
              background: star.color,
              boxShadow: star.size > 1.8 ? `0 0 ${star.size * 2}px ${star.color}` : undefined,
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

      {/* === CONSTELLATIONS — scroll through the sky === */}
      {realConstellations.map((c) => {
        const isHovered = hoveredConstellation === c.name;
        const w = c.scale * 100;
        const h = c.scale * 80;

        // Calculate scrolled position
        const baseTop = (c.offset.y / 100) * window.innerHeight;
        const scrolledTop = baseTop - skyOffset;
        // Check if visible (with some margin)
        const viewH = window.innerHeight;
        const topPx = scrolledTop;
        const isVisible = topPx > -viewH * 0.3 && topPx < viewH * 1.3;

        if (!isVisible) return null;

        return (
          <motion.svg
            key={c.name}
            className="absolute pointer-events-auto cursor-pointer"
            style={{
              left: `${c.offset.x}%`,
              top: topPx,
              width: `${w}vw`,
              height: `${h}vh`,
            }}
            viewBox="-5 -5 110 110"
            preserveAspectRatio="xMidYMid meet"
            animate={{
              opacity: isHovered ? 0.85 : 0.25,
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
            <rect x="-5" y="-5" width="110" height="110" fill="transparent" />

            {c.lines.map(([a, b], li) => (
              <motion.line
                key={`${c.name}-line-${li}`}
                x1={c.points[a][0]}
                y1={c.points[a][1]}
                x2={c.points[b][0]}
                y2={c.points[b][1]}
                stroke={gold}
                strokeWidth={isHovered ? 0.6 : 0.25}
                strokeOpacity={isHovered ? 0.9 : 0.6}
                animate={{
                  strokeWidth: isHovered ? 0.6 : 0.25,
                  strokeOpacity: isHovered ? 0.9 : 0.6,
                }}
                transition={{ duration: 0.4 }}
              />
            ))}

            {c.points.map(([x, y], pi) => (
              <motion.circle
                key={`${c.name}-star-${pi}`}
                cx={x}
                cy={y}
                fill={goldLight}
                animate={{
                  r: isHovered ? 2 : 0.9,
                  opacity: isHovered ? 1 : 0.75,
                }}
                transition={{ duration: 0.3, delay: pi * 0.03 }}
              />
            ))}

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

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

/**
 * Editorial circular composition for the hero. Keywords from the consulting
 * language are placed around a circle and connected by thin arcs — visually
 * communicating that none of them works without the others. One word (center)
 * sits in the middle as the binding idea, with a lime highlighter.
 */
const HumanComposition = () => {
  const { t } = useTranslation();
  const cx = 260;
  const cy = 260;
  const r = 165;

  const words = t("hero.circuit.nodes", { returnObjects: true }) as string[];
  const centerWord = t("hero.circuit.center");

  // Position each word evenly around the circle, starting at top.
  const points = words.map((label, i) => {
    const angle = (i / words.length) * Math.PI * 2 - Math.PI / 2;
    return {
      label,
      x: cx + Math.cos(angle) * r,
      y: cy + Math.sin(angle) * r,
      angle,
    };
  });

  // For text alignment, push labels slightly outward from the dot.
  const textOffset = 22;

  return (
    <div className="relative w-full max-w-[520px] mx-auto aspect-square">
      <svg viewBox="0 0 520 520" className="w-full h-full overflow-visible">
        <defs>
          <radialGradient id="canvasWash" cx="50%" cy="50%" r="50%">
            <stop offset="0%"  stopColor="hsl(0 0% 4% / 0.04)" stopOpacity="1" />
            <stop offset="100%" stopColor="hsl(0 0% 100% / 0)" stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Subtle canvas wash */}
        <motion.circle
          cx={cx} cy={cy} r="240"
          fill="url(#canvasWash)"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Outer ring — the system */}
        <motion.circle
          cx={cx} cy={cy} r={r}
          fill="none"
          stroke="hsl(var(--foreground))"
          strokeOpacity="0.18"
          strokeWidth="1"
          initial={{ pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        />

        {/* Interconnecting chords — every node to every node, very faint.
            This is the "one without the other doesn't work" gesture. */}
        <g stroke="hsl(var(--primary-deep))" strokeWidth="1" fill="none">
          {points.flatMap((a, i) =>
            points.slice(i + 1).map((b, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={a.x} y1={a.y} x2={b.x} y2={b.y}
                strokeOpacity="0.22"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 + (i * 0.06 + j * 0.04), ease: "easeOut" }}
              />
            ))
          )}
        </g>

        {/* Centre — Smysl, the binding idea, on a lime highlighter */}
        <motion.rect
          x={cx - 78} y={cy - 22} width="156" height="44" rx="4"
          fill="hsl(var(--primary))"
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6, ease: [0.22, 1, 0.36, 1] }}
          style={{ transformOrigin: `${cx}px ${cy}px` }}
        />
        <motion.text
          x={cx} y={cy + 16}
          textAnchor="middle"
          className="fill-foreground"
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "44px",
            fontWeight: 600,
            letterSpacing: "-0.03em",
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.7 }}
        >
          {centerWord}
        </motion.text>

        {/* Nodes + labels around the circle */}
        {points.map((p, i) => {
          // Push label outward from centre
          const lx = cx + Math.cos(p.angle) * (r + textOffset);
          const ly = cy + Math.sin(p.angle) * (r + textOffset);

          // Choose anchor based on horizontal position
          let anchor: "start" | "middle" | "end" = "middle";
          if (lx < cx - 20) anchor = "end";
          else if (lx > cx + 20) anchor = "start";

          // Slight vertical baseline correction for top/bottom labels
          const dy = p.y < cy - 20 ? -6 : p.y > cy + 20 ? 16 : 5;

          return (
            <g key={p.label}>
              {/* Node dot */}
              <motion.circle
                cx={p.x} cy={p.y} r="6"
                fill="hsl(var(--background))"
                stroke="hsl(var(--foreground))"
                strokeWidth="1.5"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                style={{ transformOrigin: `${p.x}px ${p.y}px` }}
              />
              {/* Label */}
              <motion.text
                x={lx} y={ly + dy}
                textAnchor={anchor}
                className="fill-foreground"
                style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "22px",
                  fontWeight: 500,
                  letterSpacing: "-0.02em",
                }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.9 }}
                transition={{ duration: 0.6, delay: 1.3 + i * 0.08 }}
              >
                {p.label}
              </motion.text>
            </g>
          );
        })}
      </svg>
    </div>
  );
};

export default HumanComposition;

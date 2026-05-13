import { motion } from "framer-motion";

/**
 * Living company diagram. Six labelled nodes — the inner system of a tech
 * company — connected by hairlines. Three nodes pulse in lime as "points of
 * change". Pure SVG, no images, scales with its container.
 */
const CircuitDiagram = () => {
  // Layout on a 520 x 520 viewBox
  const nodes = [
    { id: "strategie",   label: "Strategie",   x: 90,  y: 90,  active: false },
    { id: "lide",        label: "Lidé",        x: 430, y: 90,  active: true  },
    { id: "procesy",     label: "Procesy",     x: 60,  y: 270, active: false },
    { id: "komunikace",  label: "Komunikace",  x: 260, y: 270, active: true  },
    { id: "leadership",  label: "Leadership",  x: 460, y: 270, active: false },
    { id: "vykon",       label: "Výkon",       x: 90,  y: 450, active: false },
    { id: "rust",        label: "Růst",        x: 430, y: 450, active: true  },
  ];

  const links: [string, string, boolean?][] = [
    ["strategie", "komunikace"],
    ["strategie", "procesy"],
    ["lide", "komunikace"],
    ["lide", "leadership"],
    ["procesy", "komunikace"],
    ["komunikace", "leadership"],
    ["komunikace", "vykon"],
    ["leadership", "rust"],
    ["procesy", "vykon"],
    ["vykon", "rust"],
    ["strategie", "lide", true], // dashed = bottleneck
    ["procesy", "leadership", true],
  ];

  const byId = Object.fromEntries(nodes.map(n => [n.id, n]));

  return (
    <div className="relative w-full max-w-[560px] mx-auto aspect-square">
      <svg viewBox="0 0 520 540" className="w-full h-full">
        {/* Background hairline circle hint */}
        <circle cx="260" cy="270" r="220" fill="none" stroke="hsl(var(--border))" strokeWidth="1" strokeDasharray="2 6" opacity="0.6" />

        {/* Links */}
        {links.map(([a, b, dashed], i) => {
          const A = byId[a], B = byId[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={A.x} y1={A.y} x2={B.x} y2={B.y}
              stroke={dashed ? "hsl(var(--foreground))" : "hsl(var(--primary-deep))"}
              strokeOpacity={dashed ? 0.35 : 0.55}
              strokeWidth="1"
              strokeDasharray={dashed ? "4 5" : undefined}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.3 + i * 0.08, ease: "easeOut" }}
            />
          );
        })}

        {/* Nodes */}
        {nodes.map((n, i) => (
          <g key={n.id}>
            <motion.circle
              cx={n.x} cy={n.y}
              r={n.active ? 9 : 6}
              fill={n.active ? "hsl(var(--primary))" : "hsl(var(--background))"}
              stroke="hsl(var(--foreground))"
              strokeWidth={n.active ? 1.5 : 1.25}
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              style={{ transformOrigin: `${n.x}px ${n.y}px` }}
            />
            {n.active && (
              <motion.circle
                cx={n.x} cy={n.y} r={9}
                fill="none"
                stroke="hsl(var(--primary))"
                strokeWidth="1.5"
                animate={{ r: [9, 22], opacity: [0.7, 0] }}
                transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut", delay: i * 0.5 }}
              />
            )}
            <motion.text
              x={n.x}
              y={n.y + (n.y > 380 ? 28 : n.y < 150 ? -16 : -16)}
              textAnchor={n.x < 120 ? "start" : n.x > 400 ? "end" : "middle"}
              className="fill-foreground"
              style={{ fontFamily: "var(--font-mono)", fontSize: "11px", letterSpacing: "0.08em", textTransform: "uppercase" }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.1 }}
            >
              {n.label}
            </motion.text>
          </g>
        ))}

        {/* Diagnostic ticks at corners */}
        <g stroke="hsl(var(--foreground))" strokeWidth="1" opacity="0.4">
          <line x1="0" y1="0" x2="14" y2="0" />
          <line x1="0" y1="0" x2="0" y2="14" />
          <line x1="520" y1="0" x2="506" y2="0" />
          <line x1="520" y1="0" x2="520" y2="14" />
          <line x1="0" y1="540" x2="14" y2="540" />
          <line x1="0" y1="540" x2="0" y2="526" />
          <line x1="520" y1="540" x2="506" y2="540" />
          <line x1="520" y1="540" x2="520" y2="526" />
        </g>

        {/* Tiny mono caption */}
        <text x="14" y="532" className="fill-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", opacity: 0.45 }}>
          INNER.SYSTEM / LIVE
        </text>
        <text x="506" y="532" textAnchor="end" className="fill-foreground" style={{ fontFamily: "var(--font-mono)", fontSize: "9px", letterSpacing: "0.25em", opacity: 0.45 }}>
          v.2026
        </text>
      </svg>
    </div>
  );
};

export default CircuitDiagram;

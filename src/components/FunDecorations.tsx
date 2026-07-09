/**
 * Background canvas — quiet, editorial, human.
 * Warm radial washes only. No grid, no circuit traces, no nodes — those
 * read as "tech/IT". We're a consulting studio.
 */
const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* Warm cream wash — top */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(60 11% 94% / 0.9), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Soft lime glow — high left */}
      <div
        className="absolute top-[18%] -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(16 100% 70% / 0.10), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Petrol depth — bottom right */}
      <div
        className="absolute bottom-[10%] -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(182 82% 25% / 0.07), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default FunDecorations;

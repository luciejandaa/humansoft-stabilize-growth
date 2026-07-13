/**
 * Background canvas — warm, organic, human. Slow-drifting blobs in the
 * three-accent palette (coral, petrol, mustard) instead of a flat single-hue
 * wash, so the page has some quiet life to it even before content loads.
 */
const FunDecorations = () => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none" style={{ zIndex: 0 }}>
      {/* White wash — top */}
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[1200px] h-[700px]"
        style={{
          background:
            "radial-gradient(ellipse at center, hsl(0 0% 100% / 0.9), transparent 70%)",
          filter: "blur(20px)",
        }}
      />

      {/* Soft coral glow — high left */}
      <div
        className="absolute top-[18%] -left-40 w-[600px] h-[600px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle, hsl(17.6 100% 58.6% / 0.09), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Petrol depth — bottom right */}
      <div
        className="absolute bottom-[10%] -right-40 w-[700px] h-[700px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle, hsl(192 45% 20% / 0.06), transparent 65%)",
          filter: "blur(60px)",
          animationDelay: "-8s",
        }}
      />

      {/* Mustard warmth — mid centre, very subtle */}
      <div
        className="absolute top-[52%] left-[45%] w-[500px] h-[500px] rounded-full animate-blob"
        style={{
          background:
            "radial-gradient(circle, hsl(42 88% 58% / 0.06), transparent 65%)",
          filter: "blur(55px)",
          animationDelay: "-14s",
        }}
      />
    </div>
  );
};

export default FunDecorations;

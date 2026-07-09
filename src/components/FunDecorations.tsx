/**
 * Background canvas — quiet, editorial, human.
 * Only white and coral tones. No grey, no petrol.
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
        className="absolute top-[18%] -left-40 w-[600px] h-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(17.6 100% 58.6% / 0.08), transparent 65%)",
          filter: "blur(50px)",
        }}
      />

      {/* Subtle coral depth — bottom right */}
      <div
        className="absolute bottom-[10%] -right-40 w-[700px] h-[700px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, hsl(17.6 100% 58.6% / 0.05), transparent 65%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
};

export default FunDecorations;

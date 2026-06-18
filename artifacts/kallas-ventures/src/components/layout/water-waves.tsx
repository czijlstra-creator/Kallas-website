export function WaterWaves() {
  return (
    <>
      <div
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/hero-waves.png')" }}
      />
      {/* Dark overlay at bottom for wave depth, light fade at top for text readability */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(14,27,77,0.05) 25%, rgba(14,27,77,0.15) 45%, rgba(14,27,77,0.65) 70%, rgba(8,18,60,0.82) 100%)",
        }}
      />
    </>
  );
}

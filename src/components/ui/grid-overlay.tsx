export function GridOverlay() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.04] dark:opacity-[0.04]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px)," +
          "linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        maskImage:
          "linear-gradient(transparent, black 15%, black 85%, transparent)",
        WebkitMaskImage:
          "linear-gradient(transparent, black 15%, black 85%, transparent)",
      }}
    />
  );
}

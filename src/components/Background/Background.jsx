export default function Background() {
  return (
    <div className="fixed inset-0 -z-50 overflow-hidden">
      {/* Blue Glow */}
      <div
        className="
          absolute
          top-20
          left-20
          w-96
          h-96
          rounded-full
          bg-blue-500/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* Purple Glow */}
      <div
        className="
          absolute
          bottom-20
          right-20
          w-96
          h-96
          rounded-full
          bg-violet-500/20
          blur-[120px]
          animate-pulse
        "
      />

      {/* Grid */}
      <div
        className="
          absolute
          inset-0
          bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)]
          bg-[size:50px_50px]
        "
      />
    </div>
  );
}
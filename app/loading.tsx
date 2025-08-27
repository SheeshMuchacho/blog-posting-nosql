// app/loading.tsx
"use client";

export default function Loading() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#144272]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.15),_transparent_60%)] pointer-events-none" />

      {/* glass panel */}
      <div className="
        relative z-10
        flex flex-col items-center justify-center gap-4
        rounded-3xl p-10
        bg-white/10
        border border-white/20
        backdrop-blur-xl
        shadow-[0_10px_40px_rgba(0,0,0,0.25)]
      ">
        <span className="w-14 h-14 bg-white inline-block animate-loading shadow-[0_0_24px_rgba(255,255,255,0.6)]" />
        <p className="text-white/80 text-sm tracking-wide">Loading…</p>
      </div>
    </div>
  );
}

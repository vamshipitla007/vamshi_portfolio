// src/components/layout/Container.tsx
export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative max-w-6xl mx-auto px-6">
      {/* Radial Glow Background */}
      {/* Glow background */}
      <div className="absolute w-[625px] h-[400px] rounded-full bg-purple-600 opacity-30 blur-3xl ml-30" />

      {/* Outer circle ring */}
      <div className="absolute w-[625px] h-[400px] rounded-full  border-[#7127BA] ml-30" />

      {children}
    </div>
  );
}

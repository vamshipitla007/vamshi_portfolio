export function Loader({ label = 'Loading your space…' }: { label?: string }) {
  return (
    <div className="flex h-full items-center justify-center rounded-3xl border border-white/10 bg-slate-900/70 p-8 text-center text-sm text-slate-300">
      <div className="flex flex-col items-center gap-3">
        <div className="h-10 w-10 animate-spin rounded-full border-2 border-cyan-400 border-t-transparent" />
        <span>{label}</span>
      </div>
    </div>
  );
}

export function ChatSkeleton() {
  return (
    <div className="space-y-3 p-4">
      <div className="h-12 w-2/3 animate-pulse rounded-2xl bg-slate-800/80" />
      <div className="h-20 animate-pulse rounded-3xl bg-slate-800/80" />
      <div className="ml-auto h-16 w-4/5 animate-pulse rounded-3xl bg-slate-800/80" />
    </div>
  );
}

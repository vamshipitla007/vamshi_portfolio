interface EmptyStateProps {
  title: string;
  description: string;
  action?: React.ReactNode;
}

export function EmptyState({ title, description, action }: EmptyStateProps) {
  return (
    <div className="rounded-3xl border border-dashed border-white/15 bg-slate-900/50 p-8 text-center text-sm text-slate-400">
      <h3 className="text-lg font-semibold text-slate-100">{title}</h3>
      <p className="mt-2">{description}</p>
      {action ? <div className="mt-4 flex justify-center">{action}</div> : null}
    </div>
  );
}

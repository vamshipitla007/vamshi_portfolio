interface BadgeProps {
  children: React.ReactNode;
  tone?: 'cyan' | 'slate' | 'emerald';
}

export function Badge({ children, tone = 'cyan' }: BadgeProps) {
  const tones = {
    cyan: 'bg-cyan-500/15 text-cyan-300',
    slate: 'bg-slate-800 text-slate-300',
    emerald: 'bg-emerald-500/15 text-emerald-300',
  };

  return <span className={`rounded-full px-3 py-1 text-xs font-medium ${tones[tone]}`}>{children}</span>;
}

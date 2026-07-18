interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export function Card({ children, className = '' }: CardProps) {
  return <div className={`rounded-3xl border border-white/10 bg-slate-900/80 shadow-2xl shadow-black/20 ${className}`}>{children}</div>;
}

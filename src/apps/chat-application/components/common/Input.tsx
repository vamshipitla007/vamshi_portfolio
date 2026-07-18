import type { InputHTMLAttributes, ReactNode } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  icon?: ReactNode;
}

export function Input({ label, className = '', icon, ...props }: InputProps) {
  return (
    <label className="flex flex-col gap-2 text-sm text-slate-300">
      {label ? <span>{label}</span> : null}
      <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 transition focus-within:border-cyan-400">
        {icon ? <span className="text-slate-400">{icon}</span> : null}
        <input
          className={`w-full bg-transparent outline-none ${className}`}
          {...props}
        />
      </div>
    </label>
  );
}

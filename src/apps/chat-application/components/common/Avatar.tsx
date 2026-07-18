interface AvatarProps {
  src?: string;
  name: string;
  size?: 'sm' | 'md' | 'lg';
  status?: 'online' | 'offline' | 'away';
}

export function Avatar({ src, name, size = "md", status }: AvatarProps) {
  const sizeClasses = {
    sm: "h-10 w-10",
    md: "h-12 w-12",
    lg: "h-16 w-16",
  };

  return (
    <div
      className={`relative ${sizeClasses[size]} shrink-0 overflow-hidden rounded-full`}
    >
      <img
        src={
          src ||
          "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80"
        }
        alt={name}
        className="h-full w-full object-cover"
      />

      {status && (
        <span
          className={`absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-slate-950 ${
            status === "online"
              ? "bg-emerald-400"
              : status === "away"
              ? "bg-amber-400"
              : "bg-slate-500"
          }`}
        />
      )}
    </div>
  );
}

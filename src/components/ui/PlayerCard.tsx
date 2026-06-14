import type { Player } from "@/data/gamingData";

type Props = { player: Player };

export default function PlayerCard({ player }: Props) {
  return (
    <div className="group relative neon-border glass rounded-2xl p-3 overflow-hidden transform transition hover:-translate-y-2">
      <div className="relative aspect-[3/4] rounded-xl overflow-hidden">
        <img
          src={player.photo}
          alt={player.nick}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute -bottom-6 left-4 bg-gradient-to-r from-primary to-electric text-xs px-3 py-1 rounded-full">
          {player.role}
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between">
        <div>
          <div className="font-bold">{player.nick}</div>
          <div className="text-xs text-gray-300">
            {player.country} • {player.kills.toLocaleString()} kills
          </div>
        </div>
        <div className="text-right">
          <div className="text-lg font-bold">{player.winRate}%</div>
          <div className="text-xs text-gray-400">Win Rate</div>
        </div>
      </div>
      <div className="mt-3 flex gap-3 absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {player.socials.map((s) => (
          <a
            key={s.name}
            href={s.url}
            aria-label={`${player.nick} on ${s.name}`}
            className="w-8 h-8 rounded-full glass flex items-center justify-center text-sm"
          >
            {s.name[0].toUpperCase()}
          </a>
        ))}
      </div>
    </div>
  );
}

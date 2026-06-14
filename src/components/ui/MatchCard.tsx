import type { Match } from "@/data/gamingData"

type Props = { match: Match }

export default function MatchCard({ match }: Props){
  return (
    <div className="glass neon-border rounded-xl p-4 relative ">
      <div className="flex items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <img src={match.team1.logo} alt={match.team1.name} className="w-12 h-12 rounded-full object-cover"/>
          <div>
            <div className="font-semibold">{match.team1.name}</div>
            <div className="text-xs text-gray-300">{match.date} • {match.time}</div>
          </div>
        </div>

        <div className="text-center">
          <div className="font-bold text-lg">VS</div>
          <div className="text-sm text-gray-400">{match.tournament}</div>
        </div>

        <div className="flex items-center gap-3">
          <div className="text-right">
            <div className="font-semibold">{match.team2.name}</div>
            <div className="text-xs text-gray-300">{match.time}</div>
          </div>
          <img src={match.team2.logo} alt={match.team2.name} className="w-12 h-12 rounded-full object-cover"/>
        </div>
      </div>

      <div className="absolute -top-3 left-4">
        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${match.status==='LIVE'? 'bg-red-500 live-badge':'bg-white/5'}`}>{match.status}</span>
      </div>
    </div>
  )
}

import type { Tournament } from '@/data/gamingData'

type Props = { tournament: Tournament }

export default function TournamentCard({ tournament }: Props){
  return (
    <article className="neon-border glass rounded-2xl overflow-hidden shadow-2xl">
      <div className="relative h-44 overflow-hidden">
        <img src={tournament.image} alt={tournament.name} className="w-full h-full object-cover transition-transform hover:scale-110"/>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg">{tournament.name}</h3>
        <p className="text-sm text-gray-300 mt-1">{tournament.category} • {tournament.date}</p>
        <div className="mt-3 flex items-center justify-between">
          <div className="text-sm">Prize: <span className="font-semibold">{tournament.prizePool}</span></div>
          <button aria-label={`Register for ${tournament.name}`} className="px-3 py-2 rounded-md btn-glow bg-gradient-to-r from-primary to-electric text-sm font-semibold">Register</button>
        </div>
      </div>
    </article>
  )
}

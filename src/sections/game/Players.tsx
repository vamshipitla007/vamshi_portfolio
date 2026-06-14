import PlayerCard from '@/components/ui/PlayerCard'
import { PLAYERS } from '@/data/gamingData'


export default function Players(){
  return (
    <section id="teams" className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Top Players</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {PLAYERS.map(p=> (
          <PlayerCard key={p.id} player={p} />
        ))}
      </div>
    </section>
  )
}

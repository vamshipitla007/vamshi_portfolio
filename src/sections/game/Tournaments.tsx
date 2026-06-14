import TournamentCard from '@/components/ui/TournamentCard'
import { TOURNAMENTS } from '@/data/gamingData'

export default function Tournaments(){
  return (
    <section id="tournaments" className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Tournament Highlights</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {TOURNAMENTS.map(t=> (
          <TournamentCard key={t.id} tournament={t} />
        ))}
      </div>
    </section>
  )
}

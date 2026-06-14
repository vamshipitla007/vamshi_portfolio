/* eslint-disable @typescript-eslint/no-explicit-any */
import MatchCard from '@/components/ui/MatchCard'
import { MATCHES } from '@/data/gamingData'
import { useState } from 'react'


export default function MatchSchedule(){
  const [filter, setFilter] = useState<'ALL'|'LIVE'|'UPCOMING'>('ALL')
  const matches = MATCHES.filter(m => filter==='ALL' ? true : m.status===filter)

  return (
    <section id="schedule" className="mt-12">
      <h2 className="text-3xl font-semibold mb-4">Match Schedule</h2>
      <div className="flex gap-3 mb-6">
        {['ALL','LIVE','UPCOMING'].map(f=> (
          <button key={f} onClick={()=>setFilter(f as any)} className={`px-4 py-2 rounded-md ${filter===f? 'bg-gradient-to-r from-primary to-electric':'glass'}`}>{f}</button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {matches.map(m=> (
          <MatchCard key={m.id} match={m} />
        ))}
      </div>
    </section>
  )
}

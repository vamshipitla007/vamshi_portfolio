import React from 'react'

function useCount(to:number, duration=1200){
  const [val,setVal] = React.useState(0)
  React.useEffect(()=>{
    let start = 0
    const step = Math.max(1, Math.round(to/60))
    const iv = setInterval(()=>{
      start += step
      if(start>=to){ setVal(to); clearInterval(iv) } else setVal(start)
    }, Math.max(12, Math.round(duration/60)))
    return ()=> clearInterval(iv)
  },[to,duration])
  return val
}

export default function Statistics(){
  const a = useCount(10000000)
  const b = useCount(850)
  const c = useCount(120)
  const d = useCount(75000000)
  const e = useCount(99)

  return (
    <section id="stats" className="mt-12">
      <h2 className="text-3xl font-semibold mb-6">Stats & Achievements</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
        <div className="glass p-6 rounded-xl text-center">
          <div className="text-2xl font-extrabold">{a.toLocaleString()}+</div>
          <div className="text-sm text-gray-300">Active Players</div>
        </div>
        <div className="glass p-6 rounded-xl text-center">
          <div className="text-2xl font-extrabold">{b}+</div>
          <div className="text-sm text-gray-300">International Tournaments</div>
        </div>
        <div className="glass p-6 rounded-xl text-center">
          <div className="text-2xl font-extrabold">{c}</div>
          <div className="text-sm text-gray-300">Countries</div>
        </div>
        <div className="glass p-6 rounded-xl text-center">
          <div className="text-2xl font-extrabold">${(d/1000000).toFixed(0)}M</div>
          <div className="text-sm text-gray-300">Prize Money</div>
        </div>
        <div className="glass p-6 rounded-xl text-center">
          <div className="text-2xl font-extrabold">{e}%</div>
          <div className="text-sm text-gray-300">Positive Reviews</div>
        </div>
      </div>
    </section>
  )
}

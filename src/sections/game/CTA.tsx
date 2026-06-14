
export default function CTA(){
  return (
    <section className="mt-12 py-12 rounded-2xl relative overflow-hidden" style={{background: 'linear-gradient(90deg, rgba(124,58,237,0.12), rgba(6,182,212,0.06))'}}>
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-4 gradient-text">ARE YOU READY TO BECOME A LEGEND?</h2>
        <p className="text-gray-300 mb-6">Sign up for tournaments, join teams, and rise to the top. Your legend starts now.</p>
        <div className="flex justify-center gap-4">
          <button className="px-8 py-4 rounded-full bg-gradient-to-r from-primary to-electric text-lg font-semibold shadow-xl">Register Now</button>
          <button className="px-6 py-4 rounded-full glass">Learn More</button>
        </div>
      </div>
    </section>
  )
}

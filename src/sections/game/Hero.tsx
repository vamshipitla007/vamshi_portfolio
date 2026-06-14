
export default function Hero(){
const heroImg =
  "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=1200&q=80";
  return (
    <section className="relative pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="z-10 fade-in">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight gradient-text">ENTER THE ULTIMATE BATTLEFIELD</h1>
            <p className="mt-4 text-gray-300 max-w-xl">Experience cinematic esports action, compete in global tournaments, and join a community of legends. Precision, speed and strategy collide.</p>
            <div className="mt-6 flex flex-wrap gap-4">
              <button className="px-6 py-3 rounded-md bg-gradient-to-r from-primary to-electric shadow-lg hover:scale-105 transition" aria-label="Join Tournament">Join Tournament</button>
              <button className="px-6 py-3 rounded-md border border-white/10 glass" aria-label="Watch Live">Watch Live</button>
            </div>

            <div className="mt-8 flex gap-4">
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-2xl font-bold">10M+</div>
                <div className="text-xs text-gray-300">Players</div>
              </div>
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-2xl font-bold">500+</div>
                <div className="text-xs text-gray-300">Tournaments</div>
              </div>
              <div className="glass px-6 py-4 rounded-lg text-center">
                <div className="text-2xl font-bold">$50M</div>
                <div className="text-xs text-gray-300">Prize Pool</div>
              </div>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="absolute -left-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-tr from-primary/20 to-electric/20 blur-3xl opacity-60"></div>
            <div className="absolute right-0 bottom-0 w-60 h-60 rounded-full bg-gradient-to-br from-gamingred/20 to-primary/20 blur-2xl opacity-40"></div>
            <div className="relative transform hover:scale-105 transition-all animate-float hero-img-shadow rounded-3xl overflow-hidden">
              <img src={heroImg} alt="Esports player" className="w-[420px] h-[560px] object-cover rounded-3xl"/>
              <div className="absolute inset-0 pointer-events-none" style={{mixBlendMode:'overlay'}}></div>
            </div>
          </div>
        </div>
      </div>

      {/* subtle background particles */}
      <div className="absolute inset-0 pointer-events-none -z-10 particles"></div>
    </section>
  )
}

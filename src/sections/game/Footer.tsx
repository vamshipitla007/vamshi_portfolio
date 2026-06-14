
export default function Footer(){
  return (
    <footer className="mt-12 bg-black/60 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div>
          <div className="text-2xl font-bold gradient-text">ELITE<span className="text-gamingred">.</span></div>
          <p className="text-sm text-gray-300 mt-3">World-class esports tournaments, community and pro teams. Built for gamers who push limits.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Navigation</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Home</li>
            <li>Events</li>
            <li>Teams</li>
            <li>Schedule</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Community</h4>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>Discord</li>
            <li>Twitch</li>
            <li>YouTube</li>
            <li>Instagram</li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Newsletter</h4>
          <p className="text-sm text-gray-300 mb-2">Get the latest news and event invites.</p>
          <div className="flex gap-2">
            <input aria-label="Email" placeholder="Your email" className="px-3 py-2 rounded-md bg-white/5 w-full" />
            <button className="px-4 py-2 rounded-md bg-gradient-to-r from-primary to-electric">Subscribe</button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8 border-t border-white/5 pt-6 text-sm text-gray-400 flex items-center justify-between">
        <div>© {new Date().getFullYear()} ELITE. All rights reserved.</div>
        <div className="flex items-center gap-4">
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center">F</div>
          <div className="w-8 h-8 rounded-full glass flex items-center justify-center">T</div>
        </div>
      </div>
    </footer>
  )
}

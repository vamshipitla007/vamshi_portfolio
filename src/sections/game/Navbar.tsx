import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

const links = ['Home','Tournaments','Teams','Schedule','Stats','Contact']

export default function Navbar(){
  const [open,setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(()=>{
    const onScroll = ()=> setScrolled(window.scrollY>20)
    window.addEventListener('scroll', onScroll)
    return ()=> window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <header className={`fixed w-full z-50 transition-all ${scrolled? 'backdrop-blur-md bg-black/40 border-b border-white/5':''}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4">
            <div className="text-2xl font-bold gradient-text">ELITE<span className="text-gamingred">.</span></div>
            <nav className="hidden md:flex items-center gap-6">
              {links.map(l=> (
                <a key={l} href={`#${l.toLowerCase()}`} className="nav-link text-sm text-gray-200/90 hover:text-white relative">
                  <span>{l}</span>
                  <span className="block nav-underline mt-1 transition-transform origin-left"></span>
                </a>
              ))}
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <button className="hidden md:inline-flex items-center gap-2 px-4 py-2 rounded-md text-sm font-semibold bg-gradient-to-r from-primary to-electric shadow-md hover:scale-105 transform transition">
              Join Battle
            </button>
            <button onClick={()=>setOpen(!open)} className="md:hidden p-2 rounded-md bg-white/5" aria-label="Toggle menu">
              {open? <X/> : <Menu/>}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all ${open? 'max-h-80 py-4':'max-h-0 overflow-hidden'}`}>
        <div className="px-4 space-y-3">
          {links.map(l=> (
            <a key={l} href={`#${l.toLowerCase()}`} onClick={()=>setOpen(false)} className="block py-2 px-3 rounded-md glass">
              {l}
            </a>
          ))}
          <div className="pt-2">
            <button className="w-full px-4 py-3 rounded-md bg-gradient-to-r from-primary to-electric">Join Battle</button>
          </div>
        </div>
      </div>
    </header>
  )
}

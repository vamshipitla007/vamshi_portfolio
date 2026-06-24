import { Link } from 'react-router-dom';
import { Building2, Mail, Phone } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-slate-950/90 py-16 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-8">
        <div className="space-y-4">
          <div className="flex items-center gap-3 text-white">
            <div className="flex h-12 w-12 items-center justify-center rounded-3xl bg-gradient-to-br from-accent to-orange-400 text-xl shadow-lg shadow-accent/25">
              E
            </div>
            <div>
              <p className="text-xl font-semibold">EstateFlow</p>
              <p className="text-sm text-slate-400">Luxury property marketplace for modern buyers and sellers.</p>
            </div>
          </div>
          <div className="space-y-3 text-sm text-slate-400">
            <p className="flex items-center gap-3">
              <Building2 className="h-4 w-4" /> 230 Luxury Ave, San Francisco, CA
            </p>
            <p className="flex items-center gap-3">
              <Mail className="h-4 w-4" /> hello@estateflow.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="h-4 w-4" /> +1 (800) 555-0198
            </p>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Explore</p>
          <div className="space-y-3 text-sm text-slate-300">
            <Link to="/" className="block hover:text-white">Home</Link>
            <Link to="/listings" className="block hover:text-white">Listings</Link>
            <Link to="/agents" className="block hover:text-white">Agents</Link>
            <a href="#contact" className="block hover:text-white">Contact</a>
          </div>
        </div>
        <div>
          <p className="mb-4 text-sm uppercase tracking-[0.3em] text-accent">Follow</p>
          <div className="grid gap-3 text-sm text-slate-300">
            <a href="#" className="block hover:text-white">Instagram</a>
            <a href="#" className="block hover:text-white">LinkedIn</a>
            <a href="#" className="block hover:text-white">Dribbble</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

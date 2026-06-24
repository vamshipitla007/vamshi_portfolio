import { Outlet } from 'react-router-dom';
import { Footer } from '../components/Footer';
import { Navbar } from '../components/Navbar';

export function RealEstateLayout() {
  return (
    <div className="min-h-screen bg-[radial-gradient(circle_at_top_left,_rgba(255,107,53,0.12),_transparent_30%),var(--bg-primary)] text-slate-950 transition duration-300 dark:bg-slate-950 dark:text-white">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

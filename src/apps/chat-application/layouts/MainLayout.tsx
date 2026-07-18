import { NavLink } from 'react-router-dom';
import { Bell, Compass, LogOut, Menu, MessageCircle, Search, Settings, UserCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';
import { useChat } from '../context/ChatContext';
import { Button } from '../components/common/Button';
import { Avatar } from '../components/common/Avatar';
import { APP_ROUTES } from '../constants';

interface MainLayoutProps {
  children: React.ReactNode;
}

const navItems = [
  { to: APP_ROUTES.dashboard, label: 'Messages', icon: MessageCircle },
  { to: APP_ROUTES.contacts, label: 'Contacts', icon: Compass },
  { to: APP_ROUTES.profile, label: 'Profile', icon: UserCircle2 },
  { to: APP_ROUTES.settings, label: 'Settings', icon: Settings },
];

export function MainLayout({ children }: MainLayoutProps) {
  const { auth, theme, toggleTheme, logout } = useChat();

  return (
    <div className="chat-app-shell min-h-screen bg-slate-950 text-slate-100">
      <header className="border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-cyan-500/15 p-2 text-cyan-300">
              <MessageCircle size={18} />
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-100">Chat Studio</p>
              <p className="text-xs text-slate-400">Modern messaging experience</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" className="hidden sm:inline-flex" onClick={toggleTheme}>{theme === 'dark' ? '☀️' : '🌙'}</Button>
            <button className="rounded-2xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/10">
              <Bell size={18} />
            </button>
            <button className="rounded-2xl border border-white/10 p-2.5 text-slate-400 hover:bg-white/10 lg:hidden">
              <Menu size={18} />
            </button>
          </div>
        </div>
      </header>

      <div className="mx-auto flex flex-col gap-4 px-3 py-4 sm:px-6 lg:flex-row lg:px-8">
        <aside className="hidden w-64 shrink-0 rounded-3xl border border-white/10 bg-slate-900/70 p-3 lg:block">
          <div className="flex items-center justify-between px-2 pb-4">
            <div className="flex items-center gap-3">
              <Avatar src={auth.user?.avatar} name={auth.user?.name ?? 'Guest'} size="md" status="online" />
              <div>
                <p className="font-semibold text-slate-100">{auth.user?.name ?? 'Guest'}</p>
                <p className="text-sm text-slate-400">{auth.user?.role ?? 'Member'}</p>
              </div>
            </div>
            <button onClick={logout} className="rounded-full p-2 text-slate-400 hover:bg-white/10"><LogOut size={16} /></button>
          </div>

          <div className="mb-4 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-800/70 px-3 py-2 text-sm text-slate-400">
            <Search size={14} />
            <input className="w-full bg-transparent outline-none" placeholder="Search" />
          </div>

          <nav className="space-y-1">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink key={to} to={to} className={({ isActive }) => `flex items-center gap-3 rounded-2xl px-3 py-2.5 text-sm transition ${isActive ? 'bg-cyan-500/15 text-cyan-300' : 'text-slate-400 hover:bg-white/10 hover:text-slate-100'}`}>
                <Icon size={16} />
                {label}
              </NavLink>
            ))}
          </nav>
        </aside>

        <motion.main initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} className="flex-1 rounded-3xl border border-white/10 bg-slate-900/70 p-3 sm:p-4 lg:p-6">
          {children}
        </motion.main>
      </div>

      <div className="mx-auto flex max-w-7xl gap-2 px-3 pb-4 lg:hidden">
        {navItems.map(({ to, label, icon: Icon }) => (
          <NavLink key={to} to={to} className={({ isActive }) => `flex flex-1 flex-col items-center gap-1 rounded-2xl px-3 py-2 text-xs ${isActive ? 'bg-cyan-500/15 text-cyan-300' : 'bg-slate-900/70 text-slate-400'}`}>
            <Icon size={16} />
            {label}
          </NavLink>
        ))}
      </div>
    </div>
  );
}

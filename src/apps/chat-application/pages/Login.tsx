import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Eye, EyeOff, Mail } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { APP_ROUTES } from '../constants';

export function Login() {
  const { loginUser, isLoading } = useChat();
  const navigate = useNavigate();
  const [email, setEmail] = useState('maya@example.com');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await loginUser(email, password, rememberMe);
    navigate(APP_ROUTES.dashboard);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#020617_0%,#111827_100%)] p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Welcome back</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-100">Sign in to Chat Studio</h1>
          <p className="mt-2 text-sm text-slate-400">Your polished workspace for connections and conversations.</p>
        </div>
        <div className="space-y-4">
          <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" icon={<Mail size={16} />} />
          <div className="relative">
            <Input label="Password" type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-11 text-slate-400">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="flex items-center justify-between text-sm text-slate-400">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe((prev) => !prev)} className="rounded border-white/10 bg-slate-800" />
              Remember me
            </label>
            <Link to={APP_ROUTES.forgotPassword} className="text-cyan-300">Forgot password?</Link>
          </div>
          <Button type="submit" className="w-full" disabled={isLoading}>{isLoading ? 'Signing in...' : 'Sign in'}</Button>
        </div>
        <p className="mt-5 text-center text-sm text-slate-400">
          New here? <Link to={APP_ROUTES.signup} className="font-semibold text-cyan-300">Create an account</Link>
        </p>
      </form>
    </div>
  );
}

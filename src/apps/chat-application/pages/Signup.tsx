import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Camera, Eye, EyeOff } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { APP_ROUTES } from '../constants';

export function Signup() {
  const { signupUser, isLoading } = useChat();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: 'Lina Ortega', email: 'lina@example.com', phone: '+1 555 0199', password: 'password123', confirmPassword: 'password123' });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    if (form.password !== form.confirmPassword) {
      return;
    }
    await signupUser({ ...form, avatar: 'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?auto=format&fit=crop&w=400&q=80' });
    navigate(APP_ROUTES.dashboard);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#020617_0%,#111827_100%)] p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-2xl rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Create account</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-100">Join Chat Studio</h1>
        </div>
        <div className="mb-5 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full border border-dashed border-cyan-400/50 bg-slate-800/80 text-cyan-300">
            <Camera size={24} />
          </div>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          <Input label="Full name" value={form.name} onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))} />
          <Input label="Email" type="email" value={form.email} onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))} />
          <Input label="Phone" value={form.phone} onChange={(e) => setForm((prev) => ({ ...prev, phone: e.target.value }))} />
          <div className="relative">
            <Input label="Password" type={showPassword ? 'text' : 'password'} value={form.password} onChange={(e) => setForm((prev) => ({ ...prev, password: e.target.value }))} />
            <button type="button" onClick={() => setShowPassword((prev) => !prev)} className="absolute right-3 top-11 text-slate-400">
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
          <div className="relative md:col-span-2">
            <Input label="Confirm password" type={showConfirm ? 'text' : 'password'} value={form.confirmPassword} onChange={(e) => setForm((prev) => ({ ...prev, confirmPassword: e.target.value }))} />
            <button type="button" onClick={() => setShowConfirm((prev) => !prev)} className="absolute right-3 top-11 text-slate-400">
              {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>
        </div>
        <Button type="submit" className="mt-6 w-full" disabled={isLoading}>{isLoading ? 'Creating account...' : 'Create account'}</Button>
        <p className="mt-4 text-center text-sm text-slate-400">
          Already have an account? <Link to={APP_ROUTES.login} className="font-semibold text-cyan-300">Sign in</Link>
        </p>
      </form>
    </div>
  );
}

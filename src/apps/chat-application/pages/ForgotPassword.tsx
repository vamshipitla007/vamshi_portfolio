import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useChat } from '../context/ChatContext';
import { Input } from '../components/common/Input';
import { Button } from '../components/common/Button';
import { APP_ROUTES } from '../constants';

export function ForgotPassword() {
  const { resetPassword, isLoading } = useChat();
  const [email, setEmail] = useState('');

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    await resetPassword(email);
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.24),transparent_35%),linear-gradient(135deg,#020617_0%,#111827_100%)] p-4">
      <form onSubmit={handleSubmit} className="w-full max-w-md rounded-4xl border border-white/10 bg-slate-900/85 p-6 shadow-2xl shadow-black/40 backdrop-blur-xl">
        <div className="mb-6 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-cyan-300">Reset password</p>
          <h1 className="mt-2 text-3xl font-semibold text-slate-100">Recover your access</h1>
          <p className="mt-2 text-sm text-slate-400">We will send a secure recovery link to your inbox.</p>
        </div>
        <Input label="Email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
        <Button type="submit" className="mt-4 w-full" disabled={isLoading}>{isLoading ? 'Sending...' : 'Send reset link'}</Button>
        <p className="mt-4 text-center text-sm text-slate-400">
          <Link to={APP_ROUTES.login} className="font-semibold text-cyan-300">Back to sign in</Link>
        </p>
      </form>
    </div>
  );
}

import { motion } from 'framer-motion';
import { useState } from 'react';

const initialState = { name: '', email: '', phone: '', message: '' };

export function ContactForm() {
  const [fields, setFields] = useState(initialState);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (key: keyof typeof initialState, value: string) => {
    setFields((prev) => ({ ...prev, [key]: value }));
    setError('');
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!fields.name || !fields.email || !fields.message) {
      setError('Please fill in the required fields.');
      return;
    }
    setSubmitted(true);
    setFields(initialState);
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
      className="rounded-[32px] border border-white/10 bg-white/80 p-8 shadow-[0_30px_80px_-50px_rgba(15,23,42,0.35)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
    >
      <div className="space-y-5 text-slate-950 dark:text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact Us</p>
        <h3 className="text-3xl font-semibold">Find your next luxury residence.</h3>
        <p className="max-w-xl leading-7 text-slate-600 dark:text-slate-300">
          Share your preferences and one of our agents will reach out with curated property options.
        </p>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <input
          value={fields.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Full name"
          type="text"
        />
        <input
          value={fields.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Email address"
          type="email"
        />
        <input
          value={fields.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Phone number"
          type="tel"
        />
        <textarea
          value={fields.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="col-span-2 min-h-[160px] rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-900 outline-none transition focus:border-accent dark:border-slate-700 dark:bg-slate-900 dark:text-white"
          placeholder="Tell us about your ideal property"
        />
      </div>

      <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-red-500">{error}</div>
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-3xl bg-slate-950 px-7 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-accent dark:text-slate-950"
        >
          Submit Inquiry
        </button>
      </div>

      {submitted && (
        <p className="mt-4 rounded-3xl bg-emerald-100 px-4 py-3 text-sm text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-200">
          Thank you — we will get back to you shortly.
        </p>
      )}
    </motion.form>
  );
}

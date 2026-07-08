import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import profileImage from '@/assets/loujain/Image1.jpg';

const Hero = () => {
  return (
    <section id="home" className="relative overflow-hidden bg-[#fdf7f1] py-20">
      <div className="absolute right-0 top-0 h-52 w-52 rounded-full bg-[#f5e5d7] blur-3xl" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -32 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-8"
        >
          <div className="flex items-center gap-3 text-sm font-medium uppercase tracking-[0.3em] text-slate-600">
            <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-white">
              <Sparkles size={16} />
            </span>
            Portfolio
          </div>
          <div className="space-y-5">
            <h1 className="max-w-2xl text-5xl font-semibold leading-tight text-slate-950 sm:text-6xl">
              Loujain Muhammed
            </h1>
            <p className="max-w-xl text-lg leading-8 text-slate-600">
              Welcome to Designing where innovation knows no bounds. With a passion for pushing the boundaries of UI/UX design.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
              style={{ backgroundColor: "#2D2A2A", color: "#f2f2f2" }}
            >
              Become a Client
            </a>
            <button
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-slate-300 bg-white px-7 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-50"
            >
              Let&apos;s Connect
              <ArrowRight size={16} />
            </button>
          </div>
          <div className="grid gap-4 border-t border-slate-200 pt-6 sm:grid-cols-3">
            <div>
              <p className="text-lg font-semibold text-slate-950">240+</p>
              <span className="text-sm text-slate-500">Satisfied clients</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-950">12+</p>
              <span className="text-sm text-slate-500">Years of experience</span>
            </div>
            <div>
              <p className="text-lg font-semibold text-slate-950">50+</p>
              <span className="text-sm text-slate-500">Successful projects</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative mx-auto w-full max-w-md"
        >
          <div className="absolute -right-10 top-12 h-44 w-44 rounded-full bg-white/80 shadow-xl" />
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-[0_30px_100px_rgba(15,23,42,0.08)]">
            <img
              src={profileImage}
              alt="Loujain Muhammed"
              className="h-105 w-full rounded-[1.75rem] object-cover"
            />
          </div>
          <div className="absolute bottom-6 left-6 rounded-3xl bg-slate-950 px-5 py-4 text-white shadow-2xl ring-1 ring-white/70 sm:left-auto sm:right-6">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-300">Working with brands</p>
            <p className="mt-1 max-w-xs text-sm leading-6 text-white/90">
              Working with brands for UI/UX design across an attractive new creative direction for projects.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

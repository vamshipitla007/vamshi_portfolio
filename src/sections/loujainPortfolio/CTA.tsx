import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="bg-slate-950 py-20 text-white">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl rounded-[2rem] border border-white/10 bg-white/5 p-12 shadow-2xl backdrop-blur-xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Let&apos;s Get In Touch</p>
          <h2 className="mt-6 text-4xl font-semibold leading-tight">Let&apos;s get in touch and create something beautiful together.</h2>
          <p className="mt-5 text-base leading-8 text-slate-300">
            Have a question, feedback, or interested in collaborating? I&apos;d love to hear from you.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-slate-100 px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
            >
              Become a Client
              <ArrowRight size={18} />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;

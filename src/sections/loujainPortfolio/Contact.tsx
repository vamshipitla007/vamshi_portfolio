import { Mail, MapPin, Phone } from 'lucide-react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="bg-[#fdf7f1] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-white p-10 shadow-[0_20px_80px_rgba(15,23,42,0.08)]"
          >
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Contact</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Let&apos;s get in touch</h2>
            <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600">
              Have a question, feedback, or interested in collaborating? I&apos;d love to hear from you.
            </p>
            <div className="mt-10 space-y-4">
              <div className="flex items-center gap-4 rounded-3xl bg-[#f7f2ec] p-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white">
                  <Mail size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-950">Email</p>
                  <p className="text-sm text-slate-600">hello@loujainportfolio.com</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-[#f7f2ec] p-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white">
                  <Phone size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-950">Phone</p>
                  <p className="text-sm text-slate-600">+1 234 567 890</p>
                </div>
              </div>
              <div className="flex items-center gap-4 rounded-3xl bg-[#f7f2ec] p-5">
                <span className="inline-flex h-12 w-12 items-center justify-center rounded-3xl bg-slate-950 text-white">
                  <MapPin size={20} />
                </span>
                <div>
                  <p className="font-semibold text-slate-950">Location</p>
                  <p className="text-sm text-slate-600">Dubai, UAE</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-[2rem] bg-slate-950 p-10 text-white shadow-[0_20px_80px_rgba(15,23,42,0.18)]"
          >
            <div className="space-y-6">
              <div>
                <label htmlFor="name" className="text-sm font-semibold text-slate-200">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your Name"
                  className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-sm text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-sm font-semibold text-slate-200">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="hello@example.com"
                  className="mt-3 w-full rounded-3xl border border-slate-800 bg-slate-900/90 px-5 py-4 text-sm text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </div>
              <div>
                <label htmlFor="message" className="text-sm font-semibold text-slate-200">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Write your message"
                  className="mt-3 w-full rounded-[1.5rem] border border-slate-800 bg-slate-900/90 px-5 py-4 text-sm text-white outline-none transition focus:border-white focus:ring-2 focus:ring-white/20"
                />
              </div>
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center rounded-full bg-white px-6 py-4 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Send a Message
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

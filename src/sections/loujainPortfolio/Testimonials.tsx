import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { testimonials } from './testimonialsData';

const Testimonials = () => {
  return (
    <section id="testimonials" className="bg-[#f7f2ec] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Testimonials</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">What Our Client Says</h2>
          </div>
          <button className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-950 hover:text-white">
            Become a Client
          </button>
        </div>

        <div className="mt-12 grid gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="space-y-8">
            {testimonials.map((testimonial, index) => (
              <motion.article
                key={testimonial.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: index * 0.08 }}
                className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_15px_50px_rgba(15,23,42,0.08)]"
              >
                <div className="flex items-start gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-3xl bg-slate-950 text-white">
                    <Quote size={24} />
                  </div>
                  <div>
                    <p className="text-sm leading-7 text-slate-600">{testimonial.quote}</p>
                    <div className="mt-6 flex items-center gap-4">
                      <img src={testimonial.image} alt={testimonial.name} className="h-14 w-14 rounded-3xl object-cover" />
                      <div>
                        <p className="font-semibold text-slate-950">{testimonial.name}</p>
                        <p className="text-sm text-slate-500">{testimonial.title}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
          <div className="flex items-center justify-center rounded-[2rem] bg-slate-950 p-12 text-center text-white shadow-xl">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Let&apos;s Get In Touch</p>
              <h3 className="mt-4 text-4xl font-semibold">Ready to build your next digital experience?</h3>
              <p className="mt-4 max-w-md text-sm leading-7 text-slate-300">
                Let&apos;s collaborate and craft a brand experience that elevates your product and delights your users.
              </p>
              <a
                href="#contact"
                className="mt-8 inline-flex items-center justify-center rounded-full bg-white px-8 py-3 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

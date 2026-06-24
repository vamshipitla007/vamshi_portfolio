import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import type { Testimonial } from '../../types/testimonial';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.4)] backdrop-blur-2xl transition duration-300 dark:border-white/5 dark:bg-slate-900/80"
    >
      <div className="mb-5 flex items-center gap-4">
        <img src={testimonial.photo} alt={testimonial.name} className="h-16 w-16 rounded-full object-cover" />
        <div>
          <p className="font-semibold text-slate-950 dark:text-white">{testimonial.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{testimonial.role}</p>
        </div>
      </div>
      <p className="mb-5 text-sm leading-7 text-slate-600 dark:text-slate-300">“{testimonial.quote}”</p>
      <div className="flex items-center gap-2 text-sm font-semibold text-accent">
        {Array.from({ length: testimonial.rating }).map((_, index) => (
          <Star key={index} className="h-4 w-4" />
        ))}
      </div>
    </motion.article>
  );
}

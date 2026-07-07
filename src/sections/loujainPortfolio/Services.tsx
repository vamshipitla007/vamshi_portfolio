import { motion } from 'framer-motion';
import { services } from './servicesData';
import serviceImage from '@/assets/loujain/Image2.jpg';

const Services = () => {
  return (
    <section id="services" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">My Services</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Unmatched Services for Your Needs</h2>
          </div>
          <a href="#contact" className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-950 hover:text-white">
            Start a Project
          </a>
        </div>

        <div className="mt-12 grid gap-6 lg:grid-cols-2">
          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-[#fbf6f0] p-6 shadow-lg">
            <img src={serviceImage} alt="Services" className="h-full w-full rounded-[1.75rem] object-cover" />
          </div>
          <div className="space-y-6">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-4xl border border-slate-200 bg-[#faf4eb] p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-semibold text-slate-950">{service.title}</h3>
                    <span className="text-sm text-slate-500">{service.order}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm leading-7 text-slate-600">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

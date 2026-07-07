import { motion } from 'framer-motion';
import { projects } from './projectsData';

const Projects = () => {
  return (
    <section id="projects" className="bg-white py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Latest Projects and practice</p>
            <h2 className="mt-4 text-4xl font-semibold text-slate-950 sm:text-5xl">Projects and practice</h2>
          </div>
          <a href="#projects" className="inline-flex items-center justify-center rounded-full border border-slate-900 px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-950 hover:text-white">
            See More
          </a>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group overflow-hidden rounded-4xl border border-slate-200 bg-[#fbf6f0] shadow-[0_20px_80px_rgba(15,23,42,0.06)]"
            >
              <img src={project.image} alt={project.title} className="h-64 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.24em] text-slate-500">
                  <span>{project.id.replace('-', ' ')}</span>
                  <span>{project.category}</span>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold text-slate-950">{project.title}</h3>
                  <p className="text-sm leading-6 text-slate-600">{project.description}</p>
                </div>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950 transition hover:text-slate-700"
                >
                  View project
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

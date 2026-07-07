import { motion } from 'framer-motion';
import { skills } from './skillsData';

const Skills = () => {
  return (
    <section id="skills" className="bg-[#f9f4ec] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="space-y-4 text-center md:text-left">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-600">Skills</p>
          <h2 className="text-4xl font-semibold text-slate-950 sm:text-5xl">Exploring My Diverse Skill Set</h2>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:grid-cols-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="flex flex-col items-center gap-4 rounded-4xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-slate-950 text-white">
                <skill.Icon size={28} />
              </div>
              <span className="text-sm font-semibold text-slate-900">{skill.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

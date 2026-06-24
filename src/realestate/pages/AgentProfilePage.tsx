import { motion } from 'framer-motion';
import { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import { Briefcase, CalendarDays, MessageSquare } from 'lucide-react';
import { agents } from '../data/agents';
import { properties } from '../data/properties';
import { SectionHeading } from '../components/SectionHeading';
import { PropertyCard } from '../components/PropertyCard';

export function AgentProfilePage() {
  const { agentId } = useParams();
  const agent = agents.find((item) => item.id === agentId) ?? agents[0];
  const agentProperties = useMemo(
    () => properties.filter((property) => property.agentId === agent.id),
    [agent.id],
  );

  return (
    <main className="relative overflow-hidden pb-24">
      <section className="bg-[radial-gradient(circle_at_top_left,_rgba(255,107,53,0.14),_transparent_55%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.9))] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl text-center">
          <SectionHeading title="Agent profile" subtitle={agent.name} align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-slate-200/90">{agent.about}</p>
        </div>
      </section>

      <section className="-mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto grid gap-10 lg:grid-cols-[0.95fr_0.7fr]">
          <div className="rounded-[32px] border border-white/10 bg-white/80 p-8 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
            <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex items-center gap-6">
                <img src={agent.photo} alt={agent.name} className="h-28 w-28 rounded-[32px] object-cover" />
                <div>
                  <p className="text-3xl font-semibold text-slate-950 dark:text-white">{agent.name}</p>
                  <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{agent.title}</p>
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <p className="font-semibold">{agent.experience} yrs</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">Experience</p>
                </div>
                <div className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <p className="font-semibold">{agent.rating}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">Rating</p>
                </div>
                <div className="rounded-3xl bg-slate-100 px-5 py-4 text-sm text-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  <p className="font-semibold">{agent.reviews}</p>
                  <p className="mt-2 text-slate-500 dark:text-slate-400">Reviews</p>
                </div>
              </div>
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {agent.specialty.map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-5 py-4 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-200">
                  {item}
                </div>
              ))}
            </div>

            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">About</p>
                <p className="mt-4 text-sm leading-7 text-slate-700 dark:text-slate-200">{agent.about}</p>
              </div>
              <div className="rounded-[32px] border border-slate-200 bg-slate-50 p-6 dark:border-slate-700 dark:bg-slate-800">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">Contact</p>
                <div className="mt-6 space-y-3 text-sm text-slate-700 dark:text-slate-200">
                  <p>Email: {agent.email}</p>
                  <p>Phone: {agent.phone}</p>
                  <p>Office: {agent.office}</p>
                </div>
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent">Get in touch</p>
              <div className="mt-6 space-y-4 text-sm text-slate-600 dark:text-slate-300">
                <p className="inline-flex items-center gap-2"><MessageSquare className="h-4 w-4" /> {agent.email}</p>
                <p className="inline-flex items-center gap-2"><Briefcase className="h-4 w-4" /> {agent.title}</p>
                <p className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" /> {agent.experience} years experience</p>
              </div>
              <button className="mt-6 w-full rounded-3xl bg-accent px-5 py-4 text-sm font-semibold text-slate-950 transition hover:bg-orange-400">
                Schedule a consultation
              </button>
            </motion.div>
          </aside>
        </div>
      </section>

      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Listed properties" subtitle="Homes currently represented by this agent." />
          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {agentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} onViewDetails={() => {}} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

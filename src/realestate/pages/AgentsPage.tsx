import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { agents } from '../data/agents';
import { properties } from '../data/properties';
import { SectionHeading } from '../components/SectionHeading';
import { AgentCard } from '../components/AgentCard';

export function AgentsPage() {
  return (
    <main className="relative overflow-hidden pb-24">
      <section className="bg-[radial-gradient(circle_at_top,_rgba(255,107,53,0.14),_transparent_50%),linear-gradient(180deg,_rgba(15,23,42,0.95),_rgba(15,23,42,0.85))] px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Agents" subtitle="Connect with our trusted specialists." align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-slate-200/90">
            Each agent brings exceptional market knowledge, white-glove service, and an outstanding track record of closing luxury deals.
          </p>
        </div>
      </section>

      <section className="mt-20 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            {agents.map((agent) => (
              <motion.div key={agent.id} whileHover={{ y: -5 }}>
                <AgentCard agent={agent} />
                <div className="mt-5 text-right">
                  <Link
                    to={`/agents/${agent.id}`}
                    className="text-sm font-semibold text-accent transition hover:text-orange-400"
                  >
                    View profile →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="mt-24 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Featured listings" subtitle="Explore curated properties from our expert agents." />
          <div className="mt-10 grid gap-8 xl:grid-cols-3">
            {properties.slice(0, 3).map((property) => (
              <div key={property.id} className="rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-xl shadow-slate-950/10 backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80">
                <p className="text-sm uppercase tracking-[0.3em] text-accent">{property.category}</p>
                <h3 className="mt-3 text-xl font-semibold text-slate-950 dark:text-white">{property.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{property.address}</p>
                <p className="mt-4 text-sm font-semibold text-slate-950 dark:text-white">${property.price.toLocaleString()}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

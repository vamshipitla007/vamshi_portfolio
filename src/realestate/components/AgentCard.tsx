import { motion } from 'framer-motion';
import type { Agent } from '../../types/agent';

interface AgentCardProps {
  agent: Agent;
}

export function AgentCard({ agent }: AgentCardProps) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      className="rounded-[28px] border border-white/10 bg-white/80 p-6 shadow-[0_25px_80px_-40px_rgba(15,23,42,0.6)] backdrop-blur-2xl transition duration-300 dark:border-white/5 dark:bg-slate-900/80"
    >
      <div className="mb-6 flex items-center gap-4">
        <img src={agent.photo} alt={agent.name} className="h-20 w-20 rounded-3xl object-cover" />
        <div>
          <p className="text-lg font-semibold text-slate-950 dark:text-white">{agent.name}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{agent.title}</p>
        </div>
      </div>
      <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">{agent.about}</p>
      <div className="mt-6 grid gap-3 text-sm text-slate-600 dark:text-slate-300">
        <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
          <span>Experience</span>
          <span>{agent.experience} yrs</span>
        </div>
        <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
          <span>Rating</span>
          <span>{agent.rating} / 5</span>
        </div>
        <div className="flex items-center justify-between rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
          <span>Reviews</span>
          <span>{agent.reviews}</span>
        </div>
      </div>
    </motion.article>
  );
}

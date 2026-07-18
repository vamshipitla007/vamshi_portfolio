import { motion } from 'framer-motion';
import type { Message, User } from '../../types';

interface MessageBubbleProps {
  message: Message;
  sender: User | null;
  isMine: boolean;
}

export function MessageBubble({ message, sender, isMine }: MessageBubbleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      className={`flex ${isMine ? 'justify-end' : 'justify-start'} animate-in`}
    >
      <div className={`max-w-[78%] rounded-3xl px-4 py-3 text-sm shadow-lg ${isMine ? 'rounded-br-md bg-cyan-500 text-slate-950' : 'rounded-bl-md bg-slate-800 text-slate-100'}`}>
        {!isMine && sender ? <p className="mb-1 text-[11px] uppercase tracking-[0.24em] text-cyan-300">{sender.name}</p> : null}
        <p className="leading-6">{message.content}</p>
        <div className={`mt-2 flex items-center justify-end gap-1 text-[11px] ${isMine ? 'text-slate-900/70' : 'text-slate-400'}`}>
          <span>{message.timestamp}</span>
          {isMine ? <span>✓</span> : null}
        </div>
      </div>
    </motion.div>
  );
}

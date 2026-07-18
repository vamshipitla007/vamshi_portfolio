import { motion } from 'framer-motion';
import { Badge } from '../common/Badge';
import { Avatar } from '../common/Avatar';
import type { Conversation, User } from '../../types';

interface ConversationCardProps {
  conversation: Conversation;
  participant: User;
  active: boolean;
  onSelect: () => void;
}

export function ConversationCard({ conversation, participant, active, onSelect }: ConversationCardProps) {
  return (
    <motion.button
      whileHover={{ x: 2, scale: 1.01 }}
      onClick={onSelect}
      className={`flex w-full items-center gap-3 rounded-2xl border px-3 py-3 text-left transition ${active ? 'border-cyan-400/30 bg-slate-800/90' : 'border-transparent bg-transparent hover:bg-slate-800/70'}`}
    >
      <Avatar src={participant.avatar} name={participant.name} status={participant.status} size="md" />
      <div className="min-w-0 flex-1">
        <div className="flex items-center justify-between gap-2">
          <span className="truncate font-medium text-slate-100">{conversation.title}</span>
          <span className="text-[11px] text-slate-400">{conversation.timestamp}</span>
        </div>
        <p className="mt-1 truncate text-sm text-slate-400">{conversation.lastMessage}</p>
      </div>
      {conversation.unread > 0 ? <Badge tone="cyan">{conversation.unread}</Badge> : null}
    </motion.button>
  );
}

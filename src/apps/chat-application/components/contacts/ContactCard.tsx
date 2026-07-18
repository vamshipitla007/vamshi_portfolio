import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { Avatar } from '../common/Avatar';
import type { Contact } from '../../types';

interface ContactCardProps {
  contact: Contact;
  onStart: (contact: Contact) => void;
}

export function ContactCard({ contact, onStart }: ContactCardProps) {
  return (
    <motion.div whileHover={{ y: -3, scale: 1.01 }} className="rounded-2xl border border-white/10 bg-slate-900/70 p-4 shadow-lg shadow-black/10">
      <div className="flex items-center gap-3">
        <Avatar src={contact.avatar} name={contact.name} status={contact.status} size="md" />
        <div className="flex-1">
          <div className="flex items-center justify-between gap-2">
            <h4 className="font-semibold text-slate-100">{contact.name}</h4>
            <span className="text-xs text-slate-400">{contact.role}</span>
          </div>
          <p className="mt-1 text-sm text-slate-400">{contact.about}</p>
        </div>
      </div>
      <button onClick={() => onStart(contact)} className="mt-4 flex items-center gap-2 rounded-2xl bg-cyan-500/15 px-3 py-2 text-sm font-medium text-cyan-300">
        <MessageCircle size={16} /> Start conversation
      </button>
    </motion.div>
  );
}

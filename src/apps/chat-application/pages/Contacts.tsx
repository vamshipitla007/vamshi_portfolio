import { useMemo, useState } from 'react';
import { Search } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { ContactCard } from '../components/contacts/ContactCard';
import { EmptyState } from '../components/common/EmptyState';
import { Button } from '../components/common/Button';
import type { Contact } from '../types';

export function Contacts() {
  const { contacts, selectChat } = useChat();
  const [search, setSearch] = useState('');

  const filteredContacts = useMemo(() => contacts.filter((contact) => `${contact.name} ${contact.role}`.toLowerCase().includes(search.toLowerCase())), [contacts, search]);

  const groupedContacts = useMemo(() => {
    const groups: Record<string, Contact[]> = {};
    filteredContacts.forEach((contact) => {
      const initial = contact.name.charAt(0).toUpperCase();
      groups[initial] = groups[initial] ?? [];
      groups[initial].push(contact);
    });
    return Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));
  }, [filteredContacts]);

  const startConversation = (contact: Contact) => {
    const chatId = `chat-${contact.id.split('-').pop()}`;
    selectChat(chatId);
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col gap-3 rounded-[28px] border border-white/10 bg-slate-950/70 p-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-semibold text-slate-100">Contacts</h2>
          <p className="text-sm text-slate-400">Find people and launch a conversation in one tap.</p>
        </div>
        <label className="flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-400 md:min-w-70">
          <Search size={14} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search contacts" className="w-full bg-transparent outline-none" />
        </label>
      </div>

      {groupedContacts.length ? groupedContacts.map(([letter, items]) => (
        <div key={letter}>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.24em] text-cyan-300">{letter}</p>
          <div className="grid gap-3 md:grid-cols-2">
            {items.map((contact) => (
              <ContactCard key={contact.id} contact={contact} onStart={startConversation} />
            ))}
          </div>
        </div>
      )) : <EmptyState title="No contacts found" description="Try a different search phrase." action={<Button variant="secondary">Refresh</Button>} />}
    </div>
  );
}

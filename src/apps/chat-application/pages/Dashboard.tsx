import { useMemo, useState } from 'react';
import { Phone, Video, MoreHorizontal, Paperclip, Smile, Mic, Send, Search, Circle } from 'lucide-react';
import { useChat } from '../context/ChatContext';
import { Button } from '../components/common/Button';
import { Avatar } from '../components/common/Avatar';
import { ConversationCard } from '../components/sidebar/ConversationCard';
import { MessageBubble } from '../components/chat/MessageBubble';
import { SidebarSkeleton } from '../components/skeletons/SidebarSkeleton';
import { ChatSkeleton } from '../components/skeletons/ChatSkeleton';
import { EmptyState } from '../components/common/EmptyState';
import { NoMessagesState } from '../components/emptyStates/NoMessagesState';
import { QUICK_REPLIES } from '../constants';

export function Dashboard() {
  const { auth, conversations, contacts, messages, selectedChatId, isLoading, error, selectChat, sendMessage } = useChat();
  const [draft, setDraft] = useState('');
  const [search, setSearch] = useState('');

  const selectedConversation = useMemo(() => conversations.find((item) => item.id === selectedChatId), [conversations, selectedChatId]);
  const selectedParticipant = useMemo(() => contacts.find((contact) => contact.id === selectedConversation?.participantId) ?? contacts[0] ?? null, [contacts, selectedConversation]);
  const visibleMessages = useMemo(() => messages.filter((message) => message.chatId === selectedChatId), [messages, selectedChatId]);
  const filteredConversations = useMemo(() => conversations.filter((conversation) => conversation.title.toLowerCase().includes(search.toLowerCase())), [conversations, search]);

  const handleSend = () => {
    if (!draft.trim()) return;
    sendMessage(draft);
    setDraft('');
  };

  if (isLoading) {
    return (
      <div className="grid gap-4 xl:grid-cols-[1.1fr_1.5fr_0.75fr]">
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-3"><SidebarSkeleton /></div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-3"><ChatSkeleton /></div>
        <div className="rounded-3xl border border-white/10 bg-slate-900/70 p-3"><ChatSkeleton /></div>
      </div>
    );
  }

  return (
    <div className="grid gap-4 xl:grid-cols-[1.1fr_1.5fr_0.8fr]">
      <section className="rounded-[28px] border border-white/10 bg-slate-950/70 p-3">
        <div className="mb-3 flex items-center justify-between px-2">
          <div>
            <h2 className="text-lg font-semibold text-slate-100">Messages</h2>
            <p className="text-sm text-slate-400">{conversations.length} conversations</p>
          </div>
          <Button variant="secondary">New</Button>
        </div>
        <label className="mb-3 flex items-center gap-2 rounded-2xl border border-white/10 bg-slate-900/80 px-3 py-2 text-sm text-slate-400">
          <Search size={14} />
          <input value={search} onChange={(event) => setSearch(event.target.value)} placeholder="Search chats" className="w-full bg-transparent outline-none" />
        </label>
        <div className="space-y-2">
          {filteredConversations.length ? filteredConversations.map((conversation) => (
            <ConversationCard key={conversation.id} conversation={conversation} participant={contacts.find((contact) => contact.id === conversation.participantId) ?? contacts[0]} active={selectedConversation?.id === conversation.id} onSelect={() => selectChat(conversation.id)} />
          )) : <EmptyState title="No matches" description="Try a different search term." />}
        </div>
      </section>

      <section className="flex min-h-160 flex-col rounded-[28px] border border-white/10 bg-slate-950/70 p-3">
        {selectedConversation && selectedParticipant ? (
          <>
            <div className="flex items-center justify-between border-b border-white/10 px-2 pb-3">
              <div className="flex items-center gap-3">
                <Avatar src={selectedParticipant.avatar} name={selectedParticipant.name} size="md" status={selectedParticipant.status} />
                <div>
                  <p className="font-semibold text-slate-100">{selectedParticipant.name}</p>
                  <p className="text-sm text-cyan-300">{selectedParticipant.status === 'online' ? 'Online now' : 'Away'}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <button className="rounded-2xl border border-white/10 p-2 text-slate-400 hover:bg-white/10"><Phone size={16} /></button>
                <button className="rounded-2xl border border-white/10 p-2 text-slate-400 hover:bg-white/10"><Video size={16} /></button>
                <button className="rounded-2xl border border-white/10 p-2 text-slate-400 hover:bg-white/10"><MoreHorizontal size={16} /></button>
              </div>
            </div>

            <div className="chat-scrollbar flex-1 space-y-3 overflow-y-auto px-2 py-4">
              {visibleMessages.length ? visibleMessages.map((message) => (
                <MessageBubble key={message.id} message={message} sender={contacts.find((contact) => contact.id === message.senderId) ?? null} isMine={message.senderId === auth.user?.id} />
              )) : <NoMessagesState />}
            </div>

            <div className="border-t border-white/10 px-2 pt-3">
              <div className="mb-3 flex flex-wrap gap-2">
                {QUICK_REPLIES.map((reply) => (
                  <button key={reply} onClick={() => setDraft(reply)} className="rounded-full border border-cyan-400/20 bg-cyan-500/10 px-3 py-1.5 text-sm text-cyan-300">{reply}</button>
                ))}
              </div>
              <div className="flex items-end gap-2 rounded-3xl border border-white/10 bg-slate-900/80 p-3">
                <button className="rounded-2xl bg-slate-800 p-2 text-slate-400"><Smile size={16} /></button>
                <button className="rounded-2xl bg-slate-800 p-2 text-slate-400"><Paperclip size={16} /></button>
                <textarea value={draft} onChange={(e) => setDraft(e.target.value)} rows={2} placeholder="Message" className="min-h-11 flex-1 resize-none bg-transparent px-2 text-sm text-slate-100 outline-none" />
                <button className="rounded-2xl bg-slate-800 p-2 text-slate-400"><Mic size={16} /></button>
                <button onClick={handleSend} className="rounded-2xl bg-cyan-500 p-2 text-slate-950"><Send size={16} /></button>
              </div>
            </div>
          </>
        ) : (
          <div className="flex h-full items-center justify-center">
            <EmptyState title="Select a conversation" description="Choose a chat from the left to begin." />
          </div>
        )}
      </section>

      <section className="rounded-[28px] border border-white/10 bg-slate-950/70 p-4">
        {error ? <EmptyState title="Something went wrong" description={error} action={<Button variant="secondary">Refresh</Button>} /> : null}
        {selectedParticipant ? (
          <div className="space-y-4">
            <img src={selectedParticipant.cover} alt="cover" className="h-28 w-full rounded-3xl object-cover" />
            <div className="flex items-center gap-3">
              <Avatar src={selectedParticipant.avatar} name={selectedParticipant.name} size="lg" status={selectedParticipant.status} />
              <div>
                <h3 className="font-semibold text-slate-100">{selectedParticipant.name}</h3>
                <p className="text-sm text-slate-400">{selectedParticipant.role}</p>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4 text-sm text-slate-400">
              <p className="text-slate-300">{selectedParticipant.about}</p>
              <div className="mt-3 flex items-center gap-2 text-cyan-300">
                <Circle size={8} fill="currentColor" /> {selectedParticipant.status === 'online' ? 'Online' : 'Offline'}
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-slate-900/80 p-4">
              <h4 className="mb-2 font-semibold text-slate-100">Shared media</h4>
              <div className="grid grid-cols-3 gap-2">
                {['https://images.unsplash.com/photo-1516321497487-e288fb19713f?auto=format&fit=crop&w=300&q=80', 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=300&q=80', 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=300&q=80'].map((src) => (
                  <img key={src} src={src} alt="shared" className="h-20 w-full rounded-2xl object-cover" />
                ))}
              </div>
            </div>
          </div>
        ) : <EmptyState title="No profile selected" description="Choose a contact to preview details." />}
      </section>
    </div>
  );
}

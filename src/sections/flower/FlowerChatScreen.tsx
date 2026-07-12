import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  Search,
  Plus,
  MoreHorizontal,
  Smile,
  Paperclip,
  Send,
  Download,
  Pencil,
  Trash2,
  X,
  Check,
  ArrowLeft,
  Info,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Types                                                               */
/* ------------------------------------------------------------------ */

type ChatType = "team" | "person";

interface Person {
  id: string;
  name: string;
  role?: string;
  avatar: string;
  online?: boolean;
}

interface ChatSummary {
  id: string;
  type: ChatType;
  name: string;
  preview: string;
  avatar?: string;
  colorClass?: string;
  initial?: string;
  online?: boolean;
  unread: number;
  memberCount?: number;
}

interface ImageAttachment {
  id: string;
  gradient: string;
}

interface FileAttachment {
  id: string;
  name: string;
  size: string;
  badge: string;
  badgeClass: string;
}

interface Message {
  id: string;
  senderId: "me" | string;
  text?: string;
  images?: ImageAttachment[];
  file?: FileAttachment;
  timestamp: string;
  day: "1 day ago" | "Today";
  edited?: boolean;
}

/* ------------------------------------------------------------------ */
/* Dummy data                                                          */
/* ------------------------------------------------------------------ */

const ME_AVATAR = "https://i.pravatar.cc/150?img=11";

const PEOPLE: Person[] = [
  { id: "dustin", name: "Dustin Williamson", avatar: "https://i.pravatar.cc/150?img=12", online: true },
  { id: "jane", name: "Jane Wilson", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=5", online: true },
  { id: "regina", name: "Regina Cooper", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=25", online: true },
  { id: "brandon", name: "Brandon Pena", avatar: "https://i.pravatar.cc/150?img=13", online: true },
  { id: "jacob", name: "Jacob Hawkins", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=14", online: true },
  { id: "shane", name: "Shane Black", avatar: "https://i.pravatar.cc/150?img=15", online: true },
  { id: "priscilla", name: "Priscilla Edwards", avatar: "https://i.pravatar.cc/150?img=26", online: false },
  { id: "kristin", name: "Kristin Mccoy", avatar: "https://i.pravatar.cc/150?img=27", online: true },
  { id: "bruce", name: "Bruce Russell", avatar: "https://i.pravatar.cc/150?img=16", online: false },
];

const findPerson = (id: string) => PEOPLE.find((p) => p.id === id)!;

const CHATS: ChatSummary[] = [
  {
    id: "managers",
    type: "team",
    name: "#Managers",
    preview: "Hello, Mark! I am writing to introduce...",
    initial: "M",
    colorClass: "bg-cyan-100 text-cyan-700",
    unread: 0,
    memberCount: 5,
  },
  {
    id: "designers",
    type: "team",
    name: "#Designers",
    preview: "Hello. Can you drop the photos...",
    initial: "D",
    colorClass: "bg-emerald-100 text-emerald-700",
    unread: 4,
    memberCount: 8,
  },
  { id: "dustin", type: "person", name: "Dustin Williamson", preview: "Hello, Mark! I am writing to introduce...", avatar: findPerson("dustin").avatar, online: true, unread: 0 },
  { id: "jane", type: "person", name: "Jane Wilson", preview: "We use the Arts as a means of touc...", avatar: findPerson("jane").avatar, online: true, unread: 4 },
  { id: "regina", type: "person", name: "Regina Cooper", preview: "The Arts play a large role in the expr...", avatar: findPerson("regina").avatar, online: true, unread: 0 },
  { id: "brandon", type: "person", name: "Brandon Pena", preview: "The arts allow us to be as specific or...", avatar: findPerson("brandon").avatar, online: true, unread: 0 },
  { id: "jacob", type: "person", name: "Jacob Hawkins", preview: "From dance and music to abstract...", avatar: findPerson("jacob").avatar, online: true, unread: 0 },
  { id: "shane", type: "person", name: "Shane Black", preview: "The arts teach us how to communic...", avatar: findPerson("shane").avatar, online: true, unread: 0 },
  { id: "priscilla", type: "person", name: "Priscilla Edwards", preview: "Concept of life is shown through the...", avatar: findPerson("priscilla").avatar, online: false, unread: 0 },
  { id: "kristin", type: "person", name: "Kristin Mccoy", preview: "Inner thoughts and beauty in my life...", avatar: findPerson("kristin").avatar, online: true, unread: 0 },
  { id: "bruce", type: "person", name: "Bruce Russell", preview: "Let's catch up sometime this week...", avatar: findPerson("bruce").avatar, online: false, unread: 0 },
];

const GROUP_FILES = [
  { id: "f1", name: "Brand Styles Guide.pdf", size: "487KB", badge: "PDF", badgeClass: "bg-rose-50 text-rose-500" },
  { id: "f2", name: "Dashboard UI Kit.psd", size: "2.5MB", badge: "Ps", badgeClass: "bg-blue-50 text-blue-600" },
  { id: "f3", name: "Rocket - Admin Dash...", size: "4.2MB", badge: "R", badgeClass: "bg-amber-50 text-amber-600" },
  { id: "f4", name: "Rocket - Admin Dash...", size: "4.2MB", badge: "R", badgeClass: "bg-amber-50 text-amber-600" },
];

const GROUP_PHOTOS = [
  "bg-gradient-to-br from-teal-400 to-emerald-600",
  "bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200",
  "bg-gradient-to-br from-orange-300 via-red-300 to-pink-200",
];

const GROUP_MEMBERS = ["jacob", "regina", "jane"];

const seedMessages = (): Message[] => [
  {
    id: "m1",
    senderId: "jane",
    text: "Hi Cody, any progress on the project? 🌟",
    timestamp: "1 day ago",
    day: "1 day ago",
  },
  {
    id: "m2",
    senderId: "me",
    text: 'Hi Jane!\nYes. I just finished developing the "Chat" template.',
    timestamp: "1 day ago",
    day: "1 day ago",
    images: [
      { id: "i1", gradient: "bg-gradient-to-br from-teal-400 to-emerald-600" },
      { id: "i2", gradient: "bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" },
      { id: "i3", gradient: "bg-gradient-to-br from-orange-300 via-red-300 to-pink-200" },
    ],
  },
  {
    id: "m3",
    senderId: "jane",
    text: "It looks amazing. 🤩\nThe customer will be very satisfied.",
    timestamp: "1 day ago",
    day: "1 day ago",
  },
  {
    id: "m4",
    senderId: "me",
    text: "Thank you, glad you liked it.\nSend me Styles Guide.",
    timestamp: "1 day ago",
    day: "1 day ago",
  },
  {
    id: "m5",
    senderId: "jane",
    file: { id: "fa1", name: "Brand Styles Guide.pdf", size: "487 KB", badge: "PDF", badgeClass: "bg-rose-50 text-rose-500" },
    timestamp: "2 min ago",
    day: "Today",
  },
  {
    id: "m6",
    senderId: "me",
    text: "I'll see later",
    timestamp: "1 min ago",
    day: "Today",
  },
];

/* ------------------------------------------------------------------ */
/* Small helpers                                                       */
/* ------------------------------------------------------------------ */

function Avatar({
  src,
  initial,
  colorClass,
  online,
  size = "w-9 h-9",
}: {
  src?: string;
  initial?: string;
  colorClass?: string;
  online?: boolean;
  size?: string;
}) {
  return (
    <div className={`relative shrink-0 ${size}`}>
      {src ? (
        <img src={src} alt="" className={`${size} rounded-full object-cover`} />
      ) : (
        <div className={`${size} rounded-full flex items-center justify-center font-semibold text-sm ${colorClass}`}>
          {initial}
        </div>
      )}
      {online && (
        <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-white" />
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Sidebar (Teams / People)                                            */
/* ------------------------------------------------------------------ */

function LeftSidebar({
  chats,
  selectedId,
  onSelect,
  onOpenInvite,
}: {
  chats: ChatSummary[];
  selectedId: string;
  onSelect: (id: string) => void;
  onOpenInvite: () => void;
}) {
  const [query, setQuery] = useState("");

  const teams = chats.filter((c) => c.type === "team");
  const people = chats.filter(
    (c) => c.type === "person" && c.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="flex flex-col h-full w-full bg-white">
      {/* Search */}
      <div className="px-4 pt-4 pb-3">
        <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2 border border-gray-100">
          <Search className="w-4 h-4 text-gray-400" />
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400 w-full"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto pb-4">
        {/* Teams */}
        <div className="px-4 flex items-center justify-between mb-1">
          <span className="text-[11px] font-semibold tracking-wide text-gray-400">TEAMS</span>
          <button
            onClick={onOpenInvite}
            className="w-5 h-5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
            aria-label="Add team"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div className="mb-3">
          {teams.map((c) => (
            <ChatListItem key={c.id} chat={c} active={selectedId === c.id} onClick={() => onSelect(c.id)} />
          ))}
        </div>

        {/* People */}
        <div className="px-4 flex items-center justify-between mb-1">
          <span className="text-[11px] font-semibold tracking-wide text-gray-400">PEOPLE</span>
          <button
            className="w-5 h-5 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
            aria-label="Add person"
          >
            <Plus className="w-3.5 h-3.5" />
          </button>
        </div>
        <div>
          {people.length === 0 ? (
            <p className="px-4 py-3 text-xs text-gray-400">No people found.</p>
          ) : (
            people.map((c) => (
              <ChatListItem key={c.id} chat={c} active={selectedId === c.id} onClick={() => onSelect(c.id)} />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

function ChatListItem({
  chat,
  active,
  onClick,
}: {
  chat: ChatSummary;
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`w-full flex items-center gap-3 px-4 py-2.5 text-left transition-colors ${
        active ? "bg-gray-100" : "hover:bg-gray-50"
      }`}
    >
      <Avatar
        src={chat.avatar}
        initial={chat.initial}
        colorClass={chat.colorClass}
        online={chat.online}
        size="w-9 h-9"
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-gray-800 truncate">{chat.name}</p>
        <p className="text-xs text-gray-400 truncate">{chat.preview}</p>
      </div>
      {chat.unread > 0 && (
        <span className="shrink-0 min-w-[18px] h-[18px] px-1 rounded-full bg-rose-500 text-white text-[10px] font-semibold flex items-center justify-center">
          {chat.unread}
        </span>
      )}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* Chat header                                                         */
/* ------------------------------------------------------------------ */

function ChatHeader({
  chat,
  onBack,
  onOpenInvite,
  onToggleDetails,
}: {
  chat: ChatSummary;
  onBack: () => void;
  onOpenInvite: () => void;
  onToggleDetails: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between px-4 sm:px-6 py-3.5 border-b border-gray-100 bg-white">
      <div className="flex items-center gap-3 min-w-0">
        <button onClick={onBack} className="md:hidden text-gray-500 hover:text-gray-700 -ml-1 p-1">
          <ArrowLeft className="w-5 h-5" />
        </button>
        <Avatar
          src={chat.avatar}
          initial={chat.initial}
          colorClass={chat.colorClass}
          online={chat.online}
          size="w-9 h-9"
        />
        <div className="min-w-0">
          <p className="text-sm font-semibold text-gray-800 truncate">{chat.name}</p>
          {chat.type === "team" && <p className="text-xs text-gray-400">{chat.memberCount} members</p>}
        </div>
      </div>

      <div className="flex items-center gap-1 relative">
        {chat.type === "team" && (
          <button
            onClick={onOpenInvite}
            className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
            aria-label="Invite members"
          >
            <Plus className="w-4 h-4" />
          </button>
        )}
        {chat.type === "team" && (
          <button
            onClick={onToggleDetails}
            className="lg:hidden w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
            aria-label="Group info"
          >
            <Info className="w-4 h-4" />
          </button>
        )}
        <button
          onClick={() => setMenuOpen((v) => !v)}
          className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
          aria-label="More options"
        >
          <MoreHorizontal className="w-4 h-4" />
        </button>
        {menuOpen && (
          <div className="absolute right-0 top-10 w-40 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20 text-sm">
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-600"
            >
              Mute notifications
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 text-gray-600"
            >
              Clear chat
            </button>
            <button
              onClick={() => setMenuOpen(false)}
              className="w-full text-left px-3 py-2 hover:bg-gray-50 text-rose-500"
            >
              Delete chat
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Message bubble                                                      */
/* ------------------------------------------------------------------ */

function MessageBubble({
  message,
  isMe,
  senderAvatar,
  onEdit,
  onDelete,
}: {
  message: Message;
  isMe: boolean;
  senderAvatar?: string;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [menuOpen, setMenuOpen] = useState(false);

  const bubbleBase = "max-w-[75%] sm:max-w-[60%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed whitespace-pre-line";
  const bubbleClass = isMe
    ? `${bubbleBase} bg-white border border-gray-200 text-gray-700 rounded-tr-sm`
    : `${bubbleBase} bg-emerald-600 text-white rounded-tl-sm`;

  return (
    <div className={`flex items-end gap-2 ${isMe ? "flex-row-reverse" : "flex-row"}`}>
      <Avatar src={senderAvatar} size="w-8 h-8" />

      <div className={`flex flex-col ${isMe ? "items-end" : "items-start"} gap-1 relative group`}>
        <div className="flex items-end gap-2">
          {isMe && (
            <div className="hidden group-hover:flex items-center gap-1.5 text-gray-400 pb-1.5">
              <button onClick={onEdit} aria-label="Edit message" className="hover:text-gray-600">
                <Pencil className="w-3.5 h-3.5" />
              </button>
              <button onClick={onDelete} aria-label="Delete message" className="hover:text-rose-500">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {message.text && <div className={bubbleClass}>{message.text}</div>}

          {message.file && (
            <div
              className={`${
                isMe ? "bg-white border border-gray-200" : "bg-emerald-600 text-white"
              } rounded-2xl px-4 py-3 w-64`}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-bold ${message.file.badgeClass}`}>
                  {message.file.badge}
                </div>
                <div className="min-w-0">
                  <p className={`text-xs font-medium truncate ${isMe ? "text-gray-700" : "text-white"}`}>
                    {message.file.name}
                  </p>
                  <p className={`text-[11px] ${isMe ? "text-gray-400" : "text-emerald-100"}`}>{message.file.size}</p>
                </div>
              </div>
              <button
                onClick={() => downloadDummyFile(message.file!.name)}
                className={`w-full flex items-center justify-center gap-2 rounded-lg py-1.5 text-xs font-medium ${
                  isMe ? "bg-gray-50 text-gray-600 hover:bg-gray-100" : "bg-white/15 text-white hover:bg-white/25"
                }`}
              >
                Download <Download className="w-3.5 h-3.5" />
              </button>
            </div>
          )}

          {!isMe && (
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-gray-500 pb-1.5"
              aria-label="Message options"
            >
              <MoreHorizontal className="w-4 h-4" />
            </button>
          )}
        </div>

        {message.images && (
          <div className="flex items-center gap-2 mt-1">
            {message.images.slice(0, 3).map((img) => (
              <div key={img.id} className={`w-14 h-14 rounded-lg ${img.gradient}`} />
            ))}
            {message.images.length > 3 && (
              <div className="w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold flex items-center justify-center">
                +{message.images.length - 3}
              </div>
            )}
          </div>
        )}

        <span className="text-[11px] text-gray-400 px-1">
          {message.timestamp}
          {message.edited && " · edited"}
        </span>

        {menuOpen && !isMe && (
          <div className="absolute -top-9 left-10 bg-white rounded-lg shadow-lg border border-gray-100 py-1 z-20 text-xs w-28">
            <button className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-600">Reply</button>
            <button className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-600">Copy</button>
          </div>
        )}
      </div>
    </div>
  );
}

function downloadDummyFile(name: string) {
  const blob = new Blob([`This is a demo placeholder for "${name}".`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name.replace(/\.[^.]+$/, "") + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

/* ------------------------------------------------------------------ */
/* Message input                                                       */
/* ------------------------------------------------------------------ */

function MessageInput({
  value,
  onChange,
  onSend,
  editing,
  onCancelEdit,
}: {
  value: string;
  onChange: (v: string) => void;
  onSend: () => void;
  editing: boolean;
  onCancelEdit: () => void;
}) {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && value.trim()) {
      e.preventDefault();
      onSend();
    }
  };

  return (
    <div className="border-t border-gray-100 px-4 sm:px-6 py-3 bg-white">
      {editing && (
        <div className="flex items-center justify-between text-xs text-gray-500 mb-1.5 px-1">
          <span>Editing message</span>
          <button onClick={onCancelEdit} className="text-rose-500 hover:underline">
            Cancel
          </button>
        </div>
      )}
      <div className="flex items-center gap-2">
        <button className="text-gray-400 hover:text-gray-600 p-1" aria-label="Attach file">
          <Paperclip className="w-5 h-5" />
        </button>
        <button className="text-gray-400 hover:text-gray-600 p-1" aria-label="Emoji">
          <Smile className="w-5 h-5" />
        </button>
        <input
          value={value}
          onChange={(e) => onChange(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type a message here..."
          className="flex-1 bg-transparent outline-none text-sm text-gray-700 placeholder-gray-400"
        />
        <button
          onClick={onSend}
          disabled={!value.trim()}
          className="w-9 h-9 rounded-full bg-emerald-600 disabled:bg-gray-200 flex items-center justify-center text-white transition-colors"
          aria-label="Send message"
        >
          <Send className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Group details right sidebar                                         */
/* ------------------------------------------------------------------ */

function GroupDetailsSidebar({ chat, onClose }: { chat: ChatSummary; onClose: () => void }) {
  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="flex items-center justify-between px-4 pt-4 lg:hidden">
        <span className="text-sm font-semibold text-gray-700">Group details</span>
        <button onClick={onClose} className="p-1 text-gray-400 hover:text-gray-600">
          <X className="w-5 h-5" />
        </button>
      </div>

      <div className="flex flex-col items-center text-center pt-6 pb-5 px-4 border-b border-gray-100">
        <div
          className={`w-16 h-16 rounded-full flex items-center justify-center text-2xl font-semibold mb-3 ${chat.colorClass}`}
        >
          {chat.initial}
        </div>
        <p className="text-sm font-semibold text-gray-800">{chat.name}</p>
        <p className="text-xs text-gray-400 mt-0.5">Members ({chat.memberCount})</p>
      </div>

      <div className="flex-1 overflow-y-auto">
        {/* Files */}
        <div className="px-4 pt-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold tracking-wide text-gray-400">FILES</span>
            <button className="text-[11px] font-medium text-emerald-600 hover:underline">View All</button>
          </div>
          <div className="space-y-2.5">
            {GROUP_FILES.map((f) => (
              <div key={f.id} className="flex items-center gap-3">
                <div className={`w-8 h-8 rounded-md flex items-center justify-center text-[10px] font-bold ${f.badgeClass}`}>
                  {f.badge}
                </div>
                <div className="min-w-0">
                  <p className="text-xs font-medium text-gray-700 truncate">{f.name}</p>
                  <p className="text-[11px] text-gray-400">{f.size}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Photos */}
        <div className="px-4 pt-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold tracking-wide text-gray-400">PHOTOS</span>
            <button className="text-[11px] font-medium text-emerald-600 hover:underline">View All</button>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {GROUP_PHOTOS.map((g, i) => (
              <div key={i} className={`aspect-square rounded-lg ${g}`} />
            ))}
          </div>
        </div>

        {/* Members */}
        <div className="px-4 pt-5 pb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] font-semibold tracking-wide text-gray-400">MEMBERS</span>
            <button className="text-[11px] font-medium text-emerald-600 hover:underline">View All</button>
          </div>
          <div className="space-y-3">
            {GROUP_MEMBERS.map((id) => {
              const p = findPerson(id);
              return (
                <div key={id} className="flex items-center gap-3">
                  <Avatar src={p.avatar} size="w-8 h-8" online={p.online} />
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-gray-700 truncate">{p.name}</p>
                    {p.role && <p className="text-[11px] text-gray-400 truncate">{p.role}</p>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Invite modal                                                        */
/* ------------------------------------------------------------------ */

function InviteModal({ teamName, onClose }: { teamName: string; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [selected, setSelected] = useState<string[]>(["shane", "regina", "jane", "dustin", "brandon"]);
  const [chips, setChips] = useState<string[]>(["shane"]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const removeChip = (id: string) => {
    setChips((prev) => prev.filter((x) => x !== id));
    setSelected((prev) => prev.filter((x) => x !== id));
  };

  const filtered = PEOPLE.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  const handleInvite = () => {
    if (selected.length === 0) {
      setError("Select at least one member to invite.");
      return;
    }
    setError("");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTimeout(onClose, 900);
    }, 700);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 px-4" onClick={onClose}>
      <div
        className="bg-white rounded-2xl w-full max-w-md shadow-xl overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between px-5 pt-5">
          <h2 className="text-base font-semibold text-gray-800">Invite New Members</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>
        <p className="text-xs text-gray-400 px-5 mt-1">Invite Members to {teamName} Team</p>

        <div className="px-5 mt-3">
          <div className="flex flex-wrap items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            {chips.map((id) => {
              const p = findPerson(id);
              return (
                <span
                  key={id}
                  className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs rounded-full pl-1 pr-2 py-1"
                >
                  <img src={p.avatar} className="w-4 h-4 rounded-full object-cover" alt="" />
                  {p.name}
                  <button onClick={() => removeChip(id)} aria-label={`Remove ${p.name}`}>
                    <X className="w-3 h-3 ml-1" />
                  </button>
                </span>
              );
            })}
            <div className="flex items-center gap-1 flex-1 min-w-[80px]">
              <Search className="w-3.5 h-3.5 text-gray-300" />
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search people..."
                className="outline-none text-xs flex-1 min-w-0"
              />
            </div>
          </div>
          {error && <p className="text-[11px] text-rose-500 mt-1">{error}</p>}
        </div>

        <div className="px-5 mt-4">
          <p className="text-xs font-medium text-gray-500 mb-2">Invited ({selected.length})</p>
          <div className="max-h-56 overflow-y-auto space-y-1 -mx-2">
            {filtered.map((p) => {
              const isSelected = selected.includes(p.id);
              return (
                <button
                  key={p.id}
                  onClick={() => toggle(p.id)}
                  className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-50"
                >
                  <div className="flex items-center gap-2.5">
                    <img src={p.avatar} className="w-7 h-7 rounded-full object-cover" alt="" />
                    <span className="text-xs text-gray-700">{p.name}</span>
                  </div>
                  <span
                    className={`w-5 h-5 rounded-full flex items-center justify-center border ${
                      isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-gray-300"
                    }`}
                  >
                    {isSelected && <Check className="w-3 h-3" />}
                  </span>
                </button>
              );
            })}
            {filtered.length === 0 && <p className="text-xs text-gray-400 px-2 py-3">No people found.</p>}
          </div>
        </div>

        <div className="p-5">
          <button
            onClick={handleInvite}
            disabled={submitting || done}
            className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white text-sm font-medium rounded-lg py-2.5 transition-colors"
          >
            {done ? "Invited ✓" : submitting ? "Inviting..." : "Invite"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* Main App                                                             */
/* ------------------------------------------------------------------ */

type MobileView = "list" | "chat" | "details";

export default function ChatApp() {
  const [chats, setChats] = useState<ChatSummary[]>(CHATS);
  const [selectedId, setSelectedId] = useState("jane");
  const [messagesByChat, setMessagesByChat] = useState<Record<string, Message[]>>({
    jane: seedMessages(),
    designers: seedMessages(),
  });
  const [input, setInput] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showInvite, setShowInvite] = useState(false);
  const [mobileView, setMobileView] = useState<MobileView>("chat");
  const scrollRef = useRef<HTMLDivElement>(null);

  const selectedChat = chats.find((c) => c.id === selectedId)!;
  const messages = messagesByChat[selectedId] ?? [];

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, selectedId]);

  const handleSelect = (id: string) => {
    setSelectedId(id);
    setMobileView("chat");
    setEditingId(null);
    setInput("");
    setChats((prev) => prev.map((c) => (c.id === id ? { ...c, unread: 0 } : c)));
    setMessagesByChat((prev) => (prev[id] ? prev : { ...prev, [id]: seedMessages() }));
  };

  const handleSend = () => {
    const text = input.trim();
    if (!text) return;

    if (editingId) {
      setMessagesByChat((prev) => ({
        ...prev,
        [selectedId]: prev[selectedId].map((m) => (m.id === editingId ? { ...m, text, edited: true } : m)),
      }));
      setEditingId(null);
    } else {
      const newMessage: Message = {
        id: `msg-${Date.now()}`,
        senderId: "me",
        text,
        timestamp: "Just now",
        day: "Today",
      };
      setMessagesByChat((prev) => ({
        ...prev,
        [selectedId]: [...(prev[selectedId] ?? []), newMessage],
      }));
    }
    setInput("");
  };

  const handleEdit = (id: string) => {
    const msg = messages.find((m) => m.id === id);
    if (!msg?.text) return;
    setEditingId(id);
    setInput(msg.text);
  };

  const handleDelete = (id: string) => {
    if (!window.confirm("Delete this message?")) return;
    setMessagesByChat((prev) => ({
      ...prev,
      [selectedId]: prev[selectedId].filter((m) => m.id !== id),
    }));
  };

  const groupedByDay = useMemo(() => {
    const groups: { day: string; items: Message[] }[] = [];
    messages.forEach((m) => {
      const last = groups[groups.length - 1];
      if (last && last.day === m.day) last.items.push(m);
      else groups.push({ day: m.day, items: [m] });
    });
    return groups;
  }, [messages]);

  const senderAvatar = (senderId: string) => (senderId === "me" ? ME_AVATAR : findPerson(senderId)?.avatar);

  return (
    <div className="h-screen w-full flex bg-[#F8FAFB] text-gray-800 font-sans overflow-hidden">
      {/* Left sidebar */}
      <div
        className={`${
          mobileView === "list" ? "flex" : "hidden"
        } md:flex flex-col w-full md:w-72 lg:w-80 border-r border-gray-100 shrink-0`}
      >
        <LeftSidebar
          chats={chats}
          selectedId={selectedId}
          onSelect={handleSelect}
          onOpenInvite={() => setShowInvite(true)}
        />
      </div>

      {/* Chat panel */}
      <div className={`${mobileView === "chat" ? "flex" : "hidden"} md:flex flex-col flex-1 min-w-0`}>
        <ChatHeader
          chat={selectedChat}
          onBack={() => setMobileView("list")}
          onOpenInvite={() => setShowInvite(true)}
          onToggleDetails={() => setMobileView("details")}
        />

        <div ref={scrollRef} className="flex-1 overflow-y-auto px-4 sm:px-6 py-5 space-y-5 bg-[#F8FAFB]">
          {groupedByDay.map((group, gi) => (
            <div key={gi} className="space-y-5">
              <div className="flex items-center gap-3">
                <div className="h-px bg-gray-100 flex-1" />
                <span className="text-[11px] text-gray-400">{group.day}</span>
                <div className="h-px bg-gray-100 flex-1" />
              </div>
              {group.items.map((m) => (
                <MessageBubble
                  key={m.id}
                  message={m}
                  isMe={m.senderId === "me"}
                  senderAvatar={senderAvatar(m.senderId)}
                  onEdit={() => handleEdit(m.id)}
                  onDelete={() => handleDelete(m.id)}
                />
              ))}
            </div>
          ))}
          {messages.length === 0 && (
            <div className="text-center text-sm text-gray-400 pt-10">No messages yet. Say hello!</div>
          )}
        </div>

        <MessageInput
          value={input}
          onChange={setInput}
          onSend={handleSend}
          editing={!!editingId}
          onCancelEdit={() => {
            setEditingId(null);
            setInput("");
          }}
        />
      </div>

      {/* Right sidebar - group details */}
      {selectedChat.type === "team" && (
        <div
          className={`${
            mobileView === "details" ? "flex" : "hidden"
          } lg:flex flex-col w-full lg:w-72 border-l border-gray-100 shrink-0`}
        >
          <GroupDetailsSidebar chat={selectedChat} onClose={() => setMobileView("chat")} />
        </div>
      )}

      {showInvite && <InviteModal teamName={selectedChat.name.replace("#", "")} onClose={() => setShowInvite(false)} />}
    </div>
  );
}

/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Star,
  Bookmark,
  MoreHorizontal,
  Reply,
  Printer,
  Trash2,
  Paperclip,
  Download,
  Send,
  Clock,
  Smile,
  Image as ImageIcon,
  Link2,
  Bold,
  Italic,
  Underline,
  List,
  ListOrdered,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  X,
  Plus,
  Pencil,
  Trash,
  FileText,
  Archive,
  Info,
  FolderPlus,
  Mail as MailIcon,
  SlidersHorizontal,
  Settings,
  Square,
  CheckSquare,
  Rows3,
  LayoutList,
  Check,
} from "lucide-react";

/* ========================================================================== */
/*  Types                                                                     */
/* ========================================================================== */

type FolderKey = "inbox" | "marked" | "drafts" | "sent" | "important" | "deleted" | "archived";

interface Label {
  id: string;
  name: string;
  color: string;
  sublabels: Label[];
}

interface Attachment {
  id: string;
  name: string;
  sizeLabel: string;
  kind: "pdf" | "zip" | "image" | "generic";
  progress: number;
  status: "uploading" | "done";
  previewUrl?: string;
}

interface EmailMsg {
  id: string;
  sender: string;
  senderEmail: string;
  time: string;
  date: string;
  subject: string;
  snippet: string;
  body: string[];
  attachments: { name: string; sizeLabel: string; kind: "pdf" | "zip" }[];
  starred: boolean;
  bookmarked: boolean;
  read: boolean;
  folder: FolderKey;
  labelIds: string[];
}

/* ========================================================================== */
/*  Constants / seed data                                                     */
/* ========================================================================== */

const COLOR_PALETTE = ["#F87171", "#2DD4BF", "#FACC15", "#22C55E", "#38BDF8", "#4ADE80", "#A3E635", "#A78BFA", "#F472B6", "#9CA3AF"];

const SEED_LABELS: Label[] = [
  { id: "lbl-personal", name: "Personal", color: "#22D3EE", sublabels: [] },
  { id: "lbl-work", name: "Work", color: "#22C55E", sublabels: [] },
  { id: "lbl-friends", name: "Friends", color: "#FACC15", sublabels: [] },
  { id: "lbl-family", name: "Family", color: "#F472B6", sublabels: [] },
  { id: "lbl-social", name: "Social", color: "#9CA3AF", sublabels: [] },
];

const AVATAR_COLORS = ["#FCA5A5", "#93C5FD", "#FCD34D", "#86EFAC", "#C4B5FD", "#F9A8D4", "#67E8F9"];
const avatarColor = (name: string) => AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
const initials = (name: string) =>
  name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

const SEED_EMAILS: EmailMsg[] = [
  {
    id: "e1",
    sender: "Regina Cooper",
    senderEmail: "regina_cooper@mail.com",
    time: "10:45",
    date: "May 27, 2020 — 10:45",
    subject: "Creative Director Resume",
    snippet: "The Arts play a large role in the expression of inner thoughts and beauty in my life…",
    body: [
      "Hello, Regina Cooper!",
      "I am writing to introduce you to David Boyd. I know you've been looking hard for a candidate for that Creative Director position and I believe David Boyd fits the position.",
      "David Boyd and I worked together at Apple company, where they were the senior Creative Director. They did a terrific job there. David Boyd was responsible for completely restructuring both the public-facing and internal websites. They'd be a great fit at Google company.",
      "I've attached David Boyd resume and portfolio for your review. You can contact David Boyd at regina_cooper@mail.com",
      "Thanks for any help you can give. 🙂",
      "Best regards,\nRegina Cooper",
    ],
    attachments: [
      { name: "Resume.pdf", sizeLabel: "570 KB", kind: "pdf" },
      { name: "Portfolio.zip", sizeLabel: "250 MB", kind: "zip" },
    ],
    starred: true,
    bookmarked: true,
    read: false,
    folder: "inbox",
    labelIds: ["lbl-work"],
  },
  {
    id: "e2",
    sender: "Dustin Williamson",
    senderEmail: "dustin_w@mail.com",
    time: "10:40",
    date: "May 27, 2020 — 10:40",
    subject: "Meeting with friends",
    snippet: "Hello, Mark! I am writing to introduce you to David Boyd…",
    body: ["Hello, Mark!", "I am writing to introduce you to David Boyd. Let's catch up this weekend.", "Talk soon,\nDustin"],
    attachments: [],
    starred: true,
    bookmarked: false,
    read: true,
    folder: "inbox",
    labelIds: ["lbl-friends"],
  },
  {
    id: "e3",
    sender: "Jane Wilson",
    senderEmail: "jane_wilson@mail.com",
    time: "09:15",
    date: "May 27, 2020 — 09:15",
    subject: "UX Conference in New York",
    snippet: "We use the Arts as a means of touching that part of us that we cannot reach with…",
    body: ["Hi there,", "We use the Arts as a means of touching that part of us that we cannot reach with words alone.", "See you there,\nJane"],
    attachments: [],
    starred: false,
    bookmarked: false,
    read: true,
    folder: "inbox",
    labelIds: ["lbl-work"],
  },
  {
    id: "e4",
    sender: "Brandon Pena",
    senderEmail: "brandon_pena@mail.com",
    time: "09:01",
    date: "May 27, 2020 — 09:01",
    subject: "Muzli's weekly design #236",
    snippet: "The arts allow us to be as specific or as abstract as we please. It helps us become…",
    body: ["Hey,", "The arts allow us to be as specific or as abstract as we please. It helps us become more thoughtful.", "Cheers,\nBrandon"],
    attachments: [{ name: "Design.zip", sizeLabel: "12 MB", kind: "zip" }],
    starred: true,
    bookmarked: true,
    read: false,
    folder: "inbox",
    labelIds: ["lbl-personal"],
  },
  {
    id: "e5",
    sender: "Jacob Hawkins",
    senderEmail: "jacob_hawkins@mail.com",
    time: "08:20",
    date: "May 27, 2020 — 08:20",
    subject: "Weekly project report",
    snippet: "From dance and music to abstract art our concept of life is shown through the various…",
    body: ["Team,", "From dance and music to abstract art, our concept of life is shown through the various forms of expression.", "Regards,\nJacob"],
    attachments: [{ name: "Report.pdf", sizeLabel: "1.1 MB", kind: "pdf" }],
    starred: false,
    bookmarked: false,
    read: false,
    folder: "inbox",
    labelIds: ["lbl-work"],
  },
  {
    id: "e6",
    sender: "Shane Black",
    senderEmail: "shane_black@mail.com",
    time: "08:10",
    date: "May 27, 2020 — 08:10",
    subject: "Order Status #24197118",
    snippet: "The arts teach us how to communicate through creative expression…",
    body: ["Hi,", "The arts teach us how to communicate through creative expression.", "Best,\nShane"],
    attachments: [],
    starred: true,
    bookmarked: true,
    read: true,
    folder: "inbox",
    labelIds: ["lbl-social"],
  },
  {
    id: "e7",
    sender: "Regina Cooper",
    senderEmail: "regina_cooper@mail.com",
    time: "08:02",
    date: "May 27, 2020 — 08:02",
    subject: "Welcome to Dribbble!",
    snippet: "The Arts play a large role in the expression of inner thoughts and beauty in my life…",
    body: ["Welcome!", "The Arts play a large role in the expression of inner thoughts and beauty in my life.", "— Regina"],
    attachments: [],
    starred: true,
    bookmarked: true,
    read: true,
    folder: "inbox",
    labelIds: ["lbl-family"],
  },
];

/* ========================================================================== */
/*  Utilities                                                                 */
/* ========================================================================== */

let uidCounter = 0;
const uid = (prefix: string) => `${prefix}-${Date.now()}-${uidCounter++}`;

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  return `${(bytes / Math.pow(1024, i)).toFixed(i > 0 ? 1 : 0)} ${units[i]}`;
};

const inferAttachmentKind = (filename: string): Attachment["kind"] => {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "pdf") return "pdf";
  if (["zip", "rar", "7z"].includes(ext)) return "zip";
  if (["png", "jpg", "jpeg", "gif", "webp"].includes(ext)) return "image";
  return "generic";
};

const useOutsideClose = (onClose: () => void) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onClose();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onClose]);
  return ref;
};

/* ========================================================================== */
/*  Small shared UI: avatar, attachment icon                                  */
/* ========================================================================== */

const Avatar: React.FC<{ name: string; size?: number }> = ({ name, size = 40 }) => (
  <div
    className="flex shrink-0 items-center justify-center rounded-full font-semibold text-white"
    style={{ backgroundColor: avatarColor(name), width: size, height: size, fontSize: size * 0.35 }}
  >
    {initials(name)}
  </div>
);

const ATTACHMENT_COLORS: Record<string, { bg: string; text: string }> = {
  pdf: { bg: "#FEF2F2", text: "#EF4444" },
  zip: { bg: "#F1F5F9", text: "#64748B" },
  image: { bg: "#EFF6FF", text: "#3B82F6" },
  generic: { bg: "#F1F5F9", text: "#64748B" },
};

const AttachmentIcon: React.FC<{ kind: string }> = ({ kind }) => {
  const c = ATTACHMENT_COLORS[kind] ?? ATTACHMENT_COLORS.generic;
  return (
    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg" style={{ backgroundColor: c.bg }}>
      <FileText className="h-4 w-4" style={{ color: c.text }} />
    </div>
  );
};

/* ========================================================================== */
/*  Emoji picker                                                              */
/* ========================================================================== */

const POPULAR_EMOJIS = ["😀", "😍", "🎉", "👍", "🔥", "💯"];
const SMILEY_EMOJIS = [
  "😀", "😃", "😄", "😁", "😆", "😅", "😂", "🙂", "🙃", "😉",
  "😊", "😇", "🥰", "😍", "😘", "😗", "😙", "😚", "😋", "😛",
  "😝", "😜", "🤪", "🤨",
];

const EmojiPickerPopover: React.FC<{ onSelect: (emoji: string) => void; onClose: () => void }> = ({ onSelect, onClose }) => {
  const ref = useOutsideClose(onClose);
  const [query, setQuery] = useState("");
  const filteredSmileys = query ? SMILEY_EMOJIS.filter((_, i) => i % 2 === 0) : SMILEY_EMOJIS;

  return (
    <div ref={ref} className="absolute bottom-full left-0 z-40 mb-2 w-64 rounded-xl border border-gray-100 bg-white p-3 shadow-2xl">
      <div className="relative mb-3">
        <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..."
          className="w-full rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-8 pr-2 text-xs outline-none focus:ring-2 focus:ring-emerald-300"
        />
      </div>
      <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-gray-400">POPULAR</p>
      <div className="mb-3 flex flex-wrap gap-1.5">
        {POPULAR_EMOJIS.map((e) => (
          <button key={e} onClick={() => onSelect(e)} className="rounded-md p-1 text-lg hover:bg-gray-50">
            {e}
          </button>
        ))}
      </div>
      <p className="mb-1.5 text-[10px] font-semibold tracking-wide text-gray-400">SMILEYS</p>
      <div className="flex flex-wrap gap-1.5">
        {filteredSmileys.map((e, i) => (
          <button key={`${e}-${i}`} onClick={() => onSelect(e)} className="rounded-md p-1 text-lg hover:bg-gray-50">
            {e}
          </button>
        ))}
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Compose box (used for both reply pane and New Message modal)              */
/* ========================================================================== */

const ComposeBox: React.FC<{
  showSubject?: boolean;
  initialTo?: string[];
  initialSubject?: string;
  onSend: (payload: { to: string[]; subject: string; html: string; attachments: Attachment[] }) => void;
  sendLabel?: string;
}> = ({ showSubject, initialTo = [], initialSubject = "", onSend, sendLabel = "Send" }) => {
  const editorRef = useRef<HTMLDivElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [to, setTo] = useState<string[]>(initialTo);
  const [toInput, setToInput] = useState("");
  const [ccOpen, setCcOpen] = useState(false);
  const [bccOpen, setBccOpen] = useState(false);
  const [cc, setCc] = useState("");
  const [bcc, setBcc] = useState("");
  const [subject, setSubject] = useState(initialSubject);
  const [isEmpty, setIsEmpty] = useState(true);
  const [attachments, setAttachments] = useState<Attachment[]>([]);
  const [emojiOpen, setEmojiOpen] = useState(false);
  const [scheduleOpen, setScheduleOpen] = useState(false);
  const [scheduledAt, setScheduledAt] = useState("");
  const [toError, setToError] = useState<string | null>(null);
  const [subjectError, setSubjectError] = useState<string | null>(null);

  const exec = (cmd: string, value?: string) => {
    editorRef.current?.focus();
    document.execCommand(cmd, false, value);
  };

  const addRecipient = () => {
    const trimmed = toInput.trim().replace(/,$/, "");
    if (!trimmed) return;
    if (to.some((t) => t.toLowerCase() === trimmed.toLowerCase())) {
      setToError("Already added");
      return;
    }
    setTo((prev) => [...prev, trimmed]);
    setToInput("");
    setToError(null);
  };

  const removeRecipient = (name: string) => setTo((prev) => prev.filter((t) => t !== name));

  const runUploadSimulation = (taskId: string) => {
    const interval = setInterval(() => {
      setAttachments((prev) => {
        const task = prev.find((t) => t.id === taskId);
        if (!task || task.status !== "uploading") {
          clearInterval(interval);
          return prev;
        }
        const next = Math.min(100, task.progress + Math.round(10 + Math.random() * 20));
        if (next >= 100) {
          clearInterval(interval);
          return prev.map((t) => (t.id === taskId ? { ...t, progress: 100, status: "done" } : t));
        }
        return prev.map((t) => (t.id === taskId ? { ...t, progress: next } : t));
      });
    }, 260);
  };

  const handleFilesSelected = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const tasks: Attachment[] = Array.from(fileList).map((file) => {
      const kind = inferAttachmentKind(file.name);
      return {
        id: uid("att"),
        name: file.name,
        sizeLabel: formatBytes(file.size),
        kind,
        progress: 0,
        status: "uploading",
        previewUrl: kind === "image" ? URL.createObjectURL(file) : undefined,
      };
    });
    setAttachments((prev) => [...prev, ...tasks]);
    tasks.forEach((t) => runUploadSimulation(t.id));
  };

  const removeAttachment = (id: string) => setAttachments((prev) => prev.filter((a) => a.id !== id));

  const handleSend = () => {
    let hasError = false;
    if (showSubject && to.length === 0) {
      setToError("Add at least one recipient");
      hasError = true;
    }
    if (showSubject && !subject.trim()) {
      setSubjectError("Subject is required");
      hasError = true;
    }
    if (hasError) return;

    const html = editorRef.current?.innerHTML ?? "";
    if (isEmpty && attachments.length === 0) return;

    onSend({ to, subject, html, attachments });

    setTo(showSubject ? [] : initialTo);
    setSubject("");
    setAttachments([]);
    setScheduledAt("");
    if (editorRef.current) editorRef.current.innerHTML = "";
    setIsEmpty(true);
  };

  return (
    <div className="rounded-xl border border-gray-100">
      <div className="space-y-2 border-b border-gray-100 px-4 py-3">
        <div className="flex flex-wrap items-center gap-1.5">
          <span className="text-[11px] text-gray-400">To:</span>
          {to.map((name) => (
            <span key={name} className="flex items-center gap-1 rounded-md bg-gray-100 px-2 py-1 text-[11px] text-gray-600">
              {name}
              <button onClick={() => removeRecipient(name)} className="text-gray-400 hover:text-gray-600">
                <X className="h-2.5 w-2.5" />
              </button>
            </span>
          ))}
          <input
            value={toInput}
            onChange={(e) => {
              setToInput(e.target.value);
              setToError(null);
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === ",") {
                e.preventDefault();
                addRecipient();
              }
            }}
            onBlur={addRecipient}
            placeholder={to.length === 0 ? "Add recipient" : ""}
            className="min-w-[100px] flex-1 border-none py-0.5 text-[12px] outline-none placeholder:text-gray-300"
          />
          <div className="ml-auto flex gap-2 text-[11px] text-gray-400">
            <button onClick={() => setCcOpen((s) => !s)} className="hover:text-gray-600">
              Cc
            </button>
            <button onClick={() => setBccOpen((s) => !s)} className="hover:text-gray-600">
              Bcc
            </button>
          </div>
        </div>
        {toError && <p className="text-[10.5px] text-red-500">{toError}</p>}
        {ccOpen && (
          <input
            value={cc}
            onChange={(e) => setCc(e.target.value)}
            placeholder="Cc"
            className="w-full border-b border-gray-100 py-1 text-[12px] outline-none placeholder:text-gray-300"
          />
        )}
        {bccOpen && (
          <input
            value={bcc}
            onChange={(e) => setBcc(e.target.value)}
            placeholder="Bcc"
            className="w-full border-b border-gray-100 py-1 text-[12px] outline-none placeholder:text-gray-300"
          />
        )}
      </div>

      {showSubject && (
        <div className="border-b border-gray-100 px-4 py-3">
          <input
            value={subject}
            onChange={(e) => {
              setSubject(e.target.value);
              setSubjectError(null);
            }}
            placeholder="Subject"
            className="w-full border-none text-[13px] font-medium outline-none placeholder:font-normal placeholder:text-gray-300"
          />
          {subjectError && <p className="mt-1 text-[10.5px] text-red-500">{subjectError}</p>}
        </div>
      )}

      {/* Toolbar */}
      <div className="flex flex-wrap items-center gap-0.5 border-b border-gray-100 bg-gray-50 px-3 py-1.5">
        <select
          onChange={(e) => exec("fontSize", e.target.value)}
          defaultValue="3"
          className="mr-1 rounded-md border-none bg-transparent px-1.5 py-1 text-[11px] text-gray-500 outline-none"
        >
          <option value="2">A Small</option>
          <option value="3">A Normal</option>
          <option value="5">A Large</option>
          <option value="7">A Huge</option>
        </select>
        <ToolbarBtn onClick={() => exec("bold")} icon={<Bold className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("italic")} icon={<Italic className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("underline")} icon={<Underline className="h-3.5 w-3.5" />} />
        <ToolbarBtn
          onClick={() => {
            const url = window.prompt("Enter URL");
            if (url) exec("createLink", url);
          }}
          icon={<Link2 className="h-3.5 w-3.5" />}
        />
        <div className="relative">
          <ToolbarBtn onClick={() => setEmojiOpen((s) => !s)} icon={<Smile className="h-3.5 w-3.5" />} />
          {emojiOpen && (
            <EmojiPickerPopover
              onClose={() => setEmojiOpen(false)}
              onSelect={(emoji) => {
                exec("insertText", emoji);
                setEmojiOpen(false);
              }}
            />
          )}
        </div>
        <ToolbarBtn
          onClick={() => {
            const url = window.prompt("Image URL (or attach a file below)");
            if (url) exec("insertImage", url);
          }}
          icon={<ImageIcon className="h-3.5 w-3.5" />}
        />
        <span className="mx-1 h-4 w-px bg-gray-200" />
        <ToolbarBtn onClick={() => exec("insertUnorderedList")} icon={<List className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("insertOrderedList")} icon={<ListOrdered className="h-3.5 w-3.5" />} />
        <span className="mx-1 h-4 w-px bg-gray-200" />
        <ToolbarBtn onClick={() => exec("justifyLeft")} icon={<AlignLeft className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("justifyCenter")} icon={<AlignCenter className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("justifyRight")} icon={<AlignRight className="h-3.5 w-3.5" />} />
        <ToolbarBtn onClick={() => exec("justifyFull")} icon={<AlignJustify className="h-3.5 w-3.5" />} />
      </div>

      {/* Editor */}
      <div className="relative px-4 py-3">
        {isEmpty && <span className="pointer-events-none absolute left-4 top-3 text-[12.5px] text-gray-300">Type something</span>}
        <div
          ref={editorRef}
          contentEditable
          suppressContentEditableWarning
          onInput={() => setIsEmpty((editorRef.current?.innerText.trim().length ?? 0) === 0)}
          className="min-h-[90px] text-[12.5px] text-gray-700 outline-none"
        />
      </div>

      {/* Attachments */}
      {attachments.length > 0 && (
        <div className="flex flex-wrap gap-2 border-t border-gray-100 px-4 py-3">
          {attachments.map((a) => (
            <div key={a.id} className="flex w-56 items-center gap-2.5 rounded-lg border border-gray-100 px-2.5 py-2">
              <AttachmentIcon kind={a.kind} />
              <div className="min-w-0 flex-1">
                <p className="truncate text-[11.5px] text-gray-700">{a.name}</p>
                {a.status === "uploading" ? (
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="h-1 flex-1 overflow-hidden rounded-full bg-gray-100">
                      <div className="h-full rounded-full bg-emerald-400" style={{ width: `${a.progress}%` }} />
                    </div>
                    <span className="text-[10px] text-gray-400">{a.progress}%</span>
                  </div>
                ) : (
                  <p className="text-[10.5px] text-gray-400">{a.sizeLabel}</p>
                )}
              </div>
              <button onClick={() => removeAttachment(a.id)} className="shrink-0 text-gray-300 hover:text-red-400">
                {a.status === "uploading" ? <X className="h-3.5 w-3.5" /> : <Trash className="h-3.5 w-3.5" />}
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Footer actions */}
      <div className="flex items-center gap-2 px-4 py-3">
        <button
          onClick={handleSend}
          className="flex items-center gap-1.5 rounded-lg bg-emerald-500 px-5 py-2 text-xs font-semibold text-white hover:bg-emerald-600"
        >
          {scheduledAt ? "Schedule Send" : sendLabel} <Send className="h-3 w-3" />
        </button>
        <div className="relative">
          <button
            onClick={() => setScheduleOpen((s) => !s)}
            className={`flex h-8 w-8 items-center justify-center rounded-full border ${
              scheduledAt ? "border-emerald-300 text-emerald-500" : "border-gray-200 text-gray-400"
            } hover:bg-gray-50`}
          >
            <Clock className="h-3.5 w-3.5" />
          </button>
          {scheduleOpen && (
            <div className="absolute bottom-full left-0 z-40 mb-2 w-56 rounded-xl border border-gray-100 bg-white p-3 shadow-2xl">
              <p className="mb-2 text-[11px] font-medium text-gray-500">Schedule send</p>
              <input
                type="datetime-local"
                value={scheduledAt}
                onChange={(e) => setScheduledAt(e.target.value)}
                className="w-full rounded-lg border border-gray-200 px-2 py-1.5 text-[11px] outline-none focus:ring-2 focus:ring-emerald-300"
              />
              <button
                onClick={() => setScheduleOpen(false)}
                className="mt-2 w-full rounded-lg bg-emerald-500 py-1.5 text-[11px] font-semibold text-white hover:bg-emerald-600"
              >
                Confirm
              </button>
            </div>
          )}
        </div>
        <button onClick={() => fileInputRef.current?.click()} className="flex h-8 w-8 items-center justify-center rounded-full text-gray-400 hover:bg-gray-50">
          <Paperclip className="h-3.5 w-3.5" />
        </button>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          hidden
          onChange={(e) => {
            handleFilesSelected(e.target.files);
            e.target.value = "";
          }}
        />
      </div>
    </div>
  );
};

const ToolbarBtn: React.FC<{ onClick: () => void; icon: React.ReactNode }> = ({ onClick, icon }) => (
  <button onClick={onClick} className="flex h-6 w-6 items-center justify-center rounded-md text-gray-500 hover:bg-gray-100">
    {icon}
  </button>
);

/* ========================================================================== */
/*  New Message modal                                                        */
/* ========================================================================== */

const NewMessageModal: React.FC<{
  onClose: () => void;
  onSend: (payload: { to: string[]; subject: string; html: string; attachments: Attachment[] }) => void;
  defaultTo?: string;
}> = ({ onClose, onSend, defaultTo }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
    <div className="relative flex max-h-[90vh] w-full max-w-[520px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4">
        <h2 className="text-lg font-semibold text-gray-800">New Message</h2>
        <button onClick={onClose} className="rounded-full bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-100">
          <X className="h-4 w-4" />
        </button>
      </div>
      <div className="overflow-y-auto p-5">
        <ComposeBox
          showSubject
          initialTo={defaultTo ? [defaultTo] : []}
          onSend={(payload) => {
            onSend(payload);
            onClose();
          }}
        />
      </div>
    </div>
  </div>
);

/* ========================================================================== */
/*  Color swatch grid                                                         */
/* ========================================================================== */

const ColorSwatchGrid: React.FC<{ value: string; onChange: (c: string) => void; size?: "sm" | "md" }> = ({ value, onChange, size = "md" }) => {
  const dim = size === "sm" ? "h-5 w-5" : "h-7 w-7";
  return (
    <div className="flex flex-wrap gap-2.5">
      {COLOR_PALETTE.map((c) => (
        <button
          key={c}
          onClick={() => onChange(c)}
          className={`${dim} rounded-full ring-offset-2 transition-all ${value === c ? "ring-2 ring-gray-400" : ""}`}
          style={{ backgroundColor: c }}
        >
          {value === c && <Check className="mx-auto h-3 w-3 text-white" strokeWidth={3} />}
        </button>
      ))}
    </div>
  );
};

/* ========================================================================== */
/*  New / Edit Label modal                                                    */
/* ========================================================================== */

const LabelModal: React.FC<{
  initialName?: string;
  initialColor?: string;
  isEdit?: boolean;
  onClose: () => void;
  onSubmit: (name: string, color: string) => string | void;
}> = ({ initialName = "", initialColor = COLOR_PALETTE[1], isEdit, onClose, onSubmit }) => {
  const [name, setName] = useState(initialName);
  const [color, setColor] = useState(initialColor);
  const [error, setError] = useState<string | null>(null);

  const handleCreate = () => {
    if (!name.trim()) {
      setError("Name is required");
      return;
    }
    const err = onSubmit(name.trim(), color);
    if (err) setError(err);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative w-full max-w-[380px] rounded-2xl bg-white p-6 shadow-2xl">
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-lg font-semibold text-gray-800">{isEdit ? "Edit Label" : "New Label"}</h2>
          <button onClick={onClose} className="rounded-full bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <label className="mb-1.5 block text-[11px] font-medium text-gray-400">Name</label>
        <input
          value={name}
          onChange={(e) => {
            setName(e.target.value);
            setError(null);
          }}
          className={`mb-5 w-full rounded-lg border px-3 py-2.5 text-xs text-gray-700 outline-none focus:ring-2 ${
            error ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-emerald-300"
          }`}
        />
        {error && <p className="-mt-4 mb-4 text-[11px] text-red-500">{error}</p>}

        <label className="mb-2 block text-[11px] font-medium text-gray-400">Color</label>
        <div className="mb-6">
          <ColorSwatchGrid value={color} onChange={setColor} />
        </div>

        <button onClick={handleCreate} className="w-full rounded-xl bg-emerald-500 py-2.5 text-xs font-semibold text-white hover:bg-emerald-600">
          {isEdit ? "Save" : "Create"}
        </button>
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Label context menu                                                        */
/* ========================================================================== */

const LabelContextMenu: React.FC<{
  color: string;
  onEdit: () => void;
  onAddSublabel: () => void;
  onDelete: () => void;
  onColorChange: (c: string) => void;
  onClose: () => void;
}> = ({ color, onEdit, onAddSublabel, onDelete, onColorChange, onClose }) => {
  const ref = useOutsideClose(onClose);
  return (
    <div ref={ref} className="absolute left-6 top-7 z-30 w-44 rounded-xl border border-gray-100 bg-white p-2 shadow-2xl">
      <button onClick={onEdit} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12px] text-gray-600 hover:bg-gray-50">
        <Pencil className="h-3.5 w-3.5 text-gray-400" /> Edit
      </button>
      <button onClick={onAddSublabel} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12px] text-gray-600 hover:bg-gray-50">
        <Plus className="h-3.5 w-3.5 text-gray-400" /> Add Sublabel
      </button>
      <div className="my-1.5 border-t border-gray-100" />
      <button onClick={onDelete} className="flex w-full items-center gap-2.5 rounded-lg px-2.5 py-2 text-left text-[12px] text-red-500 hover:bg-red-50">
        <Trash2 className="h-3.5 w-3.5" /> Delete Label
      </button>
      <div className="mt-2 border-t border-gray-100 pt-2">
        <ColorSwatchGrid value={color} onChange={onColorChange} size="sm" />
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Sidebar                                                                    */
/* ========================================================================== */

const FOLDER_ITEMS: { key: FolderKey; label: string; icon: React.ReactNode }[] = [
  { key: "inbox", label: "Inbox", icon: <MailIcon className="h-4 w-4" /> },
  { key: "marked", label: "Marked", icon: <Star className="h-4 w-4" /> },
  { key: "drafts", label: "Drafts", icon: <Pencil className="h-4 w-4" /> },
  { key: "sent", label: "Sent", icon: <Send className="h-4 w-4" /> },
  { key: "important", label: "Important", icon: <Bookmark className="h-4 w-4" /> },
  { key: "deleted", label: "Deleted", icon: <Trash2 className="h-4 w-4" /> },
];

const Sidebar: React.FC<{
  activeFolder: FolderKey;
  onSelectFolder: (f: FolderKey) => void;
  activeLabelId: string | null;
  onSelectLabel: (id: string) => void;
  labels: Label[];
  counts: Record<string, number>;
  onNewMessage: () => void;
  onAddLabel: () => void;
  onEditLabel: (label: Label) => void;
  onDeleteLabel: (id: string) => void;
  onAddSublabel: (parentId: string) => void;
  onColorChangeLabel: (id: string, color: string) => void;
}> = ({
  activeFolder,
  onSelectFolder,
  activeLabelId,
  onSelectLabel,
  labels,
  counts,
  onNewMessage,
  onAddLabel,
  onEditLabel,
  onDeleteLabel,
  onAddSublabel,
  onColorChangeLabel,
}) => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  return (
    <div className="flex h-full flex-col">
      <button
        onClick={onNewMessage}
        className="mb-6 flex items-center justify-center gap-1.5 rounded-xl bg-emerald-500 py-3 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600"
      >
        NEW MESSAGE
      </button>

      <div className="space-y-0.5">
        {FOLDER_ITEMS.map((f) => (
          <button
            key={f.key}
            onClick={() => onSelectFolder(f.key)}
            className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
              activeFolder === f.key ? "bg-gray-100 text-gray-800 font-medium" : "text-gray-600 hover:bg-gray-50"
            }`}
          >
            <span className="flex items-center gap-2.5 text-gray-500">
              {f.icon}
              <span className={activeFolder === f.key ? "text-gray-800" : "text-gray-600"}>{f.label}</span>
            </span>
            {!!counts[f.key] && (
              <span className="rounded-md bg-red-400 px-1.5 py-0.5 text-[10px] font-semibold text-white">{counts[f.key]}</span>
            )}
          </button>
        ))}
      </div>

      <div className="mt-6 flex items-center justify-between px-1">
        <p className="text-[11px] font-semibold tracking-wide text-gray-400">LABELS</p>
        <button onClick={onAddLabel} className="rounded-md p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Plus className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="mt-1 space-y-0.5">
        {labels.map((l) => (
          <div key={l.id} className="relative">
            <button
              onClick={() => onSelectLabel(l.id)}
              className={`group flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                activeLabelId === l.id ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-2.5">
                <span className="h-2 w-2 rounded-full" style={{ backgroundColor: l.color }} />
                {l.name}
              </span>
              <MoreHorizontal
                onClick={(e) => {
                  e.stopPropagation();
                  setOpenMenuId((id) => (id === l.id ? null : l.id));
                }}
                className="h-3.5 w-3.5 text-gray-300 opacity-0 hover:text-gray-500 group-hover:opacity-100"
              />
            </button>
            {openMenuId === l.id && (
              <LabelContextMenu
                color={l.color}
                onEdit={() => {
                  onEditLabel(l);
                  setOpenMenuId(null);
                }}
                onAddSublabel={() => {
                  onAddSublabel(l.id);
                  setOpenMenuId(null);
                }}
                onDelete={() => {
                  onDeleteLabel(l.id);
                  setOpenMenuId(null);
                }}
                onColorChange={(c) => onColorChangeLabel(l.id, c)}
                onClose={() => setOpenMenuId(null)}
              />
            )}
            {l.sublabels.length > 0 && (
              <div className="ml-4 mt-0.5 space-y-0.5 border-l border-dashed border-gray-200 pl-3">
                {l.sublabels.map((sl) => (
                  <button
                    key={sl.id}
                    onClick={() => onSelectLabel(sl.id)}
                    className={`flex w-full items-center gap-2.5 rounded-lg px-2 py-1.5 text-left text-[12px] ${
                      activeLabelId === sl.id ? "bg-gray-100 text-gray-800" : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <span className="h-1.5 w-1.5 rounded-full" style={{ backgroundColor: sl.color }} />
                    {sl.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Email list item (card) + row (table)                                      */
/* ========================================================================== */

const EmailCard: React.FC<{
  email: EmailMsg;
  active: boolean;
  onOpen: () => void;
  onToggleStar: () => void;
  onToggleBookmark: () => void;
  onDelete: () => void;
  onToggleRead: () => void;
}> = ({ email, active, onOpen, onToggleStar, onToggleBookmark, onDelete, onToggleRead }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <div
      onClick={onOpen}
      className={`relative cursor-pointer border-b border-gray-100 px-4 py-3.5 transition-colors ${
        active ? "bg-emerald-50/40" : "hover:bg-gray-50"
      }`}
    >
      <div className="flex items-start gap-3">
        <Avatar name={email.sender} size={36} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between">
            <p className={`truncate text-[12.5px] ${!email.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>{email.sender}</p>
            <span className="ml-2 shrink-0 text-[10.5px] text-gray-400">{email.time}</span>
          </div>
          <div className="flex items-center gap-1">
            <p className={`truncate text-[12.5px] ${!email.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>{email.subject}</p>
            {email.attachments.length > 0 && <Paperclip className="h-3 w-3 shrink-0 text-gray-300" />}
          </div>
          <p className="mt-0.5 truncate text-[11.5px] text-gray-400">{email.snippet}</p>
          <div className="mt-1.5 flex items-center gap-2.5">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onToggleStar();
              }}
            >
              <Star className={`h-3.5 w-3.5 ${email.starred ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
            </button>
            {email.bookmarked && <Bookmark className="h-3.5 w-3.5 fill-red-400 text-red-400" />}
            <div className="relative ml-auto">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setMenuOpen((s) => !s);
                }}
                className="text-gray-300 hover:text-gray-500"
              >
                <MoreHorizontal className="h-3.5 w-3.5" />
              </button>
              {menuOpen && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  className="absolute right-0 top-5 z-20 w-36 rounded-lg border border-gray-100 bg-white py-1.5 text-[11.5px] shadow-2xl"
                >
                  <button onClick={onToggleBookmark} className="block w-full px-3 py-1.5 text-left text-gray-600 hover:bg-gray-50">
                    {email.bookmarked ? "Remove bookmark" : "Bookmark"}
                  </button>
                  <button onClick={onToggleRead} className="block w-full px-3 py-1.5 text-left text-gray-600 hover:bg-gray-50">
                    Mark as {email.read ? "unread" : "read"}
                  </button>
                  <button onClick={onDelete} className="block w-full px-3 py-1.5 text-left text-red-500 hover:bg-red-50">
                    Delete
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const EmailTableRow: React.FC<{
  email: EmailMsg;
  selected: boolean;
  onToggleSelect: () => void;
  onOpen: () => void;
  onToggleStar: () => void;
  onToggleBookmark: () => void;
}> = ({ email, selected, onToggleSelect, onOpen, onToggleStar, onToggleBookmark }) => (
  <div
    className={`flex cursor-pointer items-center gap-3 border-b border-gray-100 px-4 py-2.5 text-[12.5px] ${
      selected ? "bg-emerald-50/60" : "hover:bg-gray-50"
    }`}
  >
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleSelect();
      }}
    >
      {selected ? <CheckSquare className="h-4 w-4 text-emerald-500" /> : <Square className="h-4 w-4 text-gray-300" />}
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleStar();
      }}
    >
      <Star className={`h-3.5 w-3.5 ${email.starred ? "fill-amber-400 text-amber-400" : "text-gray-300"}`} />
    </button>
    <button
      onClick={(e) => {
        e.stopPropagation();
        onToggleBookmark();
      }}
    >
      <Bookmark className={`h-3.5 w-3.5 ${email.bookmarked ? "fill-red-400 text-red-400" : "text-gray-300"}`} />
    </button>
    <div onClick={onOpen} className="flex min-w-0 flex-1 items-center gap-3">
      <Avatar name={email.sender} size={30} />
      <span className={`w-32 shrink-0 truncate ${!email.read ? "font-semibold text-gray-800" : "text-gray-600"}`}>{email.sender}</span>
      <span className="min-w-0 flex-1 truncate text-gray-500">
        <span className={!email.read ? "font-semibold text-gray-800" : ""}>{email.subject}</span> — {email.snippet}
      </span>
      {email.attachments.length > 0 && <Paperclip className="h-3 w-3 shrink-0 text-gray-300" />}
      <span className="shrink-0 text-[10.5px] text-gray-400">{email.time}</span>
    </div>
  </div>
);

/* ========================================================================== */
/*  Reading pane                                                              */
/* ========================================================================== */

const ReadingPane: React.FC<{
  email: EmailMsg | null;
  index: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  onToggleBookmark: () => void;
  onDelete: () => void;
  onSendReply: (payload: { to: string[]; subject: string; html: string; attachments: Attachment[] }) => void;
}> = ({ email, index, total, onPrev, onNext, onToggleBookmark, onDelete, onSendReply }) => {
  if (!email) {
    return (
      <div className="flex h-full items-center justify-center text-xs text-gray-400">
        <p>Select an email to read</p>
      </div>
    );
  }

  return (
    <div className="flex h-full flex-col">
      <div className="flex items-center justify-between border-b border-gray-100 px-6 py-3.5">
        <button className="rounded-md p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <Reply className="h-4 w-4" />
        </button>
        <div className="flex items-center gap-2 text-[12px] text-gray-500">
          <button onClick={onPrev} className="rounded-md p-1 hover:bg-gray-50" disabled={index <= 0}>
            <ChevronLeft className="h-4 w-4" />
          </button>
          {index + 1} of {total}
          <button onClick={onNext} className="rounded-md p-1 hover:bg-gray-50" disabled={index >= total - 1}>
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
        <div className="flex items-center gap-3 text-gray-400">
          <button onClick={onToggleBookmark}>
            <Bookmark className={`h-4 w-4 ${email.bookmarked ? "fill-red-400 text-red-400" : ""}`} />
          </button>
          <button onClick={() => window.print()} className="hover:text-gray-600">
            <Printer className="h-4 w-4" />
          </button>
          <button onClick={onDelete} className="hover:text-red-400">
            <Trash2 className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-5">
        <div className="mb-5 flex items-start justify-between">
          <div className="flex items-center gap-3">
            <Avatar name={email.sender} size={42} />
            <div>
              <p className="text-[13px] font-semibold text-gray-800">{email.sender}</p>
              <p className="text-[11.5px] text-emerald-600">{email.senderEmail}</p>
            </div>
          </div>
          <span className="text-[11px] text-gray-400">{email.date}</span>
        </div>

        <h1 className="mb-4 text-xl font-semibold text-gray-800">{email.subject}</h1>

        <div className="mb-6 space-y-4 text-[12.5px] leading-relaxed text-gray-600">
          {email.body.map((p, i) => (
            <p key={i} className="whitespace-pre-line">
              {p}
            </p>
          ))}
        </div>

        {email.attachments.length > 0 && (
          <div className="mb-6 flex flex-wrap gap-3">
            {email.attachments.map((a) => (
              <div key={a.name} className="flex w-52 items-center gap-2.5 rounded-lg border border-gray-100 px-3 py-2.5">
                <AttachmentIcon kind={a.kind} />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-[11.5px] text-gray-700">{a.name}</p>
                  <p className="text-[10.5px] text-gray-400">{a.sizeLabel}</p>
                </div>
                <Download className="h-3.5 w-3.5 shrink-0 text-gray-300 hover:text-gray-500" />
              </div>
            ))}
          </div>
        )}

        <ComposeBox initialTo={[email.sender]} onSend={onSendReply} />
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Main Mail screen                                                          */
/* ========================================================================== */

const MailScreen: React.FC = () => {
  const [emails, setEmails] = useState<EmailMsg[]>(SEED_EMAILS);
  const [labels, setLabels] = useState<Label[]>(SEED_LABELS);

  const [activeFolder, setActiveFolder] = useState<FolderKey>("inbox");
  const [activeLabelId, setActiveLabelId] = useState<string | null>(null);
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState<"Recent" | "Oldest" | "Unread">("Recent");
  const [sortOpen, setSortOpen] = useState(false);
  const [listMode, setListMode] = useState<"split" | "table">("split");

  const [activeEmailId, setActiveEmailId] = useState<string | null>(SEED_EMAILS[0]?.id ?? null);
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const [showNewMessage, setShowNewMessage] = useState(false);
  const [labelModal, setLabelModal] = useState<{ mode: "new" | "edit"; label?: Label; parentId?: string } | null>(null);

  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);
  const showToast = (msg: string) => setToast(msg);

  const sortRef = useOutsideClose(() => setSortOpen(false));

  /* ------------------------------ derived lists ------------------------------ */
  const scoped = useMemo(() => {
    let list = emails.filter((e) => (activeLabelId ? e.labelIds.includes(activeLabelId) : e.folder === activeFolder));
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      list = list.filter((e) => e.sender.toLowerCase().includes(q) || e.subject.toLowerCase().includes(q) || e.snippet.toLowerCase().includes(q));
    }
    if (sort === "Unread") list = [...list].sort((a, b) => Number(a.read) - Number(b.read));
    if (sort === "Oldest") list = [...list].reverse();
    return list;
  }, [emails, activeFolder, activeLabelId, search, sort]);

  const activeEmail = scoped.find((e) => e.id === activeEmailId) ?? scoped[0] ?? null;
  const activeIndex = activeEmail ? scoped.findIndex((e) => e.id === activeEmail.id) : -1;

  const counts = {
    inbox: emails.filter((e) => e.folder === "inbox" && !e.read).length,
    important: emails.filter((e) => e.folder === "important" && !e.read).length,
  };

  /* ------------------------------- mutations ---------------------------------- */
  const updateEmail = (id: string, patch: Partial<EmailMsg>) => setEmails((prev) => prev.map((e) => (e.id === id ? { ...e, ...patch } : e)));

  const toggleStar = (id: string) => updateEmail(id, { starred: !emails.find((e) => e.id === id)?.starred });
  const toggleBookmark = (id: string) => updateEmail(id, { bookmarked: !emails.find((e) => e.id === id)?.bookmarked });
  const toggleRead = (id: string) => updateEmail(id, { read: !emails.find((e) => e.id === id)?.read });
  const deleteEmail = (id: string) => {
    updateEmail(id, { folder: "deleted" });
    showToast("Moved to Deleted");
  };

  const handleSendReply = (payload: { to: string[]; subject: string; html: string; attachments: Attachment[] }) => {
    const newEmail: EmailMsg = {
      id: uid("email"),
      sender: "You",
      senderEmail: "you@mail.com",
      time: "Now",
      date: "Just now",
      subject: `Re: ${activeEmail?.subject ?? payload.subject}`,
      snippet: payload.html.replace(/<[^>]+>/g, "").slice(0, 80),
      body: [payload.html.replace(/<[^>]+>/g, "")],
      attachments: payload.attachments.map((a) => ({ name: a.name, sizeLabel: a.sizeLabel, kind: a.kind === "pdf" ? "pdf" : "zip" })),
      starred: false,
      bookmarked: false,
      read: true,
      folder: "sent",
      labelIds: [],
    };
    setEmails((prev) => [newEmail, ...prev]);
    showToast("Reply sent");
  };

  const handleSendNewMessage = (payload: { to: string[]; subject: string; html: string; attachments: Attachment[] }) => {
    const newEmail: EmailMsg = {
      id: uid("email"),
      sender: "You",
      senderEmail: "you@mail.com",
      time: "Now",
      date: "Just now",
      subject: payload.subject,
      snippet: payload.html.replace(/<[^>]+>/g, "").slice(0, 80),
      body: [payload.html.replace(/<[^>]+>/g, "")],
      attachments: payload.attachments.map((a) => ({ name: a.name, sizeLabel: a.sizeLabel, kind: a.kind === "pdf" ? "pdf" : "zip" })),
      starred: false,
      bookmarked: false,
      read: true,
      folder: "sent",
      labelIds: [],
    };
    setEmails((prev) => [newEmail, ...prev]);
    showToast("Message sent");
  };

  /* ------------------------------- labels ------------------------------------- */
  const handleCreateOrEditLabel = (name: string, color: string): string | void => {
    if (labelModal?.mode === "edit" && labelModal.label) {
      const dup = labels.some((l) => l.id !== labelModal.label!.id && l.name.toLowerCase() === name.toLowerCase());
      if (dup) return "A label with this name already exists";
      setLabels((prev) => prev.map((l) => (l.id === labelModal.label!.id ? { ...l, name, color } : l)));
      showToast("Label updated");
    } else if (labelModal?.parentId) {
      setLabels((prev) =>
        prev.map((l) => (l.id === labelModal.parentId ? { ...l, sublabels: [...l.sublabels, { id: uid("lbl"), name, color, sublabels: [] }] } : l))
      );
      showToast("Sublabel added");
    } else {
      const dup = labels.some((l) => l.name.toLowerCase() === name.toLowerCase());
      if (dup) return "A label with this name already exists";
      setLabels((prev) => [...prev, { id: uid("lbl"), name, color, sublabels: [] }]);
      showToast("Label created");
    }
    setLabelModal(null);
  };

  const handleDeleteLabel = (id: string) => {
    setLabels((prev) => prev.filter((l) => l.id !== id));
    if (activeLabelId === id) {
      setActiveLabelId(null);
      setActiveFolder("inbox");
    }
    showToast("Label deleted");
  };

  const handleColorChangeLabel = (id: string, color: string) => setLabels((prev) => prev.map((l) => (l.id === id ? { ...l, color } : l)));

  /* ------------------------------- bulk actions -------------------------------- */
  const toggleSelect = (id: string) =>
    setSelectedIds((prev) => {
      const next = new Set(prev);
      next.has(id) ? next.delete(id) : next.add(id);
      return next;
    });

  const allSelected = scoped.length > 0 && scoped.every((e) => selectedIds.has(e.id));
  const toggleSelectAll = () => setSelectedIds(allSelected ? new Set() : new Set(scoped.map((e) => e.id)));

  const bulkApply = (patch: Partial<EmailMsg> | "delete") => {
    if (patch === "delete") {
      setEmails((prev) => prev.map((e) => (selectedIds.has(e.id) ? { ...e, folder: "deleted" } : e)));
    } else {
      setEmails((prev) => prev.map((e) => (selectedIds.has(e.id) ? { ...e, ...patch } : e)));
    }
    showToast(`Updated ${selectedIds.size} email${selectedIds.size === 1 ? "" : "s"}`);
    setSelectedIds(new Set());
  };

  /* ==================================== RENDER =============================== */

  return (
    <div className="flex h-screen w-full overflow-hidden bg-[#F8FAFB] font-sans text-gray-800">
      {toast && (
        <div className="fixed left-1/2 top-4 z-[70] -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      {/* Sidebar */}
      <div className="hidden w-64 shrink-0 border-r border-gray-100 pt-5 md:block">
        <Sidebar
          activeFolder={activeFolder}
          onSelectFolder={(f) => {
            setActiveFolder(f);
            setActiveLabelId(null);
            setSelectedIds(new Set());
          }}
          activeLabelId={activeLabelId}
          onSelectLabel={(id) => {
            setActiveLabelId(id);
            setSelectedIds(new Set());
          }}
          labels={labels}
          counts={counts}
          onNewMessage={() => setShowNewMessage(true)}
          onAddLabel={() => setLabelModal({ mode: "new" })}
          onEditLabel={(label) => setLabelModal({ mode: "edit", label })}
          onDeleteLabel={handleDeleteLabel}
          onAddSublabel={(parentId) => setLabelModal({ mode: "new", parentId })}
          onColorChangeLabel={handleColorChangeLabel}
        />
      </div>

      {/* List */}
      <div className={`flex min-w-0 flex-col border-r border-gray-100 ${listMode === "table" ? "flex-1" : "w-full md:w-80 lg:w-96"}`}>
        {listMode === "split" ? (
          <div className="flex items-center gap-2 border-b border-gray-100 px-4 py-3">
            <div className="relative flex-1">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-lg border-none bg-transparent py-1.5 pl-8 pr-2 text-xs outline-none placeholder:text-gray-400"
              />
            </div>
            <div className="relative" ref={sortRef}>
              <button onClick={() => setSortOpen((s) => !s)} className="flex items-center gap-1 text-[11.5px] text-gray-400 hover:text-gray-600">
                {sort} <ChevronDown className="h-3 w-3" />
              </button>
              {sortOpen && (
                <div className="absolute right-0 top-6 z-20 w-28 rounded-lg border border-gray-100 bg-white py-1 text-[11.5px] shadow-2xl">
                  {(["Recent", "Oldest", "Unread"] as const).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setSort(s);
                        setSortOpen(false);
                      }}
                      className="block w-full px-3 py-1.5 text-left text-gray-600 hover:bg-gray-50"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <button onClick={() => setListMode("table")} className="rounded-md p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
              <Rows3 className="h-4 w-4" />
            </button>
          </div>
        ) : (
          <div className="flex flex-wrap items-center gap-2.5 border-b border-gray-100 px-4 py-2.5">
            <button onClick={toggleSelectAll}>
              {allSelected ? <CheckSquare className="h-4 w-4 text-emerald-500" /> : <Square className="h-4 w-4 text-gray-300" />}
            </button>
            <IconBtn icon={<Archive className="h-4 w-4" />} onClick={() => bulkApply({ folder: "archived" })} disabled={!selectedIds.size} />
            <IconBtn icon={<Info className="h-4 w-4" />} onClick={() => bulkApply({ read: true })} disabled={!selectedIds.size} />
            <IconBtn icon={<Trash2 className="h-4 w-4" />} onClick={() => bulkApply("delete")} disabled={!selectedIds.size} />
            <IconBtn icon={<FolderPlus className="h-4 w-4" />} onClick={() => bulkApply({ folder: "important" })} disabled={!selectedIds.size} />
            <IconBtn icon={<MailIcon className="h-4 w-4" />} onClick={() => bulkApply({ read: false })} disabled={!selectedIds.size} />
            <div className="relative ml-1 flex-1">
              <Search className="pointer-events-none absolute left-2.5 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                className="w-full rounded-lg border border-gray-200 bg-gray-50 py-1.5 pl-8 pr-2 text-xs outline-none"
              />
            </div>
            <span className="shrink-0 text-[11.5px] text-gray-400">
              {activeIndex + 1} of {scoped.length}
            </span>
            <IconBtn icon={<ChevronLeft className="h-4 w-4" />} onClick={() => setActiveEmailId(scoped[Math.max(0, activeIndex - 1)]?.id ?? null)} />
            <IconBtn icon={<ChevronRight className="h-4 w-4" />} onClick={() => setActiveEmailId(scoped[Math.min(scoped.length - 1, activeIndex + 1)]?.id ?? null)} />
            <IconBtn icon={<SlidersHorizontal className="h-4 w-4" />} onClick={() => setSortOpen((s) => !s)} />
            <IconBtn icon={<LayoutList className="h-4 w-4" />} onClick={() => setListMode("split")} />
            <IconBtn icon={<Settings className="h-4 w-4" />} onClick={() => showToast("Settings coming soon")} />
          </div>
        )}

        <div className="flex-1 overflow-y-auto">
          {scoped.length === 0 && <p className="p-6 text-center text-xs text-gray-400">No emails found.</p>}
          {listMode === "split"
            ? scoped.map((e) => (
                <EmailCard
                  key={e.id}
                  email={e}
                  active={activeEmail?.id === e.id}
                  onOpen={() => {
                    setActiveEmailId(e.id);
                    if (!e.read) toggleRead(e.id);
                  }}
                  onToggleStar={() => toggleStar(e.id)}
                  onToggleBookmark={() => toggleBookmark(e.id)}
                  onDelete={() => deleteEmail(e.id)}
                  onToggleRead={() => toggleRead(e.id)}
                />
              ))
            : scoped.map((e) => (
                <EmailTableRow
                  key={e.id}
                  email={e}
                  selected={selectedIds.has(e.id)}
                  onToggleSelect={() => toggleSelect(e.id)}
                  onOpen={() => {
                    setActiveEmailId(e.id);
                    setListMode("split");
                    if (!e.read) toggleRead(e.id);
                  }}
                  onToggleStar={() => toggleStar(e.id)}
                  onToggleBookmark={() => toggleBookmark(e.id)}
                />
              ))}
        </div>
      </div>

      {/* Reading pane */}
      {listMode === "split" && (
        <div className="hidden flex-1 lg:block">
          <ReadingPane
            email={activeEmail}
            index={Math.max(0, activeIndex)}
            total={scoped.length}
            onPrev={() => setActiveEmailId(scoped[Math.max(0, activeIndex - 1)]?.id ?? null)}
            onNext={() => setActiveEmailId(scoped[Math.min(scoped.length - 1, activeIndex + 1)]?.id ?? null)}
            onToggleBookmark={() => activeEmail && toggleBookmark(activeEmail.id)}
            onDelete={() => activeEmail && deleteEmail(activeEmail.id)}
            onSendReply={handleSendReply}
          />
        </div>
      )}

      {showNewMessage && <NewMessageModal onClose={() => setShowNewMessage(false)} onSend={handleSendNewMessage} />}

      {labelModal && (
        <LabelModal
          isEdit={labelModal.mode === "edit"}
          initialName={labelModal.label?.name}
          initialColor={labelModal.label?.color}
          onClose={() => setLabelModal(null)}
          onSubmit={handleCreateOrEditLabel}
        />
      )}
    </div>
  );
};

const IconBtn: React.FC<{ icon: React.ReactNode; onClick: () => void; disabled?: boolean }> = ({ icon, onClick, disabled }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="flex h-7 w-7 items-center justify-center rounded-md text-gray-400 hover:bg-gray-100 hover:text-gray-600 disabled:opacity-30 disabled:hover:bg-transparent"
  >
    {icon}
  </button>
);

export default MailScreen;

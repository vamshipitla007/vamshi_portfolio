import React, { useState, useRef, useEffect, useMemo } from "react";
import {
  ChevronDown,
  ChevronUp,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  Paperclip,
  MessageSquare,
  Calendar as CalendarIcon,
  Search,
  X,
  Check,
  GripVertical,
  Trash2,
  Download,
  Eye,
  Link as LinkIcon,
  Layers,
  ClipboardList,
  FolderPlus,
  UserPlus,
  Smile,
  Image as ImageIcon,
  ArrowUpDown,
  Move as MoveIcon,
  Archive,
  CheckCheck,
  Copy,
} from "lucide-react";

/* ================================================================== */
/* Types                                                               */
/* ================================================================== */

type ColumnId = "todo" | "inprogress" | "completed";

interface Person {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface LabelDef {
  id: string;
  name: string;
  color: string; // tailwind bg-* class
}

interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
}

interface AttachmentItem {
  id: string;
  name: string;
  size: string;
  uploadedAt: string;
  gradient?: string;
}

interface CommentItem {
  id: string;
  personId: string;
  text: string;
  time: string;
  images?: number;
}

interface ActivityItem {
  id: string;
  text: string;
  time: string;
}

interface CardCover {
  type: "image" | "thumbnails" | "none";
  gradient?: string;
  thumbnails?: string[];
}

interface TaskCard {
  id: string;
  columnId: ColumnId;
  prevColumnId?: ColumnId;
  title: string;
  description: string;
  labels: string[];
  dueDate: string;
  dueTime: string;
  cover: CardCover;
  assignees: string[];
  createdBy: string;
  checklist: ChecklistItem[];
  attachments: AttachmentItem[];
  comments: CommentItem[];
  activity: ActivityItem[];
  watchers: string[];
  complete: boolean;
  checklistOpen: boolean;
}

interface Column {
  id: ColumnId;
  name: string;
  accent: string;
}

interface ProjectItem {
  id: string;
  name: string;
}

/* ================================================================== */
/* Dummy data                                                          */
/* ================================================================== */

const CURRENT_USER = { id: "me", name: "You", avatar: "https://i.pravatar.cc/150?img=11" };

const PEOPLE: Person[] = [
  { id: "jane", name: "Jane Wilson", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: "jacob", name: "Jacob Hawkins", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=14" },
  { id: "regina", name: "Regina Cooper", role: "Back-End Developer", avatar: "https://i.pravatar.cc/150?img=25" },
  { id: "shane", name: "Shane Black", role: "Front-End Developer", avatar: "https://i.pravatar.cc/150?img=15" },
  { id: "dustin", name: "Dustin Williamson", role: "Web Developer", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: "robert", name: "Robert Edwards", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=18" },
];

const findPerson = (id: string) => PEOPLE.find((p) => p.id === id);

const COLOR_SWATCHES = [
  "bg-rose-400",
  "bg-teal-400",
  "bg-amber-400",
  "bg-green-600",
  "bg-emerald-500",
  "bg-sky-500",
  "bg-lime-400",
  "bg-purple-500",
  "bg-pink-400",
  "bg-gray-300",
];

const INITIAL_LABELS: LabelDef[] = [
  { id: "wireframing", name: "Wireframing", color: "bg-sky-400" },
  { id: "design", name: "Design", color: "bg-emerald-500" },
  { id: "frontend", name: "Frontend", color: "bg-teal-400" },
  { id: "backend", name: "Backend", color: "bg-rose-400" },
];

const COLUMNS: Column[] = [
  { id: "todo", name: "TODO", accent: "bg-amber-400" },
  { id: "inprogress", name: "IN PROGRESS", accent: "bg-sky-400" },
  { id: "completed", name: "COMPLETED", accent: "bg-emerald-500" },
];

const PROJECTS: ProjectItem[] = [
  { id: "design-plans", name: "Design Plans" },
  { id: "wireframe-kit", name: "Wireframe UI Kit" },
  { id: "admin-dashboard", name: "Admin Dashboard" },
  { id: "sochi-hotel", name: "Sochi \u2013 Hotel Booking" },
];

const GRAD = {
  mountain: "bg-gradient-to-br from-orange-300 via-red-400 to-purple-700",
  forest: "bg-gradient-to-br from-teal-300 via-cyan-600 to-indigo-900",
  desert: "bg-gradient-to-br from-orange-200 via-orange-300 to-rose-300",
  teal: "bg-gradient-to-br from-teal-400 to-emerald-600",
  pattern: "bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200",
};

function emptyChecklist(): ChecklistItem[] {
  return [];
}

const INITIAL_CARDS: TaskCard[] = [
  {
    id: "t1",
    columnId: "todo",
    title: "Brand Logo Design",
    description: "Make a redesign of the logo in corporate colors.",
    labels: ["design", "frontend"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "none" },
    assignees: ["jacob", "regina"],
    createdBy: "shane",
    checklist: emptyChecklist(),
    attachments: [
      { id: "a1", name: "Logo-v1.ai", size: "1.1 MB", uploadedAt: "12.06.2020 at 09:20" },
      { id: "a2", name: "Logo-v2.ai", size: "1.3 MB", uploadedAt: "13.06.2020 at 14:02" },
    ],
    comments: [],
    activity: [],
    watchers: [],
    complete: false,
    checklistOpen: true,
  },
  {
    id: "t2",
    columnId: "todo",
    title: "New Header Image",
    description: "Create a new hero header illustration for the landing page.",
    labels: ["design"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "image", gradient: GRAD.mountain },
    assignees: ["jacob"],
    createdBy: "jane",
    checklist: emptyChecklist(),
    attachments: [{ id: "a1", name: "Header-final.png", size: "2.4 MB", uploadedAt: "10.06.2020 at 11:00" }],
    comments: [
      { id: "c1", personId: "jacob", text: "Loving this direction!", time: "2 days ago" },
      { id: "c2", personId: "jane", text: "Agreed, let's finalize the palette.", time: "1 day ago" },
      { id: "c3", personId: "jacob", text: "On it.", time: "5 hours ago" },
    ],
    activity: [],
    watchers: ["jane"],
    complete: false,
    checklistOpen: true,
  },
  {
    id: "t3",
    columnId: "todo",
    title: "Wireframe for App",
    description: "Make a framework for an app for a pre-presentation.",
    labels: ["design", "frontend"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "none" },
    assignees: ["jacob", "regina"],
    createdBy: "jane",
    checklist: emptyChecklist(),
    attachments: [],
    comments: [{ id: "c1", personId: "regina", text: "Ready for review whenever.", time: "1 hour ago" }],
    activity: [],
    watchers: [],
    complete: false,
    checklistOpen: true,
  },
  {
    id: "t4",
    columnId: "inprogress",
    title: "Updating Modules",
    description: "Step-by-step update of modules.",
    labels: ["design", "frontend"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "none" },
    assignees: ["jacob", "regina"],
    createdBy: "shane",
    checklist: [
      { id: "c1", text: "Audit current modules", done: true },
      { id: "c2", text: "Update dependencies", done: true },
      { id: "c3", text: "Regression test", done: false },
      { id: "c4", text: "Deploy to staging", done: false },
    ],
    attachments: [
      { id: "a1", name: "Changelog.txt", size: "12 KB", uploadedAt: "15.06.2020 at 10:00" },
      { id: "a2", name: "Modules-diagram.png", size: "800 KB", uploadedAt: "15.06.2020 at 10:05" },
    ],
    comments: [],
    activity: [],
    watchers: [],
    complete: false,
    checklistOpen: false,
  },
  {
    id: "t5",
    columnId: "inprogress",
    title: "Template Progress",
    description:
      "We need to develop several options of tasks template, Frontend template of the interface design and the Backend logic of the templates - carefully work out the details.",
    labels: ["design", "frontend", "backend"],
    dueDate: "2020-01-17",
    dueTime: "10:00 AM",
    cover: { type: "none" },
    assignees: ["regina", "jacob", "jane"],
    createdBy: "shane",
    checklist: [
      { id: "c1", text: "Inbox Template", done: true },
      { id: "c2", text: "Chat Template", done: true },
      { id: "c3", text: "Tasks Template", done: true },
      { id: "c4", text: "Projects Template", done: false },
    ],
    attachments: [
      { id: "a1", name: "Wireframe UI Kit.zip", size: "5.8 MB", uploadedAt: "15.01.2020 at 11:45" },
      { id: "a2", name: "Picture 01.png", size: "1.2 MB", uploadedAt: "15.01.2020 at 11:50", gradient: GRAD.desert },
      { id: "a3", name: "Picture 02.png", size: "1.4 MB", uploadedAt: "15.01.2020 at 11:50", gradient: GRAD.teal },
    ],
    comments: [
      { id: "c1", personId: "jane", text: "Hi Cody, any progress on the project? \ud83c\udf1f", time: "5 min ago" },
      {
        id: "c2",
        personId: "jacob",
        text: 'Hi Jane!\nYes. I just finished developing the "Chat" template.',
        time: "1 day ago",
        images: 6,
      },
      { id: "c3", personId: "regina", text: "Hi Jacob. Will you be able to finish the last item of the task by tomorrow?", time: "5 min ago" },
    ],
    activity: [
      { id: "ac1", text: "Jacob Hawkins completed \u201cChat Template\u201d", time: "1 day ago" },
      { id: "ac2", text: "Jane Wilson added a due date", time: "2 days ago" },
    ],
    watchers: ["jane", "regina"],
    complete: false,
    checklistOpen: true,
  },
  {
    id: "t6",
    columnId: "completed",
    title: "Refresh Photo Slider",
    description: "Swap the homepage slider photography for the new season set.",
    labels: ["design", "frontend"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "thumbnails", thumbnails: [GRAD.desert, GRAD.teal, GRAD.pattern] },
    assignees: ["jacob", "regina"],
    createdBy: "jane",
    checklist: [{ id: "c1", text: "Select new images", done: true }],
    attachments: [
      { id: "a1", name: "Slide-01.jpg", size: "2.0 MB", uploadedAt: "05.06.2020 at 09:00" },
      { id: "a2", name: "Slide-02.jpg", size: "1.8 MB", uploadedAt: "05.06.2020 at 09:05" },
      { id: "a3", name: "Slide-03.jpg", size: "2.2 MB", uploadedAt: "05.06.2020 at 09:10" },
    ],
    comments: [
      { id: "c1", personId: "jacob", text: "Slider looks great live.", time: "3 days ago" },
      { id: "c2", personId: "jane", text: "Nice work!", time: "3 days ago" },
    ],
    activity: [],
    watchers: [],
    complete: true,
    checklistOpen: true,
  },
  {
    id: "t7",
    columnId: "completed",
    title: "Server Startup",
    description: "Running the server in test mode and configuring.",
    labels: ["backend"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "none" },
    assignees: ["dustin", "robert"],
    createdBy: "shane",
    checklist: [
      { id: "c1", text: "Provision instance", done: true },
      { id: "c2", text: "Install dependencies", done: true },
      { id: "c3", text: "Run smoke tests", done: true },
    ],
    attachments: [],
    comments: Array.from({ length: 17 }).map((_, i) => ({
      id: `c${i}`,
      personId: i % 2 === 0 ? "dustin" : "robert",
      text: "Configuration note #" + (i + 1),
      time: `${i + 1} days ago`,
    })),
    activity: [],
    watchers: [],
    complete: true,
    checklistOpen: true,
  },
  {
    id: "t8",
    columnId: "completed",
    title: "New Background",
    description: "Produce a new illustrated background for the dashboard empty state.",
    labels: ["design"],
    dueDate: "2020-06-17",
    dueTime: "10:00 AM",
    cover: { type: "image", gradient: GRAD.forest },
    assignees: ["jacob"],
    createdBy: "jane",
    checklist: [{ id: "c1", text: "Final export", done: true }],
    attachments: [{ id: "a1", name: "Background.png", size: "3.1 MB", uploadedAt: "01.06.2020 at 10:00" }],
    comments: [
      { id: "c1", personId: "jane", text: "This is beautiful, thank you!", time: "4 days ago" },
      { id: "c2", personId: "jacob", text: "Glad you like it \ud83d\ude4c", time: "4 days ago" },
    ],
    activity: [],
    watchers: [],
    complete: true,
    checklistOpen: true,
  },
];

function fmtDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric" });
}

function fmtFullDate(iso: string) {
  if (!iso) return "";
  const d = new Date(iso + "T00:00:00");
  return d.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
}

function downloadDummyFile(name: string) {
  const blob = new Blob([`Demo placeholder for "${name}".`], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = name.replace(/\.[^.]+$/, "") + ".txt";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}

function fileBadge(name: string) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, { label: string; cls: string }> = {
    zip: { label: "ZIP", cls: "bg-amber-50 text-amber-600" },
    png: { label: "PNG", cls: "bg-emerald-50 text-emerald-600" },
    jpg: { label: "JPG", cls: "bg-emerald-50 text-emerald-600" },
    ai: { label: "AI", cls: "bg-orange-50 text-orange-600" },
    txt: { label: "TXT", cls: "bg-gray-50 text-gray-500" },
    pdf: { label: "PDF", cls: "bg-rose-50 text-rose-500" },
  };
  return map[ext] ?? { label: "FILE", cls: "bg-gray-50 text-gray-500" };
}

/* ================================================================== */
/* Small shared components                                             */
/* ================================================================== */

function Avatar({ src, size = "w-7 h-7" }: { src: string; size?: string }) {
  return <img src={src} className={`${size} rounded-full object-cover border-2 border-white`} alt="" />;
}

function AvatarStack({ ids, max = 3 }: { ids: string[]; max?: number }) {
  const shown = ids.slice(0, max);
  const extra = ids.length - shown.length;
  return (
    <div className="flex items-center -space-x-2">
      {shown.map((id) => {
        const p = findPerson(id);
        if (!p) return null;
        return <Avatar key={id} src={p.avatar} size="w-6 h-6" />;
      })}
      {extra > 0 && (
        <div className="w-6 h-6 rounded-full border-2 border-white bg-gray-100 text-gray-500 text-[9px] font-semibold flex items-center justify-center">
          +{extra}
        </div>
      )}
    </div>
  );
}

function LabelBars({ labels, defs }: { labels: string[]; defs: LabelDef[] }) {
  if (labels.length === 0) return null;
  return (
    <div className="flex items-center gap-1 mb-2">
      {labels.map((id) => {
        const l = defs.find((d) => d.id === id);
        if (!l) return null;
        return <span key={id} className={`h-1.5 w-6 rounded-full ${l.color}`} />;
      })}
    </div>
  );
}

function LabelPill({ label, onRemove }: { label: LabelDef; onRemove?: () => void }) {
  return (
    <span className={`inline-flex items-center gap-1 ${label.color} text-white text-[11px] font-medium rounded-md px-2 py-1`}>
      {label.name}
      {onRemove && (
        <button onClick={onRemove} aria-label={`Remove ${label.name}`}>
          <X className="w-3 h-3" />
        </button>
      )}
    </span>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-[11px] font-semibold tracking-wide text-gray-400 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-[11px] text-rose-500 mt-1">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-emerald-400 placeholder-gray-400";

function useClickOutside(onOutside: () => void) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) onOutside();
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [onOutside]);
  return ref;
}

/* ================================================================== */
/* Person picker (assign to) & multiselect                             */
/* ================================================================== */

function PersonMultiSelect({ selected, onChange }: { selected: string[]; onChange: (ids: string[]) => void }) {
  const [query, setQuery] = useState("");
  const results = PEOPLE.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (id: string) => onChange(selected.includes(id) ? selected.filter((x) => x !== id) : [...selected, id]);

  return (
    <div className="w-56">
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-1.5 mb-1">
        <Search className="w-3.5 h-3.5 text-gray-300" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Find Person..."
          className="flex-1 outline-none text-xs"
        />
      </div>
      <div className="max-h-44 overflow-y-auto">
        {results.map((p) => (
          <button
            key={p.id}
            onClick={() => toggle(p.id)}
            className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-50"
          >
            <span className="flex items-center gap-2">
              <img src={p.avatar} className="w-5 h-5 rounded-full object-cover" alt="" />
              <span className="text-xs text-gray-700">{p.name}</span>
            </span>
            {selected.includes(p.id) && <Check className="w-3.5 h-3.5 text-emerald-600" />}
          </button>
        ))}
      </div>
    </div>
  );
}

function MemberFilterSelect({ selected, onChange }: { selected: string[]; onChange: (ids: string[]) => void }) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  const results = PEOPLE.filter((p) => !selected.includes(p.id) && p.name.toLowerCase().includes(query.toLowerCase()));
  const remove = (id: string) => onChange(selected.filter((s) => s !== id));
  const add = (id: string) => {
    onChange([...selected, id]);
    setQuery("");
  };
  return (
    <div className="relative" ref={ref}>
      <div className="flex flex-wrap items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5">
        {selected.map((id) => {
          const p = findPerson(id);
          if (!p) return null;
          return (
            <span key={id} className="flex items-center gap-1 bg-gray-100 text-gray-600 text-xs rounded-full pl-1 pr-1.5 py-0.5">
              <img src={p.avatar} className="w-4 h-4 rounded-full object-cover" alt="" />
              {p.name}
              <button onClick={() => remove(id)} aria-label={`Remove ${p.name}`}>
                <X className="w-3 h-3" />
              </button>
            </span>
          );
        })}
        <input
          value={query}
          onFocus={() => setOpen(true)}
          onChange={(e) => {
            setQuery(e.target.value);
            setOpen(true);
          }}
          className="flex-1 min-w-[60px] outline-none text-xs py-0.5"
        />
        <Search className="w-3.5 h-3.5 text-gray-300 shrink-0" />
      </div>
      {open && results.length > 0 && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-100 rounded-lg shadow-lg py-1 max-h-40 overflow-y-auto">
          {results.map((p) => (
            <button key={p.id} onClick={() => add(p.id)} className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-gray-50 text-gray-700">
              <img src={p.avatar} className="w-5 h-5 rounded-full object-cover" alt="" />
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/* Header: Projects dropdown + Add menu + Filter                       */
/* ================================================================== */

function ProjectsDropdown({
  current,
  projects,
  onSelect,
}: {
  current: string;
  projects: ProjectItem[];
  onSelect: (id: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const ref = useClickOutside(() => setOpen(false));
  const filtered = projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="flex items-center gap-1.5 text-2xl font-semibold text-gray-800">
        {projects.find((p) => p.id === current)?.name}
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-30 mt-2 w-64 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
          <p className="text-sm font-semibold text-gray-700 mb-2">Projects</p>
          <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-2.5 py-1.5 mb-2 border border-gray-100">
            <Search className="w-3.5 h-3.5 text-gray-400" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search Project..."
              className="bg-transparent outline-none text-xs flex-1"
            />
          </div>
          <div className="space-y-0.5 max-h-52 overflow-y-auto">
            {filtered.map((p) => (
              <button
                key={p.id}
                onClick={() => {
                  onSelect(p.id);
                  setOpen(false);
                }}
                className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-50"
              >
                <span className="flex items-center gap-2 text-sm text-gray-700">
                  <Layers className="w-4 h-4 text-gray-400" />
                  {p.name}
                </span>
                {current === p.id && <Check className="w-4 h-4 text-emerald-600" />}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function AddMenu({
  onAddTask,
  onAddBoard,
  onAddProject,
  onInvite,
}: {
  onAddTask: () => void;
  onAddBoard: () => void;
  onAddProject: () => void;
  onInvite: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useClickOutside(() => setOpen(false));
  return (
    <div className="relative" ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl px-4 py-2.5"
      >
        <Plus className="w-4 h-4" /> Add <ChevronDown className="w-3.5 h-3.5" />
      </button>
      {open && (
        <div className="absolute right-0 mt-2 w-44 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-30 text-sm">
          <button
            onClick={() => {
              setOpen(false);
              onAddTask();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <ClipboardList className="w-4 h-4" /> Task
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onAddBoard();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <Layers className="w-4 h-4" /> Board
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onAddProject();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <FolderPlus className="w-4 h-4" /> Project
          </button>
          <button
            onClick={() => {
              setOpen(false);
              onInvite();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <UserPlus className="w-4 h-4" /> Invite
          </button>
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/* Filter panel                                                        */
/* ================================================================== */

interface FilterState {
  search: string;
  labels: string[];
  members: string[];
  dueDate: string;
  status: string;
}

function FilterPanel({
  filters,
  labels,
  onApply,
  onClose,
}: {
  filters: FilterState;
  labels: LabelDef[];
  onApply: (f: FilterState) => void;
  onClose: () => void;
}) {
  const [local, setLocal] = useState<FilterState>(filters);

  const toggleLabel = (id: string) =>
    setLocal((f) => ({ ...f, labels: f.labels.includes(id) ? f.labels.filter((x) => x !== id) : [...f.labels, id] }));

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col">
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            <Search className="w-4 h-4 text-gray-400" />
            <input
              value={local.search}
              onChange={(e) => setLocal((f) => ({ ...f, search: e.target.value }))}
              placeholder="Search Tasks..."
              className="flex-1 outline-none text-sm placeholder-gray-400"
            />
          </div>

          <Field label="Labels">
            <div className="flex flex-wrap gap-2">
              {labels.map((l) => {
                const active = local.labels.includes(l.id);
                return (
                  <button
                    key={l.id}
                    onClick={() => toggleLabel(l.id)}
                    className={`flex items-center gap-1 text-white text-xs font-medium rounded-md px-2.5 py-1.5 ${l.color} ${
                      active ? "ring-2 ring-offset-1 ring-gray-400" : "opacity-70"
                    }`}
                  >
                    {l.name}
                    {active && <Check className="w-3 h-3" />}
                  </button>
                );
              })}
            </div>
          </Field>

          <Field label="Members">
            <MemberFilterSelect selected={local.members} onChange={(ids) => setLocal((f) => ({ ...f, members: ids }))} />
          </Field>

          <Field label="Due Date">
            <div className="relative">
              <select
                value={local.dueDate}
                onChange={(e) => setLocal((f) => ({ ...f, dueDate: e.target.value }))}
                className={`${inputCls} appearance-none pr-8`}
              >
                <option>Due anytime</option>
                <option>Due today</option>
                <option>Due this week</option>
                <option>Overdue</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </Field>

          <Field label="Status">
            <div className="relative">
              <select
                value={local.status}
                onChange={(e) => setLocal((f) => ({ ...f, status: e.target.value }))}
                className={`${inputCls} appearance-none pr-8`}
              >
                <option>Any</option>
                <option>Todo</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </Field>
        </div>
        <div className="px-6 py-5 border-t border-gray-100 flex items-center gap-4">
          <button
            onClick={() => onApply(local)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg px-5 py-2.5"
          >
            Apply Filters
          </button>
          <button
            onClick={() => {
              const reset: FilterState = { search: "", labels: [], members: [], dueDate: "Due anytime", status: "Any" };
              setLocal(reset);
              onApply(reset);
            }}
            className="text-sm font-medium text-emerald-600 hover:underline"
          >
            Reset all Filters
          </button>
        </div>
      </div>
    </>
  );
}

/* ================================================================== */
/* Column menu                                                         */
/* ================================================================== */

function ColumnMenu({
  onMove,
  onSort,
  onComplete,
  onArchive,
  onDelete,
  onColor,
  targetColumns,
}: {
  onMove: (colId: ColumnId) => void;
  onSort: () => void;
  onComplete: () => void;
  onArchive: () => void;
  onDelete: () => void;
  onColor: (cls: string) => void;
  targetColumns: Column[];
}) {
  const [open, setOpen] = useState(false);
  const [moveOpen, setMoveOpen] = useState(false);
  const ref = useClickOutside(() => {
    setOpen(false);
    setMoveOpen(false);
  });

  return (
    <div className="relative" ref={ref}>
      <button onClick={() => setOpen((v) => !v)} className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100">
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <div className="absolute right-0 top-8 w-52 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-30 text-sm">
          <div className="relative">
            <button
              onClick={() => setMoveOpen((v) => !v)}
              className="w-full flex items-center justify-between text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
            >
              <span className="flex items-center gap-2.5">
                <MoveIcon className="w-4 h-4" /> Move
              </span>
              <ChevronRight className="w-3.5 h-3.5" />
            </button>
            {moveOpen && (
              <div className="absolute left-full top-0 ml-1 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5">
                {targetColumns.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => {
                      onMove(c.id);
                      setOpen(false);
                      setMoveOpen(false);
                    }}
                    className="w-full text-left px-3.5 py-1.5 hover:bg-gray-50 text-gray-600 text-xs"
                  >
                    {c.name}
                  </button>
                ))}
              </div>
            )}
          </div>
          <button
            onClick={() => {
              onSort();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <ArrowUpDown className="w-4 h-4" /> Sort Tasks
          </button>
          <div className="h-px bg-gray-100 my-1" />
          <button
            onClick={() => {
              onComplete();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <CheckCheck className="w-4 h-4" /> Complete Tasks
          </button>
          <button
            onClick={() => {
              onArchive();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <Archive className="w-4 h-4" /> Archive Tasks
          </button>
          <div className="h-px bg-gray-100 my-1" />
          <button
            onClick={() => {
              onDelete();
              setOpen(false);
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-rose-50 text-rose-500"
          >
            <Trash2 className="w-4 h-4" /> Delete Tasks
          </button>
          <div className="grid grid-cols-5 gap-2 px-3.5 pt-2 pb-1">
            {COLOR_SWATCHES.map((c) => (
              <button key={c} onClick={() => onColor(c)} className={`w-5 h-5 rounded-full ${c} hover:ring-2 ring-offset-1 ring-gray-300`} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/* Card                                                                 */
/* ================================================================== */

function TaskCardView({
  card,
  labelDefs,
  onOpen,
  onDragStart,
  onToggleChecklistOpen,
}: {
  card: TaskCard;
  labelDefs: LabelDef[];
  onOpen: () => void;
  onDragStart: (e: React.DragEvent) => void;
  onToggleChecklistOpen: () => void;
}) {
  const doneCount = card.checklist.filter((c) => c.done).length;
  const pct = card.checklist.length ? Math.round((doneCount / card.checklist.length) * 100) : 0;

  return (
    <div
      draggable
      onDragStart={onDragStart}
      onClick={onOpen}
      className="bg-white border border-gray-100 rounded-2xl p-4 cursor-pointer hover:shadow-md transition-shadow"
    >
      <LabelBars labels={card.labels} defs={labelDefs} />

      <div className="flex items-start justify-between mb-1.5 gap-2">
        <p className="text-sm font-semibold text-gray-800 leading-snug">{card.title}</p>
        <span className="flex items-center gap-1 text-[10px] text-gray-400 bg-gray-50 rounded-full px-2 py-1 shrink-0">
          <CalendarIcon className="w-3 h-3" /> {fmtDate(card.dueDate)}
        </span>
      </div>

      {card.description && card.cover.type !== "image" && (
        <p className="text-xs text-gray-400 leading-relaxed mb-2 line-clamp-2">{card.description}</p>
      )}

      {card.cover.type === "image" && <div className={`w-full h-28 rounded-xl mb-2 ${card.cover.gradient}`} />}

      {card.cover.type === "thumbnails" && (
        <div className="flex items-center gap-1.5 mb-2">
          {card.cover.thumbnails?.map((g, i) => (
            <div key={i} className={`w-14 h-14 rounded-lg ${g}`} />
          ))}
        </div>
      )}

      {card.checklist.length > 0 && (
        <div className="mb-2">
          <div className="flex items-center justify-between mb-1">
            <span className="text-[10px] font-semibold text-gray-400 tracking-wide">SUB-TASKS: {card.checklist.length}</span>
            <div className="flex items-center gap-1.5">
              <span className="text-[10px] font-semibold text-gray-500">{pct}%</span>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleChecklistOpen();
                }}
                className="text-gray-300 hover:text-gray-500"
              >
                {card.checklistOpen ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${pct}%` }} />
          </div>
          {card.checklistOpen && (
            <div className="mt-2 space-y-1">
              {card.checklist.map((item) => (
                <div key={item.id} className="flex items-center justify-between text-xs text-gray-600 py-0.5">
                  <span className={item.done ? "line-through text-gray-400" : ""}>{item.text}</span>
                  {item.done ? (
                    <span className="w-4 h-4 rounded-full bg-emerald-500 flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5 text-white" />
                    </span>
                  ) : (
                    <span className="w-4 h-4 rounded-full border border-gray-300 shrink-0" />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      <div className="flex items-center justify-between mt-2">
        <div className="flex items-center gap-3 text-gray-400">
          {card.attachments.length > 0 && (
            <span className="flex items-center gap-1 text-[11px]">
              <Paperclip className="w-3.5 h-3.5" /> {card.attachments.length}
            </span>
          )}
          {card.comments.length > 0 && (
            <span className="flex items-center gap-1 text-[11px]">
              <MessageSquare className="w-3.5 h-3.5" /> {card.comments.length}
            </span>
          )}
        </div>
        <AvatarStack ids={card.assignees} />
      </div>
    </div>
  );
}

/* ================================================================== */
/* Board Column                                                        */
/* ================================================================== */

function BoardColumn({
  column,
  cards,
  labelDefs,
  accent,
  onOpenCard,
  onAddCard,
  onDropCard,
  onToggleChecklistOpen,
  onMoveAll,
  onSortColumn,
  onCompleteColumn,
  onArchiveColumn,
  onDeleteColumn,
  onColorChange,
  otherColumns,
}: {
  column: Column;
  cards: TaskCard[];
  labelDefs: LabelDef[];
  accent: string;
  onOpenCard: (id: string) => void;
  onAddCard: () => void;
  onDropCard: (cardId: string) => void;
  onToggleChecklistOpen: (cardId: string) => void;
  onMoveAll: (colId: ColumnId) => void;
  onSortColumn: () => void;
  onCompleteColumn: () => void;
  onArchiveColumn: () => void;
  onDeleteColumn: () => void;
  onColorChange: (cls: string) => void;
  otherColumns: Column[];
}) {
  const [dragOver, setDragOver] = useState(false);

  return (
    <div className="flex flex-col w-full sm:w-80 shrink-0">
      <div className={`h-1 rounded-full mb-3 ${accent}`} />
      <div className="flex items-center justify-between mb-3 px-1">
        <div className="flex items-center gap-2">
          <h2 className="text-sm font-bold tracking-wide text-gray-700">{column.name}</h2>
          <span className="text-[11px] font-semibold text-gray-400 bg-gray-100 rounded-md px-1.5 py-0.5">{cards.length}</span>
        </div>
        <ColumnMenu
          onMove={onMoveAll}
          onSort={onSortColumn}
          onComplete={onCompleteColumn}
          onArchive={onArchiveColumn}
          onDelete={onDeleteColumn}
          onColor={onColorChange}
          targetColumns={otherColumns}
        />
      </div>

      <div
        onDragOver={(e) => {
          e.preventDefault();
          setDragOver(true);
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragOver(false);
          const cardId = e.dataTransfer.getData("text/plain");
          if (cardId) onDropCard(cardId);
        }}
        className={`flex-1 space-y-3 min-h-[120px] rounded-2xl p-1 transition-colors ${dragOver ? "bg-emerald-50/60" : ""}`}
      >
        {cards.map((card) => (
          <TaskCardView
            key={card.id}
            card={card}
            labelDefs={labelDefs}
            onOpen={() => onOpenCard(card.id)}
            onDragStart={(e) => e.dataTransfer.setData("text/plain", card.id)}
            onToggleChecklistOpen={() => onToggleChecklistOpen(card.id)}
          />
        ))}
        <button
          onClick={onAddCard}
          className="w-9 h-9 rounded-full bg-emerald-50 hover:bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto"
          aria-label="Add card"
        >
          <Plus className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Checklist / Comments / Activity (task modal)                        */
/* ================================================================== */

function ChecklistBlock({ items, onUpdate }: { items: ChecklistItem[]; onUpdate: (items: ChecklistItem[]) => void }) {
  const [adding, setAdding] = useState(false);
  const [text, setText] = useState("");
  const doneCount = items.filter((i) => i.done).length;
  const pct = items.length === 0 ? 0 : Math.round((doneCount / items.length) * 100);

  const toggle = (id: string) => onUpdate(items.map((i) => (i.id === id ? { ...i, done: !i.done } : i)));
  const remove = (id: string) => onUpdate(items.filter((i) => i.id !== id));
  const add = () => {
    if (!text.trim()) return;
    onUpdate([...items, { id: `ci-${Date.now()}`, text: text.trim(), done: false }]);
    setText("");
    setAdding(false);
  };

  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-2">CHECKLIST ({pct}%)</h3>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="space-y-0.5">
        {items.map((item) => (
          <div key={item.id} className="group flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-50">
            <button
              onClick={() => toggle(item.id)}
              className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 ${
                item.done ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
              }`}
            >
              {item.done && <Check className="w-3 h-3 text-white" />}
            </button>
            <span className={`text-sm flex-1 ${item.done ? "text-gray-400 line-through" : "text-gray-700"}`}>{item.text}</span>
            <div className="hidden group-hover:flex items-center gap-2 text-gray-300">
              <GripVertical className="w-4 h-4 cursor-grab" />
              <button onClick={() => remove(item.id)} className="hover:text-rose-500">
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
      {adding ? (
        <div className="flex items-center gap-2 mt-2 px-2">
          <input
            autoFocus
            value={text}
            onChange={(e) => setText(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && add()}
            placeholder="New checklist item..."
            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-emerald-400"
          />
          <button onClick={add} className="text-xs font-medium text-white bg-emerald-600 rounded-lg px-3 py-1.5 hover:bg-emerald-700">
            Add
          </button>
          <button
            onClick={() => {
              setAdding(false);
              setText("");
            }}
            className="text-gray-400 hover:text-gray-600"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      ) : (
        <button onClick={() => setAdding(true)} className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:underline mt-2 px-2">
          <Plus className="w-3.5 h-3.5" /> Add Checklist Item
        </button>
      )}
    </div>
  );
}

function AttachmentsBlock({ items, onAdd, onRemove }: { items: AttachmentItem[]; onAdd: (name: string, size: string) => void; onRemove: (id: string) => void }) {
  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <div>
      <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-2">ATTACHMENTS</h3>
      <div className="space-y-2.5">
        {items.map((f) => {
          const badge = fileBadge(f.name);
          return (
            <div key={f.id} className="flex items-center gap-3">
              <div className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${f.gradient ?? badge.cls}`}>
                {!f.gradient && <span className="text-[8px] font-bold">{badge.label}</span>}
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-700 truncate">{f.name}</p>
                <p className="text-[11px] text-gray-400">
                  Uploaded on {f.uploadedAt} \u00b7 {f.size}
                </p>
              </div>
              <button onClick={() => downloadDummyFile(f.name)} className="text-gray-300 hover:text-emerald-600" aria-label="Download">
                <Download className="w-4 h-4" />
              </button>
              <button onClick={() => onRemove(f.id)} className="text-gray-300 hover:text-rose-500" aria-label="Delete">
                <Trash2 className="w-4 h-4" />
              </button>
            </div>
          );
        })}
      </div>
      <input
        ref={fileRef}
        type="file"
        hidden
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) {
            const kb = file.size / 1024;
            const size = kb > 1024 ? `${(kb / 1024).toFixed(1)} MB` : `${Math.round(kb)} KB`;
            onAdd(file.name, size);
          }
          e.target.value = "";
        }}
      />
      <button
        onClick={() => fileRef.current?.click()}
        className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:underline mt-2.5"
      >
        <Plus className="w-3.5 h-3.5" /> Add Attachment
      </button>
    </div>
  );
}

function CommentsBlock({ comments, onAdd }: { comments: CommentItem[]; onAdd: (text: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div>
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add Comment..."
        rows={2}
        className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-emerald-400 resize-none placeholder-gray-400"
      />
      <div className="flex items-center justify-between mt-2 mb-4">
        <button
          onClick={() => {
            if (!text.trim()) return;
            onAdd(text.trim());
            setText("");
          }}
          disabled={!text.trim()}
          className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-medium rounded-lg px-4 py-2"
        >
          Comment
        </button>
        <div className="flex items-center gap-3 text-gray-300">
          <Paperclip className="w-4 h-4" />
          <Smile className="w-4 h-4" />
          <ImageIcon className="w-4 h-4" />
        </div>
      </div>
      <div className="space-y-4">
        {comments.length === 0 && <p className="text-xs text-gray-400">No comments yet.</p>}
        {comments.map((c) => {
          const isMe = c.personId === "me";
          const person = isMe ? CURRENT_USER : findPerson(c.personId);
          if (!person) return null;
          return (
            <div key={c.id} className="flex items-start gap-3">
              <img src={person.avatar} className="w-8 h-8 rounded-full object-cover shrink-0" alt="" />
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-800">{person.name}</span>
                  <span className="text-[11px] text-gray-400">{c.time}</span>
                </div>
                <p className="text-sm text-gray-600 whitespace-pre-line mt-0.5">{c.text}</p>
                {c.images && (
                  <div className="flex items-center gap-2 mt-2">
                    <div className={`w-14 h-14 rounded-lg ${GRAD.teal}`} />
                    <div className={`w-14 h-14 rounded-lg ${GRAD.pattern}`} />
                    <div className={`w-14 h-14 rounded-lg ${GRAD.mountain}`} />
                    {c.images > 3 && (
                      <div className="w-14 h-14 rounded-lg bg-emerald-50 text-emerald-600 text-xs font-semibold flex items-center justify-center">
                        +{c.images - 3}
                      </div>
                    )}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ActivityBlock({ activity }: { activity: ActivityItem[] }) {
  return (
    <div className="space-y-4">
      {activity.length === 0 && <p className="text-xs text-gray-400">No activity yet.</p>}
      {activity.map((a) => (
        <div key={a.id} className="flex items-start gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
          <div>
            <p className="text-sm text-gray-600">{a.text}</p>
            <p className="text-[11px] text-gray-400 mt-0.5">{a.time}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/* Date picker popover                                                 */
/* ================================================================== */

function DatePickerPopover({
  dueDate,
  dueTime,
  onChange,
  onClear,
  onClose,
}: {
  dueDate: string;
  dueTime: string;
  onChange: (date: string, time: string) => void;
  onClear: () => void;
  onClose: () => void;
}) {
  const initial = dueDate ? new Date(dueDate + "T00:00:00") : new Date();
  const [viewMonth, setViewMonth] = useState(initial.getMonth());
  const [viewYear, setViewYear] = useState(initial.getFullYear());
  const [time, setTime] = useState(dueTime || "10:00 AM");
  const ref = useClickOutside(onClose);

  const firstDay = new Date(viewYear, viewMonth, 1);
  const startOffset = (firstDay.getDay() + 6) % 7; // Monday-first
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const cells: (number | null)[] = [...Array(startOffset).fill(null), ...Array.from({ length: daysInMonth }, (_, i) => i + 1)];

  const selectedDay = dueDate ? new Date(dueDate + "T00:00:00") : null;

  const pick = (day: number) => {
    const iso = `${viewYear}-${String(viewMonth + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    onChange(iso, time);
  };

  return (
    <div ref={ref} className="absolute z-40 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-4 w-72">
      <div className="flex items-center justify-between mb-3">
        <button
          onClick={() => {
            if (viewMonth === 0) {
              setViewMonth(11);
              setViewYear((y) => y - 1);
            } else setViewMonth((m) => m - 1);
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <span className="text-sm font-semibold text-gray-700">
          {new Date(viewYear, viewMonth).toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button
          onClick={() => {
            if (viewMonth === 11) {
              setViewMonth(0);
              setViewYear((y) => y + 1);
            } else setViewMonth((m) => m + 1);
          }}
          className="text-gray-400 hover:text-gray-600"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-gray-400 mb-1">
        {["MO", "TU", "WE", "TH", "FR", "SA", "SU"].map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
      <div className="grid grid-cols-7 gap-1">
        {cells.map((day, i) => {
          const isSelected =
            day && selectedDay && selectedDay.getDate() === day && selectedDay.getMonth() === viewMonth && selectedDay.getFullYear() === viewYear;
          return (
            <button
              key={i}
              disabled={!day}
              onClick={() => day && pick(day)}
              className={`h-7 rounded-full text-xs ${
                !day ? "" : isSelected ? "bg-emerald-500 text-white font-semibold" : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {day ?? ""}
            </button>
          );
        })}
      </div>
      <div className="flex items-center gap-2 mt-3">
        <label className="text-xs text-gray-400 flex items-center gap-1">
          <CalendarIcon className="w-3.5 h-3.5" /> Due at
        </label>
        <input
          value={time}
          onChange={(e) => {
            setTime(e.target.value);
            if (dueDate) onChange(dueDate, e.target.value);
          }}
          placeholder="10:00 AM"
          className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-emerald-400"
        />
      </div>
      <button
        onClick={() => {
          onClear();
          onClose();
        }}
        className="w-full mt-3 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg py-2"
      >
        Clear Due Date
      </button>
    </div>
  );
}

/* ================================================================== */
/* Labels dropdown (in task modal)                                     */
/* ================================================================== */

function LabelsDropdown({
  allLabels,
  selected,
  onToggle,
  onOpenManage,
  onClose,
}: {
  allLabels: LabelDef[];
  selected: string[];
  onToggle: (id: string) => void;
  onOpenManage: () => void;
  onClose: () => void;
}) {
  const [query, setQuery] = useState("");
  const ref = useClickOutside(onClose);
  const filtered = allLabels.filter((l) => l.name.toLowerCase().includes(query.toLowerCase()));

  return (
    <div ref={ref} className="absolute z-40 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-3 w-60">
      <p className="text-xs font-semibold text-gray-500 mb-2">Labels</p>
      <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-2.5 py-1.5 mb-2">
        <Search className="w-3.5 h-3.5 text-gray-300" />
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search Label..." className="flex-1 outline-none text-xs" />
      </div>
      <div className="space-y-0.5 max-h-40 overflow-y-auto">
        {filtered.map((l) => (
          <button key={l.id} onClick={() => onToggle(l.id)} className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-50">
            <span className={`text-xs font-medium text-white rounded-md px-2 py-1 ${l.color}`}>{l.name}</span>
            {selected.includes(l.id) && <Check className="w-3.5 h-3.5 text-emerald-600" />}
          </button>
        ))}
      </div>
      <button
        onClick={() => {
          onOpenManage();
          onClose();
        }}
        className="w-full mt-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-lg py-2"
      >
        Add New Label
      </button>
    </div>
  );
}

/* ================================================================== */
/* Assign dropdown                                                     */
/* ================================================================== */

function AssignDropdown({ selected, onToggle, onClose }: { selected: string[]; onToggle: (id: string) => void; onClose: () => void }) {
  const ref = useClickOutside(onClose);
  return (
    <div ref={ref} className="absolute z-40 mt-2 bg-white rounded-xl shadow-xl border border-gray-100 p-3">
      <p className="text-xs font-semibold text-gray-500 mb-2">Assign To</p>
      <PersonMultiSelect selected={selected} onChange={(ids) => ids.forEach((id) => !selected.includes(id) && onToggle(id))} />
    </div>
  );
}

/* ================================================================== */
/* Add New Label modal                                                 */
/* ================================================================== */

function AddNewLabelModal({ labels, onChange, onClose }: { labels: LabelDef[]; onChange: (labels: LabelDef[]) => void; onClose: () => void }) {
  const [colorPickerFor, setColorPickerFor] = useState<string | null>(null);
  const [newName, setNewName] = useState("");

  const updateName = (id: string, name: string) => onChange(labels.map((l) => (l.id === id ? { ...l, name } : l)));
  const updateColor = (id: string, color: string) => onChange(labels.map((l) => (l.id === id ? { ...l, color } : l)));
  const remove = (id: string) => onChange(labels.filter((l) => l.id !== id));
  const addLabel = () => {
    if (!newName.trim()) return;
    onChange([...labels, { id: `lbl-${Date.now()}`, name: newName.trim(), color: "bg-emerald-500" }]);
    setNewName("");
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-[60] flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 pt-5 pb-3">
          <h2 className="text-base font-semibold text-gray-800">Add New Label</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-5 space-y-2.5 max-h-80 overflow-y-auto">
          {labels.map((l) => (
            <div key={l.id} className="flex items-center gap-2 relative">
              <button onClick={() => setColorPickerFor(colorPickerFor === l.id ? null : l.id)} className={`w-6 h-6 rounded-md shrink-0 ${l.color}`} />
              <input
                value={l.name}
                onChange={(e) => updateName(l.id, e.target.value)}
                className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-emerald-400"
              />
              <button className="text-gray-300 hover:text-gray-500">
                <Copy className="w-4 h-4" />
              </button>
              <button onClick={() => remove(l.id)} className="text-gray-300 hover:text-rose-500">
                <Trash2 className="w-4 h-4" />
              </button>

              {colorPickerFor === l.id && (
                <div className="absolute left-0 top-8 bg-white rounded-xl shadow-xl border border-gray-100 p-3 z-10 w-44">
                  <p className="text-[11px] font-semibold text-gray-500 mb-2">Change Color</p>
                  <div className="grid grid-cols-5 gap-2">
                    {COLOR_SWATCHES.map((c) => (
                      <button
                        key={c}
                        onClick={() => {
                          updateColor(l.id, c);
                          setColorPickerFor(null);
                        }}
                        className={`w-6 h-6 rounded-full ${c} hover:ring-2 ring-offset-1 ring-gray-300`}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="flex items-center gap-2">
            <span className="w-6 h-6 rounded-md bg-gray-100 shrink-0" />
            <input
              value={newName}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && addLabel()}
              placeholder="Type an name label..."
              className="flex-1 border border-gray-200 rounded-lg px-2.5 py-1.5 text-xs outline-none focus:border-emerald-400"
            />
          </div>
          <button onClick={addLabel} className="flex items-center gap-1.5 text-sm font-medium text-emerald-600 hover:underline">
            <Plus className="w-3.5 h-3.5" /> Add Label
          </button>
        </div>
        <div className="p-5">
          <button onClick={onClose} className="w-full bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg py-2.5">
            Done
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Task detail modal                                                   */
/* ================================================================== */

function TaskDetailModal({
  card,
  labelDefs,
  onClose,
  onUpdate,
  onDelete,
  onDuplicate,
  onOpenManageLabels,
}: {
  card: TaskCard;
  labelDefs: LabelDef[];
  onClose: () => void;
  onUpdate: (updater: (c: TaskCard) => TaskCard) => void;
  onDelete: () => void;
  onDuplicate: () => void;
  onOpenManageLabels: () => void;
}) {
  const [assignOpen, setAssignOpen] = useState(false);
  const [labelsOpen, setLabelsOpen] = useState(false);
  const [dateOpen, setDateOpen] = useState(false);
  const [moreOpen, setMoreOpen] = useState(false);
  const [tab, setTab] = useState<"comments" | "activity">("comments");
  const [linkCopied, setLinkCopied] = useState(false);
  const [confirmDelete, setConfirmDelete] = useState(false);

  const toggleWatch = () => {
    const watching = card.watchers.includes("me");
    onUpdate((c) => ({ ...c, watchers: watching ? c.watchers.filter((w) => w !== "me") : [...c.watchers, "me"] }));
  };

  const copyLink = () => {
    navigator.clipboard?.writeText(`https://app.example.com/task/${card.id}`).catch(() => {});
    setLinkCopied(true);
    setTimeout(() => setLinkCopied(false), 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-start sm:items-center justify-center px-0 sm:px-4 py-0 sm:py-8 overflow-y-auto" onClick={onClose}>
      <div className="bg-white w-full sm:max-w-xl sm:rounded-2xl shadow-xl min-h-screen sm:min-h-0 sm:my-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-5 sm:px-6 pt-5">
          <div className="flex items-center gap-2">
            <button
              onClick={() => onUpdate((c) => ({ ...c, complete: !c.complete, columnId: c.complete ? c.prevColumnId ?? "todo" : "completed", prevColumnId: c.complete ? undefined : c.columnId }))}
              className={`flex items-center gap-1.5 text-xs font-medium rounded-lg px-3 py-1.5 ${
                card.complete ? "bg-gray-100 text-gray-500" : "bg-emerald-600 text-white hover:bg-emerald-700"
              }`}
            >
              <Check className="w-3.5 h-3.5" /> {card.complete ? "Completed" : "Complete"}
            </button>
            <button onClick={toggleWatch} className={`flex items-center gap-1 text-xs rounded-lg px-2 py-1.5 ${card.watchers.includes("me") ? "text-emerald-600 bg-emerald-50" : "text-gray-400 hover:bg-gray-50"}`}>
              <Eye className="w-3.5 h-3.5" /> {card.watchers.length}
            </button>
            <button onClick={copyLink} className="relative text-gray-400 hover:text-gray-600 p-1.5" aria-label="Copy link">
              <LinkIcon className="w-3.5 h-3.5" />
              {linkCopied && (
                <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-[10px] rounded px-1.5 py-0.5 whitespace-nowrap">
                  Copied!
                </span>
              )}
            </button>
            <div className="relative">
              <button onClick={() => setMoreOpen((v) => !v)} className="text-gray-400 hover:text-gray-600 p-1.5" aria-label="More options">
                <MoreHorizontal className="w-4 h-4" />
              </button>
              {moreOpen && (
                <div className="absolute left-0 top-8 w-40 bg-white rounded-xl shadow-xl border border-gray-100 py-1.5 z-30 text-xs">
                  <button
                    onClick={() => {
                      onDuplicate();
                      setMoreOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-gray-50 text-gray-600"
                  >
                    Duplicate Task
                  </button>
                  <button
                    onClick={() => {
                      setConfirmDelete(true);
                      setMoreOpen(false);
                    }}
                    className="w-full text-left px-3 py-1.5 hover:bg-rose-50 text-rose-500"
                  >
                    Delete Task
                  </button>
                </div>
              )}
            </div>
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600 p-1.5" aria-label="Close">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="px-5 sm:px-6 pt-3">
          <input
            value={card.title}
            onChange={(e) => onUpdate((c) => ({ ...c, title: e.target.value }))}
            className="text-lg font-semibold text-gray-800 w-full outline-none border-b border-transparent focus:border-gray-200 pb-1"
          />
        </div>

        <div className="px-5 sm:px-6 py-5 max-h-[75vh] overflow-y-auto space-y-6">
          <div className="flex flex-wrap gap-8">
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-gray-400 mb-2">ASSIGNED TO</p>
              <div className="flex items-center gap-1.5 relative">
                {card.assignees.map((id) => {
                  const p = findPerson(id);
                  if (!p) return null;
                  return <Avatar key={id} src={p.avatar} size="w-8 h-8" />;
                })}
                <button
                  onClick={() => setAssignOpen((v) => !v)}
                  className="w-8 h-8 rounded-full border border-dashed border-gray-300 text-gray-400 flex items-center justify-center hover:border-emerald-400 hover:text-emerald-500"
                >
                  <Plus className="w-4 h-4" />
                </button>
                {assignOpen && (
                  <AssignDropdown
                    selected={card.assignees}
                    onToggle={(id) =>
                      onUpdate((c) => ({
                        ...c,
                        assignees: c.assignees.includes(id) ? c.assignees.filter((a) => a !== id) : [...c.assignees, id],
                      }))
                    }
                    onClose={() => setAssignOpen(false)}
                  />
                )}
              </div>
            </div>
            <div>
              <p className="text-[11px] font-semibold tracking-wide text-gray-400 mb-2">CREATED BY</p>
              <div className="flex items-center gap-2">
                <Avatar src={findPerson(card.createdBy)?.avatar ?? ""} size="w-8 h-8" />
                <span className="text-sm text-gray-700">{findPerson(card.createdBy)?.name}</span>
              </div>
            </div>
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-wide text-gray-400 mb-2">LABELS</p>
            <div className="flex flex-wrap items-center gap-1.5 relative">
              {card.labels.map((id) => {
                const l = labelDefs.find((d) => d.id === id);
                if (!l) return null;
                return (
                  <LabelPill
                    key={id}
                    label={l}
                    onRemove={() => onUpdate((c) => ({ ...c, labels: c.labels.filter((x) => x !== id) }))}
                  />
                );
              })}
              <button
                onClick={() => setLabelsOpen((v) => !v)}
                className="w-6 h-6 rounded-md border border-dashed border-gray-300 text-gray-400 flex items-center justify-center hover:border-emerald-400 hover:text-emerald-500"
              >
                <Plus className="w-3.5 h-3.5" />
              </button>
              {labelsOpen && (
                <LabelsDropdown
                  allLabels={labelDefs}
                  selected={card.labels}
                  onToggle={(id) =>
                    onUpdate((c) => ({ ...c, labels: c.labels.includes(id) ? c.labels.filter((x) => x !== id) : [...c.labels, id] }))
                  }
                  onOpenManage={onOpenManageLabels}
                  onClose={() => setLabelsOpen(false)}
                />
              )}
            </div>
          </div>

          <div className="relative">
            <p className="text-[11px] font-semibold tracking-wide text-gray-400 mb-2">DUE DATE</p>
            <button
              onClick={() => setDateOpen((v) => !v)}
              className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 hover:border-gray-300"
            >
              <CalendarIcon className="w-4 h-4 text-gray-400" />
              {card.dueDate ? `${fmtFullDate(card.dueDate)}, ${card.dueTime}` : "Set due date"}
            </button>
            {dateOpen && (
              <DatePickerPopover
                dueDate={card.dueDate}
                dueTime={card.dueTime}
                onChange={(date, time) => onUpdate((c) => ({ ...c, dueDate: date, dueTime: time }))}
                onClear={() => onUpdate((c) => ({ ...c, dueDate: "", dueTime: "" }))}
                onClose={() => setDateOpen(false)}
              />
            )}
          </div>

          <div>
            <p className="text-[11px] font-semibold tracking-wide text-gray-400 mb-2">DESCRIPTION</p>
            <textarea
              value={card.description}
              onChange={(e) => onUpdate((c) => ({ ...c, description: e.target.value }))}
              rows={3}
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-600 leading-relaxed outline-none focus:border-emerald-400 resize-none"
            />
          </div>

          <ChecklistBlock items={card.checklist} onUpdate={(items) => onUpdate((c) => ({ ...c, checklist: items }))} />

          <AttachmentsBlock
            items={card.attachments}
            onAdd={(name, size) =>
              onUpdate((c) => ({
                ...c,
                attachments: [...c.attachments, { id: `att-${Date.now()}`, name, size, uploadedAt: new Date().toLocaleDateString() + " at " + new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }) }],
              }))
            }
            onRemove={(id) => onUpdate((c) => ({ ...c, attachments: c.attachments.filter((a) => a.id !== id) }))}
          />

          <div>
            <div className="flex items-center gap-5 border-b border-gray-100 mb-4">
              <button
                onClick={() => setTab("comments")}
                className={`pb-2.5 text-sm font-medium border-b-2 ${tab === "comments" ? "text-gray-800 border-emerald-500" : "text-gray-400 border-transparent"}`}
              >
                Comments
              </button>
              <button
                onClick={() => setTab("activity")}
                className={`pb-2.5 text-sm font-medium border-b-2 ${tab === "activity" ? "text-gray-800 border-emerald-500" : "text-gray-400 border-transparent"}`}
              >
                Activity
              </button>
            </div>
            {tab === "comments" ? (
              <CommentsBlock
                comments={card.comments}
                onAdd={(text) =>
                  onUpdate((c) => ({ ...c, comments: [...c.comments, { id: `cm-${Date.now()}`, personId: "me", text, time: "Just now" }] }))
                }
              />
            ) : (
              <ActivityBlock activity={card.activity} />
            )}
          </div>
        </div>
      </div>

      {confirmDelete && (
        <div className="fixed inset-0 bg-black/40 z-[70] flex items-center justify-center px-4" onClick={() => setConfirmDelete(false)}>
          <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
            <div className="w-11 h-11 rounded-full bg-rose-50 flex items-center justify-center mb-4">
              <Trash2 className="w-5 h-5 text-rose-500" />
            </div>
            <h3 className="text-base font-semibold text-gray-800 mb-1">Delete "{card.title}"?</h3>
            <p className="text-sm text-gray-400 mb-5">This action cannot be undone.</p>
            <div className="flex items-center gap-3">
              <button onClick={() => setConfirmDelete(false)} className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50">
                Cancel
              </button>
              <button
                onClick={() => {
                  onDelete();
                  setConfirmDelete(false);
                }}
                className="flex-1 bg-rose-500 hover:bg-rose-600 text-white text-sm font-medium rounded-lg py-2.5"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ================================================================== */
/* Add Task modal                                                      */
/* ================================================================== */

function AddTaskModal({
  columns,
  labelDefs,
  defaultColumn,
  onClose,
  onCreate,
}: {
  columns: Column[];
  labelDefs: LabelDef[];
  defaultColumn: ColumnId;
  onClose: () => void;
  onCreate: (data: { title: string; description: string; columnId: ColumnId; labels: string[]; assignees: string[] }) => void;
}) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [columnId, setColumnId] = useState<ColumnId>(defaultColumn);
  const [labels, setLabels] = useState<string[]>([]);
  const [assignees, setAssignees] = useState<string[]>([]);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const submit = () => {
    if (!title.trim()) {
      setError("Task title is required.");
      return;
    }
    setSubmitting(true);
    setTimeout(() => {
      onCreate({ title: title.trim(), description: description.trim(), columnId, labels, assignees });
    }, 400);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">Add Task</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="px-6 py-4 space-y-4">
          <Field label="Column">
            <div className="relative">
              <select value={columnId} onChange={(e) => setColumnId(e.target.value as ColumnId)} className={`${inputCls} appearance-none pr-8`}>
                {columns.map((c) => (
                  <option key={c.id} value={c.id}>
                    {c.name}
                  </option>
                ))}
              </select>
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </Field>
          <Field label="Task Title" error={error}>
            <input value={title} onChange={(e) => setTitle(e.target.value)} className={inputCls} placeholder="e.g. Design onboarding flow" />
          </Field>
          <Field label="Description">
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} rows={3} className={`${inputCls} resize-none`} placeholder="Describe the task..." />
          </Field>
          <Field label="Labels">
            <div className="flex flex-wrap gap-2">
              {labelDefs.map((l) => {
                const active = labels.includes(l.id);
                return (
                  <button
                    key={l.id}
                    onClick={() => setLabels((prev) => (active ? prev.filter((x) => x !== l.id) : [...prev, l.id]))}
                    className={`text-white text-xs font-medium rounded-md px-2.5 py-1.5 ${l.color} ${active ? "ring-2 ring-offset-1 ring-gray-400" : "opacity-60"}`}
                  >
                    {l.name}
                  </button>
                );
              })}
            </div>
          </Field>
          <Field label="Assignees">
            <MemberFilterSelect selected={assignees} onChange={setAssignees} />
          </Field>
        </div>
        <div className="px-6 pb-6 flex justify-end">
          <button onClick={submit} disabled={submitting} className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white text-sm font-medium rounded-lg px-8 py-2.5">
            {submitting ? "Creating..." : "Create Task"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Simple name-prompt modal (Board / Project)                          */
/* ================================================================== */

function NamePromptModal({
  title,
  placeholder,
  confirmLabel,
  onClose,
  onSubmit,
}: {
  title: string;
  placeholder: string;
  confirmLabel: string;
  onClose: () => void;
  onSubmit: (name: string) => void;
}) {
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const submit = () => {
    if (!name.trim()) {
      setError("This field is required.");
      return;
    }
    onSubmit(name.trim());
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-base font-semibold text-gray-800">{title}</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-4 h-4" />
          </button>
        </div>
        <Field label="Name" error={error}>
          <input
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && submit()}
            className={inputCls}
            placeholder={placeholder}
          />
        </Field>
        <button onClick={submit} className="w-full mt-4 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg py-2.5">
          {confirmLabel}
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Invite modal                                                        */
/* ================================================================== */

function InviteModal({ onClose }: { onClose: () => void }) {
  const [selected, setSelected] = useState<string[]>([]);
  const [query, setQuery] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  const filtered = PEOPLE.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()));
  const toggle = (id: string) => setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));

  const submit = () => {
    if (selected.length === 0) {
      setError("Select at least one person to invite.");
      return;
    }
    setError("");
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setDone(true);
      setTimeout(onClose, 900);
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-md shadow-xl" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">Invite New Members</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
            <X className="w-5 h-5" />
          </button>
        </div>
        <div className="px-6 mt-3">
          <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
            <Search className="w-3.5 h-3.5 text-gray-300" />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search people..." className="flex-1 outline-none text-xs" />
          </div>
          {error && <p className="text-[11px] text-rose-500 mt-1">{error}</p>}
        </div>
        <div className="px-6 mt-4">
          <p className="text-xs font-medium text-gray-500 mb-2">Invited ({selected.length})</p>
          <div className="max-h-56 overflow-y-auto space-y-1">
            {filtered.map((p) => {
              const isSelected = selected.includes(p.id);
              return (
                <button key={p.id} onClick={() => toggle(p.id)} className="w-full flex items-center justify-between px-2 py-1.5 rounded-lg hover:bg-gray-50">
                  <span className="flex items-center gap-2.5">
                    <img src={p.avatar} className="w-7 h-7 rounded-full object-cover" alt="" />
                    <span className="text-xs text-gray-700">{p.name}</span>
                  </span>
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center border ${isSelected ? "bg-emerald-600 border-emerald-600 text-white" : "border-gray-300"}`}>
                    {isSelected && <Check className="w-3 h-3" />}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        <div className="p-6">
          <button onClick={submit} disabled={submitting || done} className="w-full bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white text-sm font-medium rounded-lg py-2.5">
            {done ? "Invited \u2713" : submitting ? "Inviting..." : "Invite"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Root App                                                            */
/* ================================================================== */

export default function DesignPlanBoard() {
  const [cards, setCards] = useState<TaskCard[]>(INITIAL_CARDS);
  const [columns, setColumns] = useState<Column[]>(COLUMNS);
  const [labels, setLabels] = useState<LabelDef[]>(INITIAL_LABELS);
  const [projects, setProjects] = useState<ProjectItem[]>(PROJECTS);
  const [currentProject, setCurrentProject] = useState("design-plans");

  const [openCardId, setOpenCardId] = useState<string | null>(null);
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ search: "", labels: [], members: [], dueDate: "Due anytime", status: "Any" });

  const [addTaskOpen, setAddTaskOpen] = useState(false);
  const [addTaskDefaultCol, setAddTaskDefaultCol] = useState<ColumnId>("todo");
  const [addBoardOpen, setAddBoardOpen] = useState(false);
  const [addProjectOpen, setAddProjectOpen] = useState(false);
  const [inviteOpen, setInviteOpen] = useState(false);
  const [manageLabelsOpen, setManageLabelsOpen] = useState(false);

  const openCard = cards.find((c) => c.id === openCardId) ?? null;

  const updateCard = (id: string, updater: (c: TaskCard) => TaskCard) => {
    setCards((prev) => prev.map((c) => (c.id === id ? updater(c) : c)));
  };

  const statusLabelForColumn = (colId: ColumnId) => (colId === "todo" ? "Todo" : colId === "inprogress" ? "In Progress" : "Completed");

  const filteredCards = useMemo(() => {
    return cards.filter((c) => {
      if (filters.search && !c.title.toLowerCase().includes(filters.search.toLowerCase()) && !c.description.toLowerCase().includes(filters.search.toLowerCase()))
        return false;
      if (filters.labels.length > 0 && !filters.labels.some((l) => c.labels.includes(l))) return false;
      if (filters.members.length > 0 && !filters.members.some((m) => c.assignees.includes(m))) return false;
      if (filters.status !== "Any" && statusLabelForColumn(c.columnId) !== filters.status) return false;
      return true;
    });
  }, [cards, filters]);

  const activeFilterCount =
    (filters.search ? 1 : 0) + filters.labels.length + filters.members.length + (filters.status !== "Any" ? 1 : 0) + (filters.dueDate !== "Due anytime" ? 1 : 0);

  const moveCard = (cardId: string, columnId: ColumnId) => {
    updateCard(cardId, (c) => ({ ...c, columnId }));
  };

  const deleteCard = (id: string) => {
    setCards((prev) => prev.filter((c) => c.id !== id));
    setOpenCardId(null);
  };

  const duplicateCard = (card: TaskCard) => {
    const copy: TaskCard = { ...card, id: `t-${Date.now()}`, title: `${card.title} (Copy)` };
    setCards((prev) => [...prev, copy]);
    setOpenCardId(copy.id);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 text-gray-800 font-sans overflow-hidden">
      <div className="flex items-center justify-between sm: pt-5 pb-4 flex-wrap gap-3">
        <ProjectsDropdown current={currentProject} projects={projects} onSelect={setCurrentProject} />
        <div className="flex items-center gap-2">
          <button
            onClick={() => setFilterOpen(true)}
            className="relative w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100"
            aria-label="Open filters"
          >
            <SlidersHorizontal className="w-4 h-4" />
            {activeFilterCount > 0 && (
              <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] flex items-center justify-center">
                {activeFilterCount}
              </span>
            )}
          </button>
          <AddMenu
            onAddTask={() => {
              setAddTaskDefaultCol("todo");
              setAddTaskOpen(true);
            }}
            onAddBoard={() => setAddBoardOpen(true)}
            onAddProject={() => setAddProjectOpen(true)}
            onInvite={() => setInviteOpen(true)}
          />
        </div>
      </div>

      <div className="flex-1 overflow-x-auto overflow-y-auto sm:pb-8">
        <div className="flex flex-col sm:flex-row gap-6 min-w-fit">
          {columns.map((col) => {
            const colCards = filteredCards.filter((c) => c.columnId === col.id);
            const otherCols = columns.filter((c) => c.id !== col.id);
            return (
              <BoardColumn
                key={col.id}
                column={col}
                cards={colCards}
                labelDefs={labels}
                accent={col.accent}
                onOpenCard={setOpenCardId}
                onAddCard={() => {
                  setAddTaskDefaultCol(col.id);
                  setAddTaskOpen(true);
                }}
                onDropCard={(cardId) => moveCard(cardId, col.id)}
                onToggleChecklistOpen={(cardId) => updateCard(cardId, (c) => ({ ...c, checklistOpen: !c.checklistOpen }))}
                onMoveAll={(targetId) => setCards((prev) => prev.map((c) => (c.columnId === col.id ? { ...c, columnId: targetId } : c)))}
                onSortColumn={() =>
                  setCards((prev) => {
                    const others = prev.filter((c) => c.columnId !== col.id);
                    const mine = prev.filter((c) => c.columnId === col.id).sort((a, b) => a.title.localeCompare(b.title));
                    return [...others, ...mine];
                  })
                }
                onCompleteColumn={() => setCards((prev) => prev.map((c) => (c.columnId === col.id ? { ...c, complete: true, columnId: "completed" } : c)))}
                onArchiveColumn={() => setCards((prev) => prev.filter((c) => c.columnId !== col.id))}
                onDeleteColumn={() => {
                  if (window.confirm(`Delete all tasks in ${col.name}?`)) {
                    setCards((prev) => prev.filter((c) => c.columnId !== col.id));
                  }
                }}
                onColorChange={(cls) => setColumns((prev) => prev.map((c) => (c.id === col.id ? { ...c, accent: cls } : c)))}
                otherColumns={otherCols}
              />
            );
          })}
        </div>
      </div>

      {filterOpen && (
        <FilterPanel
          filters={filters}
          labels={labels}
          onApply={(f) => {
            setFilters(f);
            setFilterOpen(false);
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}

      {openCard && (
        <TaskDetailModal
          card={openCard}
          labelDefs={labels}
          onClose={() => setOpenCardId(null)}
          onUpdate={(updater) => updateCard(openCard.id, updater)}
          onDelete={() => deleteCard(openCard.id)}
          onDuplicate={() => duplicateCard(openCard)}
          onOpenManageLabels={() => setManageLabelsOpen(true)}
        />
      )}

      {manageLabelsOpen && <AddNewLabelModal labels={labels} onChange={setLabels} onClose={() => setManageLabelsOpen(false)} />}

      {addTaskOpen && (
        <AddTaskModal
          columns={columns}
          labelDefs={labels}
          defaultColumn={addTaskDefaultCol}
          onClose={() => setAddTaskOpen(false)}
          onCreate={({ title, description, columnId, labels: lbls, assignees }) => {
            const newCard: TaskCard = {
              id: `t-${Date.now()}`,
              columnId,
              title,
              description,
              labels: lbls,
              dueDate: "",
              dueTime: "",
              cover: { type: "none" },
              assignees,
              createdBy: "me",
              checklist: [],
              attachments: [],
              comments: [],
              activity: [],
              watchers: [],
              complete: false,
              checklistOpen: true,
            };
            setCards((prev) => [...prev, newCard]);
            setAddTaskOpen(false);
          }}
        />
      )}

      {addBoardOpen && (
        <NamePromptModal
          title="Add Board"
          placeholder="e.g. Backlog"
          confirmLabel="Create Board"
          onClose={() => setAddBoardOpen(false)}
          onSubmit={(name) => {
            const id = `col-${Date.now()}` as ColumnId;
            setColumns((prev) => [...prev, { id, name: name.toUpperCase(), accent: "bg-purple-400" }]);
            setAddBoardOpen(false);
          }}
        />
      )}

      {addProjectOpen && (
        <NamePromptModal
          title="Add Project"
          placeholder="e.g. Marketing Site"
          confirmLabel="Create Project"
          onClose={() => setAddProjectOpen(false)}
          onSubmit={(name) => {
            const id = `proj-${Date.now()}`;
            setProjects((prev) => [...prev, { id, name }]);
            setCurrentProject(id);
            setAddProjectOpen(false);
          }}
        />
      )}

      {inviteOpen && <InviteModal onClose={() => setInviteOpen(false)} />}
    </div>
  );
}

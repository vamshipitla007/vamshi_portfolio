import React, { useState, useMemo, useRef, useEffect } from "react";
import {
  Search,
  ChevronDown,
  SlidersHorizontal,
  Plus,
  MoreHorizontal,
  List,
  LayoutGrid,
  Pencil,
  UserPlus,
  CalendarClock,
  Trash2,
  X,
  Check,
  DollarSign,
  Calendar,
  GripVertical,
  Paperclip,
  Smile,
  Image as ImageIcon,
  Download,
  Box,
  GitBranch,
  Package,
  Code2,
  Hash,
  Flame,
  LayoutDashboard,
  Triangle,
  MessageCircle,
  Clock,
} from "lucide-react";

/* ================================================================== */
/* Types                                                               */
/* ================================================================== */

type Status = "Started" | "On Hold" | "Completed";
type IconKey = "dropbox" | "gitlab" | "bitbucket" | "python" | "slack" | "google" | "angular" | "vue" | "facebook";

interface Person {
  id: string;
  name: string;
  role: string;
  avatar: string;
}

interface ChecklistItem {
  id: string;
  text: string;
  done: boolean;
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

interface FileItem {
  id: string;
  name: string;
  size: string;
}

interface Project {
  id: string;
  name: string;
  client: string;
  icon: IconKey;
  description: string;
  progress: number;
  daysLeft: string;
  urgent: boolean;
  status: Status;
  budget: number;
  startDate: string;
  endDate: string;
  members: string[];
  checklist: ChecklistItem[];
  comments: CommentItem[];
  activity: ActivityItem[];
  files: FileItem[];
}

/* ================================================================== */
/* Dummy data                                                          */
/* ================================================================== */

const CURRENT_USER = { id: "me", name: "You", avatar: "https://i.pravatar.cc/150?img=11" };

const PEOPLE: Person[] = [
  { id: "jane", name: "Jane Wilson", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=5" },
  { id: "jacob", name: "Jacob Hawkins", role: "UI/UX Designer", avatar: "https://i.pravatar.cc/150?img=14" },
  { id: "regina", name: "Regina Cooper", role: "Back-End Developer", avatar: "https://i.pravatar.cc/150?img=25" },
  { id: "ronald", name: "Ronald Robertson", role: "Product Designer", avatar: "https://i.pravatar.cc/150?img=17" },
  { id: "dustin", name: "Dustin Williamson", role: "Web Developer", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: "robert", name: "Robert Edwards", role: "Project Manager", avatar: "https://i.pravatar.cc/150?img=18" },
  { id: "shane", name: "Shane Black", role: "Front-End Developer", avatar: "https://i.pravatar.cc/150?img=15" },
  { id: "kristin", name: "Kristin Mccoy", role: "QA Engineer", avatar: "https://i.pravatar.cc/150?img=27" },
];

const findPerson = (id: string) => PEOPLE.find((p) => p.id === id);

const ICONS: Record<IconKey, { Icon: React.ElementType; bg: string; color: string }> = {
  dropbox: { Icon: Box, bg: "bg-blue-50", color: "text-blue-600" },
  gitlab: { Icon: GitBranch, bg: "bg-orange-50", color: "text-orange-600" },
  bitbucket: { Icon: Package, bg: "bg-sky-50", color: "text-sky-700" },
  python: { Icon: Code2, bg: "bg-amber-50", color: "text-amber-600" },
  slack: { Icon: Hash, bg: "bg-purple-50", color: "text-purple-600" },
  google: { Icon: Flame, bg: "bg-orange-50", color: "text-orange-500" },
  angular: { Icon: LayoutDashboard, bg: "bg-red-50", color: "text-red-600" },
  vue: { Icon: Triangle, bg: "bg-emerald-50", color: "text-emerald-600" },
  facebook: { Icon: MessageCircle, bg: "bg-blue-50", color: "text-blue-500" },
};

const DEFAULT_CHECKLIST: ChecklistItem[] = [
  { id: "c1", text: "Create wireframes", done: true },
  { id: "c2", text: "UI / UX design development", done: true },
  { id: "c3", text: "Layout design", done: true },
  { id: "c4", text: "Functional programming", done: false },
  { id: "c5", text: "Testing for possible errors", done: false },
  { id: "c6", text: "Final debugging applications", done: false },
];

const DEFAULT_COMMENTS: CommentItem[] = [
  { id: "cm1", personId: "jane", text: "Hi Cody, any progress on the project? 🌟", time: "5 min ago" },
  {
    id: "cm2",
    personId: "jacob",
    text: 'Hi Jane!\nYes. I just finished developing the "Chat" template.',
    time: "1 day ago",
    images: 3,
  },
  { id: "cm3", personId: "regina", text: "Hi Jacob. Will you be able to finish the last item of the task by tomorrow?", time: "5 min ago" },
];

const DEFAULT_ACTIVITY: ActivityItem[] = [
  { id: "a1", text: "Jane Wilson changed status to Started", time: "2 hours ago" },
  { id: "a2", text: "Jacob Hawkins completed \u201cUI / UX design development\u201d", time: "1 day ago" },
  { id: "a3", text: "Regina Cooper added a new comment", time: "5 min ago" },
];

const DEFAULT_FILES: FileItem[] = [
  { id: "f1", name: "Wireframe UI Kit.zip", size: "5.8 MB" },
  { id: "f2", name: "Brand Styles Guide.pdf", size: "487 KB" },
  { id: "f3", name: "Rocket - Admin Dash...", size: "5.8 MB" },
  { id: "f4", name: "Picture 01.png", size: "1.2 MB" },
  { id: "f5", name: "Picture 02.png", size: "1.5 MB" },
];

const INITIAL_PROJECTS: Project[] = [
  {
    id: "p1",
    name: "App Development",
    client: "Dropbox, Inc.",
    icon: "dropbox",
    description:
      "You need to develop an application on something like React native, so that it is for Android and IOS. There are about 30 screens, the design and layout in the sketch is ready. The main pages are login, getting a task, a list of tasks, a map, a history of tasks, calling the camera to complete a task. The storage and processing server is on our side, there is a ready-made api for the web service that you will need to use.",
    progress: 50,
    daysLeft: "1 week left",
    urgent: false,
    status: "Started",
    budget: 2500000,
    startDate: "2020-06-17",
    endDate: "2020-07-04",
    members: ["jacob", "regina", "jane"],
    checklist: DEFAULT_CHECKLIST,
    comments: DEFAULT_COMMENTS,
    activity: DEFAULT_ACTIVITY,
    files: DEFAULT_FILES,
  },
  {
    id: "p2",
    name: "Website Redesign",
    client: "GitLab Inc.",
    icon: "gitlab",
    description: "It is necessary to develop a website redesign in a corporate style.",
    progress: 75,
    daysLeft: "1 week left",
    urgent: false,
    status: "Started",
    budget: 1800000,
    startDate: "2020-06-20",
    endDate: "2020-07-10",
    members: ["ronald", "dustin", "robert"],
    checklist: [
      { id: "c1", text: "Competitor research", done: true },
      { id: "c2", text: "Moodboard & style tiles", done: true },
      { id: "c3", text: "Homepage design", done: true },
      { id: "c4", text: "Inner pages design", done: false },
    ],
    comments: [{ id: "cm1", personId: "robert", text: "Homepage v2 is ready for review.", time: "3 hours ago" }],
    activity: [{ id: "a1", text: "Robert Edwards uploaded Homepage v2", time: "3 hours ago" }],
    files: [{ id: "f1", name: "Moodboard.pdf", size: "2.1 MB" }],
  },
  {
    id: "p3",
    name: "Landing Page",
    client: "Bitbucket, Inc.",
    icon: "bitbucket",
    description: "It is necessary to create a landing together with the development of design.",
    progress: 100,
    daysLeft: "1 week left",
    urgent: false,
    status: "Completed",
    budget: 900000,
    startDate: "2020-05-01",
    endDate: "2020-05-20",
    members: ["shane", "kristin"],
    checklist: [
      { id: "c1", text: "Wireframes", done: true },
      { id: "c2", text: "Visual design", done: true },
      { id: "c3", text: "Development", done: true },
    ],
    comments: [],
    activity: [{ id: "a1", text: "Shane Black marked project as Completed", time: "2 days ago" }],
    files: [{ id: "f1", name: "Landing-final.fig", size: "3.4 MB" }],
  },
  {
    id: "p4",
    name: "Parser Development",
    client: "Driveway, Inc.",
    icon: "python",
    description: "It is necessary to develop a ticket site parser in python.",
    progress: 50,
    daysLeft: "5 days left",
    urgent: true,
    status: "Started",
    budget: 650000,
    startDate: "2020-06-25",
    endDate: "2020-07-08",
    members: ["dustin", "shane", "robert"],
    checklist: [
      { id: "c1", text: "Define target sites", done: true },
      { id: "c2", text: "Build scraping engine", done: true },
      { id: "c3", text: "Error handling", done: false },
      { id: "c4", text: "Scheduling & deploy", done: false },
    ],
    comments: [],
    activity: [{ id: "a1", text: "Dustin Williamson updated the scraping engine", time: "6 hours ago" }],
    files: [],
  },
  {
    id: "p5",
    name: "App Development",
    client: "Slack Technologies, Inc.",
    icon: "slack",
    description: "Create a mobile application on iOS and Android devices.",
    progress: 50,
    daysLeft: "5 days left",
    urgent: true,
    status: "Started",
    budget: 3200000,
    startDate: "2020-06-10",
    endDate: "2020-07-15",
    members: ["jane", "ronald"],
    checklist: DEFAULT_CHECKLIST.map((c) => ({ ...c })),
    comments: [],
    activity: [],
    files: [],
  },
  {
    id: "p6",
    name: "App Development",
    client: "Google, Inc.",
    icon: "google",
    description: "Create a mobile application on iOS and Android devices.",
    progress: 25,
    daysLeft: "1 week left",
    urgent: false,
    status: "On Hold",
    budget: 4500000,
    startDate: "2020-07-01",
    endDate: "2020-08-01",
    members: ["jacob", "kristin"],
    checklist: [
      { id: "c1", text: "Discovery", done: true },
      { id: "c2", text: "Design system", done: false },
    ],
    comments: [],
    activity: [],
    files: [],
  },
  {
    id: "p7",
    name: "Admin Dashboard",
    client: "ArtTemplate, Inc.",
    icon: "angular",
    description: "Necessary to create Admin Dashboard on Angular 8.",
    progress: 30,
    daysLeft: "1 week left",
    urgent: false,
    status: "Started",
    budget: 1200000,
    startDate: "2020-06-18",
    endDate: "2020-07-05",
    members: ["robert", "shane", "dustin"],
    checklist: [
      { id: "c1", text: "Set up Angular project", done: true },
      { id: "c2", text: "Build layout shell", done: false },
    ],
    comments: [],
    activity: [],
    files: [],
  },
  {
    id: "p8",
    name: "Web App on Vue.js",
    client: "ArtTemplate, Inc.",
    icon: "vue",
    description: "It is necessary to develop a web app on the framework Vue.js",
    progress: 100,
    daysLeft: "1 week left",
    urgent: false,
    status: "Completed",
    budget: 980000,
    startDate: "2020-04-01",
    endDate: "2020-04-25",
    members: ["ronald", "jane"],
    checklist: [{ id: "c1", text: "Ship v1", done: true }],
    comments: [],
    activity: [],
    files: [],
  },
  {
    id: "p9",
    name: "App Development",
    client: "Facebook, Inc.",
    icon: "facebook",
    description: "Create a mobile application on iOS and Android devices.",
    progress: 50,
    daysLeft: "1 week left",
    urgent: false,
    status: "Started",
    budget: 5000000,
    startDate: "2020-06-05",
    endDate: "2020-07-20",
    members: ["kristin", "jacob", "regina"],
    checklist: DEFAULT_CHECKLIST.map((c) => ({ ...c, done: false })),
    comments: [],
    activity: [],
    files: [],
  },
];

const STATUS_OPTIONS: { value: Status; dot: string }[] = [
  { value: "Started", dot: "bg-amber-400" },
  { value: "On Hold", dot: "bg-sky-400" },
  { value: "Completed", dot: "bg-emerald-500" },
];

const fmtMoney = (n: number) => n.toLocaleString("de-DE");

function timeAgoLabel() {
  return "Just now";
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

/* ================================================================== */
/* Small shared components                                             */
/* ================================================================== */

function AvatarStack({ ids, max = 3 }: { ids: string[]; max?: number }) {
  const shown = ids.slice(0, max);
  const extra = ids.length - shown.length;
  return (
    <div className="flex items-center -space-x-2">
      {shown.map((id) => {
        const p = findPerson(id);
        if (!p) return null;
        return (
          <img key={id} src={p.avatar} alt={p.name} title={p.name} className="w-7 h-7 rounded-full border-2 border-white object-cover" />
        );
      })}
      {extra > 0 && (
        <div className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 text-gray-500 text-[10px] font-semibold flex items-center justify-center">
          +{extra}
        </div>
      )}
    </div>
  );
}

function ProjectIcon({ icon, size = "w-10 h-10" }: { icon: IconKey; size?: string }) {
  const cfg = ICONS[icon];
  const Icon = cfg.Icon;
  return (
    <div className={`${size} rounded-xl ${cfg.bg} flex items-center justify-center shrink-0`}>
      <Icon className={`w-5 h-5 ${cfg.color}`} />
    </div>
  );
}

function StatusDropdown({
  value,
  onChange,
  className = "",
}: {
  value: Status;
  onChange: (s: Status) => void;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

//   const currentDot = STATUS_OPTIONS.find((s) => s.value === value)?.dot;

  return (
    <div className={`relative ${className}`} ref={ref}>
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-2 border border-gray-200 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:border-gray-300"
      >
        <span className="flex items-center gap-2">
          <Check className="w-3.5 h-3.5 text-emerald-600" />
          {value}
        </span>
        <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-100 rounded-lg shadow-lg py-1">
          {STATUS_OPTIONS.map((opt) => (
            <button
              key={opt.value}
              onClick={() => {
                onChange(opt.value);
                setOpen(false);
              }}
              className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 text-gray-700"
            >
              <span className="flex items-center gap-2">
                <span className={`w-2 h-2 rounded-full ${opt.dot}`} />
                {opt.value}
              </span>
              {value === opt.value && <Check className="w-3.5 h-3.5 text-emerald-600" />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function MemberMultiSelect({
  selected,
  onChange,
  placeholder = "Search people...",
}: {
  selected: string[];
  onChange: (ids: string[]) => void;
  placeholder?: string;
}) {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const results = PEOPLE.filter(
    (p) => !selected.includes(p.id) && p.name.toLowerCase().includes(query.toLowerCase())
  );

  const remove = (id: string) => onChange(selected.filter((s) => s !== id));
  const add = (id: string) => {
    onChange([...selected, id]);
    setQuery("");
  };

  return (
    <div className="relative" ref={ref}>
      <div className="flex flex-wrap items-center gap-1.5 border border-gray-200 rounded-lg px-2.5 py-1.5 focus-within:border-emerald-400">
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
          placeholder={selected.length === 0 ? placeholder : ""}
          className="flex-1 min-w-[80px] outline-none text-xs py-0.5"
        />
        <Search className="w-3.5 h-3.5 text-gray-300 shrink-0" />
      </div>
      {open && results.length > 0 && (
        <div className="absolute z-30 mt-1 w-full bg-white border border-gray-100 rounded-lg shadow-lg py-1 max-h-44 overflow-y-auto">
          {results.map((p) => (
            <button
              key={p.id}
              onClick={() => add(p.id)}
              className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-gray-50 text-gray-700"
            >
              <img src={p.avatar} className="w-5 h-5 rounded-full object-cover" alt="" />
              {p.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function Field({ label, error, children }: { label: string; error?: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-medium text-gray-500 mb-1.5">{label}</label>
      {children}
      {error && <p className="text-[11px] text-rose-500 mt-1">{error}</p>}
    </div>
  );
}

const inputCls =
  "w-full border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700 outline-none focus:border-emerald-400 placeholder-gray-400";


/* ================================================================== */
/* Project Card + List row                                             */
/* ================================================================== */

function CardMenu({
  onEdit,
  onDelete,
}: {
  onEdit: () => void;
  onDelete: () => void;
}) {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="relative" ref={ref}>
      <button
        onClick={(e) => {
          e.stopPropagation();
          setOpen((v) => !v);
        }}
        className="w-7 h-7 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100"
        aria-label="Project options"
      >
        <MoreHorizontal className="w-4 h-4" />
      </button>
      {open && (
        <div
          onClick={(e) => e.stopPropagation()}
          className="absolute right-0 top-8 w-44 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-30 text-sm"
        >
          <button
            onClick={() => {
              setOpen(false);
              onEdit();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600"
          >
            <Pencil className="w-4 h-4" /> Edit
          </button>
          <button onClick={() => setOpen(false)} className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600">
            <UserPlus className="w-4 h-4" /> Add Member
          </button>
          <button onClick={() => setOpen(false)} className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600">
            <CalendarClock className="w-4 h-4" /> Add Due Date
          </button>
          <div className="h-px bg-gray-100 my-1" />
          <button
            onClick={() => {
              setOpen(false);
              onDelete();
            }}
            className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-rose-50 text-rose-500"
          >
            <Trash2 className="w-4 h-4" /> Delete Project
          </button>
        </div>
      )}
    </div>
  );
}

function ProjectCard({
  project,
  onOpen,
  onEdit,
  onDelete,
}: {
  project: Project;
  onOpen: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      className="bg-white border border-gray-100 rounded-2xl p-5 hover:shadow-md transition-shadow cursor-pointer flex flex-col"
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center gap-3">
          <ProjectIcon icon={project.icon} />
          <div>
            <p className="text-sm font-semibold text-gray-800">{project.name}</p>
            <p className="text-xs text-gray-400">{project.client}</p>
          </div>
        </div>
        <CardMenu onEdit={onEdit} onDelete={onDelete} />
      </div>

      <p className="text-xs text-gray-400 leading-relaxed mb-4 line-clamp-2">{project.description}</p>

      <div className="mb-4">
        <div className="flex items-center justify-between mb-1.5">
          <span className="text-xs text-gray-400">Progress</span>
          <span className="text-xs font-semibold text-gray-700">{project.progress}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${project.progress}%` }} />
        </div>
      </div>

      <div className="flex items-center justify-between mt-auto">
        <span
          className={`flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full ${
            project.urgent ? "bg-amber-50 text-amber-600" : "bg-gray-50 text-gray-500"
          }`}
        >
          <Clock className="w-3 h-3" /> {project.daysLeft}
        </span>
        <AvatarStack ids={project.members} />
      </div>
    </div>
  );
}

function ProjectListRow({
  project,
  onOpen,
  onEdit,
  onDelete,
}: {
  project: Project;
  onOpen: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  return (
    <div
      onClick={onOpen}
      className="bg-white border border-gray-100 rounded-xl p-4 flex items-center gap-4 hover:shadow-md transition-shadow cursor-pointer"
    >
      <ProjectIcon icon={project.icon} size="w-10 h-10" />
      <div className="min-w-0 w-48 shrink-0">
        <p className="text-sm font-semibold text-gray-800 truncate">{project.name}</p>
        <p className="text-xs text-gray-400 truncate">{project.client}</p>
      </div>
      <div className="flex-1 hidden md:block">
        <div className="flex items-center justify-between mb-1">
          <span className="text-[11px] text-gray-400">Progress</span>
          <span className="text-[11px] font-semibold text-gray-700">{project.progress}%</span>
        </div>
        <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
          <div className="h-full bg-emerald-500 rounded-full" style={{ width: `${project.progress}%` }} />
        </div>
      </div>
      <span
        className={`hidden sm:flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full shrink-0 ${
          project.urgent ? "bg-amber-50 text-amber-600" : "bg-gray-50 text-gray-500"
        }`}
      >
        <Clock className="w-3 h-3" /> {project.daysLeft}
      </span>
      <AvatarStack ids={project.members} />
      <CardMenu onEdit={onEdit} onDelete={onDelete} />
    </div>
  );
}

/* ================================================================== */
/* Filter panel                                                        */
/* ================================================================== */

interface FilterState {
  search: string;
  members: string[];
  dueDate: string;
  status: Status | "Any";
}

function FilterPanel({
  filters,
  onApply,
  onClose,
}: {
  filters: FilterState;
  onApply: (f: FilterState) => void;
  onClose: () => void;
}) {
  const [local, setLocal] = useState<FilterState>(filters);
  const [statusOpen, setStatusOpen] = useState(false);

  return (
    <>
      <div className="fixed inset-0 z-40" onClick={onClose} />
      <div className="fixed top-0 right-0 h-full w-full sm:w-96 bg-white shadow-2xl z-50 flex flex-col animate-[slideIn_.2s_ease-out]">
        <div className="flex items-center justify-between px-6 pt-6 pb-2">
          <h2 className="text-lg font-semibold text-gray-800">Filter</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
          <div>
            <div className="flex items-center gap-2 border border-gray-200 rounded-lg px-3 py-2">
              <Search className="w-4 h-4 text-gray-400" />
              <input
                value={local.search}
                onChange={(e) => setLocal((f) => ({ ...f, search: e.target.value }))}
                placeholder="Search Projects..."
                className="flex-1 outline-none text-sm placeholder-gray-400"
              />
            </div>
          </div>

          <Field label="Members">
            <MemberMultiSelect selected={local.members} onChange={(ids) => setLocal((f) => ({ ...f, members: ids }))} />
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
              <Calendar className="w-4 h-4 text-gray-400 absolute left-3 top-1/2 -translate-y-1/2 pointer-events-none hidden" />
              <ChevronDown className="w-4 h-4 text-gray-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>
          </Field>

          <Field label="Status">
            <div className="relative">
              <button
                onClick={() => setStatusOpen((v) => !v)}
                className="w-full flex items-center justify-between border border-gray-200 rounded-lg px-3 py-2 text-sm text-gray-700"
              >
                <span className="flex items-center gap-2">
                  {local.status !== "Any" && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                  {local.status}
                </span>
                <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${statusOpen ? "rotate-180" : ""}`} />
              </button>
              {statusOpen && (
                <div className="absolute z-30 mt-1 w-full bg-white border border-gray-100 rounded-lg shadow-lg py-1">
                  {(["Any", ...STATUS_OPTIONS.map((s) => s.value)] as (Status | "Any")[]).map((s) => (
                    <button
                      key={s}
                      onClick={() => {
                        setLocal((f) => ({ ...f, status: s }));
                        setStatusOpen(false);
                      }}
                      className="w-full flex items-center justify-between px-3 py-2 text-sm hover:bg-gray-50 text-gray-700"
                    >
                      {s}
                      {local.status === s && <Check className="w-3.5 h-3.5 text-emerald-600" />}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </Field>
        </div>

        <div className="px-6 py-5 border-t border-gray-100 flex items-center gap-4">
          <button
            onClick={() => onApply(local)}
            className="bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-lg px-5 py-2.5 transition-colors"
          >
            Apply Filters
          </button>
          <button
            onClick={() => {
              const reset: FilterState = { search: "", members: [], dueDate: "Due anytime", status: "Any" };
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
/* Add / Edit Project modal                                            */
/* ================================================================== */

interface ProjectFormState {
  icon: IconKey;
  name: string;
  client: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  members: string[];
  budget: string;
  status: Status;
}

const ICON_CHOICES: IconKey[] = ["dropbox", "gitlab", "bitbucket", "python", "slack", "google", "angular", "vue", "facebook"];

function emptyForm(): ProjectFormState {
  return {
    icon: "dropbox",
    name: "",
    client: "",
    description: "",
    startDate: "",
    startTime: "00:00",
    endDate: "",
    endTime: "00:00",
    members: [],
    budget: "",
    status: "Started",
  };
}

function projectToForm(p: Project): ProjectFormState {
  return {
    icon: p.icon,
    name: p.name,
    client: p.client,
    description: p.description,
    startDate: p.startDate,
    startTime: "00:00",
    endDate: p.endDate,
    endTime: "00:00",
    members: p.members,
    budget: String(p.budget),
    status: p.status,
  };
}

function ProjectModal({
  mode,
  initial,
  onClose,
  onSubmit,
}: {
  mode: "add" | "edit";
  initial: Project | null;
  onClose: () => void;
  onSubmit: (form: ProjectFormState) => void;
}) {
  const [form, setForm] = useState<ProjectFormState>(initial ? projectToForm(initial) : emptyForm());
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitting, setSubmitting] = useState(false);
  const [iconPickerOpen, setIconPickerOpen] = useState(false);

  const set = <K extends keyof ProjectFormState>(key: K, value: ProjectFormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = "Project name is required.";
    if (!form.client.trim()) next.client = "Client name is required.";
    if (!form.description.trim()) next.description = "Description is required.";
    if (form.budget && isNaN(Number(form.budget.replace(/\./g, "")))) next.budget = "Enter a valid budget amount.";
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      onSubmit(form);
    }, 600);
  };

  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4 py-8 overflow-y-auto" onClick={onClose}>
      <div className="bg-white rounded-2xl w-full max-w-lg shadow-xl my-auto" onClick={(e) => e.stopPropagation()}>
        <div className="flex items-center justify-between px-6 pt-6">
          <h2 className="text-lg font-semibold text-gray-800">{mode === "add" ? "Add Project" : "Edit Project"}</h2>
          <button onClick={onClose} className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-200">
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="px-6 pb-6 pt-4 space-y-4 max-h-[75vh] overflow-y-auto">
          {mode === "edit" && (
            <Field label="Status">
              <StatusDropdown value={form.status} onChange={(s) => set("status", s)} />
            </Field>
          )}

          <div className="flex justify-center relative">
            <button
              onClick={() => setIconPickerOpen((v) => !v)}
              className={`w-16 h-16 rounded-2xl border-2 border-dashed border-gray-200 flex items-center justify-center relative ${ICONS[form.icon].bg}`}
            >
              {mode === "add" ? (
                <Plus className="w-6 h-6 text-gray-400" />
              ) : (
                React.createElement(ICONS[form.icon].Icon, { className: `w-6 h-6 ${ICONS[form.icon].color}` })
              )}
              {mode === "edit" && (
                <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-white border border-gray-200 rounded-full flex items-center justify-center">
                  <Pencil className="w-3 h-3 text-gray-500" />
                </span>
              )}
            </button>
            {iconPickerOpen && (
              <div className="absolute top-20 bg-white border border-gray-100 rounded-xl shadow-lg p-3 grid grid-cols-5 gap-2 z-10">
                {ICON_CHOICES.map((key) => {
                  const cfg = ICONS[key];
                  const IconEl = cfg.Icon;
                  return (
                    <button
                      key={key}
                      onClick={() => {
                        set("icon", key);
                        setIconPickerOpen(false);
                      }}
                      className={`w-9 h-9 rounded-lg ${cfg.bg} flex items-center justify-center hover:ring-2 ring-emerald-400`}
                    >
                      <IconEl className={`w-4 h-4 ${cfg.color}`} />
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          <Field label="Project Name" error={errors.name}>
            <input value={form.name} onChange={(e) => set("name", e.target.value)} className={inputCls} placeholder="e.g. App Development" />
          </Field>

          <Field label="Client Name" error={errors.client}>
            <input value={form.client} onChange={(e) => set("client", e.target.value)} className={inputCls} placeholder="e.g. Dropbox, Inc." />
          </Field>

          <Field label="Description" error={errors.description}>
            <textarea
              value={form.description}
              onChange={(e) => set("description", e.target.value)}
              rows={3}
              className={`${inputCls} resize-none`}
              placeholder="Describe the project..."
            />
          </Field>

          <div className="grid grid-cols-2 gap-4">
            <Field label="Start Date">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="time"
                  value={form.startTime}
                  onChange={(e) => set("startTime", e.target.value)}
                  className="px-2 py-2 text-sm outline-none w-[72px] border-r border-gray-200"
                />
                <input
                  type="date"
                  value={form.startDate}
                  onChange={(e) => set("startDate", e.target.value)}
                  className="px-2 py-2 text-sm outline-none flex-1 min-w-0"
                />
              </div>
            </Field>
            <Field label="End Date">
              <div className="flex items-center border border-gray-200 rounded-lg overflow-hidden">
                <input
                  type="time"
                  value={form.endTime}
                  onChange={(e) => set("endTime", e.target.value)}
                  className="px-2 py-2 text-sm outline-none w-[72px] border-r border-gray-200"
                />
                <input
                  type="date"
                  value={form.endDate}
                  onChange={(e) => set("endDate", e.target.value)}
                  className="px-2 py-2 text-sm outline-none flex-1 min-w-0"
                />
              </div>
            </Field>
          </div>

          <Field label="Members">
            <MemberMultiSelect selected={form.members} onChange={(ids) => set("members", ids)} />
          </Field>

          <Field label="Budget" error={errors.budget}>
            <div className="flex items-center border border-gray-200 rounded-lg px-3 py-2 focus-within:border-emerald-400">
              <DollarSign className="w-4 h-4 text-gray-400 mr-2" />
              <input
                value={form.budget}
                onChange={(e) => set("budget", e.target.value.replace(/[^\d.]/g, ""))}
                className="flex-1 outline-none text-sm"
                placeholder="0"
              />
            </div>
          </Field>
        </div>

        <div className="px-6 pb-6 flex justify-end">
          <button
            onClick={handleSubmit}
            disabled={submitting}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-70 text-white text-sm font-medium rounded-lg px-8 py-2.5 transition-colors"
          >
            {submitting ? (mode === "add" ? "Creating..." : "Saving...") : mode === "add" ? "Create" : "Save"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Delete confirm modal                                                */
/* ================================================================== */

function ConfirmDeleteModal({ name, onCancel, onConfirm }: { name: string; onCancel: () => void; onConfirm: () => void }) {
  const [deleting, setDeleting] = useState(false);
  return (
    <div className="fixed inset-0 bg-black/40 z-50 flex items-center justify-center px-4" onClick={onCancel}>
      <div className="bg-white rounded-2xl w-full max-w-sm shadow-xl p-6" onClick={(e) => e.stopPropagation()}>
        <div className="w-11 h-11 rounded-full bg-rose-50 flex items-center justify-center mb-4">
          <Trash2 className="w-5 h-5 text-rose-500" />
        </div>
        <h3 className="text-base font-semibold text-gray-800 mb-1">Delete "{name}"?</h3>
        <p className="text-sm text-gray-400 mb-5">This action cannot be undone. The project and all of its data will be permanently removed.</p>
        <div className="flex items-center gap-3">
          <button
            onClick={onCancel}
            className="flex-1 border border-gray-200 text-gray-600 text-sm font-medium rounded-lg py-2.5 hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              setDeleting(true);
              setTimeout(onConfirm, 400);
            }}
            disabled={deleting}
            className="flex-1 bg-rose-500 hover:bg-rose-600 disabled:opacity-70 text-white text-sm font-medium rounded-lg py-2.5"
          >
            {deleting ? "Deleting..." : "Delete"}
          </button>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Projects grid view                                                  */
/* ================================================================== */

type Tab = "All" | "Started" | "On Hold" | "Completed";

function ProjectsGridView({
  projects,
  onOpenProject,
  onAdd,
  onEdit,
  onDeleteRequest,
}: {
  projects: Project[];
  onOpenProject: (id: string) => void;
  onAdd: () => void;
  onEdit: (p: Project) => void;
  onDeleteRequest: (p: Project) => void;
}) {
  const [tab, setTab] = useState<Tab>("All");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [filters, setFilters] = useState<FilterState>({ search: "", members: [], dueDate: "Due anytime", status: "Any" });

  const counts = useMemo(
    () => ({
      All: projects.length,
      Started: projects.filter((p) => p.status === "Started").length,
      "On Hold": projects.filter((p) => p.status === "On Hold").length,
      Completed: projects.filter((p) => p.status === "Completed").length,
    }),
    [projects]
  );

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      if (tab !== "All" && p.status !== tab) return false;
      if (filters.status !== "Any" && p.status !== filters.status) return false;
      if (filters.search && !p.name.toLowerCase().includes(filters.search.toLowerCase()) && !p.client.toLowerCase().includes(filters.search.toLowerCase()))
        return false;
      if (filters.members.length > 0 && !filters.members.some((m) => p.members.includes(m))) return false;
      return true;
    });
  }, [projects, tab, filters]);

  const activeFilterCount =
    (filters.search ? 1 : 0) + filters.members.length + (filters.status !== "Any" ? 1 : 0) + (filters.dueDate !== "Due anytime" ? 1 : 0);

  return (
    <div className="flex-1 overflow-y-auto">
      <div className=" sm:pt-6 pb-4">
        <div className="flex items-center justify-between mb-5 flex-wrap gap-3">
          <h1 className="text-2xl font-semibold text-gray-800">Projects</h1>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterOpen(true)}
              className="relative w-10 h-10 rounded-xl bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              aria-label="Open filters"
            >
              <SlidersHorizontal className="w-4 h-4" />
              {activeFilterCount > 0 && (
                <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-emerald-600 text-white text-[9px] flex items-center justify-center">
                  {activeFilterCount}
                </span>
              )}
            </button>
            <button
              onClick={onAdd}
              className="flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium rounded-xl px-4 py-2.5 transition-colors"
            >
              <Plus className="w-4 h-4" /> Add Project
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between border-b border-gray-100">
          <div className="flex items-center gap-6 overflow-x-auto">
            {(["All", "Started", "On Hold", "Completed"] as Tab[]).map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={`flex items-center gap-1.5 pb-3 text-sm font-medium border-b-2 whitespace-nowrap ${
                  tab === t ? "text-gray-800 border-emerald-500" : "text-gray-400 border-transparent hover:text-gray-600"
                }`}
              >
                {t}
                <span className={`text-[11px] rounded-md px-1.5 py-0.5 ${tab === t ? "bg-gray-100 text-gray-600" : "bg-gray-50 text-gray-400"}`}>
                  {counts[t]}
                </span>
              </button>
            ))}
          </div>
          <div className="hidden sm:flex items-center gap-1 pb-3">
            <button
              onClick={() => setViewMode("list")}
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${viewMode === "list" ? "bg-gray-100 text-gray-700" : "text-gray-300 hover:text-gray-500"}`}
              aria-label="List view"
            >
              <List className="w-4 h-4" />
            </button>
            <button
              onClick={() => setViewMode("grid")}
              className={`w-8 h-8 rounded-lg flex items-center justify-center ${viewMode === "grid" ? "bg-emerald-50 text-emerald-600" : "text-gray-300 hover:text-gray-500"}`}
              aria-label="Grid view"
            >
              <LayoutGrid className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="sm:pb-8">
        {filtered.length === 0 ? (
          <div className="text-center text-sm text-gray-400 py-16">No projects match your filters.</div>
        ) : viewMode === "grid" ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filtered.map((p) => (
              <ProjectCard key={p.id} project={p} onOpen={() => onOpenProject(p.id)} onEdit={() => onEdit(p)} onDelete={() => onDeleteRequest(p)} />
            ))}
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((p) => (
              <ProjectListRow key={p.id} project={p} onOpen={() => onOpenProject(p.id)} onEdit={() => onEdit(p)} onDelete={() => onDeleteRequest(p)} />
            ))}
          </div>
        )}
      </div>

      {filterOpen && (
        <FilterPanel
          filters={filters}
          onApply={(f) => {
            setFilters(f);
            setFilterOpen(false);
          }}
          onClose={() => setFilterOpen(false)}
        />
      )}
    </div>
  );
}

/* ================================================================== */
/* Project details view                                                */
/* ================================================================== */

function DetailsSidebarList({
  projects,
  selectedId,
  onSelect,
}: {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
}) {
  const [query, setQuery] = useState("");
  const filtered = projects.filter((p) => p.name.toLowerCase().includes(query.toLowerCase()) || p.client.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="px-4 pt-4 pb-2">
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
      <div className="flex-1 overflow-y-auto px-3 py-2 space-y-1">
        {filtered.map((p) => (
          <button
            key={p.id}
            onClick={() => onSelect(p.id)}
            className={`w-full flex items-center gap-3 px-2.5 py-2.5 rounded-xl text-left ${selectedId === p.id ? "bg-gray-100" : "hover:bg-gray-50"}`}
          >
            <ProjectIcon icon={p.icon} size="w-9 h-9" />
            <div className="min-w-0 flex-1">
              <p className="text-xs font-semibold text-gray-800 truncate">{p.name}</p>
              <p className="text-[11px] text-gray-400 truncate">{p.client}</p>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}

function ChecklistSection({ project, onUpdate }: { project: Project; onUpdate: (checklist: ChecklistItem[]) => void }) {
  const [newItem, setNewItem] = useState("");
  const [adding, setAdding] = useState(false);

  const doneCount = project.checklist.filter((c) => c.done).length;
  const pct = project.checklist.length === 0 ? 0 : Math.round((doneCount / project.checklist.length) * 100);

  const toggle = (id: string) =>
    onUpdate(project.checklist.map((c) => (c.id === id ? { ...c, done: !c.done } : c)));

  const remove = (id: string) => onUpdate(project.checklist.filter((c) => c.id !== id));

  const addItem = () => {
    if (!newItem.trim()) return;
    onUpdate([...project.checklist, { id: `c-${Date.now()}`, text: newItem.trim(), done: false }]);
    setNewItem("");
    setAdding(false);
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <h3 className="text-sm font-semibold text-gray-800">Checklist ({pct}%)</h3>
      </div>
      <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden mb-3">
        <div className="h-full bg-emerald-500 rounded-full transition-all" style={{ width: `${pct}%` }} />
      </div>
      <div className="space-y-0.5">
        {project.checklist.map((item) => (
          <div key={item.id} className="group flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-gray-50">
            <button
              onClick={() => toggle(item.id)}
              className={`w-[18px] h-[18px] rounded-full border flex items-center justify-center shrink-0 ${
                item.done ? "bg-emerald-500 border-emerald-500" : "border-gray-300"
              }`}
              aria-label="Toggle done"
            >
              {item.done && <Check className="w-3 h-3 text-white" />}
            </button>
            <span className={`text-sm flex-1 ${item.done ? "text-gray-400 line-through" : "text-gray-700"}`}>{item.text}</span>
            <div className="hidden group-hover:flex items-center gap-2 text-gray-300">
              <GripVertical className="w-4 h-4 cursor-grab" />
              <button onClick={() => remove(item.id)} className="hover:text-rose-500" aria-label="Delete item">
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
            value={newItem}
            onChange={(e) => setNewItem(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && addItem()}
            placeholder="New checklist item..."
            className="flex-1 border border-gray-200 rounded-lg px-3 py-1.5 text-sm outline-none focus:border-emerald-400"
          />
          <button onClick={addItem} className="text-xs font-medium text-white bg-emerald-600 rounded-lg px-3 py-1.5 hover:bg-emerald-700">
            Add
          </button>
          <button onClick={() => { setAdding(false); setNewItem(""); }} className="text-gray-400 hover:text-gray-600">
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

function CommentsSection({ project, onAddComment }: { project: Project; onAddComment: (text: string) => void }) {
  const [text, setText] = useState("");
  return (
    <div>
      <div className="mb-4">
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Add Comment..."
          rows={2}
          className="w-full border border-gray-200 rounded-xl px-3.5 py-2.5 text-sm outline-none focus:border-emerald-400 resize-none placeholder-gray-400"
        />
        <div className="flex items-center justify-between mt-2">
          <button
            onClick={() => {
              if (!text.trim()) return;
              onAddComment(text.trim());
              setText("");
            }}
            disabled={!text.trim()}
            className="bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white text-xs font-medium rounded-lg px-4 py-2"
          >
            Comment
          </button>
          <div className="flex items-center gap-3 text-gray-300">
            <button className="hover:text-gray-500" aria-label="Attach"><Paperclip className="w-4 h-4" /></button>
            <button className="hover:text-gray-500" aria-label="Emoji"><Smile className="w-4 h-4" /></button>
            <button className="hover:text-gray-500" aria-label="Image"><ImageIcon className="w-4 h-4" /></button>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        {project.comments.length === 0 && <p className="text-xs text-gray-400">No comments yet.</p>}
        {project.comments.map((c) => {
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
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-emerald-400 to-teal-600" />
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-pink-200 via-purple-200 to-blue-200" />
                    <div className="w-14 h-14 rounded-lg bg-gradient-to-br from-orange-300 via-red-300 to-pink-200" />
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

function ActivitySection({ project }: { project: Project }) {
  return (
    <div className="space-y-4">
      {project.activity.length === 0 && <p className="text-xs text-gray-400">No activity yet.</p>}
      {project.activity.map((a) => (
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

function ProjectDetailsMain({
  project,
  onUpdateChecklist,
  onAddComment,
  onEdit,
  onDeleteRequest,
}: {
  project: Project;
  onUpdateChecklist: (checklist: ChecklistItem[]) => void;
  onAddComment: (text: string) => void;
  onEdit: () => void;
  onDeleteRequest: () => void;
}) {
  const [tab, setTab] = useState<"comments" | "activity">("comments");
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="flex flex-col h-full w-full bg-white">
      <div className="flex items-center justify-between px-5 sm:px-6 pt-5 pb-4 border-b border-gray-100">
        <div className="flex items-center gap-3 min-w-0">
          <ProjectIcon icon={project.icon} />
          <div className="min-w-0">
            <p className="text-base font-semibold text-gray-800 truncate">{project.name}</p>
            <p className="text-xs text-gray-400 truncate">{project.client}</p>
          </div>
        </div>
        <div className="relative">
          <button onClick={() => setMenuOpen((v) => !v)} className="w-8 h-8 rounded-full flex items-center justify-center text-gray-400 hover:bg-gray-100">
            <MoreHorizontal className="w-4 h-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-9 w-40 bg-white rounded-xl shadow-lg border border-gray-100 py-1.5 z-30 text-sm">
              <button onClick={() => { setMenuOpen(false); onEdit(); }} className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-gray-50 text-gray-600">
                <Pencil className="w-4 h-4" /> Edit
              </button>
              <button onClick={() => { setMenuOpen(false); onDeleteRequest(); }} className="w-full flex items-center gap-2.5 text-left px-3.5 py-2 hover:bg-rose-50 text-rose-500">
                <Trash2 className="w-4 h-4" /> Delete Project
              </button>
            </div>
          )}
        </div>
      </div>

      <div className="flex-1 overflow-y-auto px-5 sm:px-6 py-5 space-y-6">
        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-2.5">DETAILS</h3>
          <div className="flex flex-wrap gap-3">
            <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3.5 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-emerald-100 flex items-center justify-center">
                <DollarSign className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Budget</p>
                <p className="text-xs font-semibold text-gray-700">{fmtMoney(project.budget)}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3.5 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-100 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-blue-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">Start Date</p>
                <p className="text-xs font-semibold text-gray-700">{project.startDate}</p>
              </div>
            </div>
            <div className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3.5 py-2.5">
              <div className="w-7 h-7 rounded-lg bg-rose-100 flex items-center justify-center">
                <Calendar className="w-3.5 h-3.5 text-rose-600" />
              </div>
              <div>
                <p className="text-[10px] text-gray-400">End Date</p>
                <p className="text-xs font-semibold text-gray-700">{project.endDate}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-2">DESCRIPTION</h3>
          <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
        </div>

        <ChecklistSection project={project} onUpdate={onUpdateChecklist} />

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
          {tab === "comments" ? <CommentsSection project={project} onAddComment={onAddComment} /> : <ActivitySection project={project} />}
        </div>
      </div>
    </div>
  );
}

function ProjectDetailsSidebar({
  project,
  onStatusChange,
  onAddMember,
  onRemoveMember,
}: {
  project: Project;
  onStatusChange: (s: Status) => void;
  onAddMember: (id: string) => void;
  onRemoveMember: (id: string) => void;
}) {
  const [addOpen, setAddOpen] = useState(false);
  const nonMembers = PEOPLE.filter((p) => !project.members.includes(p.id));

  return (
    <div className="flex flex-col h-full w-full bg-white px-5 pt-5 overflow-y-auto">
      <StatusDropdown value={project.status} onChange={onStatusChange} />

      <div className="mt-6">
        <div className="flex items-center justify-between mb-3">
          <h3 className="text-xs font-semibold tracking-wide text-gray-400">MEMBERS</h3>
          <div className="relative">
            <button
              onClick={() => setAddOpen((v) => !v)}
              className="w-6 h-6 rounded-full bg-gray-50 flex items-center justify-center text-gray-500 hover:bg-gray-100"
              aria-label="Add member"
            >
              <Plus className="w-3.5 h-3.5" />
            </button>
            {addOpen && (
              <div className="absolute right-0 mt-1 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-1 z-30 max-h-52 overflow-y-auto">
                {nonMembers.length === 0 ? (
                  <p className="text-xs text-gray-400 px-3 py-2">Everyone added.</p>
                ) : (
                  nonMembers.map((p) => (
                    <button
                      key={p.id}
                      onClick={() => {
                        onAddMember(p.id);
                        setAddOpen(false);
                      }}
                      className="w-full flex items-center gap-2 px-3 py-1.5 text-xs hover:bg-gray-50 text-gray-700"
                    >
                      <img src={p.avatar} className="w-5 h-5 rounded-full object-cover" alt="" />
                      {p.name}
                    </button>
                  ))
                )}
              </div>
            )}
          </div>
        </div>
        <div className="space-y-3">
          {project.members.map((id) => {
            const p = findPerson(id);
            if (!p) return null;
            return (
              <div key={id} className="group flex items-center gap-2.5">
                <img src={p.avatar} className="w-8 h-8 rounded-full object-cover" alt="" />
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-medium text-gray-700 truncate">{p.name}</p>
                  <p className="text-[11px] text-gray-400 truncate">{p.role}</p>
                </div>
                <button
                  onClick={() => onRemoveMember(id)}
                  className="opacity-0 group-hover:opacity-100 text-gray-300 hover:text-rose-500"
                  aria-label={`Remove ${p.name}`}
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-6 pb-6">
        <h3 className="text-xs font-semibold tracking-wide text-gray-400 mb-3">FILES</h3>
        <div className="space-y-3">
          {project.files.length === 0 && <p className="text-xs text-gray-400">No files yet.</p>}
          {project.files.map((f) => (
            <div key={f.id} className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center shrink-0">
                <FileTypeIcon name={f.name} />
              </div>
              <div className="min-w-0 flex-1">
                <p className="text-xs font-medium text-gray-700 truncate">{f.name}</p>
                <p className="text-[11px] text-gray-400">{f.size}</p>
              </div>
              <button onClick={() => downloadDummyFile(f.name)} className="text-gray-300 hover:text-emerald-600" aria-label={`Download ${f.name}`}>
                <Download className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function FileTypeIcon({ name }: { name: string }) {
  const ext = name.split(".").pop()?.toLowerCase() ?? "";
  const map: Record<string, { label: string; cls: string }> = {
    pdf: { label: "PDF", cls: "text-rose-500" },
    zip: { label: "ZIP", cls: "text-amber-500" },
    png: { label: "PNG", cls: "text-emerald-500" },
    jpg: { label: "JPG", cls: "text-emerald-500" },
    fig: { label: "FIG", cls: "text-purple-500" },
    psd: { label: "PSD", cls: "text-blue-500" },
  };
  const item = map[ext] ?? { label: "FILE", cls: "text-gray-400" };
  return <span className={`text-[8px] font-bold ${item.cls}`}>{item.label}</span>;
}

type DetailsMobileView = "list" | "main" | "info";

function ProjectDetailsView({
  projects,
  selectedId,
  onSelect,
  onUpdateProject,
  onEdit,
  onDeleteRequest,
}: {
  projects: Project[];
  selectedId: string;
  onSelect: (id: string) => void;
  onBack: () => void;
  onUpdateProject: (id: string, updater: (p: Project) => Project) => void;
  onEdit: (p: Project) => void;
  onDeleteRequest: (p: Project) => void;
}) {
  const [mobileView, setMobileView] = useState<DetailsMobileView>("main");
  const project = projects.find((p) => p.id === selectedId);
  if (!project) return null;

  return (
    <div className="flex flex-col flex-1 min-h-0">
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-gray-100 md:hidden">
        <button onClick={() => setMobileView("list")} className={`text-xs font-medium px-2 py-1 rounded-lg ${mobileView === "list" ? "bg-gray-100" : "text-gray-500"}`}>
          Projects
        </button>
        <button onClick={() => setMobileView("main")} className={`text-xs font-medium px-2 py-1 rounded-lg ${mobileView === "main" ? "bg-gray-100" : "text-gray-500"}`}>
          Details
        </button>
        <button onClick={() => setMobileView("info")} className={`text-xs font-medium px-2 py-1 rounded-lg ${mobileView === "info" ? "bg-gray-100" : "text-gray-500"}`}>
          Info
        </button>
      </div>
      <div className="flex flex-1 min-h-0">
        <div className={`${mobileView === "list" ? "flex" : "hidden"} md:flex w-full md:w-64 lg:w-72 border-r border-gray-100 shrink-0`}>
          <DetailsSidebarList projects={projects} selectedId={selectedId} onSelect={onSelect} />
        </div>
        <div className={`${mobileView === "main" ? "flex" : "hidden"} md:flex flex-1 min-w-0`}>
          <ProjectDetailsMain
            project={project}
            onUpdateChecklist={(checklist) => onUpdateProject(project.id, (p) => ({ ...p, checklist }))}
            onAddComment={(text) =>
              onUpdateProject(project.id, (p) => ({
                ...p,
                comments: [...p.comments, { id: `cm-${Date.now()}`, personId: "me", text, time: timeAgoLabel() }],
              }))
            }
            onEdit={() => onEdit(project)}
            onDeleteRequest={() => onDeleteRequest(project)}
          />
        </div>
        <div className={`${mobileView === "info" ? "flex" : "hidden"} md:flex w-full md:w-64 lg:w-72 border-l border-gray-100 shrink-0`}>
          <ProjectDetailsSidebar
            project={project}
            onStatusChange={(s) => onUpdateProject(project.id, (p) => ({ ...p, status: s }))}
            onAddMember={(id) => onUpdateProject(project.id, (p) => ({ ...p, members: [...p.members, id] }))}
            onRemoveMember={(id) => onUpdateProject(project.id, (p) => ({ ...p, members: p.members.filter((m) => m !== id) }))}
          />
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/* Root App                                                            */
/* ================================================================== */

type View = "grid" | "details";

export default function ProjectsApp() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [view, setView] = useState<View>("grid");
  const [selectedId, setSelectedId] = useState<string>(INITIAL_PROJECTS[0].id);
  const [modal, setModal] = useState<{ mode: "add" | "edit"; project: Project | null } | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Project | null>(null);

  const updateProject = (id: string, updater: (p: Project) => Project) => {
    setProjects((prev) => prev.map((p) => (p.id === id ? updater(p) : p)));
  };

  const handleOpenProject = (id: string) => {
    setSelectedId(id);
    setView("details");
  };

  const handleFormSubmit = (form: ProjectFormState) => {
    const budgetNum = Number(form.budget.replace(/\./g, "")) || 0;
    if (modal?.mode === "add") {
      const newProject: Project = {
        id: `p-${Date.now()}`,
        name: form.name,
        client: form.client,
        icon: form.icon,
        description: form.description,
        progress: 0,
        daysLeft: "1 week left",
        urgent: false,
        status: form.status,
        budget: budgetNum,
        startDate: form.startDate,
        endDate: form.endDate,
        members: form.members,
        checklist: [],
        comments: [],
        activity: [],
        files: [],
      };
      setProjects((prev) => [newProject, ...prev]);
    } else if (modal?.project) {
      updateProject(modal.project.id, (p) => ({
        ...p,
        name: form.name,
        client: form.client,
        icon: form.icon,
        description: form.description,
        status: form.status,
        budget: budgetNum,
        startDate: form.startDate,
        endDate: form.endDate,
        members: form.members,
      }));
    }
    setModal(null);
  };

  const handleDeleteConfirm = () => {
    if (!deleteTarget) return;
    setProjects((prev) => prev.filter((p) => p.id !== deleteTarget.id));
    if (view === "details" && selectedId === deleteTarget.id) {
      const remaining = projects.filter((p) => p.id !== deleteTarget.id);
      if (remaining.length > 0) setSelectedId(remaining[0].id);
      else setView("grid");
    }
    setDeleteTarget(null);
  };

  return (
    <div className="h-screen w-full flex flex-col bg-gray-50 text-gray-800 font-sans overflow-hidden">

      {view === "grid" ? (
        <ProjectsGridView
          projects={projects}
          onOpenProject={handleOpenProject}
          onAdd={() => setModal({ mode: "add", project: null })}
          onEdit={(p) => setModal({ mode: "edit", project: p })}
          onDeleteRequest={(p) => setDeleteTarget(p)}
        />
      ) : (
        <ProjectDetailsView
          projects={projects}
          selectedId={selectedId}
          onSelect={setSelectedId}
          onBack={() => setView("grid")}
          onUpdateProject={updateProject}
          onEdit={(p) => setModal({ mode: "edit", project: p })}
          onDeleteRequest={(p) => setDeleteTarget(p)}
        />
      )}

      {modal && (
        <ProjectModal mode={modal.mode} initial={modal.project} onClose={() => setModal(null)} onSubmit={handleFormSubmit} />
      )}

      {deleteTarget && (
        <ConfirmDeleteModal name={deleteTarget.name} onCancel={() => setDeleteTarget(null)} onConfirm={handleDeleteConfirm} />
      )}
    </div>
  );
}

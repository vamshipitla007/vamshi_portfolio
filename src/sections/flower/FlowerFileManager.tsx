/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { useEffect, useRef, useState } from "react";
import {
  Search,
  Upload,
  Plus,
  ChevronRight,
  ChevronDown,
  Trash2,
  MoreVertical,
  Share2,
  Link2,
  Download,
  Pencil,
  Copy,
  ArrowRightLeft,
  Music,
  Image as ImageIcon,
  FileText,
  DownloadCloud,
  Menu,
  Info,
  X,
  Check,
  RefreshCw,
  Archive,
  Folder as FolderIconLucide,
  HardDrive,
  RotateCcw,
} from "lucide-react";

/* ========================================================================== */
/*  Types                                                                     */
/* ========================================================================== */

type FolderBadge = "music" | "image" | "doc" | "download" | null;
type FileKind = "figma" | "sketch" | "word" | "psd" | "pdf" | "zip" | "image" | "generic";
type ItemType = "folder" | "file";

interface FSFolder {
  id: string;
  type: "folder";
  name: string;
  sizeLabel: string;
  badge: FolderBadge;
}

interface FSFile {
  id: string;
  type: "file";
  name: string;
  sizeLabel: string;
  kind: FileKind;
  previewUrl?: string;
}

type FSItem = FSFolder | FSFile;

interface ItemSettings {
  fileSharing: boolean;
  backup: boolean;
  sync: boolean;
}

interface UploadTask {
  id: string;
  file: File;
  name: string;
  sizeLabel: string;
  kind: FileKind;
  previewUrl?: string;
  progress: number;
  status: "uploading" | "done" | "error";
}

interface SidebarNode {
  id: string;
  name: string;
  children?: SidebarNode[];
}

/* ========================================================================== */
/*  Constants / seed data                                                     */
/* ========================================================================== */

const SIDEBAR_TREE: SidebarNode[] = [
  { id: "design", name: "Design" },
  {
    id: "projects",
    name: "Projects",
    children: [
      { id: "projects_01", name: "Projects_01" },
      { id: "projects_02", name: "Projects_02" },
      { id: "projects_03", name: "Projects_03" },
      { id: "projects_04", name: "Projects_04" },
    ],
  },
  { id: "music", name: "Music" },
  { id: "pictures", name: "Pictures" },
  { id: "documents", name: "Documents" },
  { id: "downloads", name: "Downloads" },
];

const SEED_FOLDERS: FSFolder[] = [
  { id: "f-design", type: "folder", name: "Design", sizeLabel: "5.8 GB", badge: null },
  { id: "f-projects", type: "folder", name: "Projects", sizeLabel: "3.2 GB", badge: null },
  { id: "f-music", type: "folder", name: "Music", sizeLabel: "1.5 GB", badge: "music" },
  { id: "f-pictures", type: "folder", name: "Pictures", sizeLabel: "1.7 GB", badge: "image" },
  { id: "f-documents", type: "folder", name: "Documents", sizeLabel: "440 MB", badge: "doc" },
  { id: "f-downloads", type: "folder", name: "Downloads", sizeLabel: "10.1 GB", badge: "download" },
];

const SEED_FILES: FSFile[] = [
  { id: "file-1", type: "file", name: "Rocket – Admin Dashboard & UI Kit.fig", sizeLabel: "1.8 MB", kind: "figma" },
  { id: "file-2", type: "file", name: "Rocket – Admin Dashboard & UI Kit.sketch", sizeLabel: "1.5 MB", kind: "sketch" },
  { id: "file-3", type: "file", name: "Arion – Admin Dashboard & UI Kit.sketch", sizeLabel: "1.2 MB", kind: "sketch" },
  { id: "file-4", type: "file", name: "Project Brief", sizeLabel: "1.4 MB", kind: "word" },
  { id: "file-5", type: "file", name: "Design", sizeLabel: "1.9 GB", kind: "zip" },
  { id: "file-6", type: "file", name: "vCard – Resume Template", sizeLabel: "2.5 MB", kind: "psd" },
  { id: "file-7", type: "file", name: "Project Brief", sizeLabel: "1.2 MB", kind: "word" },
  { id: "file-8", type: "file", name: "Brand Styles Guide", sizeLabel: "4.5 MB", kind: "pdf" },
];

const DUMMY_META = {
  owner: "ArtTemplate",
  location: "My Files",
  modified: "Sep 17, 2020 4:25",
  created: "Sep 10, 2020 2:25",
};

/* ========================================================================== */
/*  Utilities                                                                 */
/* ========================================================================== */

let uidCounter = 0;
const uid = (prefix: string) => `${prefix}-${Date.now()}-${uidCounter++}`;

const formatBytes = (bytes: number) => {
  if (bytes === 0) return "0 B";
  const units = ["B", "KB", "MB", "GB"];
  const i = Math.min(units.length - 1, Math.floor(Math.log(bytes) / Math.log(1024)));
  const val = bytes / Math.pow(1024, i);
  return `${val.toFixed(val < 10 && i > 0 ? 1 : 0)} ${units[i]}`;
};

const inferKind = (filename: string): FileKind => {
  const ext = filename.split(".").pop()?.toLowerCase() ?? "";
  if (ext === "fig") return "figma";
  if (ext === "sketch") return "sketch";
  if (["doc", "docx"].includes(ext)) return "word";
  if (ext === "psd") return "psd";
  if (ext === "pdf") return "pdf";
  if (["zip", "rar", "7z"].includes(ext)) return "zip";
  if (["png", "jpg", "jpeg", "gif", "webp", "svg"].includes(ext)) return "image";
  return "generic";
};

const defaultSettings: ItemSettings = { fileSharing: false, backup: false, sync: false };

/* ========================================================================== */
/*  Graphics: folder icon + file type icon                                    */
/* ========================================================================== */

const badgeIconFor = (badge: FolderBadge) => {
  switch (badge) {
    case "music":
      return <Music className="h-3.5 w-3.5 text-amber-500" />;
    case "image":
      return <ImageIcon className="h-3.5 w-3.5 text-amber-500" />;
    case "doc":
      return <FileText className="h-3.5 w-3.5 text-amber-500" />;
    case "download":
      return <DownloadCloud className="h-3.5 w-3.5 text-amber-500" />;
    default:
      return null;
  }
};

const FolderGraphic: React.FC<{ badge: FolderBadge; size?: "md" | "lg" }> = ({ badge, size = "md" }) => {
  const dims = size === "lg" ? "h-20 w-24" : "h-12 w-14";
  return (
    <div className={`relative ${dims}`}>
      <div
        className="absolute left-0 top-[14%] h-[22%] w-[45%] rounded-t-[5px]"
        style={{ backgroundColor: "#F6C067" }}
      />
      <div
        className="absolute inset-x-0 bottom-0 top-[28%] rounded-[7px] rounded-tl-none"
        style={{ backgroundColor: "#FBCB77" }}
      />
      {badge && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-6 w-6 items-center justify-center rounded-full bg-white/90 shadow-sm">
            {badgeIconFor(badge)}
          </div>
        </div>
      )}
    </div>
  );
};

const FILE_BADGE: Record<FileKind, { bg: string; label: string; textColor: string }> = {
  figma: { bg: "linear-gradient(135deg,#F24E1E,#A259FF)", label: "F", textColor: "#fff" },
  sketch: { bg: "#FDB300", label: "S", textColor: "#fff" },
  word: { bg: "#2B579A", label: "W", textColor: "#fff" },
  psd: { bg: "#001E36", label: "Ps", textColor: "#31A8FF" },
  pdf: { bg: "#E5252A", label: "PDF", textColor: "#fff" },
  zip: { bg: "#9CA3AF", label: "", textColor: "#fff" },
  image: { bg: "#9CA3AF", label: "", textColor: "#fff" },
  generic: { bg: "#9CA3AF", label: "", textColor: "#fff" },
};

const FileTypeIcon: React.FC<{ kind: FileKind; previewUrl?: string; size?: "md" | "lg" }> = ({
  kind,
  previewUrl,
  size = "md",
}) => {
  const dims = size === "lg" ? "h-20 w-16" : "h-14 w-11";
  if (kind === "image" && previewUrl) {
    return (
      <div className={`overflow-hidden rounded-md border border-gray-200 ${dims}`}>
        <img src={previewUrl} alt="" className="h-full w-full object-cover" />
      </div>
    );
  }

  const badge = FILE_BADGE[kind];
  return (
    <div
      className={`relative ${dims} rounded-md border border-gray-200 bg-white`}
      style={{ clipPath: "polygon(0 0, 70% 0, 100% 26%, 100% 100%, 0 100%)" }}
    >
      <div
        className="absolute right-0 top-0 h-[26%] w-[30%] bg-gray-100"
        style={{ clipPath: "polygon(0 0, 100% 100%, 0 100%)" }}
      />
      {kind === "zip" || kind === "generic" ? (
        <div className="flex h-full w-full items-center justify-center">
          <Archive className="h-5 w-5 text-gray-300" />
        </div>
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <div
            className="flex h-6 w-6 items-center justify-center rounded-[5px] text-[9px] font-bold"
            style={{ background: badge.bg, color: badge.textColor }}
          >
            {badge.label}
          </div>
        </div>
      )}
    </div>
  );
};

/* ========================================================================== */
/*  Sidebar                                                                    */
/* ========================================================================== */

const Sidebar: React.FC<{
  activeId: string;
  onSelect: (id: string) => void;
  expanded: Set<string>;
  onToggleExpand: (id: string) => void;
  view: "files" | "trash";
  onSelectTrash: () => void;
  storagePct: number;
}> = ({ activeId, onSelect, expanded, onToggleExpand, view, onSelectTrash, storagePct }) => (
  <div className="flex h-full flex-col">
    <p className="mb-3 px-1 text-[11px] font-semibold tracking-wide text-gray-400">FOLDERS</p>
    <div className="flex-1 space-y-0.5 overflow-y-auto">
      {SIDEBAR_TREE.map((node) => {
        const hasChildren = !!node.children?.length;
        const isOpen = expanded.has(node.id);
        const isActive = view === "files" && activeId === node.id;
        return (
          <div key={node.id}>
            <button
              onClick={() => {
                onSelect(node.id);
                if (hasChildren) onToggleExpand(node.id);
              }}
              className={`flex w-full items-center justify-between rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
                isActive ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              <span className="flex items-center gap-2">
                <FolderIconLucide className="h-4 w-4 shrink-0" style={{ color: "#F6C067" }} fill="#FBCB77" />
                {node.name}
              </span>
              {hasChildren &&
                (isOpen ? (
                  <ChevronDown className="h-3.5 w-3.5 text-gray-300" />
                ) : (
                  <ChevronRight className="h-3.5 w-3.5 text-gray-300" />
                ))}
            </button>
            {hasChildren && isOpen && (
              <div className="ml-4 mt-0.5 space-y-0.5 border-l border-dashed border-gray-200 pl-3">
                {node.children!.map((child) => (
                  <button
                    key={child.id}
                    onClick={() => onSelect(child.id)}
                    className={`flex w-full items-center gap-2 rounded-lg px-2 py-1.5 text-left text-[12.5px] transition-colors ${
                      view === "files" && activeId === child.id
                        ? "bg-gray-100 text-gray-800"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    <FolderIconLucide className="h-3.5 w-3.5 shrink-0" style={{ color: "#F6C067" }} fill="#FBCB77" />
                    {child.name}
                  </button>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>

    <button
      onClick={onSelectTrash}
      className={`mt-2 flex items-center gap-2 rounded-lg px-2.5 py-2 text-left text-[13px] transition-colors ${
        view === "trash" ? "bg-gray-100 text-gray-800" : "text-gray-600 hover:bg-gray-50"
      }`}
    >
      <Trash2 className="h-4 w-4 text-gray-400" />
      Trash
    </button>

    <div className="mt-4 border-t border-gray-100 pt-4">
      <div className="mb-1.5 flex items-center justify-between text-[11px] text-gray-500">
        <span className="flex items-center gap-1.5 font-medium">
          <HardDrive className="h-3.5 w-3.5 text-gray-400" /> Storage
        </span>
        <span>{storagePct}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-gray-100">
        <div className="h-full rounded-full bg-emerald-500 transition-all" style={{ width: `${storagePct}%` }} />
      </div>
    </div>
  </div>
);

/* ========================================================================== */
/*  Context menu                                                              */
/* ========================================================================== */

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

const ItemContextMenu: React.FC<{
  onClose: () => void;
  onShare: () => void;
  onSharingLink: () => void;
  onDownload: () => void;
  onRename: () => void;
  onCopy: () => void;
  onMove: () => void;
  onDelete: () => void;
  moveTargets: { id: string; name: string }[];
}> = ({ onClose, onShare, onSharingLink, onDownload, onRename, onCopy, onMove, onDelete, moveTargets }) => {
  const ref = useOutsideClose(onClose);
  const [moveOpen, setMoveOpen] = useState(false);

  return (
    <div ref={ref} className="absolute right-0 top-8 z-30 w-48 rounded-xl border border-gray-100 bg-white py-2 shadow-2xl">
      <button onClick={onShare} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50">
        <Share2 className="h-3.5 w-3.5 text-gray-400" /> Share
      </button>
      <button onClick={onSharingLink} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50">
        <Link2 className="h-3.5 w-3.5 text-gray-400" /> Sharing Link
      </button>
      <div className="my-1.5 border-t border-gray-100" />
      <button onClick={onDownload} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50">
        <Download className="h-3.5 w-3.5 text-gray-400" /> Download
      </button>
      <button onClick={onRename} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50">
        <Pencil className="h-3.5 w-3.5 text-gray-400" /> Rename
      </button>
      <button onClick={onCopy} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50">
        <Copy className="h-3.5 w-3.5 text-gray-400" /> Copy
      </button>
      <div className="relative">
        <button
          onClick={() => setMoveOpen((s) => !s)}
          className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-gray-600 hover:bg-gray-50"
        >
          <ArrowRightLeft className="h-3.5 w-3.5 text-gray-400" /> Move
        </button>
        {moveOpen && (
          <div className="absolute left-full top-0 z-40 ml-1 w-40 rounded-xl border border-gray-100 bg-white py-1.5 shadow-2xl">
            {moveTargets.map((t) => (
              <button
                key={t.id}
                onClick={() => {
                  onMove();
                  setMoveOpen(false);
                }}
                className="block w-full px-3.5 py-1.5 text-left text-[12px] text-gray-600 hover:bg-gray-50"
              >
                {t.name}
              </button>
            ))}
          </div>
        )}
      </div>
      <div className="my-1.5 border-t border-gray-100" />
      <button onClick={onDelete} className="flex w-full items-center gap-2.5 px-4 py-2 text-left text-[12.5px] text-red-500 hover:bg-red-50">
        <Trash2 className="h-3.5 w-3.5" /> Delete
      </button>
    </div>
  );
};

/* ========================================================================== */
/*  Small inline "add / rename" input card                                    */
/* ========================================================================== */

const InlineNameInput: React.FC<{
  initial: string;
  onCancel: () => void;
  onSubmit: (name: string) => string | void; // return error string to block
}> = ({ initial, onCancel, onSubmit }) => {
  const [value, setValue] = useState(initial);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    ref.current?.focus();
    ref.current?.select();
  }, []);

  const commit = () => {
    const trimmed = value.trim();
    if (!trimmed) {
      setError("Name is required");
      return;
    }
    const err = onSubmit(trimmed);
    if (err) setError(err);
  };

  return (
    <div className="w-full">
      <input
        ref={ref}
        value={value}
        onChange={(e) => {
          setValue(e.target.value);
          setError(null);
        }}
        onKeyDown={(e) => {
          if (e.key === "Enter") commit();
          if (e.key === "Escape") onCancel();
        }}
        onBlur={commit}
        className={`w-full rounded-md border px-2 py-1 text-center text-[12px] outline-none focus:ring-2 ${
          error ? "border-red-300 focus:ring-red-200" : "border-emerald-300 focus:ring-emerald-200"
        }`}
      />
      {error && <p className="mt-1 text-center text-[10px] text-red-500">{error}</p>}
    </div>
  );
};

/* ========================================================================== */
/*  Upload panel                                                              */
/* ========================================================================== */

const UploadPanel: React.FC<{
  tasks: UploadTask[];
  onRetry: (id: string) => void;
  onClose: () => void;
  onCancelAll: () => void;
}> = ({ tasks, onRetry, onClose, onCancelAll }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useOutsideClose(() => setMenuOpen(false));
//   const done = tasks.filter((t) => t.status === "done").length;
  const avgProgress = tasks.length ? Math.round(tasks.reduce((s, t) => s + t.progress, 0) / tasks.length) : 0;
  const remaining = tasks.filter((t) => t.status === "uploading").length;

  return (
    <div className="fixed bottom-6 right-6 z-40 w-[340px] rounded-2xl border border-gray-100 bg-white shadow-2xl">
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3">
        <div>
          <p className="text-[13px] font-semibold text-gray-800">Uploading {tasks.length} files</p>
          <p className="text-[11px] text-gray-400">
            {avgProgress}% {remaining > 0 ? `• ${remaining} remaining` : "• Done"}
          </p>
        </div>
        <div className="relative flex items-center gap-1" ref={menuRef}>
          <button onClick={() => setMenuOpen((s) => !s)} className="rounded-md p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
            <MoreVertical className="h-4 w-4" />
          </button>
          {menuOpen && (
            <div className="absolute right-0 top-7 z-10 w-36 rounded-lg border border-gray-100 bg-white py-1 text-[11.5px] shadow-xl">
              <button
                onClick={() => {
                  onCancelAll();
                  setMenuOpen(false);
                }}
                className="block w-full px-3 py-1.5 text-left text-gray-600 hover:bg-gray-50"
              >
                Cancel all
              </button>
            </div>
          )}
          <button onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
            <X className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="max-h-72 overflow-y-auto p-2">
        {tasks.map((t) => (
          <div key={t.id} className="relative flex items-center gap-2.5 rounded-lg px-2 py-2 hover:bg-gray-50">
            <FileTypeIcon kind={t.kind} previewUrl={t.previewUrl} size="md" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-[12px] text-gray-700">{t.name}</p>
              {t.status === "error" ? (
                <p className="text-[10.5px] font-medium text-red-500">Upload Failed</p>
              ) : (
                <p className="text-[10.5px] text-gray-400">{t.sizeLabel}</p>
              )}
              {t.status === "uploading" && (
                <div className="mt-1 h-[3px] w-full overflow-hidden rounded-full bg-gray-100">
                  <div className="h-full rounded-full bg-emerald-400" style={{ width: `${t.progress}%` }} />
                </div>
              )}
            </div>
            {t.status === "done" && <Check className="h-4 w-4 shrink-0 text-emerald-500" />}
            {t.status === "uploading" && <span className="shrink-0 text-[11px] text-gray-400">{t.progress}%</span>}
            {t.status === "error" && (
              <button onClick={() => onRetry(t.id)} className="shrink-0 rounded-full p-1 text-red-400 hover:bg-red-50">
                <RefreshCw className="h-3.5 w-3.5" />
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Confirm modal (delete permanently)                                       */
/* ========================================================================== */

const ConfirmModal: React.FC<{ title: string; message: string; onCancel: () => void; onConfirm: () => void }> = ({
  title,
  message,
  onCancel,
  onConfirm,
}) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    <div onClick={onCancel} className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
    <div className="relative w-full max-w-[340px] rounded-2xl bg-white p-6 shadow-2xl">
      <h3 className="mb-2 text-base font-semibold text-gray-800">{title}</h3>
      <p className="mb-6 text-xs text-gray-500">{message}</p>
      <div className="flex gap-3">
        <button onClick={onCancel} className="flex-1 rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50">
          Cancel
        </button>
        <button onClick={onConfirm} className="flex-1 rounded-xl bg-red-400 py-2.5 text-xs font-semibold text-white hover:bg-red-500">
          Yes
        </button>
      </div>
    </div>
  </div>
);

/* ========================================================================== */
/*  Main component                                                            */
/* ========================================================================== */

const FileManagerScreen: React.FC = () => {
  const [folders, setFolders] = useState<FSFolder[]>(SEED_FOLDERS);
  const [files, setFiles] = useState<FSFile[]>(SEED_FILES);
  const [trashFolders, setTrashFolders] = useState<FSFolder[]>([]);
  const [trashFiles, setTrashFiles] = useState<FSFile[]>([]);

  const [search, setSearch] = useState("");
  const [activeSidebar, setActiveSidebar] = useState("projects");
  const [expanded, setExpanded] = useState<Set<string>>(new Set(["projects"]));
  const [view, setView] = useState<"files" | "trash">("files");

  const [selectedId, setSelectedId] = useState<string>("f-projects");
  const [settingsMap, setSettingsMap] = useState<Record<string, ItemSettings>>({
    "f-projects": { fileSharing: true, backup: false, sync: false },
  });

  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [renamingId, setRenamingId] = useState<string | null>(null);
  const [creatingFolder, setCreatingFolder] = useState(false);

  const [uploadTasks, setUploadTasks] = useState<UploadTask[]>([]);
  const [uploadPanelOpen, setUploadPanelOpen] = useState(false);

  const [toast, setToast] = useState<string | null>(null);
  const [confirmDelete, setConfirmDelete] = useState<{ id: string; type: ItemType; name: string } | null>(null);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [mobileInfoOpen, setMobileInfoOpen] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 2200);
    return () => clearTimeout(t);
  }, [toast]);

  const showToast = (msg: string) => setToast(msg);

  /* ------------------------------- selection ------------------------------- */
  const allItems: FSItem[] = [...folders, ...files];
  const selectedItem = allItems.find((i) => i.id === selectedId) ?? null;

  const getSettings = (id: string): ItemSettings => settingsMap[id] ?? defaultSettings;
  const toggleSetting = (id: string, key: keyof ItemSettings) => {
    setSettingsMap((prev) => ({
      ...prev,
      [id]: { ...getSettings(id), [key]: !getSettings(id)[key] },
    }));
  };

  /* ------------------------------- filtering -------------------------------- */
  const q = search.trim().toLowerCase();
  const visibleFolders = folders.filter((f) => f.name.toLowerCase().includes(q));
  const visibleFiles = files.filter((f) => f.name.toLowerCase().includes(q));

  /* ------------------------------- folder create ---------------------------- */
  const handleCreateFolder = (name: string): string | void => {
    const exists = folders.some((f) => f.name.toLowerCase() === name.toLowerCase());
    if (exists) return "A folder with this name already exists";
    const newFolder: FSFolder = { id: uid("folder"), type: "folder", name, sizeLabel: "0 B", badge: null };
    setFolders((prev) => [...prev, newFolder]);
    setCreatingFolder(false);
    showToast(`Folder "${name}" created`);
  };

  /* ------------------------------- rename ------------------------------------ */
  const handleRename = (item: FSItem, name: string): string | void => {
    if (item.type === "folder") {
      const exists = folders.some((f) => f.id !== item.id && f.name.toLowerCase() === name.toLowerCase());
      if (exists) return "A folder with this name already exists";
      setFolders((prev) => prev.map((f) => (f.id === item.id ? { ...f, name } : f)));
    } else {
      setFiles((prev) => prev.map((f) => (f.id === item.id ? { ...f, name } : f)));
    }
    setRenamingId(null);
    showToast("Renamed successfully");
  };

  /* ------------------------------- copy --------------------------------------- */
  const handleCopy = (item: FSItem) => {
    const baseName = `${item.name} (copy)`;
    if (item.type === "folder") {
      setFolders((prev) => [...prev, { ...item, id: uid("folder"), name: baseName }]);
    } else {
      setFiles((prev) => [...prev, { ...item, id: uid("file"), name: baseName }]);
    }
    showToast(`Copied "${item.name}"`);
  };

  /* ------------------------------- move ---------------------------------------- */
  const handleMove = (item: FSItem, targetName: string) => {
    if (item.type === "folder") setFolders((prev) => prev.filter((f) => f.id !== item.id));
    else setFiles((prev) => prev.filter((f) => f.id !== item.id));
    if (selectedId === item.id) setSelectedId("f-projects");
    showToast(`Moved "${item.name}" to ${targetName}`);
  };

  /* ------------------------------- delete / trash ------------------------------- */
  const handleDeleteToTrash = (item: FSItem) => {
    if (item.type === "folder") {
      setFolders((prev) => prev.filter((f) => f.id !== item.id));
      setTrashFolders((prev) => [...prev, item]);
    } else {
      setFiles((prev) => prev.filter((f) => f.id !== item.id));
      setTrashFiles((prev) => [...prev, item]);
    }
    if (selectedId === item.id) setSelectedId("f-projects");
    showToast(`Moved "${item.name}" to Trash`);
  };

  const handleRestore = (item: FSItem) => {
    if (item.type === "folder") {
      setTrashFolders((prev) => prev.filter((f) => f.id !== item.id));
      setFolders((prev) => [...prev, item]);
    } else {
      setTrashFiles((prev) => prev.filter((f) => f.id !== item.id));
      setFiles((prev) => [...prev, item]);
    }
    showToast(`Restored "${item.name}"`);
  };

  const requestPermanentDelete = (item: FSItem) => setConfirmDelete({ id: item.id, type: item.type, name: item.name });
  const confirmPermanentDelete = () => {
    if (!confirmDelete) return;
    if (confirmDelete.type === "folder") setTrashFolders((prev) => prev.filter((f) => f.id !== confirmDelete.id));
    else setTrashFiles((prev) => prev.filter((f) => f.id !== confirmDelete.id));
    showToast("Deleted permanently");
    setConfirmDelete(null);
  };

  /* ------------------------------- download / share ------------------------------ */
  const handleDownload = (item: FSItem) => {
    if (item.type === "file" && item.previewUrl) {
      const link = document.createElement("a");
      link.href = item.previewUrl;
      link.download = item.name;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
      showToast(`Downloading "${item.name}"`);
    } else {
      showToast("This is demo data — nothing to download");
    }
  };

  const handleShare = (item: FSItem) => showToast(`Share dialog opened for "${item.name}"`);
  const handleSharingLink = (item: FSItem) => {
    const fakeLink = `https://files.example.com/s/${item.id}`;
    navigator.clipboard?.writeText(fakeLink).catch(() => {});
    showToast("Sharing link copied to clipboard");
  };

  /* ------------------------------- upload --------------------------------------- */
  const runUploadSimulation = (taskId: string) => {
    const interval = setInterval(() => {
      setUploadTasks((prev) => {
        const task = prev.find((t) => t.id === taskId);
        if (!task || task.status !== "uploading") {
          clearInterval(interval);
          return prev;
        }
        const shouldFail = task.progress > 40 && task.progress < 55 && Math.random() < 0.06;
        if (shouldFail) {
          clearInterval(interval);
          return prev.map((t) => (t.id === taskId ? { ...t, status: "error" } : t));
        }
        const next = Math.min(100, task.progress + Math.round(8 + Math.random() * 18));
        if (next >= 100) {
          clearInterval(interval);
          setFiles((prevFiles) => [
            ...prevFiles,
            {
              id: uid("file"),
              type: "file",
              name: task.name,
              sizeLabel: task.sizeLabel,
              kind: task.kind,
              previewUrl: task.previewUrl,
            },
          ]);
          return prev.map((t) => (t.id === taskId ? { ...t, progress: 100, status: "done" } : t));
        }
        return prev.map((t) => (t.id === taskId ? { ...t, progress: next } : t));
      });
    }, 300);
  };

  const handleFilesSelected = (fileList: FileList | null) => {
    if (!fileList || fileList.length === 0) return;
    const newTasks: UploadTask[] = Array.from(fileList).map((file) => {
      const kind = inferKind(file.name);
      return {
        id: uid("task"),
        file,
        name: file.name,
        sizeLabel: formatBytes(file.size),
        kind,
        previewUrl: kind === "image" ? URL.createObjectURL(file) : undefined,
        progress: 0,
        status: "uploading",
      };
    });
    setUploadTasks((prev) => [...prev, ...newTasks]);
    setUploadPanelOpen(true);
    newTasks.forEach((t) => runUploadSimulation(t.id));
  };

  const retryUpload = (id: string) => {
    setUploadTasks((prev) => prev.map((t) => (t.id === id ? { ...t, status: "uploading", progress: 10 } : t)));
    runUploadSimulation(id);
  };

  const cancelAllUploads = () => {
    setUploadTasks([]);
    setUploadPanelOpen(false);
  };

  /* ------------------------------- move targets ------------------------------ */
  const moveTargets = folders.map((f) => ({ id: f.id, name: f.name }));

  /* ================================ RENDER =================================== */

  const renderCard = (item: FSItem) => {
    const isSelected = selectedId === item.id;
    const isRenaming = renamingId === item.id;
    return (
      <div
        key={item.id}
        onClick={() => {
          if (!isRenaming) {
            setSelectedId(item.id);
            setMobileInfoOpen(true);
          }
        }}
        className={`group relative flex cursor-pointer flex-col items-center rounded-xl border border-transparent p-4 text-center transition-colors ${
          isSelected ? "bg-gray-100" : "hover:bg-gray-50"
        }`}
      >
        <div className="relative mb-2 flex h-14 items-center justify-center">
          {item.type === "folder" ? (
            <FolderGraphic badge={item.badge} />
          ) : (
            <FileTypeIcon kind={item.kind} previewUrl={item.previewUrl} />
          )}
        </div>

        {isRenaming ? (
          <InlineNameInput initial={item.name} onCancel={() => setRenamingId(null)} onSubmit={(name) => handleRename(item, name)} />
        ) : (
          <>
            <p className="w-full truncate text-[12.5px] text-gray-700">{item.name}</p>
            <p className="mt-0.5 text-[10.5px] text-gray-400">{item.sizeLabel}</p>
          </>
        )}

        <button
          onClick={(e) => {
            e.stopPropagation();
            setOpenMenuId((id) => (id === item.id ? null : item.id));
          }}
          className="absolute right-1.5 top-1.5 rounded-md p-1 text-gray-400 opacity-0 hover:bg-gray-100 hover:text-gray-600 group-hover:opacity-100"
        >
          <MoreVertical className="h-3.5 w-3.5" />
        </button>

        {openMenuId === item.id && (
          <ItemContextMenu
            onClose={() => setOpenMenuId(null)}
            onShare={() => {
              handleShare(item);
              setOpenMenuId(null);
            }}
            onSharingLink={() => {
              handleSharingLink(item);
              setOpenMenuId(null);
            }}
            onDownload={() => {
              handleDownload(item);
              setOpenMenuId(null);
            }}
            onRename={() => {
              setRenamingId(item.id);
              setOpenMenuId(null);
            }}
            onCopy={() => {
              handleCopy(item);
              setOpenMenuId(null);
            }}
            onMove={() => {
              handleMove(item, "selected folder");
              setOpenMenuId(null);
            }}
            onDelete={() => {
              handleDeleteToTrash(item);
              setOpenMenuId(null);
            }}
            moveTargets={moveTargets.filter((t) => t.id !== item.id)}
          />
        )}
      </div>
    );
  };

  const renderTrashRow = (item: FSItem) => (
    <div key={item.id} className="flex items-center justify-between rounded-xl border border-gray-100 px-4 py-3">
      <div className="flex items-center gap-3">
        {item.type === "folder" ? <FolderGraphic badge={item.badge} /> : <FileTypeIcon kind={item.kind} previewUrl={item.previewUrl} />}
        <div>
          <p className="text-[12.5px] text-gray-700">{item.name}</p>
          <p className="text-[10.5px] text-gray-400">{item.sizeLabel}</p>
        </div>
      </div>
      <div className="flex items-center gap-1">
        <button
          onClick={() => handleRestore(item)}
          className="flex items-center gap-1.5 rounded-lg border border-gray-200 px-3 py-1.5 text-[11px] font-medium text-gray-600 hover:bg-gray-50"
        >
          <RotateCcw className="h-3.5 w-3.5" /> Restore
        </button>
        <button
          onClick={() => requestPermanentDelete(item)}
          className="flex items-center gap-1.5 rounded-lg border border-red-100 px-3 py-1.5 text-[11px] font-medium text-red-500 hover:bg-red-50"
        >
          <Trash2 className="h-3.5 w-3.5" /> Delete
        </button>
      </div>
    </div>
  );

  return (
    <div className="flex h-screen w-full flex-col bg-[#F8FAFB] font-sans text-gray-800">
      {/* Toast */}
      {toast && (
        <div className="fixed left-1/2 top-4 z-[70] -translate-x-1/2 rounded-lg bg-gray-900 px-4 py-2.5 text-xs font-medium text-white shadow-lg">
          {toast}
        </div>
      )}

      {/* Mobile top bar */}
      <div className="flex items-center justify-between border-b border-gray-100 px-4 py-3 lg:hidden">
        <button onClick={() => setMobileSidebarOpen(true)} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-50">
          <Menu className="h-5 w-5" />
        </button>
        <span className="text-sm font-semibold text-gray-800">My Files</span>
        <button onClick={() => setMobileInfoOpen(true)} className="rounded-md p-1.5 text-gray-500 hover:bg-gray-50">
          <Info className="h-5 w-5" />
        </button>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar (desktop) */}
        <div className="hidden w-56 shrink-0 border-r border-gray-100 pt-5 lg:block">
          <Sidebar
            activeId={activeSidebar}
            onSelect={setActiveSidebar}
            expanded={expanded}
            onToggleExpand={(id) =>
              setExpanded((prev) => {
                const next = new Set(prev);
                next.has(id) ? next.delete(id) : next.add(id);
                return next;
              })
            }
            view={view}
            onSelectTrash={() => setView("trash")}
            storagePct={70}
          />
        </div>

        {/* Sidebar (mobile drawer) */}
        {mobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex lg:hidden">
            <div onClick={() => setMobileSidebarOpen(false)} className="fixed inset-0 bg-black/30" />
            <div className="relative flex h-full w-72 flex-col bg-white p-5 shadow-2xl">
              <button onClick={() => setMobileSidebarOpen(false)} className="mb-3 self-end rounded-md p-1 text-gray-400 hover:bg-gray-50">
                <X className="h-4 w-4" />
              </button>
              <Sidebar
                activeId={activeSidebar}
                onSelect={(id) => {
                  setActiveSidebar(id);
                  setMobileSidebarOpen(false);
                }}
                expanded={expanded}
                onToggleExpand={(id) =>
                  setExpanded((prev) => {
                    const next = new Set(prev);
                    next.has(id) ? next.delete(id) : next.add(id);
                    return next;
                  })
                }
                view={view}
                onSelectTrash={() => {
                  setView("trash");
                  setMobileSidebarOpen(false);
                }}
                storagePct={70}
              />
            </div>
          </div>
        )}

        {/* Main */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6">
          {view === "files" && (
            <>
              <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="relative flex-1">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
                  <input
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full rounded-xl border border-gray-200 bg-gray-50 py-2.5 pl-9 pr-3 text-xs text-gray-700 placeholder:text-gray-400 outline-none focus:ring-2 focus:ring-emerald-300"
                  />
                </div>
                <button
                  onClick={() => fileInputRef.current?.click()}
                  className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600"
                >
                  <Upload className="h-3.5 w-3.5" /> Upload
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

              <div className="mb-8">
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Folders</h2>
                {visibleFolders.length === 0 && q ? (
                  <p className="text-xs text-gray-400">No folders match "{search}"</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">
                    {visibleFolders.map(renderCard)}
                    {!q &&
                      (creatingFolder ? (
                        <div className="flex flex-col items-center justify-center rounded-xl border-2 border-dashed border-gray-200 p-4">
                          <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <Plus className="h-4 w-4 text-gray-400" />
                          </div>
                          <InlineNameInput initial="" onCancel={() => setCreatingFolder(false)} onSubmit={handleCreateFolder} />
                        </div>
                      ) : (
                        <button
                          onClick={() => setCreatingFolder(true)}
                          className="flex flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-gray-200 p-4 text-gray-400 hover:border-gray-300 hover:text-gray-500"
                        >
                          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                            <Plus className="h-4 w-4" />
                          </div>
                          <span className="text-[12px] font-medium">Add Folder</span>
                        </button>
                      ))}
                  </div>
                )}
              </div>

              <div>
                <h2 className="mb-4 text-lg font-semibold text-gray-800">Files</h2>
                {visibleFiles.length === 0 ? (
                  <p className="text-xs text-gray-400">{q ? `No files match "${search}"` : "No files yet — upload to get started."}</p>
                ) : (
                  <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 md:grid-cols-4">{visibleFiles.map(renderCard)}</div>
                )}
              </div>
            </>
          )}

          {view === "trash" && (
            <div>
              <div className="mb-6 flex items-center justify-between">
                <h2 className="text-lg font-semibold text-gray-800">Trash</h2>
                <button onClick={() => setView("files")} className="text-xs font-medium text-emerald-600 hover:underline">
                  Back to Files
                </button>
              </div>
              {trashFolders.length === 0 && trashFiles.length === 0 ? (
                <p className="text-xs text-gray-400">Trash is empty.</p>
              ) : (
                <div className="space-y-2">
                  {trashFolders.map(renderTrashRow)}
                  {trashFiles.map(renderTrashRow)}
                </div>
              )}
            </div>
          )}
        </div>

        {/* Info panel (desktop) */}
        <div className="hidden w-72 shrink-0 border-l border-gray-100 p-6 lg:block">
          {selectedItem ? (
            <InfoPanelContent item={selectedItem} settings={getSettings(selectedItem.id)} onToggle={(k) => toggleSetting(selectedItem.id, k)} />
          ) : (
            <p className="text-xs text-gray-400">Select a file or folder to see details.</p>
          )}
        </div>

        {/* Info panel (mobile drawer) */}
        {mobileInfoOpen && selectedItem && (
          <div className="fixed inset-0 z-50 flex justify-end lg:hidden">
            <div onClick={() => setMobileInfoOpen(false)} className="fixed inset-0 bg-black/30" />
            <div className="relative h-full w-72 overflow-y-auto bg-white p-6 shadow-2xl">
              <button onClick={() => setMobileInfoOpen(false)} className="mb-3 rounded-md p-1 text-gray-400 hover:bg-gray-50">
                <X className="h-4 w-4" />
              </button>
              <InfoPanelContent item={selectedItem} settings={getSettings(selectedItem.id)} onToggle={(k) => toggleSetting(selectedItem.id, k)} />
            </div>
          </div>
        )}
      </div>

      {uploadPanelOpen && uploadTasks.length > 0 && (
        <UploadPanel tasks={uploadTasks} onRetry={retryUpload} onClose={() => setUploadPanelOpen(false)} onCancelAll={cancelAllUploads} />
      )}

      {confirmDelete && (
        <ConfirmModal
          title="Delete Permanently"
          message={`"${confirmDelete.name}" will be permanently deleted. This cannot be undone.`}
          onCancel={() => setConfirmDelete(null)}
          onConfirm={confirmPermanentDelete}
        />
      )}
    </div>
  );
};

/* ========================================================================== */
/*  Info panel content                                                        */
/* ========================================================================== */

const Toggle: React.FC<{ checked: boolean; onChange: () => void }> = ({ checked, onChange }) => (
  <button
    onClick={onChange}
    className={`relative h-5 w-9 shrink-0 rounded-full transition-colors ${checked ? "bg-emerald-500" : "bg-gray-200"}`}
  >
    <span
      className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${
        checked ? "translate-x-4" : "translate-x-0.5"
      }`}
    />
  </button>
);

const InfoPanelContent: React.FC<{
  item: FSItem;
  settings: ItemSettings;
  onToggle: (key: keyof ItemSettings) => void;
}> = ({ item, settings, onToggle }) => (
  <div>
    <div className="mb-4 flex justify-center">
      {item.type === "folder" ? (
        <FolderGraphic badge={item.badge} size="lg" />
      ) : (
        <FileTypeIcon kind={item.kind} previewUrl={item.previewUrl} size="lg" />
      )}
    </div>
    <h3 className="mb-6 text-center text-base font-semibold text-gray-800">{item.name}</h3>

    <p className="mb-2 text-[11px] font-semibold tracking-wide text-gray-400">INFO</p>
    <div className="mb-6 space-y-2.5">
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Type</span>
        <span className="text-gray-700">{item.type === "folder" ? "Folder" : item.kind.toUpperCase()}</span>
      </div>
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Size</span>
        <span className="text-gray-700">{item.sizeLabel}</span>
      </div>
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Owner</span>
        <span className="text-gray-700">{DUMMY_META.owner}</span>
      </div>
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Location</span>
        <span className="font-medium text-emerald-600">{DUMMY_META.location}</span>
      </div>
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Modified</span>
        <span className="text-gray-700">{DUMMY_META.modified}</span>
      </div>
      <div className="flex justify-between text-[12px]">
        <span className="text-gray-400">Created</span>
        <span className="text-gray-700">{DUMMY_META.created}</span>
      </div>
    </div>

    <p className="mb-2 text-[11px] font-semibold tracking-wide text-gray-400">SETTINGS</p>
    <div className="space-y-3">
      <div className="flex items-center justify-between text-[12px] text-gray-600">
        File Sharing
        <Toggle checked={settings.fileSharing} onChange={() => onToggle("fileSharing")} />
      </div>
      <div className="flex items-center justify-between text-[12px] text-gray-600">
        Backup
        <Toggle checked={settings.backup} onChange={() => onToggle("backup")} />
      </div>
      <div className="flex items-center justify-between text-[12px] text-gray-600">
        Sync
        <Toggle checked={settings.sync} onChange={() => onToggle("sync")} />
      </div>
    </div>
  </div>
);

export default FileManagerScreen;

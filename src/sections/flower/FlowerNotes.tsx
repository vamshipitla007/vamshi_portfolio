import { useMemo, useState } from "react";

import {
  CalendarDays,
  Edit3,
  Pin,
  Plus,
  Search,
  SlidersHorizontal,
  Trash2,
  X,

} from "lucide-react";

/* ===================================================== */
/* TYPES */
/* ===================================================== */

interface Note {
  id: number;

  title: string;

  description: string;

  date: string;

  pinned: boolean;

  color: string;
}

/* ===================================================== */
/* DUMMY NOTES */
/* ===================================================== */

const initialNotes: Note[] = [
  {
    id: 1,
    title: "The title of a note",
    description:
      "Lorem ipsum dolor sit amet, ullamcorper tincidunt consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    date: "12 June, 2020",
    pinned: true,
    color: "#FDBA21",
  },
  {
    id: 2,
    title: "Meeting Notes",
    description:
      "Discuss dashboard improvements, responsive layout, testing, deployment and release planning.",
    date: "15 June, 2020",
    pinned: false,
    color: "#7C3AED",
  },
  {
    id: 3,
    title: "Shopping List",
    description: "MacBook, Mouse, Keyboard, Monitor, USB Hub, HDMI Cable.",
    date: "18 June, 2020",
    pinned: false,
    color: "#16A34A",
  },
  {
    id: 4,
    title: "React Tips",
    description:
      "Remember to memoize heavy components using React.memo and useMemo where appropriate.",
    date: "22 June, 2020",
    pinned: true,
    color: "#EC4899",
  },
  {
    id: 5,
    title: "Ideas",
    description:
      "Build Notes App, CRM Dashboard, Finance Tracker and Inventory Management.",
    date: "25 June, 2020",
    pinned: false,
    color: "#2563EB",
  },
  {
    id: 6,
    title: "Travel Plan",
    description: "Visit Thailand, Singapore and Bali during December holidays.",
    date: "28 June, 2020",
    pinned: false,
    color: "#F97316",
  },
];

const Notes = () => {
  const [notes, setNotes] = useState(initialNotes);

  const [search, setSearch] = useState("");

  const [showAddModal, setShowAddModal] = useState(false);

  const [selectedNote, setSelectedNote] = useState<Note | null>(null);
  const [editingNote, setEditingNote] = useState<Note | null>(null);

  const [title, setTitle] = useState("");

  const [description, setDescription] = useState("");

  const [ribbonColor, setRibbonColor] = useState("#FDBA21");

  const [pin, setPin] = useState(false);

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [deleteNote, setDeleteNote] =
  useState<Note | null>(null);

  const filteredNotes = useMemo(() => {
    return notes.filter(
      (note) =>
        note.title.toLowerCase().includes(search.toLowerCase()) ||
        note.description.toLowerCase().includes(search.toLowerCase()),
    );
  }, [notes, search]);

  const pinnedNotes = filteredNotes.filter((x) => x.pinned);

  const normalNotes = filteredNotes.filter((x) => !x.pinned);

  const togglePin = (id: number) => {
    setNotes((prev) =>
      prev.map((note) =>
        note.id === id
          ? {
              ...note,
              pinned: !note.pinned,
            }
          : note,
      ),
    );
  };

  const resetForm = () => {
    setEditingNote(null);

    setTitle("");

    setDescription("");

    setRibbonColor("#FDBA21");

    setPin(false);

    setErrors({});
  };

  const removeNote = () => {

  if (!deleteNote) return;

  setNotes((prev) =>
    prev.filter(
      (note) => note.id !== deleteNote.id
    )
  );

  setSelectedNote(null);

  setDeleteNote(null);

};

  const openEdit = (note: Note) => {
    setEditingNote(note);

    setTitle(note.title);

    setDescription(note.description);

    setRibbonColor(note.color);

    setPin(note.pinned);

    setShowAddModal(true);
  };

  const saveNote = async () => {
    const e: Record<string, string> = {};

    if (!title.trim()) e.title = "Title is required";

    if (!description.trim()) e.description = "Description is required";

    setErrors(e);

    if (Object.keys(e).length) return;

    setLoading(true);

    await new Promise((r) => setTimeout(r, 800));

    if (editingNote) {
      setNotes((prev) =>
        prev.map((note) =>
          note.id === editingNote.id
            ? {
                ...note,
                title,
                description,
                pinned: pin,
                color: ribbonColor,
              }
            : note,
        ),
      );
    } else {
      setNotes((prev) => [
        {
          id: Date.now(),
          title,
          description,
          pinned: pin,
          color: ribbonColor,
          date: new Date().toLocaleDateString("en-GB", {
            day: "2-digit",
            month: "long",
            year: "numeric",
          }),
        },

        ...prev,
      ]);
    }

    setLoading(false);

    setShowAddModal(false);

    resetForm();
  };

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      {/* Header */}

      <div className="flex flex-col gap-4 pt-5 lg:flex-row lg:items-center lg:justify-between">
        <h1 className="text-[26px] font-semibold text-[#374151]">Notes</h1>

        <div className="flex items-center gap-3">
          {/* Search */}

          <div className="relative">
            <Search
              size={17}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-[#98A2B3]"
            />

            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search notes..."
              className="h-11 w-[260px] rounded-xl border border-[#ECECEC] bg-white pl-11 pr-4 text-[13px] text-[#374151] outline-none focus:border-[#2BA84A]"
            />
          </div>

          {/* Filter */}

          <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-[#ECECEC] bg-white transition hover:bg-[#F8F9FB]">
            <SlidersHorizontal color="#333" size={18} />
          </button>

          {/* Add */}

          <button
            onClick={() => setShowAddModal(true)}
            className="flex h-11 items-center gap-2 rounded-xl bg-[#2BA84A] px-5 text-[13px] font-medium text-white transition hover:bg-[#23913D]"
          >
            <Plus size={17} />
            Add Note
          </button>
        </div>
      </div>

      {/* Notes Grid */}

      <div className="mt-8 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {[...pinnedNotes, ...normalNotes].map((note) => (
          <div
            key={note.id}
            onClick={() => setSelectedNote(note)}
            //onDoubleClick={() => openEdit(note)}
            className="group relative cursor-pointer overflow-hidden rounded-2xl border border-[#ECECEC] bg-white p-5 transition hover:-translate-y-1 hover:shadow-lg"
          >
            {/* Ribbon */}

            <div
              className="absolute left-0 top-0 h-7 w-7 rounded-br-2xl"
              style={{
                background: note.color,
              }}
            />

            {/* Top */}

            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2 text-[11px] text-[#98A2B3]">
                <CalendarDays color="#333" size={13} />

                {note.date}
              </div>

              <button
                onClick={(e) => {
                  e.stopPropagation();

                  togglePin(note.id);
                }}
                className="rounded-md p-1 hover:bg-[#F5F5F5]"
              >
                <Pin
                  size={14}
                  fill={note.pinned ? "#374151" : "transparent"}
                  className="text-[#374151]"
                />
              </button>
            </div>

            {/* Title */}

            <h3 className="line-clamp-2 text-[16px] font-semibold text-[#374151]">
              {note.title}
            </h3>

            {/* Description */}

            <p className="mt-3 line-clamp-6 text-[13px] leading-6 text-[#6B7280]">
              {note.description}
            </p>
          </div>
        ))}
      </div>

      {/* PART 2 CONTINUES HERE */}

      {/* ====================================================== */}
      {/* ADD / EDIT NOTE MODAL */}
      {/* ====================================================== */}

      {showAddModal && (
        <>
          <div
            onClick={() => {
              setShowAddModal(false);
              resetForm();
            }}
            className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
          />

          <div className="fixed inset-0 z-50 flex items-center justify-center p-5">
            <div className="w-full max-w-[640px] rounded-[24px] bg-white shadow-[0_20px_70px_rgba(0,0,0,.15)]">
              {/* Header */}

              <div className="flex items-center justify-between border-b border-[#ECECEC] px-8 py-6">
                <h2 className="text-[32px] font-semibold text-[#374151]">
                  {editingNote ? "Edit Note" : "Add Note"}
                </h2>

                <button
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#F7F8FA]"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Body */}

              <div className="space-y-6 p-8">
                {/* Title */}

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                    Title
                  </label>

                  <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="The title of a note"
                    className={`h-12 w-full rounded-2xl border px-4 text-[14px] text-[#374151] outline-none transition

              ${
                errors.title
                  ? "border-red-500"
                  : "border-[#E5E7EB] focus:border-[#2BA84A]"
              }`}
                  />

                  {errors.title && (
                    <p className="mt-1 text-xs text-red-500">{errors.title}</p>
                  )}
                </div>

                {/* Description */}

                <div>
                  <label className="mb-2 block text-[13px] font-medium text-[#8B95A7]">
                    Description
                  </label>

                  <textarea
                    rows={7}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Type something..."
                    className={`w-full resize-none rounded-2xl border px-4 py-4 text-[14px] leading-7 text-[#374151] outline-none transition

              ${
                errors.description
                  ? "border-red-500"
                  : "border-[#E5E7EB] focus:border-[#2BA84A]"
              }`}
                  />

                  {errors.description && (
                    <p className="mt-1 text-xs text-red-500">
                      {errors.description}
                    </p>
                  )}
                </div>

                {/* Ribbon Color */}

                <div>
                  <label className="mb-3 block text-[13px] font-medium text-[#8B95A7]">
                    Ribbon Color
                  </label>

                  <div className="flex gap-3">
                    {[
                      "#FDBA21",
                      "#16A34A",
                      "#2563EB",
                      "#EC4899",
                      "#F97316",
                      "#7C3AED",
                    ].map((item) => (
                      <button
                        key={item}
                        onClick={() => setRibbonColor(item)}
                        className={`h-9 w-9 rounded-full border-2 transition

                  ${
                    ribbonColor === item
                      ? "border-[#374151]"
                      : "border-transparent"
                  }`}
                        style={{
                          background: item,
                        }}
                      />
                    ))}
                  </div>
                </div>

                {/* Pin */}

                <label className="flex items-center gap-3">
                  <input
                    type="checkbox"
                    checked={pin}
                    onChange={(e) => setPin(e.target.checked)}
                    className="h-4 w-4 accent-[#2BA84A]"
                  />

                  <span className="text-[14px] font-medium text-[#4B5563]">
                    Pin this note
                  </span>
                </label>
              </div>

              {/* Footer */}

              <div className="flex justify-end gap-4 border-t border-[#ECECEC] px-8 py-6">
                <button
                  onClick={() => {
                    setShowAddModal(false);
                    resetForm();
                  }}
                  className="rounded-xl border border-[#E5E7EB] px-7 py-3 text-[14px] font-medium text-[#4B5563]"
                >
                  Cancel
                </button>

                <button
                  disabled={loading}
                  onClick={saveNote}
                  className="rounded-xl bg-[#2BA84A] px-8 py-3 text-[14px] font-semibold text-white transition hover:bg-[#24913C] disabled:opacity-60"
                >
                  {loading ? "Saving..." : editingNote ? "Update" : "Create"}
                </button>
              </div>
            </div>
          </div>
        </>
      )}


{selectedNote && (

  <>
    {/* Overlay */}

    <div
      onClick={() => setSelectedNote(null)}
      className="fixed inset-0 z-40 bg-black/30 backdrop-blur-[2px]"
    />

    {/* Modal */}

    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

      <div className="w-full max-w-[760px] overflow-hidden rounded-[26px] bg-white shadow-[0_25px_80px_rgba(0,0,0,.12)]">

        {/* Header */}

        <div className="flex items-center justify-between border-b border-[#ECECEC] px-8 py-6">

          <div className="flex items-center gap-3">

            <div
              className="h-5 w-5 rounded-sm"
              style={{
                background: selectedNote.color,
              }}
            />

            <div>

              <h2 className="text-[18px] font-semibold text-[#374151]">

                {selectedNote.title}

              </h2>

              <div className="mt-1 flex items-center gap-2 text-[12px] text-[#98A2B3]">

                <CalendarDays size={13} />

                {selectedNote.date}

              </div>

            </div>

          </div>

          <button
            onClick={() => setSelectedNote(null)}
            className="rounded-full bg-[#F7F8FA] p-2 transition hover:bg-[#ECECEC]"
          >
            <X color="#6B7280" size={18} />
          </button>

        </div>

        {/* Toolbar */}

        <div className="flex items-center justify-end gap-3 border-b border-[#ECECEC] px-8 py-4">

          <button
            onClick={() => {
              togglePin(selectedNote.id);

              setSelectedNote({
                ...selectedNote,
                pinned: !selectedNote.pinned,
              });
            }}
            className="rounded-xl border border-[#ECECEC] p-3 hover:bg-[#F8F9FB]"
          >
            <Pin
              size={17}
              fill={
                selectedNote.pinned
                  ? "#374151"
                  : "transparent"
              }
            />
          </button>

          <button
            onClick={() => {

              openEdit(selectedNote);

              setSelectedNote(null);

            }}
            className="rounded-xl border border-[#ECECEC] p-3 hover:bg-[#F8F9FB]"
          >
            <Edit3 color="#333" size={17} />
          </button>

          <button
            onClick={() =>
              setDeleteNote(selectedNote)
            }
            className="rounded-xl border border-red-200 p-3 text-red-500 hover:bg-red-50"
          >
            <Trash2 color="#EF4444" size={17} />
          </button>

        </div>

        {/* Body */}

        <div className="p-8">

          <h3 className="text-[26px] font-semibold text-[#374151]">

            {selectedNote.title}

          </h3>

          <div className="mt-6 whitespace-pre-wrap text-[15px] leading-8 text-[#6B7280]">

            {selectedNote.description}

          </div>

        </div>

      </div>

    </div>

  </>

)}
{/* ========================================================= */}
{/* DELETE MODAL */}
{/* ========================================================= */}

{deleteNote && (

  <>
    <div
      className="fixed inset-0 z-[60] bg-black/30"
      onClick={() => setDeleteNote(null)}
    />

    <div className="fixed inset-0 z-[61] flex items-center justify-center p-6">

      <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-xl">

        <h2 className="text-[24px] font-semibold text-[#374151]">

          Delete Note

        </h2>

        <p className="mt-5 text-[14px] leading-7 text-[#6B7280]">

          Are you sure you want to permanently delete this note?

        </p>

        <div className="mt-10 flex justify-end gap-4">

          <button
            onClick={() =>
              setDeleteNote(null)
            }
            className="rounded-xl border border-[#E5E7EB] px-6 py-3 text-[14px]"
          >
            Cancel
          </button>

          <button
            onClick={removeNote}
            className="rounded-xl bg-red-500 px-6 py-3 text-[14px] font-medium text-white"
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  </>

)}
    </div>
  );
};

export default Notes;

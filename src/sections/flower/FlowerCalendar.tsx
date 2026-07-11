import React, { useEffect, useMemo, useRef, useState } from "react";
import {
  X,
  ChevronLeft,
  ChevronRight,
  Plus,
  Pencil,
  Trash2,
  MoreHorizontal,
  Clock,
  AlignLeft,
  Calendar as CalendarIcon,
  Check,
} from "lucide-react";

/* ========================================================================== */
/*  Types                                                                     */
/* ========================================================================== */

type View = "Month" | "Week" | "Day";
type CalendarKey = "important" | "work" | "personal" | "reminder";

interface CalendarOption {
  id: CalendarKey;
  label: string;
  dot: string; // solid accent
  bg: string; // pastel background
  border: string; // left border accent
  text: string; // text accent (for time label on bar)
}

interface CalendarEvent {
  id: string;
  title: string;
  description: string;
  startDate: string; // YYYY-MM-DD
  endDate: string; // YYYY-MM-DD
  startTime: string; // HH:mm
  endTime: string; // HH:mm
  allDay: boolean;
  repeat: boolean;
  calendarId: CalendarKey;
}

interface EventDraft {
  title: string;
  description: string;
  startDate: string;
  startTime: string;
  endDate: string;
  endTime: string;
  allDay: boolean;
  repeat: boolean;
  calendarId: CalendarKey;
}

/* ========================================================================== */
/*  Constants                                                                 */
/* ========================================================================== */

const CALENDARS: CalendarOption[] = [
  { id: "important", label: "Important", dot: "#F87171", bg: "#FEF2F2", border: "#F87171", text: "#B91C1C" },
  { id: "work", label: "Work", dot: "#38BDF8", bg: "#EFF9FE", border: "#38BDF8", text: "#0369A1" },
  { id: "personal", label: "Personal", dot: "#34D399", bg: "#EFFBF6", border: "#34D399", text: "#047857" },
  { id: "reminder", label: "Reminder", dot: "#FBBF24", bg: "#FFFBEB", border: "#FBBF24", text: "#B45309" },
];

const getCalendar = (id: CalendarKey) => CALENDARS.find((c) => c.id === id) ?? CALENDARS[0];

const WEEKDAYS_FULL = ["MONDAY", "TUESDAY", "WEDNESDAY", "THURSDAY", "FRIDAY", "SATURDAY", "SUNDAY"];
const WEEKDAYS_SHORT = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const WEEKDAYS_MINI = ["MO", "TU", "WE", "TH", "FR", "SA", "SU"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const ROW_HEIGHT = 60; // px per hour in week/day view
const HOURS = Array.from({ length: 24 }, (_, i) => i);

// Demo "today" reference, fixed so the UI reproduces the reference design.
const TODAY_REF = new Date(2020, 8, 8, 6, 30, 0);

/* ========================================================================== */
/*  Date utilities                                                            */
/* ========================================================================== */

const pad2 = (n: number) => String(n).padStart(2, "0");
const toKey = (d: Date) => `${d.getFullYear()}-${pad2(d.getMonth() + 1)}-${pad2(d.getDate())}`;
const fromKey = (key: string) => {
  const [y, m, d] = key.split("-").map(Number);
  return new Date(y, (m || 1) - 1, d || 1);
};
const isSameDate = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
const addDays = (d: Date, n: number) => {
  const r = new Date(d);
  r.setDate(r.getDate() + n);
  return r;
};
const addMonths = (d: Date, n: number) => {
  const r = new Date(d);
  r.setMonth(r.getMonth() + n);
  return r;
};
const startOfWeek = (d: Date) => {
  const day = (d.getDay() + 6) % 7; // Monday = 0
  return addDays(d, -day);
};
const formatDot = (key: string) => key.split("-").reverse().join(".");
const timeToMinutes = (t: string) => {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
};
const minutesBetween = (start: string, end: string) => timeToMinutes(end) - timeToMinutes(start);

function getMonthMatrix(year: number, month: number): Date[][] {
  const firstOfMonth = new Date(year, month, 1);
  const gridStart = startOfWeek(firstOfMonth);
  const weeks: Date[][] = [];
  let cursor = new Date(gridStart);
  for (let w = 0; w < 6; w++) {
    const week: Date[] = [];
    for (let d = 0; d < 7; d++) {
      week.push(new Date(cursor));
      cursor = addDays(cursor, 1);
    }
    weeks.push(week);
    const lastOfMonth = new Date(year, month + 1, 0);
    if (cursor > lastOfMonth && w >= 4) break;
  }
  return weeks;
}

const TIME_OPTIONS: string[] = (() => {
  const out: string[] = [];
  for (let h = 0; h < 24; h++) {
    out.push(`${pad2(h)}:00`);
    out.push(`${pad2(h)}:30`);
  }
  return out;
})();

/* ========================================================================== */
/*  Seed data                                                                 */
/* ========================================================================== */

const seedEvents: CalendarEvent[] = [
  {
    id: "ev-1",
    title: "Call Back Priscilla",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum risus egestas elementum erat elementum a est.",
    startDate: "2020-09-01",
    endDate: "2020-09-01",
    startTime: "00:30",
    endTime: "01:30",
    allDay: false,
    repeat: false,
    calendarId: "important",
  },
  {
    id: "ev-2",
    title: "Meeting with Judith",
    description: "Quarterly sync with Judith to review open items and next steps.",
    startDate: "2020-09-09",
    endDate: "2020-09-09",
    startTime: "10:00",
    endTime: "11:30",
    allDay: false,
    repeat: false,
    calendarId: "work",
  },
  {
    id: "ev-3",
    title: "New Event",
    description: "Follow-up meeting placeholder.",
    startDate: "2020-09-09",
    endDate: "2020-09-09",
    startTime: "10:00",
    endTime: "11:30",
    allDay: false,
    repeat: false,
    calendarId: "work",
  },
  {
    id: "ev-4",
    title: 'Project "Rocket"',
    description: "Cross-team kickoff and planning window for Project Rocket.",
    startDate: "2020-09-14",
    endDate: "2020-09-16",
    startTime: "10:00",
    endTime: "18:00",
    allDay: false,
    repeat: false,
    calendarId: "reminder",
  },
  ...Array.from({ length: 5 }).map((_, i) => ({
    id: `ev-extra-${i}`,
    title: `New Event`,
    description: "Additional event on this day.",
    startDate: "2020-09-16",
    endDate: "2020-09-16",
    startTime: "10:00",
    endTime: "11:00",
    allDay: false,
    repeat: false,
    calendarId: (["important", "work", "personal"] as CalendarKey[])[i % 3],
  })),
  {
    id: "ev-5",
    title: "Presentation",
    description: "Present Q3 roadmap to stakeholders.",
    startDate: "2020-09-23",
    endDate: "2020-09-23",
    startTime: "10:00",
    endTime: "11:30",
    allDay: false,
    repeat: false,
    calendarId: "personal",
  },
  {
    id: "ev-6",
    title: "Presentation",
    description: "Dry run of the roadmap presentation.",
    startDate: "2020-09-23",
    endDate: "2020-09-23",
    startTime: "13:00",
    endTime: "14:00",
    allDay: false,
    repeat: false,
    calendarId: "personal",
  },
  {
    id: "ev-7",
    title: "Presentation",
    description: "Present Q3 roadmap, second session.",
    startDate: "2020-09-25",
    endDate: "2020-09-25",
    startTime: "10:00",
    endTime: "11:00",
    allDay: false,
    repeat: false,
    calendarId: "personal",
  },
];

const emptyDraft = (dateKey: string): EventDraft => ({
  title: "",
  description: "",
  startDate: dateKey,
  startTime: "00:00",
  endDate: dateKey,
  endTime: "00:00",
  allDay: true,
  repeat: false,
  calendarId: "important",
});

/* ========================================================================== */
/*  Small floating pickers                                                    */
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

const TimePickerPopover: React.FC<{
  value: string;
  onChange: (v: string) => void;
  onClose: () => void;
}> = ({ value, onChange, onClose }) => {
  const ref = useOutsideClose(onClose);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const idx = TIME_OPTIONS.indexOf(value);
    if (idx >= 0 && listRef.current) {
      const child = listRef.current.children[idx] as HTMLElement | undefined;
      child?.scrollIntoView({ block: "center" });
    }
  }, [value]);

  return (
    <div
      ref={ref}
      className="absolute left-0 top-full z-30 mt-1.5 w-32 rounded-xl border border-gray-100 bg-white p-1 shadow-xl"
    >
      <div ref={listRef} className="max-h-56 overflow-y-auto">
        {TIME_OPTIONS.map((t) => {
          const active = t === value;
          return (
            <button
              key={t}
              type="button"
              onClick={() => {
                onChange(t);
                onClose();
              }}
              className={`flex w-full items-center justify-between rounded-lg px-3 py-1.5 text-left text-xs ${
                active ? "text-emerald-600 font-semibold" : "text-gray-600 hover:bg-gray-50"
              }`}
            >
              {t}
              {active && <Check className="h-3 w-3" />}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const DatePickerPopover: React.FC<{
  value: string;
  onChange: (v: string) => void;
  onClose: () => void;
}> = ({ value, onChange, onClose }) => {
  const ref = useOutsideClose(onClose);
  const selectedDate = fromKey(value);
  const [viewDate, setViewDate] = useState(new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1));
  const matrix = useMemo(() => getMonthMatrix(viewDate.getFullYear(), viewDate.getMonth()), [viewDate]);

  return (
    <div
      ref={ref}
      className="absolute left-0 top-full z-30 mt-1.5 w-72 rounded-xl border border-gray-100 bg-white p-4 shadow-xl"
    >
      <div className="mb-3 flex items-center justify-between">
        <button
          type="button"
          onClick={() => setViewDate((d) => addMonths(d, -1))}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-sm font-semibold text-gray-800">
          {MONTH_NAMES[viewDate.getMonth()]} <span className="font-normal text-gray-400">{viewDate.getFullYear()}</span>
        </span>
        <button
          type="button"
          onClick={() => setViewDate((d) => addMonths(d, 1))}
          className="rounded-full p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-y-1 text-center">
        {WEEKDAYS_MINI.map((d) => (
          <span key={d} className="text-[10px] font-medium text-gray-300">
            {d}
          </span>
        ))}
        {matrix.flat().map((d, i) => {
          const inMonth = d.getMonth() === viewDate.getMonth();
          const selected = isSameDate(d, selectedDate);
          return (
            <button
              key={i}
              type="button"
              onClick={() => {
                onChange(toKey(d));
                onClose();
              }}
              className={`mx-auto flex h-7 w-7 items-center justify-center rounded-full text-[11px] transition-colors ${
                selected
                  ? "bg-emerald-500 font-semibold text-white"
                  : inMonth
                  ? "text-gray-600 hover:bg-gray-100"
                  : "text-gray-300 hover:bg-gray-50"
              }`}
            >
              {d.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const CalendarSelectPopover: React.FC<{
  value: CalendarKey;
  onChange: (v: CalendarKey) => void;
  onClose: () => void;
}> = ({ value, onChange, onClose }) => {
  const ref = useOutsideClose(onClose);
  return (
    <div ref={ref} className="absolute left-0 top-full z-30 mt-1.5 w-full rounded-xl border border-gray-100 bg-white p-1 shadow-xl">
      {CALENDARS.map((c) => (
        <button
          key={c.id}
          type="button"
          onClick={() => {
            onChange(c.id);
            onClose();
          }}
          className="flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-xs text-gray-600 hover:bg-gray-50"
        >
          <span className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: c.dot }} />
            {c.label}
          </span>
          {value === c.id && <Check className="h-3.5 w-3.5 text-emerald-500" />}
        </button>
      ))}
    </div>
  );
};

/* ========================================================================== */
/*  New / Edit Event modal                                                    */
/* ========================================================================== */

const NewEventModal: React.FC<{
  draft: EventDraft;
  isEdit: boolean;
  onClose: () => void;
  onSubmit: (draft: EventDraft) => void;
}> = ({ draft, isEdit, onClose, onSubmit }) => {
  const [form, setForm] = useState<EventDraft>(draft);
  const [errors, setErrors] = useState<{ title?: string; range?: string }>({});
  const [openField, setOpenField] = useState<null | "startTime" | "startDate" | "endTime" | "endDate" | "calendar">(null);

  const change = <K extends keyof EventDraft>(key: K, value: EventDraft[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const validate = () => {
    const next: { title?: string; range?: string } = {};
    if (!form.title.trim()) next.title = "Title is required";

    const startKey = `${form.startDate}T${form.allDay ? "00:00" : form.startTime}`;
    const endKey = `${form.endDate}T${form.allDay ? "23:59" : form.endTime}`;
    if (new Date(endKey) < new Date(startKey)) {
      next.range = "End date/time must be after the start.";
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;
    onSubmit(form);
  };

  const cal = getCalendar(form.calendarId);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div onClick={onClose} className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
      <div className="relative flex max-h-[90vh] w-full max-w-[440px] flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <h2 className="text-xl font-semibold text-gray-800">{isEdit ? "Edit Event" : "New Event"}</h2>
          <button onClick={onClose} className="rounded-full bg-gray-50 p-1.5 text-gray-500 hover:bg-gray-100">
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-5">
          <div className="mb-4">
            <label className="mb-1.5 block text-[11px] font-medium text-gray-400">Title</label>
            <input
              value={form.title}
              onChange={(e) => change("title", e.target.value)}
              placeholder="Event title"
              className={`w-full rounded-lg border px-3 py-2.5 text-xs text-gray-700 outline-none focus:ring-2 ${
                errors.title ? "border-red-300 focus:ring-red-200" : "border-gray-200 focus:ring-emerald-300"
              }`}
            />
            {errors.title && <p className="mt-1 text-[11px] text-red-500">{errors.title}</p>}
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[11px] font-medium text-gray-400">Description</label>
            <textarea
              value={form.description}
              onChange={(e) => change("description", e.target.value)}
              rows={3}
              placeholder="Add a description"
              className="w-full resize-none rounded-lg border border-gray-200 px-3 py-2.5 text-xs text-gray-700 outline-none focus:ring-2 focus:ring-emerald-300"
            />
          </div>

          <div className="mb-4">
            <label className="mb-1.5 block text-[11px] font-medium text-gray-400">Time and Date</label>
            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <button
                  type="button"
                  disabled={form.allDay}
                  onClick={() => setOpenField((f) => (f === "startTime" ? null : "startTime"))}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-left text-xs text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
                >
                  {form.startTime}
                </button>
                {openField === "startTime" && (
                  <TimePickerPopover
                    value={form.startTime}
                    onChange={(v) => change("startTime", v)}
                    onClose={() => setOpenField(null)}
                  />
                )}
              </div>
              <div className="relative flex-[1.4]">
                <button
                  type="button"
                  onClick={() => setOpenField((f) => (f === "startDate" ? null : "startDate"))}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-left text-xs text-gray-700"
                >
                  {formatDot(form.startDate)}
                  <ChevronRight className="h-3 w-3 rotate-90 text-gray-400" />
                </button>
                {openField === "startDate" && (
                  <DatePickerPopover
                    value={form.startDate}
                    onChange={(v) => change("startDate", v)}
                    onClose={() => setOpenField(null)}
                  />
                )}
              </div>
            </div>

            <div className="my-2 flex justify-center">
              <span className="text-xs text-gray-300">—</span>
            </div>

            <div className="flex items-center gap-2">
              <div className="relative flex-1">
                <button
                  type="button"
                  disabled={form.allDay}
                  onClick={() => setOpenField((f) => (f === "endTime" ? null : "endTime"))}
                  className="w-full rounded-lg border border-gray-200 px-3 py-2 text-left text-xs text-gray-700 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-300"
                >
                  {form.endTime}
                </button>
                {openField === "endTime" && (
                  <TimePickerPopover
                    value={form.endTime}
                    onChange={(v) => change("endTime", v)}
                    onClose={() => setOpenField(null)}
                  />
                )}
              </div>
              <div className="relative flex-[1.4]">
                <button
                  type="button"
                  onClick={() => setOpenField((f) => (f === "endDate" ? null : "endDate"))}
                  className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2 text-left text-xs text-gray-700"
                >
                  {formatDot(form.endDate)}
                  <ChevronRight className="h-3 w-3 rotate-90 text-gray-400" />
                </button>
                {openField === "endDate" && (
                  <DatePickerPopover
                    value={form.endDate}
                    onChange={(v) => change("endDate", v)}
                    onClose={() => setOpenField(null)}
                  />
                )}
              </div>
            </div>
            {errors.range && <p className="mt-1.5 text-[11px] text-red-500">{errors.range}</p>}
          </div>

          <div className="mb-4 flex items-center gap-6">
            <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
              <button
                type="button"
                onClick={() => change("allDay", !form.allDay)}
                className={`flex h-4 w-4 items-center justify-center rounded-[5px] border transition-colors ${
                  form.allDay ? "border-emerald-500 bg-emerald-500" : "border-gray-300 bg-white"
                }`}
              >
                {form.allDay && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
              </button>
              All Day
            </label>
            <label className="flex cursor-pointer items-center gap-2 text-xs text-gray-600">
              <button
                type="button"
                onClick={() => change("repeat", !form.repeat)}
                className={`flex h-4 w-4 items-center justify-center rounded-[5px] border transition-colors ${
                  form.repeat ? "border-emerald-500 bg-emerald-500" : "border-gray-300 bg-white"
                }`}
              >
                {form.repeat && <Check className="h-3 w-3 text-white" strokeWidth={3} />}
              </button>
              Repeat
            </label>
          </div>

          <div className="mb-2">
            <label className="mb-1.5 block text-[11px] font-medium text-gray-400">Calendar</label>
            <div className="relative">
              <button
                type="button"
                onClick={() => setOpenField((f) => (f === "calendar" ? null : "calendar"))}
                className="flex w-full items-center justify-between rounded-lg border border-gray-200 px-3 py-2.5 text-left text-xs text-gray-700"
              >
                <span className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: cal.dot }} />
                  {cal.label}
                </span>
                <ChevronRight className="h-3 w-3 rotate-90 text-gray-400" />
              </button>
              {openField === "calendar" && (
                <CalendarSelectPopover
                  value={form.calendarId}
                  onChange={(v) => change("calendarId", v)}
                  onClose={() => setOpenField(null)}
                />
              )}
            </div>
          </div>
        </div>

        <div className="flex justify-end border-t border-gray-100 px-6 py-4">
          <button
            onClick={handleSubmit}
            className="rounded-lg bg-emerald-500 px-8 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            {isEdit ? "Save" : "Create"}
          </button>
        </div>
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Delete confirmation                                                       */
/* ========================================================================== */

const DeleteConfirmModal: React.FC<{ onCancel: () => void; onConfirm: () => void }> = ({ onCancel, onConfirm }) => (
  <div className="fixed inset-0 z-[60] flex items-center justify-center p-4">
    <div onClick={onCancel} className="fixed inset-0 bg-black/30 backdrop-blur-[2px]" />
    <div className="relative w-full max-w-[360px] rounded-2xl bg-white p-6 shadow-2xl">
      <h3 className="mb-2 text-lg font-semibold text-gray-800">Deleting Event</h3>
      <p className="mb-6 text-xs text-gray-500">Are you sure you want to delete this event?</p>
      <div className="flex items-center gap-3">
        <button
          onClick={onCancel}
          className="flex-1 rounded-xl border border-gray-200 py-2.5 text-xs font-semibold text-gray-600 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          className="flex-1 rounded-xl bg-red-400 py-2.5 text-xs font-semibold text-white hover:bg-red-500"
        >
          Yes
        </button>
      </div>
    </div>
  </div>
);

/* ========================================================================== */
/*  Event detail popover                                                      */
/* ========================================================================== */

const EventDetailPopover: React.FC<{
  event: CalendarEvent;
  onClose: () => void;
  onEdit: () => void;
  onDelete: () => void;
}> = ({ event, onClose, onEdit, onDelete }) => {
  const ref = useOutsideClose(onClose);
  const [moreOpen, setMoreOpen] = useState(false);
  const cal = getCalendar(event.calendarId);
  const d = fromKey(event.startDate);
  const weekdayLong = d.toLocaleDateString("en-US", { weekday: "long" });

  return (
    <div ref={ref} className="absolute z-40 w-[300px] rounded-2xl border border-gray-100 bg-white p-5 shadow-2xl">
      <div className="mb-3 flex items-start justify-between">
        <div className="flex items-start gap-2.5">
          <span className="mt-1 h-2.5 w-2.5 shrink-0 rounded-full" style={{ backgroundColor: cal.dot }} />
          <h3 className="text-[15px] font-semibold leading-snug text-gray-800">{event.title}</h3>
        </div>
        <div className="flex items-center gap-1 text-gray-400">
          <button onClick={onEdit} className="rounded-md p-1 hover:bg-gray-50 hover:text-gray-600" aria-label="Edit">
            <Pencil className="h-3.5 w-3.5" />
          </button>
          <button onClick={onDelete} className="rounded-md p-1 hover:bg-gray-50 hover:text-gray-600" aria-label="Delete">
            <Trash2 className="h-3.5 w-3.5" />
          </button>
          <div className="relative">
            <button
              onClick={() => setMoreOpen((s) => !s)}
              className="rounded-md p-1 hover:bg-gray-50 hover:text-gray-600"
              aria-label="More"
            >
              <MoreHorizontal className="h-3.5 w-3.5" />
            </button>
            {moreOpen && (
              <div className="absolute right-0 z-10 mt-1 w-32 rounded-lg border border-gray-100 bg-white py-1 text-[11px] shadow-xl">
                <button
                  onClick={() => {
                    navigator.clipboard?.writeText(event.title).catch(() => {});
                    setMoreOpen(false);
                  }}
                  className="block w-full px-3 py-1.5 text-left text-gray-600 hover:bg-gray-50"
                >
                  Duplicate
                </button>
              </div>
            )}
          </div>
          <button onClick={onClose} className="rounded-md p-1 hover:bg-gray-50 hover:text-gray-600" aria-label="Close">
            <X className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="mb-2.5 flex items-start gap-2.5 text-[11px] text-gray-500">
        <Clock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
        <span>
          {weekdayLong}, {MONTH_NAMES[d.getMonth()]} {d.getDate()}
          {!event.allDay && (
            <>
              {" "}
              • {event.startTime} - {event.endTime}
            </>
          )}
        </span>
      </div>

      {event.description && (
        <div className="mb-2.5 flex items-start gap-2.5 text-[11px] text-gray-500">
          <AlignLeft className="mt-0.5 h-3.5 w-3.5 shrink-0 text-gray-400" />
          <p className="leading-relaxed">{event.description}</p>
        </div>
      )}

      <div className="flex items-center gap-2.5 text-[11px] text-gray-500">
        <CalendarIcon className="h-3.5 w-3.5 shrink-0 text-gray-400" />
        <span>{cal.label}</span>
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Day events ("+N") popover                                                 */
/* ========================================================================== */

const DayEventsPopover: React.FC<{
  date: Date;
  events: CalendarEvent[];
  onClose: () => void;
  onSelectEvent: (id: string) => void;
}> = ({ date, events, onClose, onSelectEvent }) => {
  const ref = useOutsideClose(onClose);
  return (
    <div ref={ref} className="absolute z-40 w-64 rounded-2xl border border-gray-100 bg-white p-4 shadow-2xl">
      <div className="mb-3 flex items-center justify-between">
        <h4 className="text-sm font-semibold text-gray-800">
          {date.toLocaleDateString("en-US", { weekday: "long" })} {date.getDate()}
        </h4>
        <button onClick={onClose} className="rounded-md p-1 text-gray-400 hover:bg-gray-50 hover:text-gray-600">
          <X className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="max-h-64 space-y-1.5 overflow-y-auto">
        {events.map((ev) => {
          const cal = getCalendar(ev.calendarId);
          return (
            <button
              key={ev.id}
              onClick={() => onSelectEvent(ev.id)}
              className="flex w-full items-center justify-between rounded-lg border-l-[3px] px-2.5 py-2 text-left text-[11px] hover:brightness-95"
              style={{ backgroundColor: cal.bg, borderLeftColor: cal.border }}
            >
              <span className="truncate font-medium text-gray-700">{ev.title}</span>
              {!ev.allDay && <span className="ml-2 shrink-0 text-gray-400">{ev.startTime}</span>}
            </button>
          );
        })}
      </div>
    </div>
  );
};

/* ========================================================================== */
/*  Main Calendar screen                                                      */
/* ========================================================================== */

const CalendarScreen: React.FC = () => {
  const [events, setEvents] = useState<CalendarEvent[]>(seedEvents);
  const [view, setView] = useState<View>("Month");
  const [currentDate, setCurrentDate] = useState(new Date(2020, 8, 1));

  const [selectedEventId, setSelectedEventId] = useState<string | null>(null);
  const [dayPopoverKey, setDayPopoverKey] = useState<string | null>(null);

  const [showEventModal, setShowEventModal] = useState(false);
  const [modalDraft, setModalDraft] = useState<EventDraft | null>(null);
  const [editingId, setEditingId] = useState<string | null>(null);

  const [pendingDeleteId, setPendingDeleteId] = useState<string | null>(null);

  const weekGridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if ((view === "Week" || view === "Day") && weekGridRef.current) {
      weekGridRef.current.scrollTop = Math.max(0, ROW_HEIGHT * 4.5);
    }
  }, [view, currentDate]);

  /* ------------------------------ navigation ------------------------------ */
  const goToday = () => setCurrentDate(new Date(TODAY_REF.getFullYear(), TODAY_REF.getMonth(), TODAY_REF.getDate()));
  const goPrev = () => {
    if (view === "Month") setCurrentDate((d) => addMonths(d, -1));
    else if (view === "Week") setCurrentDate((d) => addDays(d, -7));
    else setCurrentDate((d) => addDays(d, -1));
  };
  const goNext = () => {
    if (view === "Month") setCurrentDate((d) => addMonths(d, 1));
    else if (view === "Week") setCurrentDate((d) => addDays(d, 7));
    else setCurrentDate((d) => addDays(d, 1));
  };

  const headerLabel = useMemo(() => {
    if (view === "Day") {
      return `${MONTH_NAMES[currentDate.getMonth()]} ${currentDate.getDate()}`;
    }
    return MONTH_NAMES[currentDate.getMonth()];
  }, [view, currentDate]);
  const headerYear = currentDate.getFullYear();

  /* ------------------------------ event helpers ---------------------------- */
  const eventsForDate = (d: Date) => {
    const key = toKey(d);
    return events
      .filter((e) => e.startDate <= key && key <= e.endDate)
      .sort((a, b) => a.startTime.localeCompare(b.startTime));
  };

  const openNewEvent = (date?: Date) => {
    const key = toKey(date ?? currentDate);
    setModalDraft(emptyDraft(key));
    setEditingId(null);
    setShowEventModal(true);
    setSelectedEventId(null);
    setDayPopoverKey(null);
  };

  const openEditEvent = (ev: CalendarEvent) => {
    setModalDraft({
      title: ev.title,
      description: ev.description,
      startDate: ev.startDate,
      startTime: ev.startTime,
      endDate: ev.endDate,
      endTime: ev.endTime,
      allDay: ev.allDay,
      repeat: ev.repeat,
      calendarId: ev.calendarId,
    });
    setEditingId(ev.id);
    setShowEventModal(true);
    setSelectedEventId(null);
  };

  const submitEvent = (draft: EventDraft) => {
    if (editingId) {
      setEvents((prev) => prev.map((e) => (e.id === editingId ? { ...e, ...draft } : e)));
    } else {
      setEvents((prev) => [...prev, { id: `ev-${Date.now()}`, ...draft }]);
    }
    setShowEventModal(false);
    setModalDraft(null);
    setEditingId(null);
  };

  const requestDelete = (id: string) => setPendingDeleteId(id);
  const confirmDelete = () => {
    if (pendingDeleteId) {
      setEvents((prev) => prev.filter((e) => e.id !== pendingDeleteId));
      setSelectedEventId(null);
    }
    setPendingDeleteId(null);
  };

  const selectedEvent = events.find((e) => e.id === selectedEventId) ?? null;

  /* ================================ MONTH VIEW ============================= */
  const monthMatrix = useMemo(
    () => getMonthMatrix(currentDate.getFullYear(), currentDate.getMonth()),
    [currentDate]
  );

  const renderMonth = () => (
    <div className="overflow-hidden rounded-b-2xl">
      <div className="grid grid-cols-7 border-b border-gray-100 bg-white">
        {WEEKDAYS_FULL.map((d) => (
          <div key={d} className="px-3 py-3 text-center text-[10px] font-medium tracking-wide text-gray-400">
            {d}
          </div>
        ))}
      </div>
      <div>
        {monthMatrix.map((week, wi) => (
          <div key={wi} className="grid grid-cols-7 border-b border-gray-100 last:border-b-0">
            {week.map((day, di) => {
              const inMonth = day.getMonth() === currentDate.getMonth();
              const isToday = isSameDate(day, TODAY_REF);
              const key = toKey(day);
              const dayEvents = eventsForDate(day);
              const visible = dayEvents.slice(0, 3);
              const overflow = dayEvents.length - visible.length;

              return (
                <div
                  key={di}
                  className={`relative min-h-[104px] border-r border-gray-100 p-2 last:border-r-0 ${
                    !inMonth ? "bg-[repeating-linear-gradient(135deg,#fafafa,#fafafa_6px,#f2f2f2_6px,#f2f2f2_7px)]" : ""
                  }`}
                >
                  <div className="mb-1.5 flex justify-start">
                    {isToday ? (
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-500 text-[11px] font-semibold text-white">
                        {day.getDate()}
                      </span>
                    ) : (
                      <span className={`text-[12px] ${inMonth ? "text-gray-700" : "text-gray-300"}`}>{day.getDate()}</span>
                    )}
                  </div>

                  <div className="space-y-1">
                    {visible.map((ev) => {
                      const cal = getCalendar(ev.calendarId);
                      const isSelected = selectedEventId === ev.id;
                      const isStart = ev.startDate === key;
                      const isEnd = ev.endDate === key;
                      return (
                        <button
                          key={ev.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            setSelectedEventId(ev.id);
                            setDayPopoverKey(null);
                          }}
                          className={`flex w-full items-center justify-between border-l-[3px] px-1.5 py-1 text-left text-[10px] leading-tight text-gray-700 ${
                            isStart ? "rounded-l-md" : "-ml-2 border-l-0 pl-3.5"
                          } ${isEnd ? "rounded-r-md" : "-mr-2"}`}
                          style={{
                            backgroundColor: isSelected ? "#FDE8E8" : cal.bg,
                            borderLeftColor: isSelected ? "#F87171" : cal.border,
                          }}
                        >
                          <span className="truncate font-medium">{isStart ? ev.title : "\u00A0"}</span>
                          {!ev.allDay && isStart && <span className="ml-1 shrink-0 text-gray-400">{ev.startTime}</span>}
                        </button>
                      );
                    })}
                    {overflow > 0 && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          setDayPopoverKey(key);
                          setSelectedEventId(null);
                        }}
                        className="rounded-md bg-gray-50 px-1.5 py-0.5 text-[10px] font-medium text-gray-400 hover:bg-gray-100"
                      >
                        +{overflow}
                      </button>
                    )}
                  </div>

                  {selectedEvent && selectedEvent.startDate === key && selectedEventId && dayEvents.some(d2 => d2.id === selectedEventId) && (
                    <EventDetailPopover
                      event={selectedEvent}
                      onClose={() => setSelectedEventId(null)}
                      onEdit={() => openEditEvent(selectedEvent)}
                      onDelete={() => requestDelete(selectedEvent.id)}
                    />
                  )}

                  {dayPopoverKey === key && (
                    <DayEventsPopover
                      date={day}
                      events={dayEvents}
                      onClose={() => setDayPopoverKey(null)}
                      onSelectEvent={(id) => {
                        setSelectedEventId(id);
                        setDayPopoverKey(null);
                      }}
                    />
                  )}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );

  /* ============================== WEEK / DAY VIEW =========================== */
  const weekDates = useMemo(() => {
    const start = startOfWeek(currentDate);
    return Array.from({ length: 7 }, (_, i) => addDays(start, i));
  }, [currentDate]);

  const columnDates = view === "Day" ? [currentDate] : weekDates;
  const showNowLine = columnDates.some((d) => isSameDate(d, TODAY_REF));
  const nowMinutes = TODAY_REF.getHours() * 60 + TODAY_REF.getMinutes();

  const renderTimeGrid = () => (
    <div className="flex overflow-hidden rounded-b-2xl">
      {/* gutter */}
      <div className="w-14 shrink-0 border-r border-gray-100 bg-white">
        <div className="h-11 border-b border-gray-100" />
        <div ref={undefined} style={{ height: ROW_HEIGHT * 24 }} className="relative">
          {HOURS.map((h) => (
            <div key={h} style={{ top: h * ROW_HEIGHT }} className="absolute -translate-y-1/2 pr-2 text-right text-[10px] text-gray-300 w-full">
              {pad2(h)}:00
            </div>
          ))}
          {showNowLine && (
            <div
              style={{ top: (nowMinutes / 60) * ROW_HEIGHT }}
              className="absolute -translate-y-1/2 pr-1.5 text-right text-[10px] font-semibold text-red-400 w-full"
            >
              {pad2(TODAY_REF.getHours())}:{pad2(TODAY_REF.getMinutes())}
            </div>
          )}
        </div>
      </div>

      {/* scrollable columns */}
      <div ref={weekGridRef} className="max-h-[560px] flex-1 overflow-y-auto">
        <div className="grid" style={{ gridTemplateColumns: `repeat(${columnDates.length}, minmax(0,1fr))` }}>
          {columnDates.map((day, ci) => {
            const isToday = isSameDate(day, TODAY_REF);
            return (
              <div key={ci} className="sticky top-0 z-10 flex h-11 flex-col items-center justify-center border-b border-l border-gray-100 bg-white first:border-l-0">
                <span className="text-[10px] font-medium text-gray-300">{WEEKDAYS_SHORT[(day.getDay() + 6) % 7]}</span>
                {isToday ? (
                  <span className="mt-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-[10px] font-semibold text-white">
                    {day.getDate()}
                  </span>
                ) : (
                  <span className="mt-0.5 text-[11px] text-gray-600">{day.getDate()}</span>
                )}
              </div>
            );
          })}
        </div>

        <div className="relative grid" style={{ gridTemplateColumns: `repeat(${columnDates.length}, minmax(0,1fr))`, height: ROW_HEIGHT * 24 }}>
          {columnDates.map((day, ci) => {
            const dayEvents = eventsForDate(day).filter((e) => !e.allDay);
            return (
              <div key={ci} className="relative border-l border-gray-100 first:border-l-0">
                {HOURS.map((h) => (
                  <div key={h} style={{ top: h * ROW_HEIGHT }} className="absolute w-full border-t border-gray-50" />
                ))}
                {dayEvents.map((ev) => {
                  const cal = getCalendar(ev.calendarId);
                  const top = (timeToMinutes(ev.startTime) / 60) * ROW_HEIGHT;
                  const height = Math.max(20, (minutesBetween(ev.startTime, ev.endTime) / 60) * ROW_HEIGHT);
                  const isSelected = selectedEventId === ev.id;
                  return (
                    <button
                      key={ev.id}
                      onClick={() => setSelectedEventId(ev.id)}
                      style={{
                        top,
                        height,
                        backgroundColor: isSelected ? "#FDE8E8" : cal.bg,
                        borderLeftColor: isSelected ? "#F87171" : cal.border,
                      }}
                      className="absolute left-1 right-1 overflow-hidden rounded-md border-l-[3px] p-1.5 text-left shadow-sm"
                    >
                      <p className="truncate text-[10px] text-gray-500">
                        {ev.startTime} - {ev.endTime}
                      </p>
                      <p className="truncate text-[11px] font-medium text-gray-700">{ev.title}</p>
                      {selectedEvent && selectedEvent.id === ev.id && (
                        <div className="absolute left-0 top-full z-40 mt-1">
                          <EventDetailPopover
                            event={selectedEvent}
                            onClose={() => setSelectedEventId(null)}
                            onEdit={() => openEditEvent(selectedEvent)}
                            onDelete={() => requestDelete(selectedEvent.id)}
                          />
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            );
          })}
          {showNowLine && (
            <div
              style={{ top: (nowMinutes / 60) * ROW_HEIGHT, gridColumn: `1 / -1` }}
              className="pointer-events-none absolute h-px w-full bg-red-300"
            >
              <span className="absolute -left-1 -top-1 h-2 w-2 rounded-full bg-red-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );

  /* ==================================== RENDER =============================== */

  return (
    <div className="min-h-screen w-full bg-gray-50 px-4 py-6 sm:px-6 lg:px-8 font-sans text-gray-800">
      <div className="mx-auto">
        {/* Page header */}
        <div className="mb-5 flex items-center justify-between">
          <h1 className="text-2xl font-semibold text-gray-900">Calendar</h1>
          <button
            onClick={() => openNewEvent(currentDate)}
            className="flex items-center gap-1.5 rounded-xl bg-emerald-500 px-4 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-emerald-600"
          >
            <Plus className="h-3.5 w-3.5" /> Add Event
          </button>
        </div>

        {/* Card */}
        <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
          {/* Toolbar */}
          <div className="flex flex-wrap items-center justify-between gap-3 px-5 py-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1 rounded-lg border border-gray-200 p-0.5">
                <button onClick={goPrev} className="rounded-md p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-600" aria-label="Previous">
                  <ChevronLeft className="h-4 w-4" />
                </button>
                <button onClick={goNext} className="rounded-md p-1.5 text-gray-400 hover:bg-gray-50 hover:text-gray-600" aria-label="Next">
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
              <button
                onClick={goToday}
                className="rounded-lg bg-gray-50 px-3.5 py-2 text-xs font-medium text-gray-500 hover:bg-gray-100"
              >
                Today
              </button>
            </div>

            <div className="text-base font-semibold text-gray-800">
              {headerLabel} <span className="font-normal text-gray-300">{headerYear}</span>
            </div>

            <div className="flex items-center rounded-lg border border-gray-200 p-0.5">
              {(["Month", "Week", "Day"] as View[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setView(v)}
                  className={`rounded-md px-3.5 py-1.5 text-xs font-medium transition-colors ${
                    view === v ? "bg-emerald-500 text-white shadow-sm" : "text-gray-500 hover:bg-gray-50"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>

          {view === "Month" ? renderMonth() : renderTimeGrid()}
        </div>
      </div>

      {showEventModal && modalDraft && (
        <NewEventModal
          draft={modalDraft}
          isEdit={!!editingId}
          onClose={() => {
            setShowEventModal(false);
            setModalDraft(null);
            setEditingId(null);
          }}
          onSubmit={submitEvent}
        />
      )}

      {pendingDeleteId && (
        <DeleteConfirmModal onCancel={() => setPendingDeleteId(null)} onConfirm={confirmDelete} />
      )}
    </div>
  );
};

export default CalendarScreen;

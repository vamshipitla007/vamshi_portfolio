import { Search, MapPin, Home, Sparkles } from 'lucide-react';

interface SearchBarProps {
  filters: {
    search: string;
    location: string;
    type: string;
  };
  onChange: (field: string, value: string) => void;
}

const propertyTypes = ['All types', 'Villa', 'Apartment', 'Commercial', 'Farm House', 'Luxury Homes'];
const locations = ['All locations', 'San Francisco', 'Los Angeles', 'New York', 'Miami', 'Chicago', 'Napa Valley'];

export function SearchBar({ filters, onChange }: SearchBarProps) {
  return (
    <div className="grid gap-4 rounded-[32px] border border-white/10 bg-white/80 p-5 shadow-[0_32px_80px_-50px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80 lg:grid-cols-[2fr_1fr_1fr_1fr]">
      <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 p-4 text-slate-900 dark:border-slate-700 dark:bg-slate-950 dark:text-white">
        <Search className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <input
          value={filters.search}
          onChange={(e) => onChange('search', e.target.value)}
          placeholder="Search by neighborhood, address or property"
          className="w-full bg-transparent pl-12 text-sm outline-none"
        />
      </label>

      <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
        <MapPin className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <select
          value={filters.location}
          onChange={(e) => onChange('location', e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        >
          {locations.map((location) => (
            <option key={location} value={location}>
              {location}
            </option>
          ))}
        </select>
      </label>

      <label className="relative block rounded-3xl border border-slate-200 bg-slate-50 p-4 dark:border-slate-700 dark:bg-slate-950">
        <Home className="absolute left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        <select
          value={filters.type}
          onChange={(e) => onChange('type', e.target.value)}
          className="w-full bg-transparent text-sm outline-none"
        >
          {propertyTypes.map((type) => (
            <option key={type} value={type}>
              {type}
            </option>
          ))}
        </select>
      </label>

      <button
        type="button"
        className="inline-flex items-center justify-center rounded-3xl bg-slate-950 px-6 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-accent dark:text-slate-950"
      >
        <Sparkles className="mr-2 h-5 w-5" />
        Find Homes
      </button>
    </div>
  );
}

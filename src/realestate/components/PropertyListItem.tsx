import { motion } from 'framer-motion';
import { BedDouble, Ruler } from 'lucide-react';
import type { Property } from '../../types/property';
import { formatCurrency } from '../../utils/format';

interface PropertyListItemProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyListItem({ property, onViewDetails }: PropertyListItemProps) {
  return (
    <motion.article
      whileHover={{ y: -4 }}
      className="flex flex-col overflow-hidden rounded-[32px] border border-white/10 bg-white/80 shadow-[0_30px_90px_-40px_rgba(15,23,42,0.25)] backdrop-blur-2xl transition dark:border-white/5 dark:bg-slate-900/80 lg:flex-row"
    >
      <div className="relative h-80 w-full overflow-hidden lg:h-auto lg:w-[380px]">
        <img src={property.image} alt={property.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
      </div>
      <div className="flex flex-1 flex-col gap-6 p-6 sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent">{property.category}</p>
            <h3 className="mt-3 text-2xl font-semibold text-slate-950 dark:text-white">{property.title}</h3>
            <p className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-300">{property.address}</p>
          </div>
          <div className="text-right">
            <p className="text-xl font-semibold text-slate-950 dark:text-white">{formatCurrency(property.price)}</p>
            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">{property.status}</p>
          </div>
        </div>

        <p className="text-sm leading-7 text-slate-600 dark:text-slate-300">{property.description}</p>

        <div className="grid grid-cols-3 gap-3 text-sm text-slate-600 dark:text-slate-300">
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <BedDouble className="h-4 w-4" /> {property.bedrooms} Beds
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <span className="inline-flex h-4 w-4 items-center justify-center text-slate-500 dark:text-slate-300">🛁</span> {property.bathrooms} Baths
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <Ruler className="h-4 w-4" /> {property.area} sqft
          </div>
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(property.id)}
          className="mt-auto inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-4 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-accent dark:text-slate-950"
        >
          View full details
        </button>
      </div>
    </motion.article>
  );
}

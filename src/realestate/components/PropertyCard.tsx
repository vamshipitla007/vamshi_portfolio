import { motion } from 'framer-motion';
import { Heart, BedDouble, Ruler } from 'lucide-react';
import type { Property } from '../../types/property';
import { formatCurrency } from '../../utils/format';

interface PropertyCardProps {
  property: Property;
  onViewDetails: (id: string) => void;
}

export function PropertyCard({ property, onViewDetails }: PropertyCardProps) {
  return (
    <motion.article
      layout
      whileHover={{ y: -8 }}
      className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/70 shadow-[0_35px_120px_-60px_rgba(15,23,42,0.6)] backdrop-blur-2xl transition duration-300 dark:border-white/5 dark:bg-slate-900/80"
    >
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-slate-950/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-white backdrop-blur-sm">
          {property.status}
        </span>
        <button
          type="button"
          className="absolute right-4 top-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-white/90 text-slate-900 shadow-lg transition hover:bg-accent hover:text-white dark:bg-slate-900/90 dark:text-white"
        >
          <Heart className="h-5 w-5" />
        </button>
      </div>

      <div className="space-y-5 p-6 lg:p-8">
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-2 text-sm text-slate-500 dark:text-slate-400">
            <span>{property.category}</span>
            <span className="font-semibold text-slate-900 dark:text-white">{formatCurrency(property.price)}</span>
          </div>
          <h3 className="text-2xl font-semibold text-slate-950 dark:text-white">{property.title}</h3>
          <p className="line-clamp-2 text-sm leading-6 text-slate-600 dark:text-slate-300">{property.description}</p>
          <p className="text-sm text-slate-500 dark:text-slate-400">{property.address}</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm text-slate-600 dark:text-slate-300 sm:grid-cols-4">
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <BedDouble className="h-4 w-4" />
            <span>{property.bedrooms} Beds</span>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <span className="inline-flex h-4 w-4 items-center justify-center text-slate-500 dark:text-slate-300">🛁</span>
            <span>{property.bathrooms} Baths</span>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <Ruler className="h-4 w-4" />
            <span>{property.area} sqft</span>
          </div>
          <div className="flex items-center gap-2 rounded-3xl bg-slate-100 px-4 py-3 dark:bg-slate-800">
            <span className="font-semibold text-slate-900 dark:text-white">{property.rating.toFixed(1)}</span>
            <span>Stars</span>
          </div>
        </div>

        <button
          type="button"
          onClick={() => onViewDetails(property.id)}
          className="inline-flex w-full items-center justify-center rounded-3xl bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800 dark:bg-accent dark:text-slate-950"
        >
          View Details
        </button>
      </div>
    </motion.article>
  );
}

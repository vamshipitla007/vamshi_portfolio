import { motion } from 'framer-motion';
import { Grid, List, SlidersHorizontal } from 'lucide-react';
import { useMemo } from 'react';
import { properties } from '../data/properties';
import { useRealEstateFilters } from '../hooks/useRealEstateFilters';
import { PropertyCard } from '../components/PropertyCard';
import { PropertyListItem } from '../components/PropertyListItem';
import { SectionHeading } from '../components/SectionHeading';
import { SearchBar } from '../components/SearchBar';
import { useNavigate } from 'react-router-dom';

const priceRanges = ['Any budget', '$0 - $500,000', '$500,000 - $1,000,000', '$1,000,000 - $2,500,000', '$2,500,000+'];
const bedrooms = ['Any', '1', '2', '3', '4', '5'];
const bathrooms = ['Any', '1', '2', '3', '4', '5'];
const sorts = ['Recommended', 'Price: Low to High', 'Price: High to Low', 'Newest'];

export function ListingPage() {
  const navigate = useNavigate();
  const {
    filters,
    setFilterValue,
    paginated,
    viewMode,
    setViewMode,
    page,
    setPage,
    totalPages,
  } = useRealEstateFilters(properties);

  const resultsLabel = useMemo(() => `${paginated.length} of ${properties.length} properties`, [paginated.length]);

  return (
    <main className="relative overflow-hidden pb-24">
      <section className="bg-slate-950/95 px-4 py-24 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SectionHeading title="Listings" subtitle="Browse premium properties with powerful filters." align="center" />
          <p className="mx-auto mt-6 max-w-2xl text-center text-sm leading-7 text-slate-300">
            Refine your search by location, price, bedrooms, bathrooms, and property type to find your ideal home.
          </p>
        </div>
      </section>

      <section className="-mt-16 px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <SearchBar filters={filters} onChange={(field, value) => setFilterValue(field as any, value)} />
          <div className="mt-6 grid gap-4 rounded-[32px] border border-white/10 bg-white/80 p-5 shadow-[0_24px_80px_-40px_rgba(15,23,42,0.22)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80 lg:grid-cols-4">
            <label className="block text-sm text-slate-600 dark:text-slate-300">
              Price range
              <select
                value={filters.priceRange}
                onChange={(e) => setFilterValue('priceRange', e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {priceRanges.map((budget) => (
                  <option key={budget} value={budget}>
                    {budget}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-600 dark:text-slate-300">
              Bedrooms
              <select
                value={filters.bedrooms}
                onChange={(e) => setFilterValue('bedrooms', e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {bedrooms.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-600 dark:text-slate-300">
              Bathrooms
              <select
                value={filters.bathrooms}
                onChange={(e) => setFilterValue('bathrooms', e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {bathrooms.map((qty) => (
                  <option key={qty} value={qty}>
                    {qty}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm text-slate-600 dark:text-slate-300">
              Sort by
              <select
                value={filters.sortBy}
                onChange={(e) => setFilterValue('sortBy', e.target.value)}
                className="mt-2 w-full rounded-3xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm outline-none transition dark:border-slate-700 dark:bg-slate-800 dark:text-white"
              >
                {sorts.map((sort) => (
                  <option key={sort} value={sort}>
                    {sort}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mt-8 rounded-[32px] border border-white/10 bg-white/80 p-6 shadow-[0_30px_90px_-45px_rgba(15,23,42,0.25)] backdrop-blur-2xl dark:border-white/5 dark:bg-slate-900/80"
          >
            <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-3 text-sm text-slate-500 dark:text-slate-300">
                <span>{resultsLabel}</span>
                <span className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-4 py-2 dark:bg-slate-800">
                  <SlidersHorizontal className="h-4 w-4" /> Filters applied
                </span>
              </div>
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`inline-flex h-12 items-center justify-center rounded-3xl px-4 text-sm font-semibold transition ${
                    viewMode === 'grid' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <Grid className="mr-2 h-4 w-4" /> Grid
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`inline-flex h-12 items-center justify-center rounded-3xl px-4 text-sm font-semibold transition ${
                    viewMode === 'list' ? 'bg-slate-950 text-white' : 'bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300'
                  }`}
                >
                  <List className="mr-2 h-4 w-4" /> List
                </button>
              </div>
            </div>

            <div className="mt-6 grid gap-6">
              {viewMode === 'grid' ? (
                <div className="grid gap-6 lg:grid-cols-2 xl:grid-cols-3">
                    {paginated.map((property) => (
                      <PropertyCard
                        key={property.id}
                        property={property}
                        onViewDetails={() => navigate(`/realestate/properties/${property.id}`)}
                      />
                    ))}
                </div>
              ) : (
                <div className="space-y-6">
                    {paginated.map((property) => (
                      <PropertyListItem
                        key={property.id}
                        property={property}
                        onViewDetails={() => navigate(`/realestate/properties/${property.id}`)}
                      />
                    ))}
                </div>
              )}
            </div>

            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-slate-200/80 pt-6 text-sm text-slate-600 dark:border-slate-700 dark:text-slate-300">
              <p>Page {page} of {totalPages}</p>
              <div className="inline-flex items-center gap-2">
                <button
                  type="button"
                  disabled={page === 1}
                  onClick={() => setPage(page - 1)}
                  className="inline-flex h-12 items-center justify-center rounded-3xl border border-slate-200 px-5 text-sm transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                >
                  Previous
                </button>
                <button
                  type="button"
                  disabled={page === totalPages}
                  onClick={() => setPage(page + 1)}
                  className="inline-flex h-12 items-center justify-center rounded-3xl border border-slate-200 px-5 text-sm transition disabled:cursor-not-allowed disabled:opacity-50 dark:border-slate-700"
                >
                  Next
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}

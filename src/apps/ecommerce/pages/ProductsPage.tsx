import React, { useEffect, useMemo, useState } from 'react';
import { PRODUCTS, CATEGORIES, PRICE_RANGES } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { MainLayout } from '../layouts/MainLayout';
import { Search } from 'lucide-react';
import { motion } from 'framer-motion';
import type { FilterOptions } from '../types';

export const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<FilterOptions>({
    category: undefined,
    priceRange: [0, Infinity],
    searchTerm: '',
    sortBy: 'newest',
  });

  const [showFilters, setShowFilters] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    if (filters.category && filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    if (filters.searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    switch (filters.sortBy) {
      case 'price-low':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-high':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'rating':
        result.sort((a, b) => b.rating - a.rating);
        break;
      case 'newest':
      default:
        break;
    }

    return result;
  }, [filters]);

  useEffect(() => {
    setIsLoading(true);
    const timer = window.setTimeout(() => setIsLoading(false), 450);
    return () => window.clearTimeout(timer);
  }, [filters.category, filters.priceRange[0], filters.priceRange[1], filters.searchTerm, filters.sortBy]);

  return (
    <MainLayout>
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 py-12 text-white">
        <div className="mx-auto max-w-7xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-4 text-4xl font-bold md:text-5xl"
          >
            Our Products
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="text-lg opacity-90"
          >
            Discover our wide range of premium electronics
          </motion.p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 py-12">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className={`${showFilters ? 'block' : 'hidden'} w-full lg:block lg:w-64`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="sticky top-24 rounded-2xl bg-white p-6 shadow-lg dark:bg-gray-800"
            >
              <div className="mb-6 flex items-center justify-between lg:block">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h3>
                <button onClick={() => setShowFilters(false)} className="text-gray-600 lg:hidden">
                  ✕
                </button>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Category</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.value} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.value}
                        onChange={() => setFilters({ ...filters, category: cat.value })}
                        className="h-4 w-4 accent-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="mb-6">
                <h4 className="mb-3 font-semibold text-gray-900 dark:text-white">Price Range</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <label key={idx} className="flex cursor-pointer items-center gap-2">
                      <input
                        type="radio"
                        name="price"
                        checked={filters.priceRange[0] === range.min && filters.priceRange[1] === range.max}
                        onChange={() => setFilters({ ...filters, priceRange: [range.min, range.max] })}
                        className="h-4 w-4 accent-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <button
                onClick={() =>
                  setFilters({
                    category: undefined,
                    priceRange: [0, Infinity],
                    searchTerm: '',
                    sortBy: 'newest',
                  })
                }
                className="w-full rounded-lg bg-gray-200 px-4 py-2 font-medium text-gray-900 transition-colors duration-200 hover:bg-gray-300 dark:bg-gray-700 dark:text-white"
              >
                Reset Filters
              </button>
            </motion.div>
          </div>

          <div className="flex-1">
            <div className="mb-8 flex flex-col gap-4 md:flex-row">
              <div className="relative flex-1">
                <Search className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                  className="w-full rounded-lg border-2 border-gray-300 py-3 pl-12 pr-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <select
                value={filters.sortBy}
                onChange={(e) => setFilters({ ...filters, sortBy: e.target.value as FilterOptions['sortBy'] })}
                className="rounded-lg border-2 border-gray-300 px-4 py-3 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="rounded-lg bg-blue-600 px-4 py-3 font-semibold text-white transition-all duration-200 hover:scale-[1.01] lg:hidden"
              >
                Filters
              </button>
            </div>

            <motion.p
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 text-gray-600 dark:text-gray-400"
            >
              Showing {filteredProducts.length} of {PRODUCTS.length} products
            </motion.p>

            {isLoading ? (
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {Array.from({ length: 6 }).map((_, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-gray-800"
                  >
                    <div className="h-64 animate-pulse bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700" />
                    <div className="space-y-3 p-4">
                      <div className="h-4 w-3/4 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-4 w-1/2 animate-pulse rounded bg-gray-200 dark:bg-gray-700" />
                      <div className="h-10 w-full animate-pulse rounded-lg bg-gray-200 dark:bg-gray-700" />
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="grid grid-cols-1 gap-8 md:grid-cols-2">
                {filteredProducts.map((product, index) => (
                  <ProductCard key={product.id} product={product} index={index} />
                ))}
              </motion.div>
            ) : (
              <div className="py-12 text-center">
                <p className="mb-4 text-2xl font-bold text-gray-900 dark:text-white">No products found</p>
                <p className="mb-6 text-gray-600 dark:text-gray-400">Try adjusting your filters or search term</p>
                <button
                  onClick={() =>
                    setFilters({
                      category: undefined,
                      priceRange: [0, Infinity],
                      searchTerm: '',
                      sortBy: 'newest',
                    })
                  }
                  className="rounded-lg bg-blue-600 px-6 py-3 font-semibold text-white transition-all duration-200 hover:shadow-lg"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

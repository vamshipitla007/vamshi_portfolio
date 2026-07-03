import React, { useState, useMemo } from 'react';
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

  const filteredProducts = useMemo(() => {
    let result = PRODUCTS;

    // Category filter
    if (filters.category && filters.category !== 'all') {
      result = result.filter((p) => p.category === filters.category);
    }

    // Price filter
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
    );

    // Search filter
    if (filters.searchTerm) {
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(filters.searchTerm.toLowerCase())
      );
    }

    // Sorting
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
        // Keep original order
        break;
    }

    return result;
  }, [filters]);

  return (
    <MainLayout>
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-12">
        <div className="max-w-7xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-lg opacity-90">Discover our wide range of premium electronics</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Filters */}
          <div className={`${showFilters ? 'block' : 'hidden'} lg:block w-full lg:w-64`}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-800 rounded-xl p-6 sticky top-24"
            >
              <div className="flex items-center justify-between lg:block mb-6">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Filters</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="lg:hidden text-gray-600"
                >
                  ✕
                </button>
              </div>

              {/* Category Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Category</h4>
                <div className="space-y-2">
                  {CATEGORIES.map((cat) => (
                    <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="category"
                        checked={filters.category === cat.value}
                        onChange={() => setFilters({ ...filters, category: cat.value })}
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{cat.name}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Price Filter */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 dark:text-white mb-3">Price Range</h4>
                <div className="space-y-2">
                  {PRICE_RANGES.map((range, idx) => (
                    <label key={idx} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="price"
                        checked={
                          filters.priceRange[0] === range.min &&
                          filters.priceRange[1] === range.max
                        }
                        onChange={() =>
                          setFilters({ ...filters, priceRange: [range.min, range.max] })
                        }
                        className="w-4 h-4 accent-blue-600"
                      />
                      <span className="text-gray-700 dark:text-gray-300">{range.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Reset Filters */}
              <button
                onClick={() =>
                  setFilters({
                    category: undefined,
                    priceRange: [0, Infinity],
                    searchTerm: '',
                    sortBy: 'newest',
                  })
                }
                className="w-full py-2 px-4 bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg hover:bg-gray-300 transition-colors font-medium"
              >
                Reset Filters
              </button>
            </motion.div>
          </div>

          {/* Products Section */}
          <div className="flex-1">
            {/* Search and Sort */}
            <div className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={20} />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={filters.searchTerm}
                  onChange={(e) => setFilters({ ...filters, searchTerm: e.target.value })}
                  className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
                />
              </div>

              <select
                value={filters.sortBy}
                onChange={(e) =>
                  setFilters({
                    ...filters,
                    sortBy: e.target.value as FilterOptions['sortBy'],
                  })
                }
                className="px-4 py-3 border-2 border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:border-blue-500 dark:bg-gray-800 dark:text-white"
              >
                <option value="newest">Newest</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
                <option value="rating">Highest Rated</option>
              </select>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="lg:hidden px-4 py-3 bg-blue-600 text-white rounded-lg font-semibold"
              >
                Filters
              </button>
            </div>

            {/* Results Info */}
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Showing {filteredProducts.length} of {PRODUCTS.length} products
            </p>

            {/* Products Grid */}
            {filteredProducts.length > 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="grid grid-cols-1 md:grid-cols-2 gap-8"
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </motion.div>
            ) : (
              <div className="text-center py-12">
                <p className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No products found
                </p>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Try adjusting your filters or search term
                </p>
                <button
                  onClick={() =>
                    setFilters({
                      category: undefined,
                      priceRange: [0, Infinity],
                      searchTerm: '',
                      sortBy: 'newest',
                    })
                  }
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all"
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

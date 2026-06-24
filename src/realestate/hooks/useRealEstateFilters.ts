import { useMemo, useState } from 'react';
import type { Property } from '../../types/property';

export type ViewMode = 'grid' | 'list';

interface Filters {
  search: string;
  location: string;
  type: string;
  priceRange: string;
  bedrooms: string;
  bathrooms: string;
  sortBy: string;
}

const defaultFilters: Filters = {
  search: '',
  location: 'All locations',
  type: 'All types',
  priceRange: 'Any budget',
  bedrooms: 'Any',
  bathrooms: 'Any',
  sortBy: 'Recommended',
};

export function useRealEstateFilters(properties: Property[]) {
  const [filters, setFilters] = useState<Filters>(defaultFilters);
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [page, setPage] = useState(1);

  const filteredProperties = useMemo(() => {
    const priceRange = filters.priceRange;
    const [minPrice, maxPrice] = priceRange
      .replace('$', '')
      .replace('+', '')
      .split(' - ')
      .map((value) => Number(value.replace(/,/g, '')) || 0);

    return properties
      .filter((property) => {
        const matchSearch = filters.search
          ? [property.title, property.location, property.address]
              .join(' ')
              .toLowerCase()
              .includes(filters.search.toLowerCase())
          : true;

        const matchLocation = filters.location === 'All locations' || property.location === filters.location;
        const matchType = filters.type === 'All types' || property.type === filters.type;
        const matchBedrooms =
          filters.bedrooms === 'Any' || property.bedrooms >= Number(filters.bedrooms);
        const matchBathrooms =
          filters.bathrooms === 'Any' || property.bathrooms >= Number(filters.bathrooms);
        const matchPrice =
          priceRange === 'Any budget' ||
          (property.price >= minPrice && (maxPrice === 0 || property.price <= maxPrice));

        return matchSearch && matchLocation && matchType && matchBedrooms && matchBathrooms && matchPrice;
      })
      .sort((a, b) => {
        switch (filters.sortBy) {
          case 'Price: Low to High':
            return a.price - b.price;
          case 'Price: High to Low':
            return b.price - a.price;
          case 'Newest':
            return b.id.localeCompare(a.id);
          case 'Recommended':
          default:
            return b.rating - a.rating;
        }
      });
  }, [filters, properties]);

  const pageSize = 8;
  const paginated = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filteredProperties.slice(start, start + pageSize);
  }, [filteredProperties, page]);

  const totalPages = Math.max(1, Math.ceil(filteredProperties.length / pageSize));

  const setFilterValue = (key: keyof Filters, value: string) => {
    setPage(1);
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  return {
    filters,
    setFilterValue,
    filteredProperties,
    paginated,
    viewMode,
    setViewMode,
    page,
    setPage,
    totalPages,
  };
}

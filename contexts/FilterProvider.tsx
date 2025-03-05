import React, { createContext, useContext, useState } from "react";

export interface PriceRange {
  min: number;
  max: number;
}

export interface FilterState {
  price: PriceRange;
  conditions: string[];
  sizes: string[];
  colors: string[];
  rating: number;
}

interface FilterContextType {
  filters: FilterState;
  activeFiltersCount: number;
  setFilters: (filters: FilterState) => void;
  clearFilters: () => void;
  updatePriceRange: (range: PriceRange) => void;
  updateConditions: (conditions: string[]) => void;
  updateSizes: (sizes: string[]) => void;
  updateColors: (colors: string[]) => void;
  updateRating: (rating: number) => void;
}

const initialFilters: FilterState = {
  price: { min: 0, max: 0 },
  conditions: [],
  sizes: [],
  colors: [],
  rating: 0,
};

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export const FilterProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [filters, setFilters] = useState<FilterState>(initialFilters);

  const getActiveFiltersCount = () => {
    let count = 0;
    if (filters.price.min > 0 || filters.price.max > 0) count++;
    if (filters.conditions.length) count++;
    if (filters.sizes.length) count++;
    if (filters.colors.length) count++;
    if (filters.rating) count++;
    return count;
  };

  const value = {
    filters,
    activeFiltersCount: getActiveFiltersCount(),
    setFilters,
    clearFilters: () => setFilters(initialFilters),
    updatePriceRange: (range: PriceRange) =>
      setFilters((prev) => ({ ...prev, price: range })),
    updateConditions: (conditions: string[]) =>
      setFilters((prev) => ({ ...prev, conditions })),
    updateSizes: (sizes: string[]) =>
      setFilters((prev) => ({ ...prev, sizes })),
    updateColors: (colors: string[]) =>
      setFilters((prev) => ({ ...prev, colors })),
    updateRating: (rating: number) =>
      setFilters((prev) => ({ ...prev, rating })),
  };

  return (
    <FilterContext.Provider value={value}>{children}</FilterContext.Provider>
  );
};

export const useFilter = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
};

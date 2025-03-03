import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ProductType } from "@/types/product";
import { SearchContextType } from "@/types/search";
import { products } from "@/data/products";

const RECENT_SEARCHES_KEY = "recent_searches";
const MAX_RECENT_SEARCHES = 10;

const SearchContext = createContext<SearchContextType | undefined>(undefined);

export const SearchProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [recentSearches, setRecentSearches] = useState<string[]>([]);
  const [searchResults, setSearchResults] = useState<ProductType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  // Load recent searches on mount
  useEffect(() => {
    loadRecentSearches();
  }, []);

  const loadRecentSearches = async () => {
    try {
      const searches = await AsyncStorage.getItem(RECENT_SEARCHES_KEY);
      if (searches) {
        setRecentSearches(JSON.parse(searches));
      }
    } catch (error) {
      console.error("Error loading recent searches:", error);
    }
  };

  const saveRecentSearches = async (searches: string[]) => {
    try {
      await AsyncStorage.setItem(RECENT_SEARCHES_KEY, JSON.stringify(searches));
    } catch (error) {
      console.error("Error saving recent searches:", error);
    }
  };

  const addToRecentSearches = async (term: string) => {
    if (!term.trim()) return;

    const updatedSearches = [
      term,
      ...recentSearches.filter((s) => s.toLowerCase() !== term.toLowerCase()),
    ].slice(0, MAX_RECENT_SEARCHES);

    setRecentSearches(updatedSearches);
    await saveRecentSearches(updatedSearches);
  };

  const removeSearchTerm = async (term: string) => {
    const updatedSearches = recentSearches.filter((s) => s !== term);
    setRecentSearches(updatedSearches);
    await saveRecentSearches(updatedSearches);
  };

  const clearAllSearches = async () => {
    setRecentSearches([]);
    await AsyncStorage.removeItem(RECENT_SEARCHES_KEY);
  };

  const searchProducts = (query: string) => {
    setIsLoading(true);

    // Simulate API call with setTimeout
    setTimeout(() => {
      const filteredProducts = products.filter((product) => {
        const searchTerm = query.toLowerCase();
        return (
          product.title.toLowerCase().includes(searchTerm) ||
          product.desc.toLowerCase().includes(searchTerm) ||
          product.category.toLowerCase().includes(searchTerm) ||
          product.brand.toLowerCase().includes(searchTerm)
        );
      });

      setSearchResults(filteredProducts);
      setIsLoading(false);
    }, 500);
  };

  const handleSearch = (query: string, addToRecent: boolean = true) => {
    if (query.trim()) {
      searchProducts(query.trim());
      if (addToRecent) {
        addToRecentSearches(query.trim());
      }
    }
  };

  const value = {
    searchQuery,
    recentSearches,
    searchResults,
    isLoading,
    setSearchQuery,
    addToRecentSearches,
    removeSearchTerm,
    clearAllSearches,
    searchProducts,
    handleSearch
  };

  return (
    <SearchContext.Provider value={value}>{children}</SearchContext.Provider>
  );
};

export const useSearch = () => {
  const context = useContext(SearchContext);
  if (context === undefined) {
    throw new Error("useSearch must be used within a SearchProvider");
  }
  return context;
};

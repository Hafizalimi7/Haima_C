import { ProductType } from "./product";

export interface SearchContextType {
  searchQuery: string;
  recentSearches: string[];
  searchResults: ProductType[];
  isLoading: boolean;
  setSearchQuery: (query: string) => void;
  addToRecentSearches: (term: string) => void;
  removeSearchTerm: (term: string) => void;
  clearAllSearches: () => void;
  searchProducts: (query: string) => void;
  handleSearch: (query: string) => void;
}

export interface SearchSuggestion {
  id: string;
  name: string;
  type: "product" | "vendor";
}

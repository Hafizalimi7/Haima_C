import React from "react";
import { useSearch } from "@/contexts/SearchProvider";
import { View, Text, FlatList, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import { ProductType } from "@/types/product";

const SearchSuggestions: React.FC = () => {
  const { setSearchQuery, searchResults, isLoading, addToRecentSearches } =
    useSearch();
  const { push } = useRouter();

  const handleProductPress = (product: ProductType) => {
    addToRecentSearches(product.title);
    setSearchQuery("");
    push(`/search/${encodeURIComponent(product.title)}`);
  };

  return (
    <View className="w-full">
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        className="px-4"
        ListHeaderComponent={() => (
          <Text className="text-gray-500 text-sm mb-2">
            {isLoading
              ? "Searching..."
              : `${searchResults.length} results found`}
          </Text>
        )}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="py-3"
            onPress={() => handleProductPress(item)}
          >
            <Text className="text-base font-normal">{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SearchSuggestions;

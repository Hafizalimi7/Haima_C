import React, { useEffect } from "react";
import { Dimensions, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { DetailHeader } from "@/components/signeduser/details";
import {
  SearchActions,
  SearchComponent,
} from "@/components/signeduser/categories/search";
import { useSearch } from "@/contexts/SearchProvider";
import { ProductItem } from "@/components/signeduser/products";

const { width } = Dimensions.get("window");
const COLUMN_GAP = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - COLUMN_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

export default function SearchResultScreen() {
  const params = useLocalSearchParams<{ searchTerm?: string }>();
  const searchTerm = params.searchTerm
    ? decodeURIComponent(params.searchTerm)
    : "";
  const { searchProducts, setSearchQuery, searchResults, isLoading } =
    useSearch();

  useEffect(() => {
    if (searchTerm) {
      setSearchQuery(searchTerm);
      searchProducts(searchTerm);
    }
  }, [searchTerm]);

  return (
    <SafeAreaView className="bg-white flex-1">
      <FlatList
        data={searchResults}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem product={item} style={{ width: ITEM_WIDTH }} className="mx-0 mb-4" />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingHorizontal: COLUMN_GAP,
          paddingBottom: 15,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: COLUMN_GAP,
        }}
        ListHeaderComponent={() => {
          return (
            <>
              <DetailHeader
                title={searchTerm ? `"${searchTerm}"` : ""}
                showShareIcon={false}
                className="py-2"
              />
              <SearchComponent />
              <SearchActions />
            </>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

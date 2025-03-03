import { productBrands } from "@/data/categories";
import React from "react";
import { View, FlatList, Dimensions } from "react-native";
import { BrandItem } from "../../products";

const { width } = Dimensions.get("window");
const COLUMN_GAP = 10;
const NUM_COLUMNS = 4;
const ITEM_WIDTH = (width - COLUMN_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const AllBrands: React.FC = () => {
  return (
    <View className="w-full py-5 px-2">
      <FlatList
        data={productBrands}
        keyExtractor={(brand) => brand.id}
        numColumns={4}
        contentContainerStyle={{
          paddingHorizontal: COLUMN_GAP,
          paddingBottom: 185,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: COLUMN_GAP,
        }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <BrandItem
            brand={item}
            style={{ width: ITEM_WIDTH }}
            className="mx-0 mb-4"
          />
        )}
      />
    </View>
  );
};

export default AllBrands;

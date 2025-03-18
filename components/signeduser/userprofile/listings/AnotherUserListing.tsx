import { View, Text, Dimensions, FlatList } from "react-native";
import React from "react";
import { products } from "@/data/products";
import { ProductItem } from "../../products";
import { EmptyUI } from "@/components/ui/emptyUi";

const { width } = Dimensions.get("window");
const COLUMN_GAP = 10;
const NUM_COLUMNS = 2;
const ITEM_WIDTH = (width - COLUMN_GAP * (NUM_COLUMNS + 1)) / NUM_COLUMNS;

const AnotherUserListing: React.FC = () => {
  return (
    <View className="w-full">
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ProductItem
            type="user"
            product={item}
            style={{ width: ITEM_WIDTH }}
            className="mx-0 mb-4"
          />
        )}
        numColumns={2}
        contentContainerStyle={{
          paddingBottom: 380,
          paddingHorizontal: COLUMN_GAP,
        }}
        columnWrapperStyle={{
          justifyContent: "space-between",
          marginTop: COLUMN_GAP,
        }}
        ListEmptyComponent={() => (
          <EmptyUI content={"You dont have any listed item yet"} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default AnotherUserListing;

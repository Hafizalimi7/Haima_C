import React from "react";
import { View, Text } from "react-native";
import { FlatList } from "react-native";
import { products } from "@/data/products";
import { ProductItem } from "../../products";

const RelatedItems: React.FC = () => {
  return (
    <View className="w-full flex-col items-start justify-start pb-4 gap-y-5">
      <View className="flex-row items-center justify-between w-full px-4">
        <Text className="text-base font-semibold text-primary">
          Related Items
        </Text>
      </View>
      <View className="w-full">
        <FlatList
          data={products.slice(2)}
          horizontal
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    </View>
  );
};

export default RelatedItems;

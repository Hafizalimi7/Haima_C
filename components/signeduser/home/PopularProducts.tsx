import React from "react";
import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import { products } from "@/data/products";
import { ProductItem } from "../products";

const PopularProducts: React.FC = () => {
  return (
    <View className="w-full flex-col items-start justify-start pb-4 gap-y-5">
      <View className="flex-row items-center justify-between w-full px-4">
        <Text className="text-base font-semibold text-primary">
          Popular on Haima
        </Text>
        <Link href="/categories" className="text-sm font-normal text-grey-800">
          See All
        </Link>
      </View>
      <View className="w-full">
        <FlatList
          data={products.slice(4)}
          horizontal
          keyExtractor={(product) => product.id}
          renderItem={({ item }) => <ProductItem product={item} />}
        />
      </View>
    </View>
  );
};

export default PopularProducts;

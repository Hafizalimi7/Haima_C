import React from "react";
import { View, Text, FlatList } from "react-native";
import { Link } from "expo-router";
import { productBrands } from "@/data/categories";
import { BrandItem } from "../products";

const TopBrands: React.FC = () => {
  return (
    <View className="w-full flex-col items-start justify-start pb-4 gap-y-5">
      <View className="flex-row items-center justify-between w-full px-4">
        <Text className="text-base font-semibold text-primary">Top Brands</Text>
        <Link
          href="/categories?tab=brands"
          className="text-sm font-normal text-grey-800"
        >
          See All
        </Link>
      </View>
      <FlatList
        data={productBrands}
        horizontal
        keyExtractor={(brand) => brand.id}
        renderItem={({ item }) => <BrandItem brand={item} />}
      />
    </View>
  );
};

export default TopBrands;

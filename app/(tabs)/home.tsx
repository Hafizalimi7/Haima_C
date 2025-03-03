import React from "react";
import {
  BrandFollowed,
  CategoryItem,
  HomeInfoHeading,
  PopularProducts,
  RecommendedProducts,
  TopBrands,
} from "@/components/signeduser/home";
import { ScrollView, Platform, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link, useRouter } from "expo-router";
import { productCategories } from "@/data/categories";
import { SearchComponent } from "@/components/signeduser/categories/search";

export default function HomeTab() {
  return (
    <SafeAreaView className="bg-white flex-1 pt-3">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        }}
      >
        <HomeInfoHeading />
        <View className="px-4 w-full">
          <SearchComponent />
        </View>
        <View className="w-full flex-col items-start justify-start pb-4 gap-y-5">
          <View className="flex-row items-center justify-between w-full px-4">
            <Text className="text-base font-semibold text-primary">
              Categories
            </Text>
            <Link
              href="/categories"
              className="text-sm font-normal text-grey-800"
            >
              See All
            </Link>
          </View>
          <FlatList
            data={productCategories}
            horizontal
            keyExtractor={(category) => category.id}
            renderItem={({ item }) => <CategoryItem category={item} />}
          />
        </View>
        <RecommendedProducts />
        <BrandFollowed />
        <TopBrands />
        <PopularProducts />
      </ScrollView>
    </SafeAreaView>
  );
}

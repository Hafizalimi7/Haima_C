import React from "react";
import {
  BrandFollowed,
  CategoryItem,
  HomeInfoHeading,
  PopularProducts,
  RecommendedProducts,
  TopBrands,
} from "@/components/signeduser/home";
import {
  ScrollView,
  Platform,
  TouchableOpacity,
  Text,
  Image,
  View,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import signeduser from "@/constants/icons/signeduser";
import { Link, useRouter } from "expo-router";
import { productCategories } from "@/data/categories";

export default function HomeTab() {
  const { push } = useRouter();

  return (
    <SafeAreaView className="bg-white flex-1 pt-3">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        }}
      >
        <HomeInfoHeading />
        <View className="px-4 w-full">
          <TouchableOpacity
            onPress={() => push("/search")}
            className="w-full border border-grey rounded-full min-h-12 px-5 flex flex-row items-center justify-start gap-x-3 my-5"
          >
            <Image
              source={signeduser.searchIcon}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text className="text-sm font-normal text-grey-800">
              Search items, vendors etc.
            </Text>
          </TouchableOpacity>
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

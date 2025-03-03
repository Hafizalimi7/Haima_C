import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailHeader } from "@/components/signeduser/details";
import signeduser from "@/constants/icons/signeduser";
import { useLocalSearchParams, useRouter } from "expo-router";
import {
  AllBrands,
  AllCategories,
  CategoryTabs,
} from "@/components/signeduser/categories/category";

export default function CategoriesTab() {
  const { push } = useRouter();
  const { tab } = useLocalSearchParams<{
    tab?: string;
  }>();

  const currentTab = tab || "categories";
  let pageContentTab;

  if (currentTab === "brands") {
    pageContentTab = <AllBrands />;
  } else {
    pageContentTab = <AllCategories />;
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <View
        style={{
          paddingBottom: 15,
          paddingHorizontal: 10,
        }}
      >
        <DetailHeader
          title="Categories"
          showShareIcon={true}
          renderIcon={
            <TouchableOpacity onPress={() => push("/search")}>
              <Image
                source={signeduser.searchIcon}
                resizeMode="contain"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          }
        />
        <CategoryTabs tab={tab || "categories"} />
        <View className="w-full">{pageContentTab}</View>
      </View>
    </SafeAreaView>
  );
}

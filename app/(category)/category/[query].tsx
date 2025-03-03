import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailHeader } from "@/components/signeduser/details";
import { FlatList } from "react-native";
import signeduser from "@/constants/icons/signeduser";

const subCats = [
  {
    keyword: "Tops",
    text: "All",
  },
  {
    keyword: "T-shirts",
    text: "T-shirts",
  },
  {
    keyword: "Hoodies",
    text: "Hoodies",
  },
  {
    keyword: "Jumpers",
    text: "Jumpers",
  },
  {
    keyword: "Cardigans",
    text: "Cardigans",
  },
  {
    keyword: "Blouses",
    text: "Blouses",
  },
  {
    keyword: "Shirts",
    text: "Shirts",
  },
];

export default function SubCategoryScreen() {
  const params = useLocalSearchParams<{ query?: string }>();
  const query = params.query ? decodeURIComponent(params.query) : "";
  const { push } = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={subCats}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => push(`/search/${encodeURIComponent(item.keyword)}`)}
            className="w-full py-5 border-b border-[#E2E2E2] last:border-none"
          >
            <View className="w-full flex-row items-center justify-between">
              <Text className="text-base font-normal text-grey-800">
                {item.text}
              </Text>

              <Image
                source={signeduser.chevronarrowIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 15,
        }}
        ListHeaderComponent={() => {
          return (
            <DetailHeader
              title={query ? `"${query}"` : ""}
              showShareIcon={false}
              className="py-2 px-0"
            />
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

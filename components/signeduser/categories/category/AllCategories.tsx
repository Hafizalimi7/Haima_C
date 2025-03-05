import React from "react";
import { productCategories } from "@/data/categories";
import { useRouter } from "expo-router";
import { View, Text, FlatList, Image, TouchableOpacity } from "react-native";

const AllCategories: React.FC = () => {
  const { push } = useRouter();
  return (
    <View className="w-full py-5 px-2">
      <FlatList
        data={productCategories}
        keyExtractor={(category) => category.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => push(`/category/${encodeURIComponent(item.title)}`)}
            className="w-full"
          >
            <View className="w-full bg-[#F5F5F5] flex-row items-center justify-between h-24 rounded-xl mb-5 px-6">
              <Text className="text-base font-medium text-primary">
                {item.title}
              </Text>
              <View className="w-16 h-16 rounded-xl flex-row items-center justify-center bg-[#E0E0E0]">
                <Image
                  source={item.catgoryImage}
                  resizeMode="contain"
                  className="w-10 h-10"
                />
              </View>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingBottom: 185,
        }}
      />
    </View>
  );
};

export default AllCategories;

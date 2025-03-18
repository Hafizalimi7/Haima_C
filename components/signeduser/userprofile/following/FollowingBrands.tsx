import React, { useState } from "react";
import { CustomButton } from "@/components/ui";
import { productBrands } from "@/data/categories";
import { View, Text, FlatList, Image } from "react-native";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";

const FollowingBrands: React.FC = () => {
  const [followingBrands, setFollowingBrands] = useState<string[]>(
    productBrands.map((brand) => brand.id)
  );

  const toggleFollow = (id: string) => {
    setFollowingBrands((prev) =>
      prev.includes(id)
        ? prev.filter((brandId) => brandId !== id)
        : [...prev, id]
    );
  };

  return (
    <View className="w-full pb-5 px-2">
      <FlatList
        data={productBrands}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const isFollowing = followingBrands.includes(item.id);

          return (
            <View className="flex-row items-center justify-between px-4 py-4 w-full">
              <View className="flex-row items-center gap-x-4">
                <View className="bg-[#F5F5F5] w-16 h-16 rounded-full flex-row items-center justify-center">
                  <Image
                    source={item.brandImage}
                    resizeMode="contain"
                    className="w-10 h-10"
                    testID="brand-image"
                  />
                </View>
                <Text className="text-lg font-medium">{item.title}</Text>
              </View>

              <CustomButton
                handlePress={() => toggleFollow(item.id)}
                className={`px-6 !min-h-9 ${
                  isFollowing ? "bg-secondary" : "bg-primary/10"
                }`}
              >
                <Text
                  className={`${
                    isFollowing ? "font-bold" : "font-medium"
                  } text-sm text-primary `}
                >
                  {isFollowing ? "Follow" : "Following"}
                </Text>
              </CustomButton>
            </View>
          );
        }}
        contentContainerStyle={{
          paddingBottom: 130,
        }}
        ListEmptyComponent={() => (
          <EmptyUI
            iconSource={signeduser.giftIcon}
            content={"You are not following any brand yet"}
          />
        )}
      />
    </View>
  );
};

export default FollowingBrands;

import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { images } from "@/constants";
import { useRouter } from "expo-router";

export default function UserProfileStats() {
  const { push } = useRouter();

  return (
    <View className="w-full min-h-[74px] p-4 bg-primary rounded-xl flex-row items-center justify-between gap-x-4">
      <TouchableOpacity onPress={() => push("/profile/follower")}>
        <View className="flex-col items-center justify-center gap-y-2">
          <Text className="text-lg font-semibold text-white text-center">
            4
          </Text>
          <Text className="text-base font-normal text-white text-center">
            Followers
          </Text>
        </View>
      </TouchableOpacity>
      <View className="w-[1px] h-6 bg-white" />
      <TouchableOpacity
        onPress={() =>
          push({
            pathname: "/profile/following",
            params: { tab: "vendors" },
          })
        }
      >
        <View className="flex-col items-center justify-center gap-y-2">
          <Text className="text-lg font-semibold text-white text-center">
            4
          </Text>
          <Text className="text-base font-normal text-white text-center">
            Following
          </Text>
        </View>
      </TouchableOpacity>
      <View className="w-[1px] h-6 bg-white" />
      <TouchableOpacity onPress={() => push("/profile/reviews")}>
        <View className="flex-col items-center justify-center gap-y-2">
          <View className="flex-row items-center justify-center gap-x-2">
            <Image
              source={images.largeStarImage}
              resizeMode="contain"
              className="w-4 h-4"
              tintColor={"#D3AC2A"}
            />
            <Text className="text-lg font-semibold text-white text-center">
              4.0
            </Text>
          </View>
          <Text className="text-base font-normal text-white text-center">
            Reviews
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
}

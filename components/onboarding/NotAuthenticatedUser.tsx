import React from "react";
import { icons } from "@/constants";
import { View, Text, Image } from "react-native";

const NotAuthenticatedUser: React.FC = () => {
  return (
    <View className="w-full flex-col items-center justify-center gap-y-6 pb-5">
      <Image
        source={icons.infoIcon}
        resizeMode="contain"
        className="w-16 h-16"
      />
      <Text className="text-lg font-normal text-center w-[340px] text-primary">
        You need to create an account before you can contact a seller or buy a
        item
      </Text>
    </View>
  );
};

export default NotAuthenticatedUser;

import React from "react";
import signeduser from "@/constants/icons/signeduser";
import { Image } from "react-native";
import { View, Text } from "react-native";

interface NoRecentSearchProps {
  content?: string;
}

const NoRecentSearch: React.FC<NoRecentSearchProps> = ({
  content = "No recent search found",
}) => {
  return (
    <View className="w-full py-20 flex-col items-center justify-center gap-y-5">
      <View className="flex-row items-center justify-center w-16 h-16 bg-primary-50 rounded-full">
        <Image
          source={signeduser.searchIcon}
          resizeMode="contain"
          className="w-8 h-8"
        />
      </View>
      <Text className="text-base font-normal text-center text-grey-800">
        {content}
      </Text>
    </View>
  );
};

export default NoRecentSearch;

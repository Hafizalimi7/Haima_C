import signeduser from "@/constants/icons/signeduser";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const SearchActions: React.FC = () => {
  return (
    <View className="w-full flex-row items-center justify-between bg-lightGrey2 rounded-full h-12 px-4">
      <TouchableOpacity className="w-[151px] h-full flex flex-row items-center justify-center gap-x-2">
        <Text className="text-base font-normal text-grey-800">Filter</Text>
        <Image
          source={signeduser.filterIcon}
          resizeMode="contain"
          className="w-4 h-4"
        />
      </TouchableOpacity>
      <View className="w-0.5 h-6" />
      <TouchableOpacity className="w-[151px] h-full flex flex-row items-center justify-center gap-x-2">
        <Text className="text-base font-normal text-grey-800">Sort</Text>
        <Image
          source={signeduser.sortIcon}
          resizeMode="contain"
          className="w-4 h-4"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchActions;

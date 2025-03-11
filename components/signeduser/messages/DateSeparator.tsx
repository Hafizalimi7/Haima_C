import React from "react";
import { View, Text } from "react-native";

interface DateSeparatorProps {
  date: string;
}

const DateSeparator: React.FC<DateSeparatorProps> = ({ date }) => {
  return (
    <View className="flex-row items-center justify-center my-4">
      <View className="flex-1 h-[1px] bg-gray-200" />
      <Text className="mx-4 text-sm text-gray-500">{date}</Text>
      <View className="flex-1 h-[1px] bg-gray-200" />
    </View>
  );
};

export default DateSeparator;

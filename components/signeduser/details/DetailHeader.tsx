import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { icons } from "@/constants";

interface DetailHeaderProps {
  title: string;
  showShareIcon?: boolean;
  className?: string;
  renderIcon?: React.ReactNode;
}

const DetailHeader: React.FC<DetailHeaderProps> = ({
  title,
  showShareIcon = false,
  className = "py-4",
  renderIcon,
}) => {
  const { back } = useRouter();

  return (
    <View
      className={`flex-row items-center justify-between w-full px-4 ${className}`}
    >
      <TouchableOpacity onPress={() => back()}>
        <Image
          source={icons.backarrowIcon}
          alt="back icon"
          resizeMode="contain"
          className="w-8 h-8"
        />
      </TouchableOpacity>
      <Text className="text-lg font-medium text-primary">{title}</Text>
      <View>{showShareIcon && <>{renderIcon}</>}</View>
    </View>
  );
};

export default DetailHeader;

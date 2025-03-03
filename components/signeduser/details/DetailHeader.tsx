import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useRouter } from "expo-router";
import { Image } from "react-native";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";

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
  renderIcon = (
    <Image
      source={signeduser.forwardIcon}
      resizeMode="contain"
      className="w-6 h-6"
    />
  ),
}) => {
  const { back } = useRouter();

  return (
    <View
      className={`flex-row items-center justify-between w-full px-4 ${className}`}
    >
      <TouchableOpacity onPress={() => back()}>
        <Image
          source={icons.backarrowIcon}
          alt="back icon logo"
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

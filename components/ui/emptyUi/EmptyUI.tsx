import React from "react";
import signeduser from "@/constants/icons/signeduser";
import { Image } from "react-native";
import { View, Text } from "react-native";
import { ImageType } from "@/types/product";
import CustomButton from "../CustomizeButton";
import { useRouter } from "expo-router";

interface EmptyUIProps {
  content?: string;
  iconSource?: ImageType;
  showButton?: boolean;
}

const EmptyUI: React.FC<EmptyUIProps> = ({
  content = "No result found",
  iconSource = signeduser.shopIcon,
  showButton = false,
}) => {
  const { push } = useRouter();
  return (
    <View className="w-full py-20 flex-col items-center justify-center gap-y-5">
      <View className="flex-row items-center justify-center w-16 h-16 bg-primary-50 rounded-full">
        <Image
          source={iconSource}
          resizeMode="contain"
          className="w-8 h-8"
          tintColor="#000000"
        />
      </View>
      <Text className="text-base font-normal text-center text-grey-800">
        {content}
      </Text>
      {showButton && (
        <CustomButton
          handlePress={() => push("/sellmodal")}
          className="bg-secondary min-h-10 px-10"
        >
          <Text className="text-sm font-semibold text-primary">
            Sell an Item
          </Text>
        </CustomButton>
      )}
    </View>
  );
};

export default EmptyUI;

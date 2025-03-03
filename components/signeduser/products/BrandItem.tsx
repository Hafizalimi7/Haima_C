import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleProp,
  ViewStyle,
} from "react-native";
import React from "react";
import { BrandItemType } from "@/types/product";
import { useRouter } from "expo-router";

interface BrandItemProps {
  brand: BrandItemType;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const BrandItem: React.FC<BrandItemProps> = ({
  brand,
  className = "first:ml-6 mx-2 pb-3",
  style,
}) => {
  const { push } = useRouter();

  return (
    <View className={`${className}`} style={style}>
      <TouchableOpacity
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Navigate to ${brand.title} search`}
        onPress={() => push(`/search/${brand.title}`)}
        className="flex flex-col items-center justify-center gap-y-2"
      >
        <View className="bg-[#F5F5F5] w-16 h-16 rounded-full flex-row items-center justify-center">
          <Image
            source={brand.brandImage}
            resizeMode="contain"
            className="w-10 h-10"
            testID="brand-image"
          />
        </View>
        <Text className="text-center text-xs font-normal text-grey-800">
          {brand.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default BrandItem;

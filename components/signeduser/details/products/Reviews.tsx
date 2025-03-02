import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import { ProductType } from "@/types/product";
import { useRouter } from "expo-router";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { useAuth } from "@/contexts/AuthContext";

interface ReviewsProps {
  data: ProductType;
}

const Reviews: React.FC<ReviewsProps> = ({ data }) => {
  const { openAuthSheet } = useBottomSheet();
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  const handleReview = () => {
    if (isAuthenticated) {
      push(`/product/${data.id}/reviews`);
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };

  return (
    <View className="px-4 w-full">
      <TouchableOpacity
        onPress={handleReview}
        className="flex flex-row items-center justify-between w-full border border-grey rounded-xl p-4"
      >
        <View className="flex-col items-start justify-start gap-y-2">
          <Text className="text-base font-medium text-primary">
            Item ratings and comments
          </Text>
          <View className="flex-row items-center justify-start gap-x-2">
            <Image
              source={signeduser.starIcon}
              resizeMode="contain"
              className="w-4 h-4"
            />
            <View className="flex-row items-center justify-start gap-x-1">
              <Text className="text-sm font-medium text-primary">
                {data.review}
              </Text>
              <Text className="text-sm font-normal text-grey-800">
                (20 reviews)
              </Text>
            </View>
          </View>
        </View>
        <Image
          source={signeduser.chevronarrowIcon}
          resizeMode="contain"
          className="w-6 h-6"
        />
      </TouchableOpacity>
    </View>
  );
};

export default Reviews;

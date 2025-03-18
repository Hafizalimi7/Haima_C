import React from "react";
import { View, Text, Image } from "react-native";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";

interface MakeAnOfferActionProps {
  handleMakeOffer: () => void;
  handleBuyNow: () => void;
}

const MakeAnOfferAction: React.FC<MakeAnOfferActionProps> = ({
  handleMakeOffer,
  handleBuyNow
}) => {
  return (
    <View className="w-full flex-row items-center justify-start gap-x-3">
      <CustomButton
        handlePress={handleMakeOffer}
        className="w-[160px] bg-transparent border border-primary"
      >
        <View className="w-full flex-row items-center justify-center gap-x-3">
          <Image
            source={icons.offerIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
          <Text className="text-base text-primary font-semibold">
            Make Offer
          </Text>
        </View>
      </CustomButton>
      <CustomButton
        handlePress={handleBuyNow}
        className="w-[160px] bg-primary border border-primary"
      >
        <View className="w-full flex-row items-center justify-center gap-x-3">
          <Image
            source={icons.buyIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
          <Text className="text-sm text-white font-semibold">Buy Now</Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default MakeAnOfferAction;

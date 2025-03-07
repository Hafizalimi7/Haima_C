import React from "react";
import { RadioButton } from "@/components/ui/inputs";
import { usePayment } from "@/contexts/PaymentProvider";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { icons, images } from "@/constants";
import { formatCurrency } from "@/helpers/currency";

const OtherPaymentOptions: React.FC = () => {
  const { selectedCardId, setSelectedCardId } = usePayment();

  return (
    <View className="flex-col items-start justify-start gap-y-4 pt-5">
      <Text className="text-base font-medium text-grey-800">
        More payment options
      </Text>
      <View className="w-full flex-col items-start justify-start bg-lightGrey2 rounded-xl px-4">
        <View className="w-full border-b py-4 border-grey flex-row items-center justify-between">
          <View className="flex-row items-center justify-start gap-x-4">
            <Image
              source={images.walletImage}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text className="text-base font-normal text-primary">Wallet</Text>
            <Text className="text-base font-bold text-secondary">
              {formatCurrency(2000)}
            </Text>
          </View>
          <TouchableOpacity onPress={() => setSelectedCardId("WALLET")}>
            <RadioButton selected={selectedCardId === "WALLET"} />
          </TouchableOpacity>
        </View>
        <View className="w-full border-b py-4 border-grey flex-row items-center justify-between">
          <View className="flex-row items-center justify-start gap-x-4">
            <Image
              source={icons.googleIcon}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text className="text-base font-normal text-primary">
              Google Pay
            </Text>
          </View>
          <TouchableOpacity onPress={() => setSelectedCardId("Google Pay")}>
            <RadioButton selected={selectedCardId === "Google Pay"} />
          </TouchableOpacity>
        </View>
        <View className="w-full py-4 flex-row items-center justify-between">
          <View className="flex-row items-center justify-start gap-x-4">
            <Image
              source={icons.appleIcon}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <Text className="text-base font-normal text-primary">
              Apple Pay
            </Text>
          </View>
          <TouchableOpacity onPress={() => setSelectedCardId("Apple Pay")}>
            <RadioButton selected={selectedCardId === "Apple Pay"} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default OtherPaymentOptions;

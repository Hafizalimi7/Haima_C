import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShipping } from "@/contexts/ShippingProvider";
import { useLocalSearchParams, useRouter } from "expo-router";
import { ShippingMethod } from "@/components/signeduser/billings";
import { CustomButton } from "@/components/ui";
import {
  HomeDelivery,
  PickupLocation,
} from "@/components/signeduser/billings/info";

export default function ShippingInfoScreen() {
  const { selectedMethod, selectedAddressId, selectedDelievryAddressId } =
    useShipping();
  const { productId } = useLocalSearchParams<{
    productId?: string;
  }>();
  const { push } = useRouter();

  const handleContinue = () => {
    if (selectedMethod === "HOME_DELIVERY" && !selectedAddressId) {
      // Show error message or alert
      return;
    }
    push({
      pathname: "/payments/payment-gateway",
      params: { productId: productId },
    });
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Shipping Details" showShareIcon={false} />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
          gap: 24,
        }}
      >
        <ShippingMethod />
        {selectedMethod === "HOME_DELIVERY" ? (
          <HomeDelivery />
        ) : (
          <PickupLocation />
        )}
      </ScrollView>
      <View className="p-4">
        <CustomButton
          handlePress={handleContinue}
          className="bg-primary w-full disabled:bg-grey group"
          disabled={!selectedDelievryAddressId}
        >
          <Text className="text-white text-center text-base font-semibold group-disabled:text-grey-800">
            Continue
          </Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

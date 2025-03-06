import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useShipping } from "@/contexts/ShippingProvider";
import { useRouter } from "expo-router";
import { ShippingMethod } from "@/components/signeduser/billings";
import { CustomButton } from "@/components/ui";
import { HomeDelivery, PickupLocation } from "@/components/signeduser/billings/info";

export default function ShippingInfoScreen() {
  const { selectedMethod, selectedAddressId } = useShipping();
  const { push } = useRouter();

  const handleContinue = () => {
    if (selectedMethod === "HOME_DELIVERY" && !selectedAddressId) {
      // Show error message or alert
      return;
    }
    push("/payments/payment-gateway");
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Shipping Details" showShareIcon={false} />
      <ScrollView className="flex-1 flex-col items-start justify-start gap-y-6 px-4 bg-red-500">
        <ShippingMethod />
        {selectedMethod === "HOME_DELIVERY" ? <HomeDelivery /> : <PickupLocation />}
      </ScrollView>
      <View className="p-4 border-t border-gray-200">
        <CustomButton
          handlePress={handleContinue}
          className="bg-primary w-full disabled:bg-grey group"
          disabled={!selectedAddressId}
        >
          <Text className="text-white text-center text-base font-semibold group-disabled:text-grey-800">
            Continue
          </Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

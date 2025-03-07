import React from "react";
import {
  CreditCards,
  OtherPaymentOptions,
} from "@/components/signeduser/billings/payments";
import { DetailHeader } from "@/components/signeduser/details";
import { CustomButton } from "@/components/ui";
import { usePayment } from "@/contexts/PaymentProvider";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function PaymentGateWayScreen() {
  const { productId } = useLocalSearchParams<{
    productId?: string;
  }>();
  const { selectedCardId } = usePayment();
  const { push } = useRouter();

  const handleContinue = () => {
    push(`/checkout/${productId}/detail`);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Payment Details" showShareIcon={false} />
      <ScrollView
        className="flex-1"
        contentContainerStyle={{
          paddingHorizontal: 16,
          paddingBottom: 20,
          gap: 24,
        }}
      >
        <CreditCards />
        <OtherPaymentOptions />
      </ScrollView>
      <View className="p-4">
        <CustomButton
          handlePress={handleContinue}
          className="bg-primary w-full disabled:bg-grey group"
          disabled={!selectedCardId || selectedCardId === Date.now().toString()}
        >
          <Text className="text-white text-center text-base font-semibold group-disabled:text-grey-800">
            Continue
          </Text>
        </CustomButton>
      </View>
    </SafeAreaView>
  );
}

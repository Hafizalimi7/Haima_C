import React from "react";
import { CreateShippingAddressForm } from "@/components/signeduser/billings";
import { DetailHeader } from "@/components/signeduser/details";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateShippingAddressScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          flex: 1,
        }}
      >
        <View className="flex-col items-start justify-start gap-y-4 flex-1">
          <DetailHeader title="Shipping Address" showShareIcon={false} />
          <CreateShippingAddressForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

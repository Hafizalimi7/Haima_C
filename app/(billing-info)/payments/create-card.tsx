import { CreateCardForm } from "@/components/signeduser/billings/payments";
import { DetailHeader } from "@/components/signeduser/details";
import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateCardScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          flex: 1,
        }}
      >
        <View className="flex-col items-start justify-start gap-y-4 flex-1">
          <DetailHeader title="Card Details" showShareIcon={false} />
          <CreateCardForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

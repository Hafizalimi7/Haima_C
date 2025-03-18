import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { SafeAreaView } from "react-native-safe-area-context";
import { SellAnItemForm } from "@/components/signeduser/sell";

export default function SellAnItemModal() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Sell item" showShareIcon={false} />

      <SellAnItemForm />
    </SafeAreaView>
  );
}

import React from "react";
import { FlatList, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TransactionsList,
  WalletBalance,
} from "@/components/signeduser/userprofile/wallet";
import { Link } from "expo-router";
import { ProfileHeader } from "@/components/signeduser/userprofile";

export default function UserWalletScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProfileHeader
        title="Wallet"
        showShareIcon={false}
        className="py-2 px-0"
      />
      <FlatList
        data={[{ key: "header" }]}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 15 }}
        ListHeaderComponent={
          <>
            <WalletBalance />
            <View className="w-full flex-col items-start justify-start gap-y-4 py-8">
              <View className="w-full flex-row items-center justify-between">
                <Text className="text-lg font-medium text-primary">
                  Transactions
                </Text>
                <Link href="/profile/settings/user-wallet/transactions">
                  <Text className="text-base font-medium text-grey-800">
                    See All
                  </Text>
                </Link>
              </View>
            </View>
          </>
        }
        renderItem={() => <TransactionsList />}
      />
    </SafeAreaView>
  );
}

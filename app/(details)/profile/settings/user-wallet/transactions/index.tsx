import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { TransactionsList } from "@/components/signeduser/userprofile/wallet";
import signeduser from "@/constants/icons/signeduser";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TransactionHistoryScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader
        title="Transaction History"
        showShareIcon={false}
        className="py-2 px-0"
      />
      <FlatList
        data={[{ key: "header" }]}
        keyExtractor={(item) => item.key}
        contentContainerStyle={{ paddingHorizontal: 15, paddingBottom: 15 }}
        ListHeaderComponent={
          <View className="flex-row items-end justify-end w-full py-6">
            <TouchableOpacity className="px-4 bg-grey/30 rounded-lg h-10">
              <View className="flex-row items-center justify-start gap-x-3 h-full">
                <Text className="text-base font-normal text-grey-800">
                  This month
                </Text>
                <Image
                  source={signeduser.chevronarrowIcon}
                  resizeMode="contain"
                  className="w-5 h-5 rotate-90"
                />
              </View>
            </TouchableOpacity>
          </View>
        }
        renderItem={() => <TransactionsList />}
      />
    </SafeAreaView>
  );
}

import { ProfileHeader } from "@/components/signeduser/userprofile";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";
import React from "react";
import { View, Text, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SoldItemsScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProfileHeader
        title="Sold Items"
        showShareIcon={false}
        className="py-2 px-0"
      />
      <FlatList
        data={[]}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => <></>}
        ListEmptyComponent={
          <EmptyUI
            iconSource={signeduser.purchaseIcon}
            content={"You dont have any sold item yet"}
          />
        }
      />
    </SafeAreaView>
  );
}

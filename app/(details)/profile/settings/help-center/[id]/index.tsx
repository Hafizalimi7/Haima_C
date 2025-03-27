import { useLocalSearchParams } from "expo-router";
import React from "react";
import { FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { helpCenterData } from "@/data/settings";
import { DetailHeader } from "@/components/signeduser/details";
import { RenderHelpCenter } from "@/components/signeduser/userprofile";

export default function HelpCenterDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const helpDetail = helpCenterData.find((item) => item.id === id);

  if (!helpDetail) return;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={helpDetail.categories}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <RenderHelpCenter category={item} />
        )}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 15,
        }}
        ListHeaderComponent={() => (
          <DetailHeader title={helpDetail.title} showShareIcon={false} />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

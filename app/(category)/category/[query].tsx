import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailHeader } from "@/components/signeduser/details";

export default function SubCategoryScreen() {
  const params = useLocalSearchParams<{ query?: string }>();
  const query = params.query ? decodeURIComponent(params.query) : "";

  return (
    <SafeAreaView>
      <DetailHeader
        title={query ? `"${query}"` : ""}
        showShareIcon={false}
        className="py-2"
      />
    </SafeAreaView>
  );
}

import { DetailHeader } from "@/components/signeduser/details";
import React from "react";
import { ScrollView } from "react-native";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function EditProfileScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader
        title="Edit Profile"
        showShareIcon={false}
        className="py-2 px-0"
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      ></ScrollView>
    </SafeAreaView>
  );
}

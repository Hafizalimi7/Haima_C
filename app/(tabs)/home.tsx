import { View, Text, ScrollView, Platform } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeTab() {
  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: Platform.OS === "ios" ? 20 : 0,
        }}
      >
        
      </ScrollView>
    </SafeAreaView>
  );
}

import React from "react";
import { useAuth } from "@/contexts/AuthContext";
import { router } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileTab() {
  const { logout } = useAuth();

  return (
    <SafeAreaView>
      <TouchableOpacity
        onPress={() => {
          logout();
          router.replace("/");
        }}
      >
        <Text>Sign out</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

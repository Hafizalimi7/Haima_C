import { View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { AuthHeader, ForgetPasswordForm } from "@/components/auth";

export default function ForgetPasswordScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 4,
          flex: 1,
        }}
      >
        <View className="flex-col items-start justify-start gap-y-4 flex-1">
          <AuthHeader
            showBackButton
            title="Forgot password?"
            subtitle="We’ll send an OTP to verify your account and reset your password"
          />
          <ForgetPasswordForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

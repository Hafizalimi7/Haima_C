import { AuthHeader, ResetPasswordForm } from "@/components/auth";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ResetPasswordScreen() {
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
            title="Reset Password"
            subtitle="We’ll send an OTP to verify your account and reset your password"
          />
          <ResetPasswordForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

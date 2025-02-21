import { AuthHeader, VerificationForm } from "@/components/auth";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function VerificationScreen() {
  const { email, type } = useLocalSearchParams<{
    email?: string;
    type?: string;
  }>();
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
            title="Verify Account"
            subtitle="Enter the 4-digit code sent to your email address"
          />
          <VerificationForm email={email} type={type} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

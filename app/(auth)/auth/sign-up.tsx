import { AuthHeader, SignUpForm } from "@/components/auth";
import { View, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SignUpScreen() {
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
            title="Sign Up"
            subtitle="Let’s get you set up in just a few taps"
          />
          <SignUpForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

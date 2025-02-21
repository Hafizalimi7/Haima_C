import { AuthHeader, SignInForm } from "@/components/auth";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SigninScreen() {
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
            showBackButton={false}
            title="Sign in"
            subtitle="Hi there! Welcome back"
          />
          <SignInForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

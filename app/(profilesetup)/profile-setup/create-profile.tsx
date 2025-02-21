import { AuthHeader } from "@/components/auth";
import { CreateProfileForm } from "@/components/profile";
import { ScrollView, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function CreateProfileScreen() {
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
            title="Setup your profile"
            subtitle="Almost there! Just a few more details."
          />
          <CreateProfileForm />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

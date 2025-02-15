import { useRouter } from "expo-router";
import { Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  const router = useRouter();
  return (
    <SafeAreaView>
      <TouchableOpacity onPress={() => router.push("/(tabs)/home")}>
        <Text className="text-3xl font-medium"> OnboardingScreen</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

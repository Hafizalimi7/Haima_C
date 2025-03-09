import { OnboardingSlider } from "@/components/onboarding";
import { View } from "react-native";

export default function OnboardingScreen() {
  return (
    <View className="flex-1 bg-primary-800">
      <OnboardingSlider />
    </View>
  );
}

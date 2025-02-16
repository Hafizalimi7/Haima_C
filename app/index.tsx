import { OnboardingSlider } from "@/components/onboarding";
import { SafeAreaView } from "react-native-safe-area-context";

export default function OnboardingScreen() {
  return (
    <SafeAreaView className="flex-1 bg-primary-800">
      <OnboardingSlider />
    </SafeAreaView>
  );
}

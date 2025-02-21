import { AuthHeader } from "@/components/auth";
import { ChooseProductCategory } from "@/components/profile";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProfileInterestScreen() {
  const { back } = useRouter();
  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 6,
          flex: 1,
        }}
      >
        <View className="flex-row items-center justify-between">
          <TouchableOpacity onPress={() => back()}>
            <Image
              source={icons.backarrowIcon}
              alt="back icon logo"
              resizeMode="contain"
              className="w-8 h-8"
            />
          </TouchableOpacity>
          <CustomButton
            testID="skip-button"
            handlePress={() => {}}
            className="bg-lightGrey px-6 py-1.5 min-h-7"
          >
            <Text className="text-base font-semibold text-primary">Skip</Text>
          </CustomButton>
        </View>
        <View className="flex-col items-start justify-start gap-y-4 flex-1 pt-4">
          <AuthHeader
            showBackButton={false}
            title="Select your interests"
            subtitle="Let us recommend what you love"
          />
          <ChooseProductCategory />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

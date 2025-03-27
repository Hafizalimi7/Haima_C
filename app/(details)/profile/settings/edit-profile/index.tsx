import React from "react";
import EditProfileForm from "@/components/signeduser/userprofile/edit/EditProfileForm";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "@/components/signeduser/userprofile";
import { useLocalSearchParams } from "expo-router";

export default function EditProfileScreen() {
  const { email, phoneNumber } = useLocalSearchParams<{
    email?: string;
    phoneNumber?: string;
  }>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ProfileHeader
        title="Edit Profile"
        showShareIcon={false}
        className="py-2 px-0"
      />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <EditProfileForm email={email} phoneNumber={phoneNumber} />
      </ScrollView>
    </SafeAreaView>
  );
}

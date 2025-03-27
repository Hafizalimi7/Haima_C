import React from "react";
import UpdateEmailContainer from "@/components/signeduser/userprofile/edit/UpdateEmailContainer";
import UpdatePhoneContainer from "@/components/signeduser/userprofile/edit/UpdatePhoneContainer";
import { useLocalSearchParams } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UpdateProfileInfoDetailScreen() {
  const { email, phoneNumber, status } = useLocalSearchParams<{
    email?: string;
    status?: string;
    phoneNumber?: string;
  }>();

  return (
    <SafeAreaView className="flex-1 bg-white">
      {email ? (
        <UpdateEmailContainer email={email} status={status} />
      ) : (
        <UpdatePhoneContainer phoneNumber={phoneNumber} />
      )}
    </SafeAreaView>
  );
}

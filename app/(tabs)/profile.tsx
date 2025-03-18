import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, ScrollView, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import signeduser from "@/constants/icons/signeduser";
import {
  UserProfileAction,
  UserProfileDetail,
  UserProfileStats,
} from "@/components/signeduser/userprofile";
import { ListingContainer } from "@/components/signeduser/userprofile/listings";

export default function ProfileTab() {
  const { push } = useRouter();
  const { tab } = useLocalSearchParams<{
    tab?: string;
  }>();
  const currentTab = tab || "item";

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader
        title="Uthman Empire"
        showShareIcon={true}
        renderIcon={
          <TouchableOpacity onPress={() => push("/profile/settings")}>
            <Image
              source={signeduser.gearIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        }
      />
      <View className="w-full  flex-col items-start justify-start gap-y-5 px-5">
        <UserProfileDetail />
        <UserProfileAction />
        <UserProfileStats />
      </View>
      <ListingContainer currentTab={currentTab} />
    </SafeAreaView>
  );
}

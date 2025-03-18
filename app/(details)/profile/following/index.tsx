import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { DetailHeader } from "@/components/signeduser/details";
import { Link, useLocalSearchParams } from "expo-router";
import {
  FollowingBrands,
  FollowingVendors,
} from "@/components/signeduser/userprofile/following";

export const TabList = [
  {
    path: "vendors",
    text: "Vendors",
  },
  {
    path: "brands",
    text: "Brands",
  },
];

export default function UserFollowingScreen() {
  const { tab } = useLocalSearchParams<{
    tab?: string;
  }>();

  const currentTab = tab || "vendors";
  let pageContentTab;

  if (currentTab === "brands") {
    pageContentTab = <FollowingBrands />;
  } else {
    pageContentTab = <FollowingVendors />;
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Following" showShareIcon={false} />

      <View className="w-full px-4">
        <View className="w-full bg-[#0F12251A] h-12 rounded-full flex-row items-center justify-between p-1">
          {TabList.map(({ path = "vendors", text }, index) => (
            <Link
              href={`/profile/following?tab=${path}`}
              key={index}
              className={`w-2/4 h-full text-center rounded-full ${
                path === tab ? "bg-primary" : "bg-transparent"
              }`}
            >
              <View className="flex-row items-center justify-center h-full">
                <Text
                  className={`text-base font-normal  ${
                    path === tab ? "text-white" : "text-primary"
                  }`}
                >
                  {text}
                </Text>
              </View>
            </Link>
          ))}
        </View>
      </View>
      <View className="w-full">{pageContentTab}</View>
    </SafeAreaView>
  );
}

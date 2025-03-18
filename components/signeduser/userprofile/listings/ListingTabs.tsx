import React from "react";
import { View, Text } from "react-native";
import { useAuth } from "@/contexts/AuthContext";
import { Link } from "expo-router";

interface ListingTabsProps {
  currentTab: string;
}

const ListingTabs: React.FC<ListingTabsProps> = ({ currentTab }) => {
  const { currentUser } = useAuth();

  return (
    <View className="w-full border-b-2 border-grey">
      {currentUser?.id === "buyer_1" ? (
        <CurrentUserTab currentTab={currentTab} />
      ) : (
        <View className="w-full flex-row items-center justify-center pb-2">
          <Text className="text-base font-medium text-primary">
            Item Listings
          </Text>
        </View>
      )}
    </View>
  );
};

const CurrentUserTab: React.FC<{ currentTab: string }> = ({ currentTab }) => {
  const TabLists = [
    {
      path: "item",
      text: "Your Listings",
    },
    {
      path: "purchases",
      text: "Purchases",
    },
  ];

  return (
    <View className="w-full flex-row items-center justify-between">
      {TabLists.map((navigation, index) => (
        <Link
          href={`/profile?tab=${navigation.path}`}
          key={index}
          className={`w-2/4 text-center pb-2 translate-y-0.5  ${
            navigation.path === currentTab ? "border-b-2 boeder-primary" : ""
          }`}
        >
          <Text className="text-base font-normal text-grey-800">
            {navigation.text}
          </Text>
        </Link>
      ))}
    </View>
  );
};

export default ListingTabs;

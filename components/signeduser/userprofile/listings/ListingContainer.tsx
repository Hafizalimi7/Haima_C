import React from "react";
import { View } from "react-native";
import ListingTabs from "./ListingTabs";
import { useAuth } from "@/contexts/AuthContext";
import CurrentUserListing from "./CurrentUserListing";
import AnotherUserListing from "./AnotherUserListing";

interface ListingContainerProps {
  currentTab: string;
}

const ListingContainer: React.FC<ListingContainerProps> = ({ currentTab }) => {
  const { currentUser } = useAuth();

  return (
    <View className="w-full flex-col items-start justify-start gap-y-3 mt-5">
      <View className="px-5 w-full">
        <ListingTabs currentTab={currentTab} />
      </View>
      {currentUser?.id === "buyer_1" ? (
        <CurrentUserListing currentTab={currentTab} />
      ) : (
        <AnotherUserListing />
      )}
    </View>
  );
};

export default ListingContainer;

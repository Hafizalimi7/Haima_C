import React from "react";
import { icons } from "@/constants";
import { useSearch } from "@/contexts/SearchProvider";
import { Alert, FlatList, Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { NoRecentSearch } from "../emptyUi";

const RecentSearches: React.FC = () => {
  const { setSearchQuery, recentSearches, removeSearchTerm, clearAllSearches } =
    useSearch();

  const handleClearAll = () => {
    Alert.alert(
      "Clear All Searches",
      "Are you sure you want to clear all recent searches?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Clear",
          onPress: clearAllSearches,
          style: "destructive",
        },
      ]
    );
  };

  return (
    <View className="w-full">
      {recentSearches.length !== 0 && (
        <View className="flex-row justify-between items-center mb-4">
          <Text className="text-base font-semibold text-primary">
            Recent Searches
          </Text>
          {recentSearches.length > 0 && (
            <TouchableOpacity onPress={handleClearAll}>
              <Text className="text-danger text-base font-semibold">
                Clear All
              </Text>
            </TouchableOpacity>
          )}
        </View>
      )}

      {recentSearches.length === 0 ? (
        <NoRecentSearch />
      ) : (
        <FlatList
          data={recentSearches}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <View className="flex-row justify-between items-center py-3">
              <TouchableOpacity
                onPress={() => setSearchQuery(item)}
                className="flex-1"
              >
                <Text className="text-base">{item}</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => removeSearchTerm(item)}>
                <Image
                  source={icons.closeIcon}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
              </TouchableOpacity>
            </View>
          )}
        />
      )}
    </View>
  );
};

export default RecentSearches;

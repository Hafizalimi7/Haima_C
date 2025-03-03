import * as React from "react";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useSearch } from "@/contexts/SearchProvider";
import { useRouter } from "expo-router";
import { View, Image, TextInput, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  RecentSearches,
  SearchSuggestions,
} from "@/components/signeduser/categories/search";

export default function SearchScreen() {
  const { searchQuery, setSearchQuery, searchProducts, handleSearch } =
    useSearch();
  const { back, push } = useRouter();

  React.useEffect(() => {
    if (searchQuery.trim()) {
      searchProducts(searchQuery);
    }
  }, [searchQuery]);

  const handleSearchIconCLick = () => {
    if (searchQuery.trim()) {
      handleSearch(searchQuery);
      push(`/search/${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white px-5">
      <View className="w-full flex-row gap-x-3 items-center justify-start">
        <TouchableOpacity onPress={() => back()}>
          <Image
            source={icons.backarrowIcon}
            alt="back icon logo"
            resizeMode="contain"
            className="w-8 h-8"
          />
        </TouchableOpacity>
        <View className="flex-1 border border-grey rounded-full min-h-12 px-5 flex-row items-center gap-x-3 my-5 overflow-hidden">
          <TouchableOpacity onPress={handleSearchIconCLick}>
            <Image
              source={signeduser.searchIcon}
              resizeMode="contain"
              className="w-5 h-5"
            />
          </TouchableOpacity>
          <TextInput
            className="bg-white pr-12 h-full text-sm font-normal w-[80%]"
            placeholder="Search items, vendors etc."
            placeholderTextColor="#98A2B3"
            value={searchQuery}
            onChangeText={setSearchQuery}
            onSubmitEditing={handleSearchIconCLick}
            returnKeyType="search"
          />
          {searchQuery.length !== 0 && (
            <TouchableOpacity onPress={() => setSearchQuery("")}>
              <Image
                source={icons.searchCloseIcon}
                resizeMode="contain"
                className="w-5 h-5"
              />
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View className="w-full">
        {searchQuery.length > 0 ? <SearchSuggestions /> : <RecentSearches />}
      </View>
    </SafeAreaView>
  );
}

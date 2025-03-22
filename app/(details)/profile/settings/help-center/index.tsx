import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "@/components/signeduser/userprofile";
import signeduser from "@/constants/icons/signeduser";
import { useRouter } from "expo-router";
import { helpCenterData } from "@/data/settings";

export default function HelpCenterScreen() {
  const { push } = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={helpCenterData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => push(`/profile/settings/help-center/${item.id}`)}
            className="flex-row items-center justify-between px-4 py-5 border-b border-[#E2E2E2]"
          >
            <Text className="text-base font-normal text-grey-800">
              {item.title}
            </Text>

            <Image
              source={signeduser.chevronarrowIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingBottom: 15,
        }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <ProfileHeader title="Help Center" showShareIcon={false} />

            <View className="flex-1 border border-grey rounded-full min-h-12 px-5 flex-row items-center gap-x-3 my-5 overflow-hidden">
              <TouchableOpacity>
                <Image
                  source={signeduser.searchIcon}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
              </TouchableOpacity>
              <TextInput
                className="bg-white pr-12 h-full text-sm font-normal w-[80%]"
                placeholder="Search for help"
                placeholderTextColor="#98A2B3"
                returnKeyType="search"
              />
            </View>
          </React.Fragment>
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

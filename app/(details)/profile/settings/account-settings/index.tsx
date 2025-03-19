import React from "react";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { ProfileHeader } from "@/components/signeduser/userprofile";
import { Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import { FlatList } from "react-native";
import { accountSettingsOptions } from "@/data/settings";

export default function AccountSettingsScreen() {
  const { push } = useRouter();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <FlatList
        data={accountSettingsOptions}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => item.href && push(item.href)}
            className="flex-row items-center justify-between px-4 py-5 border-b border-[#E2E2E2]"
          >
            <View className="flex-row items-center gap-x-3">
              <Image
                source={item.icon}
                className="w-6 h-6"
                resizeMode="contain"
                tintColor={"#0F1225"}
              />
              <Text className="text-base font-normal text-grey-800">
                {item.title}
              </Text>
            </View>

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
          <ProfileHeader
            title="Account Settings"
            showShareIcon={false}
            className="py-2 px-0"
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
}

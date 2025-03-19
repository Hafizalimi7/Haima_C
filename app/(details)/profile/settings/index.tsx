import React from "react";
import {
  View,
  Text,
  FlatList,
  Switch,
  TouchableOpacity,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useBooleanControl from "@/hooks/useBooleanControl";
import { settingsOptions } from "@/data/settings";
import signeduser from "@/constants/icons/signeduser";
import { useRouter } from "expo-router";
import { ProfileHeader } from "@/components/signeduser/userprofile";
import { LogoutModal } from "@/components/signeduser/userprofile/edit";

export default function ProfileSettingsScreen() {
  const { state: isDarkMode, toggle: toggleDarkMode } = useBooleanControl();
  const {
    state: isLogoutOpen,
    setTrue: setIsLogOutTrue,
    setFalse: setIsLogOutFalse,
  } = useBooleanControl();
  const { push } = useRouter();

  return (
    <React.Fragment>
      <SafeAreaView className="flex-1 bg-white">
        <FlatList
          data={settingsOptions}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              onPress={() => item.href && push(item.href)}
              className="flex-row items-center justify-between px-4 py-5 border-b border-[#E2E2E2]"
              disabled={item.id === "05"}
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
              {item.id === "05" ? (
                <Switch value={isDarkMode} onValueChange={toggleDarkMode} />
              ) : (
                <Image
                  source={signeduser.chevronarrowIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              )}
            </TouchableOpacity>
          )}
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingBottom: 15,
          }}
          ListHeaderComponent={() => (
            <ProfileHeader
              title="Settings"
              showShareIcon={false}
              className="py-2 px-0"
              type="parent"
            />
          )}
          ListFooterComponent={() => (
            <TouchableOpacity
              onPress={setIsLogOutTrue}
              className="flex-row items-center justify-between px-4 py-5"
            >
              <View className="flex-row items-center gap-x-3">
                <Image
                  source={signeduser.logoutIcon}
                  className="w-6 h-6"
                  resizeMode="contain"
                  tintColor={"#0F1225"}
                />
                <Text className="text-base font-normal text-grey-800">
                  Log Out
                </Text>
              </View>
              <Image
                source={signeduser.chevronarrowIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
          )}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      {isLogoutOpen && (
        <LogoutModal show={isLogoutOpen} onClose={setIsLogOutFalse} />
      )}
    </React.Fragment>
  );
}

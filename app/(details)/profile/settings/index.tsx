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
import { DetailHeader } from "@/components/signeduser/details";
import useBooleanControl from "@/hooks/useBooleanControl";
import { settingsOptions } from "@/data/settings";
import signeduser from "@/constants/icons/signeduser";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

export default function ProfileSettingsScreen() {
  const { state: isDarkMode, toggle: toggleDarkMode } = useBooleanControl();
  const { push } = useRouter();
  const { logout } = useAuth();

  return (
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
          <DetailHeader
            title="Settings"
            showShareIcon={false}
            className="py-2 px-0"
          />
        )}
        ListFooterComponent={() => (
          <TouchableOpacity
            onPress={() => {
              logout();
              push("/auth/sign-in");
            }}
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
  );
}

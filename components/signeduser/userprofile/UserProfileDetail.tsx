import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import signeduser from "@/constants/icons/signeduser";
import { getInitials } from "@/helpers/string";
import { useAuth } from "@/contexts/AuthContext";

const UserProfileDetail: React.FC = () => {
  const { push } = useRouter();
  const { currentUser } = useAuth();

  return (
    <View className="w-full flex-row items-center justify-between">
      <View className="flex-row items-center justify-start gap-x-3">
        <View className="w-16 h-16 bg-lightGrey3 rounded-full flex-row items-center justify-center text-center">
          <Text className="text-lg font-bold text-primary">
            {getInitials("AIsha Uthman")}
          </Text>
        </View>
        <Text className="text-base font-normal text-primary">AIsha Uthman</Text>
      </View>
      {currentUser?.id === "buyer_1" && (
        <TouchableOpacity
          onPress={() => push("/profile/settings/edit-profile")}
        >
          <Image
            source={signeduser.editIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default UserProfileDetail;

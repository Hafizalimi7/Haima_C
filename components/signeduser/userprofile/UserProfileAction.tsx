import React from "react";
import { View, Text } from "react-native";
import { CustomButton } from "@/components/ui";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";

const UserProfileAction: React.FC = () => {
  const { push } = useRouter();
  const { currentUser } = useAuth();

  if (currentUser?.id === "seller_1")
    return (
      <View className="w-full flex-row items-center justify-between gap-x-2">
        <CustomButton className="w-2/4 bg-primary/10">
          <Text className="text-sm font-semibold text-primary">Following</Text>
        </CustomButton>
        <CustomButton
          className="w-2/4 bg-accent"
          onPress={() => push(`/messages/seller_1`)}
        >
          <Text className="text-sm font-semibold text-primary">Message</Text>
        </CustomButton>
      </View>
    );
};

export default UserProfileAction;

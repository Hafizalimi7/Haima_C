import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { DetailHeader } from "../../details";
import { useRouter } from "expo-router";
import { CustomButton } from "@/components/ui";
import { Ionicons } from "@expo/vector-icons";
import { icons } from "@/constants";

interface UpdateEmailContainerProps {
  email?: string;
  status?: string;
}

const UpdateEmailContainer: React.FC<UpdateEmailContainerProps> = ({
  email,
  status = "Pending",
}) => {
  const { push } = useRouter();

  const handleEditEmail = (email: string) => {
    push({
      pathname: "/profile/settings/edit-profile/verification",
      params: {
        email,
      },
    });
  };

  const handleUpdateEmail = (email: string) => {
    push({
      pathname: "/profile/settings/edit-profile",
      params: {
        email,
      },
    });
  };

  return (
    <View className="flex-1">
      <DetailHeader title="Update Email" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
          <View className="w-full flex-col gap-y-3">
            <Text className="text-base font-normal max-w-[340px] text-grey-800">
              You need to confirm{" "}
              <Text className="font-semibold text-secondary">{email}</Text> is
              your email address before you can update it
            </Text>
            {status === "Verified" && (
              <View className="w-full border border-grey rounded-full min-h-12 px-5 flex-row items-center justify-between gap-x-3 my-3">
                <View className="flex-row items-center justify-start gap-x-5">
                  <Image
                    source={icons.emailIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                  <Text className="text-sm font-normal text-grey-800">
                    {email}
                  </Text>
                </View>
                <Ionicons
                  name="checkmark-circle-sharp"
                  size={20}
                  color="#1CB374"
                />
              </View>
            )}
          </View>
          <View className="w-full">
            {status === "Verified" ? (
              <CustomButton
                handlePress={() => handleUpdateEmail(email || "")}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={!email}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  Update Email
                </Text>
              </CustomButton>
            ) : (
              <CustomButton
                handlePress={() => handleEditEmail(email || "")}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={!email}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  Send Verification Code
                </Text>
              </CustomButton>
            )}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdateEmailContainer;

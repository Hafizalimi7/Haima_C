import React, { useState } from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { DetailHeader } from "../../details";
import { useRouter } from "expo-router";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { FormFieldInput } from "@/components/ui/inputs";

interface UpdateEmailContainerProps {
  phoneNumber?: string;
}

const UpdatePhoneContainer: React.FC<UpdateEmailContainerProps> = ({
  phoneNumber,
}) => {
  const { push } = useRouter();
  const [newPhoneNumber, setNewPhoneNumber] = useState("");

  const handleEditPhoneNumber = (phoneNumber: string) => {
    push({
      pathname: "/profile/settings/edit-profile/verification",
      params: {
        phoneNumber,
      },
    });
  };

  return (
    <View className="flex-1">
      <DetailHeader title="Update Phone Number" showShareIcon={false} />
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
              A verification code will be sent to your new number before it can
              be updated
            </Text>
            <View className="flex-col items-start justify-start gap-y-2 w-full">
              <Text className="text-base font-medium text-grey-800">
                Current Number
              </Text>
              <View className="w-full border border-grey rounded-full min-h-12 px-5 flex-row items-center justify-between gap-x-3">
                <View className="flex-row items-center justify-start gap-x-5">
                  <Image
                    source={icons.phoneIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                  <Text className="text-sm font-normal text-grey-800">
                    {phoneNumber}
                  </Text>
                </View>
                <Image
                  source={signeduser.chevronarrowIcon}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={true}
                  label={
                    <Text className="text-base font-medium text-grey-800">
                      New Number
                    </Text>
                  }
                  value={newPhoneNumber}
                  handleChangeText={setNewPhoneNumber}
                  placeholder="New Phone number"
                  containerClassName=""
                  className="px-10"
                  errorClass="border-grey"
                />
                <View className="flex-row items-center justify-start absolute top-[32px] left-[20px]">
                  <Image
                    source={icons.phoneIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
            </View>
          </View>
          <View className="w-full">
            <CustomButton
              handlePress={() => handleEditPhoneNumber(newPhoneNumber)}
              className="w-full bg-primary disabled:bg-grey group"
              disabled={!newPhoneNumber}
            >
              <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                Send Verification Code
              </Text>
            </CustomButton>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default UpdatePhoneContainer;

import React from "react";
import { Alert, Image, Text, View } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";
import { useRouter } from "expo-router";

interface AuthOptionSheetProps {}

const AuthOptionSheet: React.FC<AuthOptionSheetProps> = () => {
  const { bottomSheetRef, closeAuthSheet } = useBottomSheet();
  const { push } = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BottomSheetModal ref={bottomSheetRef} snapPoints={["60%"]}>
        <BottomSheetView className="flex-1 p-5">
          <View className="w-full pb-2">
            <CustomButton
              handlePress={() => {
                closeAuthSheet();

                setTimeout(() => {
                  push("/auth/sign-up");
                }, 100);
              }}
              className="bg-primary w-full"
            >
              <Text className="text-base font-semibold text-white">
                Sign up
              </Text>
            </CustomButton>
          </View>
          <CustomButton
            handlePress={() => {
              closeAuthSheet();
            }}
            className="bg-white border border-primary w-full"
          >
            <Text className="text-base font-semibold text-primary">
              Continue as Guest
            </Text>
          </CustomButton>
          <View className="w-full flex-row items-center justify-between space-x-3 py-6">
            <View className="w-[139px] h-[1px] bg-grey" />
            <Text className="text-base font-light text-grey-800">or</Text>
            <View className="w-[139px] h-[1px] bg-grey" />
          </View>
          <CustomButton
            handlePress={() => Alert.alert("Google", "Login with your Google")}
            className="bg-white border border-grey w-full"
          >
            <View className="flex-row items-center justify-center">
              <Image
                source={icons.googleIcon}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-base font-medium text-primary w-[70%] text-center">
                Continue with Google
              </Text>
            </View>
          </CustomButton>
          <View className="w-full py-3">
            <CustomButton
              handlePress={() =>
                Alert.alert("Facebook", "Login with your Facebook")
              }
              className="bg-white border border-grey w-full"
            >
              <View className="flex-row items-center justify-center">
                <Image
                  source={icons.facebookIcon}
                  className="w-6 h-6"
                  resizeMode="contain"
                />
                <Text className="text-base font-medium text-primary w-[70%] text-center pl-5">
                  Continue with Facebook
                </Text>
              </View>
            </CustomButton>
          </View>
          <CustomButton
            handlePress={() =>
              Alert.alert("Apple Id", "Login with your Apple Id")
            }
            className="bg-white border border-grey w-full"
          >
            <View className="flex-row items-center justify-center">
              <Image
                source={icons.appleIcon}
                className="w-6 h-6"
                resizeMode="contain"
              />
              <Text className="text-base font-medium text-primary  w-[70%] text-center">
                Continue with Apple
              </Text>
            </View>
          </CustomButton>
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default AuthOptionSheet;

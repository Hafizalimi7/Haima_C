import { View, Text, Alert, Image } from "react-native";
import { CustomButton } from "../ui";
import { icons } from "@/constants";

const SocialAuthOptions: React.FC = () => {
  return (
    <View className="w-full">
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
        handlePress={() => Alert.alert("Apple Id", "Login with your Apple Id")}
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
    </View>
  );
};

export default SocialAuthOptions;

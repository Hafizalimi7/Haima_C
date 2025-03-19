import {
  View,
  Text,
  ImageBackground,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { icons, images } from "@/constants";
import { CustomButton } from "@/components/ui";
import signeduser from "@/constants/icons/signeduser";
import { formatCurrency } from "@/helpers/currency";
import useBooleanControl from "@/hooks/useBooleanControl";
import { useRouter } from "expo-router";

const WalletBalance: React.FC = () => {
  const { state: showBalance, toggle: toggleShowBalance } = useBooleanControl();
  const { push } = useRouter();

  return (
    <View className="w-full bg-[#0F1225E8] rounded-xl overflow-hidden mt-5">
      <ImageBackground
        source={images.walletbgImage}
        className="w-full h-[153px] rounded-xl"
      >
        <View className="w-full h-full flex-col items-center justify-center gap-y-5 p-4">
          <View className="w-full flex-row items-center justify-between">
            <Text className="text-base font-normal text-white">
              Total balance
            </Text>
            <CustomButton
              handlePress={() => push("/profile/settings/user-wallet/top-up")}
              className="min-h-9 px-4 bg-[#D3AC2A24] border border-secondary"
            >
              <View className="flex-row items-center justify-center gap-x-2">
                <Text className="text-base font-medium text-secondary">
                  Add Money
                </Text>
                <Image
                  source={signeduser.plusIcon}
                  resizeMode="contain"
                  className="w-4 h-4"
                />
              </View>
            </CustomButton>
          </View>
          <View className="flex-row items-center justify-start gap-x-2 w-full">
            <Text className="text-3xl font-semibold text-white">
              {!showBalance ? formatCurrency(2000) : "*****"}
            </Text>
            <TouchableOpacity onPress={toggleShowBalance}>
              <Image
                source={!showBalance ? icons.showEyeIcon : icons.eyeIcon}
                resizeMode="contain"
                className="w-4 h-4"
              />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default WalletBalance;

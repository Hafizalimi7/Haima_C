import React from "react";
import CustomizeSwitch from "@/components/ui/inputs/CustomizeSwitch";
import { Fee, formatCurrency } from "@/helpers/currency";
import { Link } from "expo-router";
import { View, Text } from "react-native";

const ProtectFee: React.FC = () => {
  return (
    <View className="px-4 w-full my-5">
      <View className="w-full bg-grey-100 p-4 rounded-xl flex-row items-start justify-start gap-x-3">
        <CustomizeSwitch isOn={true} />
        <View className="flex-col items-start justify-start gap-y-1">
          <Text className="text-base font-medium text-primary">
            Buy protection fee ({formatCurrency(Fee)})
          </Text>
          <Text className="text-sm font-normal text-start text-grey-800 w-[240px]">
            This serves as a protection fee for your orders in case of loss or
            damages
          </Text>
          <Link
            href="/home"
            className="text-sm font-semibol text-start text-secondary underline"
          >
            Learn more
          </Link>
        </View>
      </View>
    </View>
  );
};

export default ProtectFee;

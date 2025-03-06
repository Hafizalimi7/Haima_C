import React from "react";
import { useShipping } from "@/contexts/ShippingProvider";
import { View, Text } from "react-native";
import { CustomButton } from "@/components/ui";
import { RadioButton } from "@/components/ui/inputs";

export enum ShippingMethodType {
  PICKUP_LOCATION = "PICKUP_LOCATION",
  HOME_DELIVERY = "HOME_DELIVERY",
}

const OPTIONS = [
  { id: ShippingMethodType.PICKUP_LOCATION, label: "Ship to pick-up location" },
  { id: ShippingMethodType.HOME_DELIVERY, label: "Home Delivery" },
];

const ShippingMethod: React.FC = () => {
  const { setSelectedMethod, selectedMethod } = useShipping();

  return (
    <View className="w-full bg-lightGrey2 p-4 rounded-xl flex-col items-start gap-y-4">
      <Text className="text-base font-medium text-primary">
        Choose shipping method
      </Text>
      <View className="flex-col items-start justify-start gap-y-3 w-full">
        {OPTIONS.map((option) => (
          <CustomButton
            handlePress={() => setSelectedMethod(option.id)}
            className="w-full"
          >
            <View className="flex-row items-center justify-start gap-x-2">
              <RadioButton selected={selectedMethod === option.id} />
              <Text className="text-base font-normal text-grey-800">
                {option.label}
              </Text>
            </View>
          </CustomButton>
        ))}
      </View>
    </View>
  );
};

export default ShippingMethod;

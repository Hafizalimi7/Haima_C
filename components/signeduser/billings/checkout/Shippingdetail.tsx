import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useShipping } from "@/contexts/ShippingProvider";
import { deliveryOption } from "@/data/products";
import { ProductType } from "@/types/product";
import { useRouter } from "expo-router";
import React from "react";
import { Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";

interface ShippingdetailProps {
  data: ProductType;
  type?: "user" | "checkout";
}

const Shippingdetail: React.FC<ShippingdetailProps> = ({
  data,
  type = "checkout",
}) => {
  const { push } = useRouter();
  const { shippingAddresses, selectedAddressId, selectedDelievryAddressId } =
    useShipping();
  const selectedAddress = shippingAddresses.find(
    (item) => item.id === selectedAddressId
  );
  const selectedDeliveryAddress = deliveryOption.find(
    (item) => item.id === selectedDelievryAddressId
  );

  return (
    <View className="w-full flex-col items-start justify-start gap-y-3 py-6">
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-base font-medium text-primary">
          Shipping Details
        </Text>
        {type === "checkout" && (
          <TouchableOpacity
            onPress={() => {
              push({
                pathname: "/shipping-detail/info",
                params: { productId: data.id },
              });
            }}
          >
            <Text className="text-secondary text-base font-bold">Change</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="flex-col items-start justify-start gap-y-1 w-full">
        {selectedAddress && (
          <View className="p-4 border rounded-lg flex-row items-start justify-start gap-x-5 w-full bg-[#F6F6F6] border-grey">
            <Image
              source={icons.locationIcon}
              resizeMode="contain"
              className="w-5 h-5"
            />
            <View className="flex-col items-start justify-start gap-y-3">
              <Text className="text-base font-semibold text-grey-800">
                {selectedAddress.fullname}
              </Text>
              <Text className="text-base font-normal text-grey-800 w-[120px] test-start">
                {selectedAddress.address1}
              </Text>
              <Text className="text-base font-normal text-grey-800">
                {selectedAddress.phoneNumber}
              </Text>
            </View>
          </View>
        )}
        <View className="p-4 border rounded-lg flex-row items-center justify-start gap-x-4 w-full bg-[#F6F6F6] border-grey">
          <Image
            source={signeduser.bikeIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
          <Text className="text-sm font-normal text-grey-800">
            Home Delivery
          </Text>
        </View>
        {selectedDeliveryAddress && (
          <View className="w-full border p-4 bg-[#F6F6F6] border-grey flex-row items-start justify-start gap-x-4 rounded-lg">
            <Image
              source={selectedDeliveryAddress.deliveryImage}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <View className="flex-col items-start justify-start gap-y-2">
              <Text className="text-base font-normal text-primary">
                {selectedDeliveryAddress.title}
              </Text>
              <Text className="text-base font-normal text-grey-800">
                To be delivered in 2 to 3 working days
              </Text>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default Shippingdetail;

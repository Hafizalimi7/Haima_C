import React from "react";
import { RadioButton } from "@/components/ui/inputs";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useShipping } from "@/contexts/ShippingProvider";
import { deliveryOption } from "@/data/products";
import { formatCurrency } from "@/helpers/currency";
import { ShippingFormValue } from "@/types/billing";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";

const HomeDelivery: React.FC = () => {
  const { push } = useRouter();
  const {
    shippingAddresses,
    selectedAddressId,
    removeShippingAddress,
    editAddress,
    resetAddressState,
  } = useShipping();

  const handleEdit = (address: ShippingFormValue) => {
    editAddress(address);
    push("/shipping-detail/create-shipping-address");
  };

  return (
    <View className="w-full flex-col items-start justify-start gap-y-6">
      <View className="w-full bg-lightGrey2 p-4 rounded-xl flex-col items-start gap-y-4">
        <View className="w-full flex-row items-center justify-between">
          <Text className="text-base font-medium text-primary">
            Shipping Address
          </Text>
          <TouchableOpacity
            onPress={() => {
              push("/shipping-detail/create-shipping-address");
              resetAddressState();
            }}
          >
            <Text className="text-secondary text-base font-bold">Add New</Text>
          </TouchableOpacity>
        </View>
        <View className="w-full">
          {shippingAddresses.length === 0 ? (
            <Text className="text-sm font-normal text-grey-800">
              No address found
            </Text>
          ) : (
            shippingAddresses.map((address) => (
              <View
                key={address.id}
                className={`p-4 border rounded-lg mb-4 flex-row items-start justify-start gap-x-5 w-full ${
                  selectedAddressId === address.id
                    ? "border-grey"
                    : "border-grey"
                }`}
              >
                <Image
                  source={icons.locationIcon}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <View className="flex-col items-start justify-start gap-y-3">
                  <Text className="text-base font-semibold text-grey-800">
                    {address.fullname}
                  </Text>
                  <Text className="text-base font-normal text-grey-800 w-[120px] test-start">
                    {address.address1}
                  </Text>
                  <Text className="text-base font-normal text-grey-800">
                    {address.phoneNumber}
                  </Text>
                  <View className="flex-row items-center justify-start gap-x-4">
                    <TouchableOpacity onPress={() => handleEdit(address)}>
                      <Text className="text-base font-medium text-primary">
                        Edit address
                      </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                      onPress={() => removeShippingAddress(address.id!)}
                    >
                      <Text className="text-base font-medium text-danger">
                        Delete address
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            ))
          )}
        </View>
      </View>
      {shippingAddresses.length !== 0 && <HomeDeliveryOption />}
    </View>
  );
};

const HomeDeliveryOption: React.FC = () => {
  const { selectedDelievryAddressId, handleHomeDeliverySelect } = useShipping();

  return (
    <View className="w-full bg-lightGrey2 p-4 rounded-xl flex-col items-start gap-y-4">
      <Text className="text-base font-medium text-primary">
        Home Delivery Options
      </Text>
      <View className="w-full">
        {deliveryOption.map((option) => (
          <View
            key={option.id}
            className="w-full border-b py-5 border-grey flex-row items-center justify-between"
          >
            <View className="fle-col items-start justify-start gap-y-3">
              <View className="flex-row items-center justify-start gap-x-4">
                <Image
                  source={option.deliveryImage}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="text-base font-normal text-primary">
                  {option.title}
                </Text>
              </View>
              <View className="flex-row items-center justify-start gap-x-4">
                <Image
                  source={signeduser.bikeIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="text-sm font-normal text-grey-800">
                  Delivery within 3-5 business days
                </Text>
              </View>
              <View className="flex-row items-center justify-start gap-x-4">
                <View />
                <Text className="text-base font-bold text-[#333333]">
                  {formatCurrency(1.49)}
                </Text>
              </View>
            </View>
            <TouchableOpacity onPress={() => handleHomeDeliverySelect(option.id)}>
              <RadioButton selected={selectedDelievryAddressId === option.id} />
            </TouchableOpacity>
          </View>
        ))}
      </View>
    </View>
  );
};

export default HomeDelivery;

import { icons } from "@/constants";
import { useShipping } from "@/contexts/ShippingProvider";
import { ShippingFormValue } from "@/types/billing";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";

const HomeDelivery: React.FC = () => {
  const { push } = useRouter();
  const {
    shippingAddresses,
    selectedAddressId,
    setSelectedAddressId,
    removeShippingAddress,
    editAddress,
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
            onPress={() => push("/shipping-detail/create-shipping-address")}
          >
            <Text className="text-secondary text-base font-bold">Add New</Text>
          </TouchableOpacity>
        </View>
        <ScrollView>
          {shippingAddresses.length === 0 ? (
            <Text className="text-sm font-normal text-grey-800">
              No address found
            </Text>
          ) : (
            shippingAddresses.map((address) => (
              <View
                key={address.id}
                className={`p-4 border rounded-lg mb-4 flex-row items-start justify-start gap-x-5 ${
                  selectedAddressId === address.id
                    ? "border-primary"
                    : "border-grey"
                }`}
              >
                <Image
                  source={icons.locationIcon}
                  resizeMode="contain"
                  className="w-5 h-5"
                />
                <View
                  // onPress={() => setSelectedAddressId(address.id!)}
                  className="flex-col items-start justify-start gap-y-3"
                >
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
        </ScrollView>
      </View>
      {shippingAddresses.length !== 0 && <HomeDeliveryOption />}
    </View>
  );
};

const HomeDeliveryOption = () => {
  return (
    <View className="w-full bg-lightGrey2 p-4 rounded-xl flex-col items-start gap-y-4">
      <Text className="text-base font-medium text-primary">
        Home Delivery Options
      </Text>
    </View>
  );
};

export default HomeDelivery;

import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products } from "@/data/products";
import { CustomButton, ModalPopUp } from "@/components/ui";
import {
  Itemdetail,
  Paymentdetail,
  Shippingdetail,
} from "@/components/signeduser/billings/checkout";
import useBooleanControl from "@/hooks/useBooleanControl";
import { icons } from "@/constants";

export default function CheckoutScreen() {
  const { push } = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const {
    state: successModal,
    setTrue: setSuccessModalTrue,
    setFalse: setSuccessModalFalse,
  } = useBooleanControl();

  const productDetail = products.find((item) => item.id === id);

  if (!productDetail) return;

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Checkout" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
          paddingHorizontal: 20,
        }}
      >
        <Itemdetail data={productDetail} />
        <Shippingdetail data={productDetail} />
        <Paymentdetail data={productDetail} />
      </ScrollView>
      <View
        className="w-full px-4 py-6 bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.04,
          shadowRadius: 3.7,
          elevation: 4,
        }}
      >
        <View className="w-full flex-row items-center justify-start gap-x-3">
          <CustomButton
            handlePress={() => setSuccessModalTrue()}
            className="w-full bg-primary border border-primary"
          >
            <Text className="text-sm text-white font-semibold">
              Proceed to pay
            </Text>
          </CustomButton>
        </View>
      </View>
      <ModalPopUp visible={successModal} className="">
        <View className="items-center flex-col justify-center gap-y-6 py-12">
          <Image
            source={icons.successIcon}
            resizeMode="contain"
            className="w-16 h-16 rounded-full"
          />
          <Text className="text-2xl font-semibold text-primary text-center">
            Payment Successful!
          </Text>
          <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
            Your order has been placed. Your order will now be processed by the
            seller.
          </Text>
          <View className="w-full px-5">
            <CustomButton
              handlePress={() => {
                push("/home");
                setSuccessModalFalse();
              }}
              className="w-full bg-primary"
            >
              <Text className="text-base text-white font-semibold">
                Continue Shopping
              </Text>
            </CustomButton>
          </View>
        </View>
      </ModalPopUp>
    </SafeAreaView>
  );
}

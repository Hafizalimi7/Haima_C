import { icons, images } from "@/constants";
import { usePayment } from "@/contexts/PaymentProvider";
import { ProductType } from "@/types/product";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface PaymentdetailProps {
  data: ProductType;
}

const Paymentdetail: React.FC<PaymentdetailProps> = ({ data }) => {
  const { push } = useRouter();
  const { cards, selectedCardId } = usePayment();

  // Find the selected payment method
  const selectedPayment = selectedCardId
    ? cards.find((card) => card.id === selectedCardId) || selectedCardId
    : cards[0];

  return (
    <View className="w-full flex-col items-start justify-start gap-y-3">
      <View className="w-full flex-row items-center justify-between">
        <Text className="text-base font-medium text-primary">
          Payment Details
        </Text>
        <TouchableOpacity
          onPress={() => {
            push({
              pathname: "/payments/payment-gateway",
              params: { productId: data.id },
            });
          }}
        >
          <Text className="text-secondary text-base font-bold">Change</Text>
        </TouchableOpacity>
      </View>
      {selectedPayment && (
        <View className="w-full flex-row items-center justify-start bg-[#F6F6F6] rounded-xl px-4 py-3">
          <View className="flex-row items-center gap-x-3">
            {typeof selectedPayment === "string" ? (
              <React.Fragment>
                <Image
                  source={
                    selectedPayment === "WALLET"
                      ? images.walletImage
                      : selectedPayment === "Google Pay"
                      ? icons.googleIcon
                      : icons.appleIcon
                  }
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="text-base font-semibold text-grey-800">
                  {selectedPayment}
                </Text>
              </React.Fragment>
            ) : (
              <React.Fragment>
                <Image
                  source={images.mastercardImage}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <View>
                  <Text className="text-base font-semibold text-grey-800">
                    Mastercard
                  </Text>
                  <Text className="text-base font-normal text-grey-800">
                    {selectedPayment.maskedCardNumber}
                  </Text>
                </View>
              </React.Fragment>
            )}
          </View>
        </View>
      )}
    </View>
  );
};

export default Paymentdetail;

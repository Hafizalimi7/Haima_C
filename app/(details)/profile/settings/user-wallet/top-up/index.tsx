import React, { useState } from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CurrencySymbol } from "@/helpers/currency";
import { useRouter } from "expo-router";
import { usePayment } from "@/contexts/PaymentProvider";
import {
  CreditCards,
  OtherPaymentOptions,
} from "@/components/signeduser/billings/payments";
import { CustomButton, ModalPopUp } from "@/components/ui";
import useBooleanControl from "@/hooks/useBooleanControl";
import { icons } from "@/constants";

export default function TopUpWalletScreen() {
  const { replace } = useRouter();
  const [depositAmount, setDepositAmount] = useState("");
  const { selectedCardId } = usePayment();
  const {
    state: successModal,
    setTrue: setSuccessModalTrue,
    setFalse: setSuccessModalFalse,
  } = useBooleanControl();

  const disableButton = !depositAmount || !selectedCardId;

  const handleSubmit = () => {
    if (!depositAmount) return;
    setSuccessModalTrue();
  };

  return (
    <React.Fragment>
      <SafeAreaView className="flex-1 bg-white">
        <DetailHeader
          title="Add Money"
          showShareIcon={false}
          className="py-2 px-0"
        />
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 10,
            paddingVertical: 10,
            flex: 1,
          }}
        >
          <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
            <View className="w-full flex-col items-start justify-start gap-y-3">
              <View className="flex-col items-start justify-start gap-y-2 w-full">
                <Text className="text-sm font-medium text-grey-800">
                  Enter Amount
                </Text>
                <View className="w-full relative">
                  <TextInput
                    className="w-full h-20 bg-lightGrey2 border border-primary-100 rounded-xl focus:border-primary text-2xl font-normal pl-14 pr-4"
                    keyboardType="numeric"
                    value={depositAmount}
                    onChangeText={setDepositAmount}
                  />
                  <View className="flex-row items-center justify-start absolute top-[19px] left-[20px]">
                    <Text className="text-4xl font-medium text-primary">
                      {CurrencySymbol}
                    </Text>
                  </View>
                </View>
              </View>
              <CreditCards />
              <OtherPaymentOptions showWalletBalance={false} />
            </View>

            <View className="w-full flex-col items-center justify-center gap-y-2">
              <CustomButton
                handlePress={() => handleSubmit()}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={disableButton}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  Add Money
                </Text>
              </CustomButton>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
      {successModal && (
        <ModalPopUp visible={successModal} className="">
          <View className="items-center flex-col justify-center gap-y-6 py-12">
            <Image
              source={icons.successIcon}
              resizeMode="contain"
              className="w-16 h-16 rounded-full"
            />
            <Text className="text-2xl font-semibold text-primary text-center">
              Money Added!
            </Text>
            <Text className="text-base font-normal text-grey-800 text-center max-w-[260px]">
              Your wallet has been topped up successfully.
            </Text>
            <View className="w-full px-5">
              <CustomButton
                handlePress={() => {
                  replace("/profile/settings/user-wallet");
                  setSuccessModalFalse();
                }}
                className="w-full bg-primary"
              >
                <Text className="text-base text-white font-semibold">
                  Back to Wallet
                </Text>
              </CustomButton>
            </View>
          </View>
        </ModalPopUp>
      )}
    </React.Fragment>
  );
}

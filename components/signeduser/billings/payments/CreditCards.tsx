import { RadioButton } from "@/components/ui/inputs";
import { images } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { usePayment } from "@/contexts/PaymentProvider";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const CreditCards: React.FC = () => {
  const { push } = useRouter();

  return (
    <View className="flex-col items-start justify-start gap-y-4 pt-5">
      <Text className="text-base font-medium text-grey-800">
        Credit & Debit card
      </Text>
      <TouchableOpacity
        onPress={() => push("/payments/create-card")}
        className="w-full"
      >
        <View className="w-full flex-row items-center justify-between bg-lightGrey2 rounded-xl px-4 h-12">
          <View className="flex-row items-center justify-start gap-x-3">
            <Image
              source={images.cardImage}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <Text className="text-base font-normal text-primary">Add card</Text>
          </View>
          <Image
            source={signeduser.chevronarrowIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </View>
      </TouchableOpacity>
      <CreditCard />
    </View>
  );
};

const CreditCard: React.FC = () => {
  const { cards, selectedCardId, setSelectedCardId, removeCard } = usePayment();

  return (
    <View className="w-full">
      {cards.map((option) => (
        <View
          key={option.id}
          className="w-full bg-lightGrey2 p-4 rounded-xl flex-row items-center justify-between"
        >
          <View className="flex-row items-start justify-start gap-x-2">
            <Image
              source={images.mastercardImage}
              resizeMode="contain"
              className="w-6 h-6"
            />
            <View className="flex-col items-start justify-start gap-y-1">
              <Text className="text-sm font-normal text-primary">
                Mastercard
              </Text>
              <Text className="text-xs font-normal text-grey-800">
                {option.cardNumber}
              </Text>
              {/* <TouchableOpacity onPress={() => removeCard(option.id!)}>
                <Text className="text-base font-medium text-danger">
                  Delete address
                </Text>
              </TouchableOpacity> */}
            </View>
          </View>
          <TouchableOpacity onPress={() => setSelectedCardId(option.id!)}>
            <RadioButton selected={selectedCardId === option.id} />
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

export default CreditCards;

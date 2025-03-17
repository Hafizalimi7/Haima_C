import React, { useEffect, useState } from "react";
import { CustomButton, ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import {
  CurrencySymbol,
  Fee,
  formatCurrency,
  PROTECTION_FEE_PERCENTAGE,
} from "@/helpers/currency";
import { MessageContent, ProductOffer } from "@/types/message";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  Alert,
} from "react-native";

interface MakeOfferModalProps {
  show: boolean;
  onClose: () => void;
  product: {
    id: string;
    title: string;
    price: number;
    productImage: string;
    offerPrice: number;
    sellerId: string;
  };
  onSendOffer: (offer: MessageContent) => void;
  existingOffer?: ProductOffer;
  mode?: "new" | "counter";
}

const MakeOfferModal: React.FC<MakeOfferModalProps> = ({
  show,
  onClose,
  product,
  onSendOffer,
  existingOffer,
  mode = "new",
}) => {
  const [offerAmount, setOfferAmount] = useState("");
  const protectionFee =
    parseFloat(offerAmount) * PROTECTION_FEE_PERCENTAGE || 0;
  const totalAmount = parseFloat(offerAmount) + protectionFee || 0;

  useEffect(() => {
    if (mode === "counter" && existingOffer) {
      setOfferAmount(existingOffer.offerPrice.toString());
    }
  }, [mode, existingOffer]);

  const handleSendOffer = () => {
    if (!offerAmount || parseFloat(offerAmount) <= 0) {
      Alert.alert("Invalid Amount", "Please enter a valid offer amount");
      return;
    }

    if (parseFloat(offerAmount) >= product.price) {
      Alert.alert(
        "Invalid Offer",
        "Offer amount should be less than product price"
      );
      return;
    }
    // For counter-offers, validate against the previous offer
    if (mode === "counter" && existingOffer) {
      const currentOffer = parseFloat(offerAmount);
      const previousOffer = existingOffer.offerPrice;

      // If seller is countering, offer should be lower than buyer's
      // If buyer is countering, offer should be higher than seller's last offer
      const isValidCounter =
        existingOffer.status === "OFFER_SENT"
          ? currentOffer < previousOffer
          : currentOffer > previousOffer;

      if (!isValidCounter) {
        Alert.alert(
          "Invalid Counter Offer",
          existingOffer.status === "OFFER_SENT"
            ? "Counter offer must be lower than the buyer's offer"
            : "Counter offer must be higher than the seller's last offer"
        );
        return;
      }
    }

    const offerMessage: MessageContent = {
      type: "offer",
      offer: {
        productId: product.id,
        productName: product.title,
        productImage: product.productImage,
        originalPrice: product.price,
        offerPrice: parseFloat(offerAmount),
        sellerId: "seller_1",
        status: mode === "counter" ? "OFFER_UPDATED" : "OFFER_SENT",
      },
    };

    onSendOffer(offerMessage);
    setOfferAmount("");
    onClose();
  };

  return (
    <ModalPopUp visible={show} className="!px-0 !py-0">
      <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
        <Text className="text-base font-medium text-primary">
          Make your offer
        </Text>
        <TouchableOpacity onPress={onClose}>
          <Image
            source={icons.closeIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <View className="py-5 px-4 w-full flex-col items-center justify-start gap-y-5">
        <View className="flex-row items-start justify-start gap-x-3 w-full">
          <Image
            source={{ uri: product.productImage }}
            resizeMode="contain"
            className="w-24 h-24 rounded-xl"
          />
          <View className="flex-col items-start justify-start gap-y-3">
            <Text className="text-base font-medium text-grey-800">
              {product.title}:{" "}
              <Text className="text-primary">
                {formatCurrency(product.price)}
              </Text>
            </Text>
            <Text className="text-base font-medium text-grey-800">
              {"Buy Protection fee:"}{" "}
              <Text className="text-primary">{formatCurrency(Fee)}</Text>
            </Text>
            {offerAmount && (
              <Text className="text-xl font-bold text-primary">
                Total: {formatCurrency(totalAmount)}
              </Text>
            )}
          </View>
        </View>
        <View className="flex-col items-start justify-start gap-y-2 w-full">
          <Text className="text-sm font-medium text-grey-800">
            Enter Amount (incl. buy protection fee)
          </Text>
          <View className="w-full relative">
            <TextInput
              className={`w-full h-14 bg-lightGrey2 border border-primary-100 rounded-xl focus:border-primary text-2xl font-normal ${
                offerAmount ? "pl-10 pr-4" : "px-4"
              }`}
              placeholder="£ 0.00"
              keyboardType="numeric"
              value={offerAmount}
              onChangeText={setOfferAmount}
            />
            {offerAmount && (
              <View className="flex-row items-center justify-start absolute top-[9px] left-[20px]">
                <Text className="text-2xl font-medium text=primary">
                  {CurrencySymbol}
                </Text>
              </View>
            )}
          </View>
        </View>

        <View className="w-full flex-row items-center justify-between gap-x-2">
          <CustomButton
            handlePress={onClose}
            className="w-2/4 bg-white border border-primary"
          >
            <Text className="text-sm text-primary font-semibold">Cancel</Text>
          </CustomButton>
          <CustomButton
            handlePress={handleSendOffer}
            className="w-2/4 bg-primary"
          >
            <Text className="text-sm text-white font-semibold">Send Offer</Text>
          </CustomButton>
        </View>
      </View>
    </ModalPopUp>
  );
};

export default MakeOfferModal;

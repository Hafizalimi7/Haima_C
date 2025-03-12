import { CustomButton, ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import { ProductOffer } from "@/types/message";
import React from "react";
import { View, Text, Image } from "react-native";

interface AcceptModalProps {
  show: boolean;
  onClose: () => void;
  offer: ProductOffer;
  onConfirm: () => void;
}

const AcceptOfferModal: React.FC<AcceptModalProps> = ({
  show,
  onClose,
  offer,
  onConfirm,
}) => {
  const handleCancel = () => {
    onClose();
  };

  return (
    <ModalPopUp visible={show} className="">
      <View className="items-center flex-col justify-center gap-y-6 py-12">
        <Image
          source={icons.acceptIcon}
          resizeMode="contain"
          className="w-16 h-16 rounded-full"
        />
        <Text className="text-2xl font-semibold text-primary text-center">
          Accept Offer
        </Text>
        <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
          Are you sure you want accept this offer and proceed to payment?
        </Text>
        <View className="w-full px-5 flex-row items-center justify-between gap-x-3">
          <CustomButton
            handlePress={handleCancel}
            className="bg-white border-grey border w-2/4"
          >
            <Text className="text-base text-grey-800 font-semibold">
              Cancel
            </Text>
          </CustomButton>
          <CustomButton handlePress={onConfirm} className="bg-primary w-2/4">
            <Text className="text-base text-white font-semibold">Accept</Text>
          </CustomButton>
        </View>
      </View>
    </ModalPopUp>
  );
};

export default AcceptOfferModal;

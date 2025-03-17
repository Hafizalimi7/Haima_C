import { ModalPopUp } from "@/components/ui";
import { icons, images } from "@/constants";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

interface PhotoTipModalProps {
  show: boolean;
  onClose: () => void;
}

const PhotoTipModal: React.FC<PhotoTipModalProps> = ({ show, onClose }) => {
  return (
    <ModalPopUp visible={show} className="!px-0 !py-0">
      <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
        <Text className="text-base font-medium text-primary">Photo tips</Text>
        <TouchableOpacity onPress={onClose}>
          <Image
            source={icons.closeIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <View className="px-4 py-6 flex-col items-center justify-center gap-y-5">
        <Image
          source={images.phototipImage}
          resizeMode="contain"
          className="w-full max-w-[322px] h-[184px] mx-auto"
        />
        <Text className="uppercase text-base font-normal text-grey-800 max-w-[270px] text-center">
          PLEASE DO NOT INCLUDE PICTURES THAT HAVE FACE OR BODY
        </Text>
      </View>
    </ModalPopUp>
  );
};

export default PhotoTipModal;

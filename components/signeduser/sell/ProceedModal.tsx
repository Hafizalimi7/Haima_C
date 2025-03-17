import useBooleanControl from "@/hooks/useBooleanControl";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import PhotoTipModal from "./PhotoTipModal";
import { CustomButton, ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useRouter } from "expo-router";

interface ProceedModalProps {
  show: boolean;
  onClose: () => void;
  handleSubmit: () => void;
}

const ProceedModal: React.FC<ProceedModalProps> = ({
  show,
  onClose,
  handleSubmit,
}) => {
  const { replace } = useRouter();
  const {
    state: isPhotoTipModalVisible,
    setTrue: setIsPhotoTipModalVisibleTrue,
    setFalse: setIsPhotoTipModalVisibleFalse,
  } = useBooleanControl();

  return (
    <React.Fragment>
      <ModalPopUp visible={show} className="px-4 py-6">
        <View className="w-full flex-row items-center justify-end">
          <TouchableOpacity onPress={onClose}>
            <Image
              source={icons.closeIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
        <View className="items-center flex-col justify-center gap-y-6 py-12">
          <Image
            source={signeduser.warningIcon}
            resizeMode="contain"
            className="w-16 h-16 rounded-full"
          />
          <Text className="uppercase text-base max-w-[300px] font-medium text-grey-800">
            PLEASE DO NOT INCLUDE PICTURES THAT HAVE FACE OR BODY. REFER TO{" "}
            <TouchableOpacity
              onPress={setIsPhotoTipModalVisibleTrue}
              className=" translate-y-1"
            >
              <Text className="text-base underline text-secondary font-semibold text-center">
                PHOTO TIPS
              </Text>
            </TouchableOpacity>{" "}
            FOR GUIDE
          </Text>
          <View className="w-full">
            <CustomButton
              handlePress={() => {
                handleSubmit();
                onClose();
                replace("/home");
              }}
              className="bg-primary w-full"
            >
              <Text className="text-base text-white font-semibold">Accept</Text>
            </CustomButton>
          </View>
        </View>
      </ModalPopUp>
      <PhotoTipModal
        show={isPhotoTipModalVisible}
        onClose={setIsPhotoTipModalVisibleFalse}
      />
    </React.Fragment>
  );
};

export default ProceedModal;

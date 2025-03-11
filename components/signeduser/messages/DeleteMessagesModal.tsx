import { CustomButton, ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import { useMessages } from "@/contexts/MessageProvider";
import React from "react";
import { View, Text, Image } from "react-native";

interface DeleteMessagesModalProps {
  show: boolean;
  onClose: () => void;
}

const DeleteMessagesModal: React.FC<DeleteMessagesModalProps> = ({
  show,
  onClose,
}) => {
  const { deleteSelectedConversations, exitSelectionMode } = useMessages();

  const handleCancel = () => {
    onClose();
    exitSelectionMode();
  };

  const handleDelete = () => {
    onClose();
    deleteSelectedConversations();
    exitSelectionMode();
  };

  return (
    <ModalPopUp visible={show} className="">
      <View className="items-center flex-col justify-center gap-y-6 py-12">
        <Image
          source={icons.deleteIcon}
          resizeMode="contain"
          className="w-16 h-16 rounded-full"
        />
        <Text className="text-2xl font-semibold text-primary text-center">
          Delete Messages
        </Text>
        <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
          Are you sure you want to delete all these messages?
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
          <CustomButton handlePress={handleDelete} className="bg-danger w-2/4">
            <Text className="text-base text-white font-semibold">Delete</Text>
          </CustomButton>
        </View>
      </View>
    </ModalPopUp>
  );
};

export default DeleteMessagesModal;

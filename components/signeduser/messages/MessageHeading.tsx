import React from "react";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useMessages } from "@/contexts/MessageProvider";
import useBooleanControl from "@/hooks/useBooleanControl";
import DeleteMessagesModal from "./DeleteMessagesModal";
import StartNewConversationModal from "./StartNewConversationModal";

const MessageHeading: React.FC = () => {
  const { back } = useRouter();
  const {
    isSelectionMode,
    selectedConversations,
    conversations,
    selectAllConversations,
  } = useMessages();
  const {
    state: deleteModal,
    setTrue: setDeleteModalTrue,
    setFalse: setDeleteModalFalse,
  } = useBooleanControl();
  const {
    state: showNewConversation,
    setTrue: setShowNewConversationTrue,
    setFalse: setShowNewConversationFalse,
  } = useBooleanControl();

  return (
    <React.Fragment>
      <View className="flex-row items-center justify-between w-full px-4 py-4">
        <TouchableOpacity onPress={() => back()}>
          <Image
            source={icons.backarrowIcon}
            alt="back icon"
            resizeMode="contain"
            className="w-8 h-8"
          />
        </TouchableOpacity>

        <Text className="text-lg font-medium text-primary">Messages</Text>
        {isSelectionMode ? (
          <View className="flex-row gap-x-4 items-center">
            <TouchableOpacity
              onPress={selectAllConversations}
              disabled={selectedConversations.length === conversations.length}
            >
              <Text className="text-base font-medium text-primary">
                Select all
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={setDeleteModalTrue}
              disabled={selectedConversations.length === 0}
            >
              <Image
                source={icons.trashIcon}
                alt="delete"
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={setShowNewConversationTrue}>
            <Image
              source={signeduser.newMessageIcon}
              alt="message icon"
              resizeMode="contain"
              className="w-8 h-8"
            />
          </TouchableOpacity>
        )}
      </View>
      <DeleteMessagesModal show={deleteModal} onClose={setDeleteModalFalse} />
      <StartNewConversationModal
        show={showNewConversation}
        onClose={setShowNewConversationFalse}
      />
    </React.Fragment>
  );
};

export default MessageHeading;

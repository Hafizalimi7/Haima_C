import React from "react";
import { View, Text, Pressable } from "react-native";
import { Conversation, Message } from "@/types/message";
import { useRouter } from "expo-router";
import { useMessages } from "@/contexts/MessageProvider";
import { getInitials } from "@/helpers/string";
import { getRelativeTime } from "@/helpers/date";
import { Checkbox } from "@/components/ui/inputs";
import { useAuth } from "@/contexts/AuthContext";

interface ConversationItemProps {
  conversation: Conversation;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  conversation,
}) => {
  const { push } = useRouter();
  const {
    isSelectionMode,
    selectedConversations,
    toggleConversationSelection,
    startSelectionMode,
  } = useMessages();
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  const otherParticipant = conversation.participants.find(
    (p) => p.id !== currentUser.id
  );

  const initials = getInitials(otherParticipant?.username || "");

  const handlePress = () => {
    if (isSelectionMode) {
      toggleConversationSelection(conversation.id);
    } else if (otherParticipant) {
      push({
        pathname: "/messages/[id]",
        params: {
          id: conversation.id,
          participantUsername: otherParticipant.username,
        },
      });
    }
  };

  const handleLongPress = () => {
    if (!isSelectionMode) {
      startSelectionMode();
      toggleConversationSelection(conversation.id);
    }
  };

  const isSelected = selectedConversations.includes(conversation.id);

  const getDisplayMessage = (message: Message) => {
    const isSender = message.senderId === currentUser?.id;

    if (message.content.includes("offer")) {
      if (message.content.includes("Updated")) {
        return isSender ? "Updated the offer" : "Counter offer received";
      } else if (message.content.includes("Sent")) {
        return isSender ? "Sent an offer" : "Offer received";
      } else if (message.content.includes("accepted")) {
        return "Offer accepted";
      } else if (message.content.includes("rejected")) {
        return "Offer rejected";
      }
    }
    return message.content;
  };

  return (
    <Pressable
      onPress={handlePress}
      onLongPress={handleLongPress}
      className={`flex-row items-center p-4 border-b border-[#E2E2E2] w-full ${
        isSelected ? "bg-blue-50" : ""
      }`}
    >
      {isSelectionMode && (
        <View className="mr-3">
          <Checkbox
            checked={isSelected}
            onPress={() => toggleConversationSelection(conversation.id)}
            className="w-6 h-6"
          />
        </View>
      )}

      <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-3">
        <Text className="text-lg font-medium">{initials}</Text>
      </View>

      <View className="flex-1">
        <View className="flex-row justify-between items-center">
          <Text className="text-base font-medium text-primary">
            {otherParticipant?.username}
          </Text>
          <Text className="text-sm text-gray-500 font-medium">
            {getRelativeTime(conversation.lastMessage.timestamp)}
          </Text>
        </View>

        <View className="flex-row justify-between items-center mt-1">
          <Text
            className="text-[#999999] text-sm font-medium"
            numberOfLines={1}
          >
            {getDisplayMessage(conversation.lastMessage)}
          </Text>
          {conversation.unreadCount > 0 && (
            <View className="bg-danger rounded-full w-5 h-5 flex-row justify-center items-center">
              <Text className="text-white text-xs font-black">
                {conversation.unreadCount}
              </Text>
            </View>
          )}
        </View>
      </View>
    </Pressable>
  );
};

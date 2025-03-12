import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { format } from "date-fns";
import { MessageContent } from "@/types/message";
import { OfferBubble } from "./OfferBubble";
import { useAuth } from "@/contexts/AuthContext";

interface ChatBubbleProps {
  content: MessageContent;
  timestamp: Date;
  isSender: boolean;
  userRole: "BUYER" | "SELLER";
  onNegotiate?: () => void;
  onAccept?: () => void;
}

const ChatBubble: React.FC<ChatBubbleProps> = ({
  content,
  timestamp,
  isSender,
  userRole,
  onNegotiate,
  onAccept,
}) => {
  console.log("Rendering chat bubble:", {
    type: content.type,
    isSender,
    timestamp: timestamp.toISOString(),
  });
  const { currentUser } = useAuth();

  if (!currentUser) return null;

  if (content.type === "offer") {
    console.log("Rendering offer bubble:", content.offer);
    return (
      <OfferBubble
        offer={content.offer!}
        timestamp={timestamp}
        isSender={isSender}
        userRole={userRole}
        onNegotiate={onNegotiate}
        onAccept={onAccept}
      />
    );
  }

  const handleLinkPress = async (url: string) => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  };

  return (
    <View className="mb-3">
      <View
        className={`flex-row ${isSender ? "justify-end" : "justify-start"}`}
      >
        <View
          className={`max-w-[80%] rounded-2xl px-4 py-3 ${
            isSender ? "bg-[#0F1225]" : "bg-[#EBECEF]"
          }`}
        >
          {content.type === "image_with_text" && (
            <>
              <Image
                source={{ uri: content.imageWithText!.imageUrl }}
                className="w-[310px] max-w-full h-48 rounded-lg mb-2"
                resizeMode="cover"
              />
              <Text
                className={`text-sm ${isSender ? "text-white" : "text-black"}`}
              >
                {content.imageWithText!.text}
              </Text>
              {content.imageWithText!.link && (
                <TouchableOpacity
                  onPress={() => handleLinkPress(content.imageWithText!.link!)}
                  className="mt-1"
                >
                  <Text
                    className={`text-sm underline ${
                      isSender ? "text-blue-300" : "text-blue-600"
                    }`}
                  >
                    {content.imageWithText!.link}
                  </Text>
                </TouchableOpacity>
              )}
            </>
          )}

          {content.type === "text" && (
            <Text
              className={`text-sm ${isSender ? "text-white" : "text-black"}`}
            >
              {content.text}
            </Text>
          )}
        </View>
      </View>
      <View
        className={`flex-row ${
          isSender ? "justify-end" : "justify-start"
        } mt-1 px-1`}
      >
        <Text className="text-xs text-gray-500">
          {format(timestamp, "h:mm a")}
        </Text>
      </View>
    </View>
  );
};

export default ChatBubble;

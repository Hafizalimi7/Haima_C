import React, { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { icons } from "@/constants";
import { ChatMessage, MessageContent } from "@/types/message";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { format, isToday, isYesterday } from "date-fns";
import {
  ChatBubble,
  DateSeparator,
  MessageInput,
} from "@/components/signeduser/messages";
import { currentUser } from "@/data/messages";

export default function MessagedetailScreen() {
  const { back } = useRouter();
  const { id, participantUsername } = useLocalSearchParams();
  const flatListRef = useRef<FlatList>(null);
  const [messagesList, setMessagesList] = useState<ChatMessage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const removeSelectedImage = () => {
    setSelectedImage(null);
  };

  const groupMessagesByDate = (messages: ChatMessage[]) => {
    const groups: { [key: string]: ChatMessage[] } = {};

    messages.forEach((message) => {
      const date = new Date(message.timestamp);
      let dateString;

      if (isToday(date)) {
        dateString = "Today";
      } else if (isYesterday(date)) {
        dateString = "Yesterday";
      } else {
        dateString = format(date, "MMMM d, yyyy");
      }

      if (!groups[dateString]) {
        groups[dateString] = [];
      }
      groups[dateString].push(message);
    });

    return Object.entries(groups).map(([date, messages]) => ({
      date,
      messages: messages.sort(
        (a, b) => a.timestamp.getTime() - b.timestamp.getTime()
      ),
    }));
  };

  const handleImagePick = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled && result.assets[0].uri) {
      setSelectedImage(result.assets[0].uri);
    }
  };

  const handleSend = (content: MessageContent) => {
    // Create new message
    const newMessage: ChatMessage = {
      id: Date.now().toString(),
      content,
      senderId: currentUser,
      timestamp: new Date(),
    };

    // Update messages list with new message
    setMessagesList((prevMessages) => [...prevMessages, newMessage]);

    // Scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleNegotiate = (messageId: string) => {
    // Implement negotiation logic
    console.log("Negotiating for message:", messageId);
  };

  const handleAcceptOffer = (messageId: string) => {
    // Implement offer acceptance logic
    console.log("Accepting offer for message:", messageId);
  };

  const renderItem = ({ item }: { item: any }) => (
    <View>
      <DateSeparator date={item.date} />
      {item.messages.map((msg: ChatMessage) => (
        <ChatBubble
          key={msg.id}
          content={msg.content}
          timestamp={msg.timestamp}
          isSender={msg.senderId === currentUser}
          userRole="BUYER"
          onNegotiate={() => handleNegotiate(msg.id)}
          onAccept={() => handleAcceptOffer(msg.id)}
        />
      ))}
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="flex-row items-center justify-between w-full px-4 py-4">
        <TouchableOpacity onPress={() => back()}>
          <Image
            source={icons.backarrowIcon}
            alt="back icon"
            resizeMode="contain"
            className="w-8 h-8"
          />
        </TouchableOpacity>
        <Text className="text-lg font-medium text-primary">
          {participantUsername || "Chat"}
        </Text>
        <View />
      </View>
      <FlatList
        ref={flatListRef}
        data={groupMessagesByDate(messagesList)}
        renderItem={renderItem}
        keyExtractor={(item) => item.date}
        contentContainerStyle={{ padding: 16 }}
        onLayout={() => flatListRef.current?.scrollToEnd({ animated: false })}
      />
      <MessageInput
        onSendMessage={handleSend}
        onImagePick={handleImagePick}
        selectedImage={selectedImage}
        removeSelectedImage={removeSelectedImage}
      />
    </SafeAreaView>
  );
}

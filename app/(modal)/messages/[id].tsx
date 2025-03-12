import React, { useRef, useState } from "react";
import * as ImagePicker from "expo-image-picker";
import { icons } from "@/constants";
import {
  ChatMessage,
  MessageContent,
  OfferData,
  ProductOffer,
} from "@/types/message";
import { useLocalSearchParams, useRouter } from "expo-router";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { format, isToday, isYesterday } from "date-fns";
import {
  ChatBubble,
  DateSeparator,
  MessageInput,
} from "@/components/signeduser/messages";
import { useMessages } from "@/contexts/MessageProvider";
import { useAuth } from "@/contexts/AuthContext";
import useBooleanControl from "@/hooks/useBooleanControl";
import { MakeOfferModal } from "@/components/signeduser/details/products";
import AcceptOfferModal from "@/components/signeduser/details/products/AcceptOfferModal";

export default function MessagedetailScreen() {
  const { back, push } = useRouter();
  const { id, participantUsername } = useLocalSearchParams();
  const flatListRef = useRef<FlatList>(null);
  const { getMessagesForChat, addMessage, conversations, setConversations } =
    useMessages();
  const { currentUser } = useAuth();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const {
    state: showOfferModal,
    setFalse: setShowOfferModalFalse,
    setTrue: setShowOfferModalTrue,
  } = useBooleanControl();
  const {
    state: showAcceptModal,
    setFalse: setShowAcceptModalFalse,
    setTrue: setShowAcceptModalTrue,
  } = useBooleanControl();
  const [selectedOffer, setSelectedOffer] = useState<ProductOffer | null>(null);

  const messagesList = getMessagesForChat(id as string);

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

  const handleSend = (offerContent: MessageContent) => {
    if (!currentUser || !id || !participantUsername) return;

    const timestamp = new Date("2025-03-12 08:34:56");

    const conversation = conversations.find((c) => c.id === id);
    if (!conversation) return;

    const otherParticipant = conversation.participants.find(
      (p) => p.id !== currentUser.id
    );
    if (!otherParticipant) return;

    // Update offer status based on user role
    const updatedOffer: MessageContent = {
      ...offerContent,
      offer: {
        ...offerContent.offer!,
        status: currentUser.role === "BUYER" ? "OFFER_SENT" as const : "OFFER_UPDATED" as const,
        sellerId:
          currentUser.role === "SELLER" ? currentUser.id : otherParticipant.id,
      },
    };

    const messageData: OfferData = {
      senderId: currentUser.id,
      receiverId: otherParticipant.id,
      senderName: currentUser.username,
      receiverName: otherParticipant.username,
      conversationId: id as string,
      content: updatedOffer,
    };
    // Add message for both users
    addMessage(messageData);
    setShowOfferModalFalse();

    // Scroll to bottom after sending
    setTimeout(() => {
      flatListRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  const handleNegotiate = (offer: ProductOffer) => {
    setSelectedOffer(offer);
    setShowOfferModalTrue();
  };

  const handleAccept = (offer: ProductOffer) => {
    setSelectedOffer(offer);
    setShowAcceptModalTrue();
  };

  const handleCounterOffer = (offerContent: MessageContent) => {
    if (!currentUser || !id || !participantUsername) return;

    const otherParticipant = conversations
      .find((c) => c.id === id)
      ?.participants.find((p) => p.id !== currentUser.id);

    if (!otherParticipant) return;

    // Update offer status
    const updatedOffer = {
      ...offerContent,
      offer: {
        ...offerContent.offer!,
        status: "OFFER_UPDATED" as const,
      },
    };

    const messageData: OfferData = {
      senderId: currentUser.id,
      receiverId: otherParticipant.id,
      senderName: currentUser.username,
      receiverName: otherParticipant.username,
      conversationId: id as string,
      content: updatedOffer,
    };

    addMessage(messageData);
    setShowOfferModalFalse();
  };

  const handleConfirmAccept = () => {
    if (!selectedOffer || !currentUser) return;

    const timestamp = new Date("2025-03-12 08:09:58");

    if (currentUser.role === "BUYER") {
      // For buyer: Navigate to shipping details
      push({
        pathname: "/shipping-detail/info",
        params: {
          productId: selectedOffer.productId,
          offerPrice: selectedOffer.offerPrice.toString(),
          sellerId: selectedOffer.sellerId,
        },
      });
    } else {
      // For seller: Send acceptance message to buyer
      const conversation = conversations.find((c) => c.id === id);
      if (!conversation) return;

      const buyer = conversation.participants.find(
        (p) => p.id !== currentUser.id
      );
      if (!buyer) return;

      // Create acceptance message
      const acceptanceMessage: OfferData = {
        senderId: currentUser.id,
        receiverId: buyer.id,
        senderName: currentUser.username,
        receiverName: buyer.username,
        conversationId: id as string,
        content: {
          type: "offer",
          offer: {
            ...selectedOffer,
            status: "OFFER_ACCEPTED",
          },
        },
      };

      // Send the acceptance message
      addMessage(acceptanceMessage);

      // Update the offer status in the conversation
      const updatedConversation = {
        ...conversation,
        lastMessage: {
          id: Date.now().toString(),
          senderId: currentUser.id,
          receiverId: buyer.id,
          content: "Offer accepted",
          timestamp,
          isRead: false,
        },
      };

      // Update conversations state
      setConversations((prev) =>
        prev.map((conv) => (conv.id === id ? updatedConversation : conv))
      );
    }

    setShowAcceptModalFalse();
  };

  const renderItem = ({ item }: { item: any }) => (
    <View>
      <DateSeparator date={item.date} />
      {item.messages.map((msg: ChatMessage) => (
        <ChatBubble
          key={msg.id}
          content={msg.content}
          timestamp={msg.timestamp}
          isSender={msg.senderId === currentUser?.id}
          userRole={currentUser?.role || "BUYER"}
          onNegotiate={() =>
            msg.content.type === "offer" && handleNegotiate(msg.content.offer!)
          }
          onAccept={() =>
            msg.content.type === "offer" && handleAccept(msg.content.offer!)
          }
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
      {selectedOffer && (
        <>
          <MakeOfferModal
            show={showOfferModal}
            onClose={() => setShowOfferModalFalse()}
            product={{
              id: selectedOffer.productId,
              title: selectedOffer.productName,
              price: selectedOffer.originalPrice,
              offerPrice: selectedOffer.offerPrice,
              productImage: selectedOffer.productImage,
              sellerId: selectedOffer.sellerId,
            }}
            onSendOffer={handleCounterOffer}
            existingOffer={selectedOffer}
            mode="counter"
          />
          <AcceptOfferModal
            show={showAcceptModal}
            onClose={() => setShowAcceptModalFalse()}
            offer={selectedOffer}
            onConfirm={handleConfirmAccept}
          />
        </>
      )}
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

import React from "react";
import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "@/data/products";
import {
  ContactSeller,
  MakeOfferModal,
  ProductContentDetail,
  ProductImageSlider,
  ProtectFee,
  RelatedItems,
  Reviews,
} from "@/components/signeduser/details/products";
import { DetailHeader } from "@/components/signeduser/details";
import { CustomButton } from "@/components/ui";
import { AuthOptionsSheet } from "@/components/onboarding/bottomsheet";
import { Image } from "react-native";
import { icons } from "@/constants";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { useAuth } from "@/contexts/AuthContext";
import useBooleanControl from "@/hooks/useBooleanControl";
import { MessageContent } from "@/types/message";
import { useMessages } from "@/contexts/MessageProvider";
import signeduser from "@/constants/icons/signeduser";

export default function ProductItemScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const { push } = useRouter();
  const { openAuthSheet } = useBottomSheet();
  const { isAuthenticated, currentUser } = useAuth();
  const { addMessage } = useMessages();
  const {
    state: showOffer,
    setTrue: setShowOfferTrue,
    setFalse: setShowOfferFalse,
  } = useBooleanControl();

  const data = products.find((item) => item.id === slug);

  const handleMakeOffer = () => {
    if (isAuthenticated) {
      setShowOfferTrue();
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };

  const handleBuyNow = () => {
    if (isAuthenticated) {
      push({
        pathname: "/shipping-detail/info",
        params: { productId: slug },
      });
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };

  const handleMessageForward = () => {
    if (isAuthenticated) {
      push("/(modal)/messages");
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };

  const handleSendOffer = (offerContent: MessageContent) => {
    if (!data || !currentUser) return;
    // Here you would typically:
    // 1. Send the offer to your backend
    // 2. Create a new chat/message thread with the seller
    // 3. Navigate to the messages screen

    // Create a unique conversation ID that will be the same for both users
    const conversationId = `offer_${data.id}_${Date.now()}`;

    // Create the conversation and add the offer message
    const offerData = {
      senderId: currentUser.id,
      receiverId: "seller_1", // Target seller
      senderName: currentUser.username,
      receiverName: "Thrift Shop",
      conversationId,
      content: offerContent,
    };

    // Add message and create conversation for both users
    addMessage(offerData);

    // Navigate to chat
    push({
      pathname: "/messages/[id]",
      params: {
        id: conversationId,
        participantUsername: "Thrift Shop",
      },
    });
    console.log("Sending offer:", offerContent);
  };

  if (!data) return;

  return (
    <React.Fragment>
      <SafeAreaView className="bg-white flex-1">
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 15,
          }}
        >
          <DetailHeader
            title="Item details"
            showShareIcon={true}
            renderIcon={
              <TouchableOpacity onPress={handleMessageForward}>
                <Image
                  source={signeduser.forwardIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </TouchableOpacity>
            }
          />
          <ProductImageSlider data={data} />
          <ProductContentDetail data={data} />
          <ProtectFee />
          <Reviews data={data} />
          <ContactSeller data={data} />
          <RelatedItems />
        </ScrollView>
        <View
          className="w-full px-4 py-6 bg-white"
          style={{
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: -4,
            },
            shadowOpacity: 0.04,
            shadowRadius: 3.7,
            elevation: 4,
          }}
        >
          <View className="w-full flex-row items-center justify-start gap-x-3">
            <CustomButton
              handlePress={handleMakeOffer}
              className="w-[160px] bg-transparent border border-primary"
            >
              <View className="w-full flex-row items-center justify-center gap-x-3">
                <Image
                  source={icons.offerIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="text-base text-primary font-semibold">
                  Make Offer
                </Text>
              </View>
            </CustomButton>
            <CustomButton
              handlePress={handleBuyNow}
              className="w-[160px] bg-primary border border-primary"
            >
              <View className="w-full flex-row items-center justify-center gap-x-3">
                <Image
                  source={icons.buyIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
                <Text className="text-sm text-white font-semibold">
                  Buy Now
                </Text>
              </View>
            </CustomButton>
          </View>
        </View>
      </SafeAreaView>
      <AuthOptionsSheet />
      <MakeOfferModal
        show={showOffer}
        onClose={setShowOfferFalse}
        product={data}
        onSendOffer={handleSendOffer}
      />
    </React.Fragment>
  );
}

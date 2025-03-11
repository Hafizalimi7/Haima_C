import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ProductOffer } from "@/types/message";
import { format } from "date-fns";
import { formatCurrency } from "@/helpers/currency";
import { formatStatus } from "@/helpers/string";
import { CustomButton } from "@/components/ui";

interface OfferBubbleProps {
  offer: ProductOffer;
  timestamp: Date;
  isSender: boolean;
  userRole: "BUYER" | "SELLER";
  onNegotiate?: () => void;
  onAccept?: () => void;
}

export const OfferBubble: React.FC<OfferBubbleProps> = ({
  offer,
  timestamp,
  isSender,
  userRole,
  onNegotiate,
  onAccept,
}) => {
  const showActions =
    (userRole === "SELLER" && offer.status === "OFFER_SENT") ||
    (userRole === "BUYER" && offer.status === "OFFER_UPDATED");

  return (
    <View className="mb-3">
      <View
        className={`flex-row ${isSender ? "justify-end" : "justify-start"}`}
      >
        <View className="max-w-[80%] rounded-2xl">
          {offer.status === "OFFER_UPDATED" ? (
            <View className="bg-secondary w-fit px-4 py-2 rounded-lg text-center">
              <Text className="text-base font-normal text-primary">
                Offer updated
              </Text>
            </View>
          ) : (
            <View className="flex-col items-start justify-start gap-y-4 w-full border border-primary-100 rounded-2xl pb-4">
              <Image
                source={{ uri: offer.productImage }}
                className="w-full h-40 rounded-t-2xl"
                resizeMode="cover"
              />
              <View className="px-3 flex-col items-start justify-start gap-y-2 w-full">
                <View className="px-4 py-2 bg-[#D3AC2A33] rounded-full mb-2">
                  <Text className="font-medium text-base text-secondary-600">
                    {formatStatus(offer.status)}
                  </Text>
                </View>

                <View className="w-full flex-row items-center justify-between gap-x-2">
                  <Text
                    className="text-base font-medium text-grey-800 w-[140px]"
                    numberOfLines={2}
                  >
                    {offer.productName} incl. buy protection fee
                  </Text>
                  <Text className="text-base font-extrabold text-primary">
                    {formatCurrency(offer.originalPrice)}
                  </Text>
                </View>
                <View className="w-full flex-row items-center justify-between gap-x-2">
                  <Text
                    className="text-base font-bold text-primary w-[140px]"
                    numberOfLines={2}
                  >
                    Buyer's offer incl. buy protection fee
                  </Text>
                  <Text className="text-base font-extrabold text-primary">
                    {formatCurrency(offer.offerPrice)}
                  </Text>
                </View>

                {showActions && (
                  <View className="flex-row gap-x-2 mt-2">
                    <CustomButton
                      handlePress={onNegotiate}
                      className="flex-1 bg-white border border-primary"
                    >
                      <Text className="text-center text-primary text-base font-medium">
                        Negotiate
                      </Text>
                    </CustomButton>
                    <CustomButton
                      handlePress={onAccept}
                      className="flex-1 bg-success border border-success"
                    >
                      <Text className="text-center text-white text-base font-medium">
                        Accept offer
                      </Text>
                    </CustomButton>
                  </View>
                )}
              </View>
            </View>
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

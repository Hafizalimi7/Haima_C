import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { Notification } from "@/types/notification";
import { formatTime } from "@/helpers/date";
import signeduser from "@/constants/icons/signeduser";
import { CustomButton } from "@/components/ui";
import { Entypo } from "@expo/vector-icons";
import { useNotifications } from "@/contexts/NotificationProvider";

interface NotificationItemProps {
  notification: Notification;
  onReview?: () => void;
}

export const NotificationItem: React.FC<NotificationItemProps> = ({
  notification,
  onReview,
}) => {
  const { markAsRead } = useNotifications();

  const getBackgroundColor = () => {
    if (!notification.isRead) {
      return "#F6F6F6";
    }
    return "white";
  };

  const handlePress = () => {
    if (!notification.isRead) {
      markAsRead(notification.id);
    }
  };

  const renderIcon = () => {
    switch (notification.type) {
      case "new_offer":
        return (
          <Image
            source={signeduser.pendingOfferIcon}
            resizeMode="contain"
            className="w-14 h-14"
          />
        );
      case "offer_accepted":
        return (
          <Image
            source={signeduser.acceptOfferIcon}
            resizeMode="contain"
            className="w-14 h-14"
          />
        );
      default:
        return null;
    }
  };

  const renderMessage = () => {
    if (notification.shopName) {
      return (
        <Text className="text-base">
          {notification.type === "new_offer" ? (
            <Text className="text-base text-grey-800 font-medium">
              <Text className="font-bold text-primary">
                {notification.shopName}
              </Text>
              {" sent a new offer to you"}
            </Text>
          ) : (
            <Text className="text-base text-grey-800 font-medium">
              {"You accepted "}
              <Text className="font-bold text-primary">
                {notification.shopName}'s
              </Text>
              {" offer"}
            </Text>
          )}
        </Text>
      );
    }
    return (
      <Text className="text-base text-grey-800 font-medium">
        {notification.message}
      </Text>
    );
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View
        className="p-4 mb-3 rounded-lg border-b border-[#E2E2E2]"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <View className="flex-row items-start justify-start">
          {renderIcon()}
          {notification.productImage && (
            <Image
              source={notification.productImage}
              className="w-20 h-20 rounded-md mt-2"
            />
          )}
          <View className="flex-1 ml-3">
            {renderMessage()}
            <Text className="text-grey-800 mt-1 text-sm font-medium">
              {formatTime(notification.timestamp)}
            </Text>
          </View>
        </View>
        {notification.type === "delivery" &&
          notification.canReview &&
          !notification.hasReviewed && (
            <View className="mt-3 flex-row gap-x-3">
              <CustomButton
                className="border border-danger px-4 py-2 rounded-full"
                handlePress={onReview}
              >
                <View className="flex-row items-center justify-center gap-x-3">
                  <Entypo name="emoji-neutral" size={20} color="#DB2121" />
                  <Text className="text-danger font-semibold">
                    Log Complaint
                  </Text>
                </View>
              </CustomButton>
              <CustomButton
                className="bg-primary px-4 py-2 rounded-full"
                handlePress={onReview}
              >
                <View className="flex-row items-center justify-center gap-x-3">
                  <Image
                    source={signeduser.starIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                    tintColor={"#D3AC2A"}
                  />
                  <Text className="text-white font-semibold">
                    Rate Experience
                  </Text>
                </View>
              </CustomButton>
            </View>
          )}
      </View>
    </TouchableOpacity>
  );
};

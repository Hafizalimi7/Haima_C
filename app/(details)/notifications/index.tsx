import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import {
  ActivityIndicator,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNotifications } from "@/contexts/NotificationProvider";
import { NotificationItem } from "@/components/signeduser/details/notifications";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";
import useBooleanControl from "@/hooks/useBooleanControl";
import { CustomButton, ModalPopUp } from "@/components/ui";
import { CreateReviewForm } from "@/components/signeduser/details/reviews";
import { icons } from "@/constants";
import { ReviewFormValues } from "@/types/product";
import { useRouter } from "expo-router";

export default function NotificationsScreens() {
  const { push } = useRouter();
  const { groupedNotifications, isLoading, error, fetchNotifications } =
    useNotifications();
  const {
    state: successModal,
    setTrue: setSuccessModalTrue,
    setFalse: setSuccessModalFalse,
  } = useBooleanControl();
  const {
    state: showCreateReview,
    setTrue: setShowCreateReviewTrue,
    setFalse: setShowCreateReviewFalse,
  } = useBooleanControl();

  const handleReview = (notificationId: string) => {
    console.log("Review for notification:", notificationId);
    setShowCreateReviewTrue();
  };

  const addReview = (values: ReviewFormValues) => {
    console.log("🚀 ~ addReview ~ values:", values);
    setSuccessModalTrue();
  };

  if (isLoading) {
    return (
      <SafeAreaView className="bg-white flex-1 justify-center items-center">
        <ActivityIndicator size="large" color="#0000ff" />
      </SafeAreaView>
    );
  }

  if (error) {
    return (
      <SafeAreaView className="bg-white flex-1 justify-center items-center">
        <Text className="text-red-500">{error}</Text>
        <TouchableOpacity
          className="mt-4 bg-blue-500 px-4 py-2 rounded-lg"
          onPress={fetchNotifications}
        >
          <Text className="text-white">Retry</Text>
        </TouchableOpacity>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView className="bg-white flex-1">
      <DetailHeader title="Notifications" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
          paddingHorizontal: 20,
        }}
      >
        {groupedNotifications.length === 0 ? (
          <EmptyUI
            iconSource={signeduser.bellIcon}
            content="You dont have any notification"
          />
        ) : (
          groupedNotifications.map((group) => (
            <View key={group.title} className="mb-6">
              <Text className="text-sm font-medium uppercase text-grey-800 mb-3">
                {group.title}
              </Text>
              {group.data.map((notification) => (
                <NotificationItem
                  key={notification.id}
                  notification={notification}
                  onReview={() => handleReview(notification.id)}
                />
              ))}
            </View>
          ))
        )}
      </ScrollView>
      <ModalPopUp visible={showCreateReview} className="!px-0 !py-0">
        <View className="w-full flex-row items-center justify-between px-3 py-3 border-b border-grey">
          <Text className="text-base font-medium text-primary">
            Rate and Review
          </Text>
          <TouchableOpacity onPress={setShowCreateReviewFalse}>
            <Image
              source={icons.closeIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
        <CreateReviewForm
          setShowCreateReviewFalse={setShowCreateReviewFalse}
          addReview={addReview}
        />
      </ModalPopUp>
      <ModalPopUp visible={successModal} className="">
        <View className="items-center flex-col justify-center gap-y-6 py-12">
          <Image
            source={icons.successIcon}
            resizeMode="contain"
            className="w-16 h-16 rounded-full"
          />
          <Text className="text-2xl font-semibold text-primary text-center">
            Submitted Successfully!
          </Text>
          <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
            Thank you for using HAIMA. Continue to shop for your favourite
            things.
          </Text>
          <View className="w-full px-5">
            <CustomButton
              handlePress={() => {
                push("/home");
                setSuccessModalFalse();
              }}
              className="w-full bg-primary"
            >
              <Text className="text-base text-white font-semibold">
                Continue Shopping
              </Text>
            </CustomButton>
          </View>
        </View>
      </ModalPopUp>
    </SafeAreaView>
  );
}

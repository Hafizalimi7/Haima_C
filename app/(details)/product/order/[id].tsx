import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { DetailHeader } from "@/components/signeduser/details";
import { useLocalSearchParams, useRouter } from "expo-router";
import { products } from "@/data/products";
import { EmptyUI } from "@/components/ui/emptyUi";
import { Review, ReviewFormValues } from "@/types/product";
import { CreateReviews } from "@/components/signeduser/details/reviews";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";
import { Entypo } from "@expo/vector-icons";
import {
  Itemdetail,
  Paymentdetail,
  Shippingdetail,
} from "@/components/signeduser/billings/checkout";
import { SafeAreaView } from "react-native-safe-area-context";

export default function ProductOrderDetailScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const data = products.find((item) => item.id === id);
  const { push } = useRouter();

  if (!data) return <EmptyUI />;

  const addReview = (values: ReviewFormValues) => {
    // Here you would typically make an API call to save the review
    const newReview: Review = {
      id: Date.now().toString(),
      ...values,
      userId: data.id,
      userName: "Current User",
      createdAt: new Date().toISOString(),
    };
  };

  const handleBuyAgain = () => {
    push({
      pathname: "/shipping-detail/info",
      params: { productId: id },
    });
  };

  return (
    <SafeAreaView className="bg-white flex-1">
      <DetailHeader title="Order Details" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
          paddingHorizontal: 15,
        }}
      >
        <CreateReviews data={data} addReview={addReview} />
        <Itemdetail data={data} />
        <Shippingdetail data={data} type="user" />
        <Paymentdetail data={data} type="user" />
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
        <View className="flex-row gap-x-3 w-full">
          <CustomButton
            className="border border-danger w-2/4"
            handlePress={() => {}}
          >
            <View className="flex-row items-center justify-center gap-x-3 w-full">
              <Entypo name="emoji-neutral" size={20} color="#DB2121" />
              <Text className="text-danger font-semibold">Log Complaint</Text>
            </View>
          </CustomButton>
          <CustomButton
            className="w-2/4 bg-primary border border-primary"
            handlePress={handleBuyAgain}
          >
            <View className="w-full flex-row items-center justify-center gap-x-3">
              <Image
                source={icons.buyIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
              <Text className="text-sm text-white font-semibold">
                Buy Again
              </Text>
            </View>
          </CustomButton>
        </View>
      </View>
    </SafeAreaView>
  );
}

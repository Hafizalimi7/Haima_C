import React from "react";
import { View, Text, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";
import {
  ContactSeller,
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

export default function ProductItemScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const data = products.find((item) => item.id === slug);

  if (!data) return;

  return (
    <SafeAreaView className="bg-white flex-1">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <DetailHeader title="Item details" showShareIcon={true} />
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
            handlePress={() => {}}
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
            handlePress={() => {}}
            className="w-[160px] bg-primary border border-primary"
          >
            <View className="w-full flex-row items-center justify-center gap-x-3">
              <Image
                source={icons.buyIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
              <Text className="text-sm text-white font-semibold">Buy Now</Text>
            </View>
          </CustomButton>
        </View>
      </View>

      <AuthOptionsSheet />
    </SafeAreaView>
  );
}

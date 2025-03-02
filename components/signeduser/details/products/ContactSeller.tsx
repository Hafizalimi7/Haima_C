import React from "react";
import signeduser from "@/constants/icons/signeduser";
import { ProductType } from "@/types/product";
import { View, Text, Image } from "react-native";
import { CustomButton } from "@/components/ui";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";

interface ContactSellerProps {
  data: ProductType;
}

const ContactSeller: React.FC<ContactSellerProps> = ({ data }) => {
  const { openAuthSheet } = useBottomSheet();
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();

  const handleViewSellerProfile = () => {
    if (isAuthenticated) {
      push("/profile");
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };

  return (
    <View className="px-4 w-full my-5">
      <View className="w-full bg-primary p-4 rounded-xl border border-[#E4E7EC] flex-col items-start justify-start gap-y-6">
        <View className="flex-col items-start justify-start gap-y-1">
          <Text className="text-base font-semibold text-white">
            Honey feed Collections
          </Text>
          <View className="flex-row items-center justify-start gap-x-1">
            <Text className="text-sm font-medium text-white/50">
              Umu Aisha{" "}
            </Text>
            <View className="w-3 h-3 rounded-full bg-white" />
            <Text className="text-xs font-medium text-accent">
              Woolwich, England
            </Text>
          </View>
          <View className="flex-row items-center justify-start gap-x-2">
            <Image
              source={signeduser.starIcon}
              resizeMode="contain"
              className="w-4 h-4"
            />
            <View className="flex-row items-center justify-start gap-x-1">
              <Text className="text-sm font-medium text-white">
                {data.review}
              </Text>
              <Text className="text-sm font-normal text-grey-800">
                (5 reviews)
              </Text>
            </View>
          </View>
        </View>
        <View className="flex-col items-start justify-start gap-y-4 w-full">
          <CustomButton
            handlePress={handleViewSellerProfile}
            className="w-full bg-secondary"
          >
            <Text className="text-sm text-primary font-semibold">
              View Sellers profile
            </Text>
          </CustomButton>
          <CustomButton
            handlePress={handleViewSellerProfile}
            className="w-full bg-transparent border border-secondary"
          >
            <Text className="text-sm text-secondary font-semibold">
              Follow Seller
            </Text>
          </CustomButton>
        </View>
      </View>
    </View>
  );
};

export default ContactSeller;

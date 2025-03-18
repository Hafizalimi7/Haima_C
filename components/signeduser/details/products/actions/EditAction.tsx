import React from "react";
import { View, Text, Image } from "react-native";
import { CustomButton } from "@/components/ui";
import { ProductType } from "@/types/product";
import signeduser from "@/constants/icons/signeduser";

interface EditActionProps {
  data: ProductType;
}

const EditAction: React.FC<EditActionProps> = ({ data }) => {
  return (
    <View className="w-full flex-row items-center justify-start gap-x-3">
      <CustomButton
        handlePress={() => {}}
        className="w-[160px] bg-white border border-danger"
      >
        <View className="w-full flex-row items-center justify-center gap-x-3">
          <Image
            source={signeduser.deleteIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
          <Text className="text-base text-danger font-semibold">
            Delete Item
          </Text>
        </View>
      </CustomButton>
      <CustomButton
        handlePress={() => {}}
        className="w-[160px] bg-primary border border-primary"
      >
        <View className="w-full flex-row items-center justify-center gap-x-3">
          <Image
            source={signeduser.editIcon}
            resizeMode="contain"
            className="w-6 h-6"
            tintColor={"#FFF"}
          />
          <Text className="text-sm text-white font-semibold">Edit Item</Text>
        </View>
      </CustomButton>
    </View>
  );
};

export default EditAction;

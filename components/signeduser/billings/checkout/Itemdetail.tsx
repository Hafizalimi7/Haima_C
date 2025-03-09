import React from "react";
import { ProductType } from "@/types/product";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { useRouter } from "expo-router";
import { Fee, formatCurrency } from "@/helpers/currency";

interface ItemdetailProps {
  data: ProductType;
}

const Itemdetail: React.FC<ItemdetailProps> = ({ data }) => {
  const { push } = useRouter();
  
  return (
    <View className="flex-col items-start justify-start gap-y-3 w-full">
      <Text className="text-base font-medium text-primary">Item Details</Text>
      <View className="flex-row items-start justify-start gap-x-4 w-full">
        <TouchableOpacity onPress={() => push(`/product/${data.id}/item`)}>
          <View className="w-40 h-[132px] relative rounded-lg">
            <Image
              source={data.productImage}
              resizeMode="cover"
              className="w-full h-full rounded-lg"
            />
            <View className="w-full h-full rounded-lg bg-black/20 flex-row items-center justify-center absolute top-0">
              <Text className="text-sm font-semibold text-white">
                View Item
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View className="flex-col items-start justify-start gap-y-2">
          <Text className="text-base font-medium text-grey-800">
            {data.title}
          </Text>
          <Text className="text-base font-medium text-grey-800">
            Colour: {data.colour}
          </Text>
        </View>
      </View>
      <View className="flex-col items-start justify-start w-full">
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-grey-800">Item</Text>
          <Text className="text-lg font-bold text-primary text-end">
            {formatCurrency(data.price)}
          </Text>
        </View>
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-grey-800">
            Buyer protection fee
          </Text>
          <Text className="text-lg font-bold text-primary text-end">
            {formatCurrency(Fee)}
          </Text>
        </View>
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-grey-800">
            Shipping fee
          </Text>
          <Text className="text-lg font-bold text-primary text-end">
            {formatCurrency(2)}
          </Text>
        </View>
        <View className="w-full py-4 flex-row items-center justify-between">
          <Text className="text-base font-medium text-primary">Total</Text>
          <Text className="text-lg font-bold text-primary text-end">
            {formatCurrency(data.price + Fee + 2)}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Itemdetail;

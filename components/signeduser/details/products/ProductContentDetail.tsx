import React from "react";
import signeduser from "@/constants/icons/signeduser";
import { formatCurrency } from "@/helpers/currency";
import { ProductType } from "@/types/product";
import { View, Text, Image } from "react-native";

interface ProductContentDetailProps {
  data: ProductType;
}

const ProductContentDetail: React.FC<ProductContentDetailProps> = ({
  data,
}) => {
  return (
    <View className="px-4 pt-5 flex-col items-start justify-start gap-y-4 w-full">
      <View className="flex-col items-start justify-start gap-y-2 w-full">
        <Text className="text-base font-medium text-primary w-full">
          {data.title}
        </Text>
        <View className="flex-row items-center justify-start gap-x-3">
          <Text className="text-xl font-bold text-primary">
            {data.discount
              ? formatCurrency(data.discount_price ?? data.price)
              : formatCurrency(data.price)}
          </Text>
          {data.discount && (
            <Text
              className="text-base font-medium text-grey-800"
              style={{ textDecorationLine: "line-through" }}
            >
              {formatCurrency(data.price)}
            </Text>
          )}
          {data.discount && data.discount_percentage && (
            <View className="bg-[#FFE2E2] w-12 h-6 flex flex-row items-center justify-center rounded">
              <Text className="text-[#BE0B0B] text-sm font-bold">
                -{data.discount_percentage}%
              </Text>
            </View>
          )}
        </View>
        <View className="flex-row items-center justify-start gap-x-2">
          <Image
            source={signeduser.starIcon}
            resizeMode="contain"
            className="w-4 h-4"
          />
          <View className="flex-row items-center justify-start gap-x-1">
            <Text className="text-sm font-medium text-primary">
              {data.review}
            </Text>
            <Text className="text-sm font-medium text-grey-800">
              (20 reviews)
            </Text>
          </View>
        </View>
      </View>
      <Text className="text-base font-normal text-grey-800">{data.desc}</Text>
      <View className="flex-col items-start justify-start w-full">
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-primary">Category</Text>
          <Text className="text-base font-normal text-grey-800 text-end capitalize">
            {data.category}
          </Text>
        </View>
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-primary">Colour</Text>
          <Text className="text-base font-normal text-grey-800 text-end">
            {data.colour}
          </Text>
        </View>
        <View className="w-full py-4 border-b border-grey-400 flex-row items-center justify-between">
          <Text className="text-base font-medium text-primary">Brand</Text>
          <Text className="text-base font-normal text-grey-800 text-end capitalize">
            {data.brand}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductContentDetail;

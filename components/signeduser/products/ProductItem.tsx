import React from "react";
import { View, Text, TouchableOpacity, Image, StyleProp, ViewStyle } from "react-native";
import { ProductType } from "@/types/product";
import { useRouter } from "expo-router";
import { formatCurrency } from "@/helpers/currency";
import signeduser from "@/constants/icons/signeduser";

interface ProductItemProps {
  product: ProductType;
  className?: string;
  style?: StyleProp<ViewStyle>;
}

const ProductItem: React.FC<ProductItemProps> = ({
  product,
  className = "first:ml-4 mx-2 pb-3 w-[164px]",
  style,
}) => {
  const { push } = useRouter();

  return (
    <View className={`${className}`} style={style}>
      <TouchableOpacity
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Navigate to ${product.title} search`}
        onPress={() => push(`/product/${product.id}/item`)}
        className="flex flex-col items-start justify-start gap-y-2 w-full"
      >
        <View className="rounded-3xl w-[164px] aspect-square relative overflow-hidden">
          <Image
            source={product.productImage}
            resizeMode="cover"
            className="w-full h-full rounded-3xl"
            testID="product-image"
          />
          <View
            className={`w-full flex-row items-center absolute top-0 left-0 p-4 z-10 ${
              product.discount && product.discount_percentage
                ? "justify-between"
                : "justify-end"
            }`}
          >
            {product.discount && product.discount_percentage && (
              <View className="bg-[#FFE2E2] w-9 h-6 flex flex-row items-center justify-center rounded">
                <Text className="text-[#BE0B0B] text-xs">
                  -{product.discount_percentage}%
                </Text>
              </View>
            )}
            <View
              className={`w-7 h-7 bg-primary-300 rounded-full flex-row items-center justify-center ${
                product.discount ? "ml-auto" : ""
              }`}
            >
              <Image
                source={signeduser.heartIcon}
                resizeMode="contain"
                className="w-3 h-3"
                tintColor={"#FFF"}
              />
            </View>
          </View>
        </View>
        <View className="flex-col items-start justify-start gap-y-2 w-full">
          <Text
            className="text-sm font-normal text-grey-800 w-full"
            numberOfLines={1}
          >
            {product.title}
          </Text>
          <View className="flex-row items-center justify-start gap-x-1">
            <Text className="text-base font-bold text-black">
              {product.discount
                ? formatCurrency(product.discount_price ?? product.price)
                : formatCurrency(product.price)}
            </Text>
            {product.discount && (
              <Text
                className="text-sm font-medium text-grey-800"
                style={{ textDecorationLine: "line-through" }}
              >
                {formatCurrency(product.price)}
              </Text>
            )}
          </View>
          <View className="flex-row items-center justify-between w-full">
            <Text
              className="text-sm font-semibold text-secondary flex-1 mr-2"
              numberOfLines={1}
            >
              {product.desc}
            </Text>
            <Image
              source={signeduser.shieldIcon}
              resizeMode="contain"
              className="w-4 h-4"
            />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default ProductItem;

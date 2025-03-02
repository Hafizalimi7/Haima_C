import signeduser from "@/constants/icons/signeduser";
import { ProductType } from "@/types/product";
import React, { useRef, useState } from "react";
import { View, Text, FlatList, Dimensions, Image } from "react-native";

interface ProductImageSliderProps {
  data: ProductType;
}

const { width } = Dimensions.get("window");

const ProductImageSlider: React.FC<ProductImageSliderProps> = ({ data }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<FlatList>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  return (
    <View className="w-full h-[309px]">
      <FlatList
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{ height: "100%" }}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={data.images}
        pagingEnabled
        renderItem={({ item }) => (
          <View style={{ width: width }} className="w-full h-[309px] relative">
            <Image source={item} resizeMode="cover" className="w-full h-full" />
            <View
              className={`w-8 h-8 bg-primary-300 rounded-full flex-row items-center justify-center absolute top-4 right-4`}
            >
              <Image
                source={signeduser.heartIcon}
                resizeMode="contain"
                className="w-4 h-4"
                tintColor={"#FFF"}
              />
            </View>
            <View
              style={{ width: width }}
              className="flex-row justify-center items-center my-6 gap-x-2 absolute bottom-0 right-0"
            >
              {data.images.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 rounded-full ${
                    currentSlideIndex == index
                      ? "bg-secondary w-6"
                      : "w-2 bg-white"
                  }`}
                />
              ))}
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default ProductImageSlider;

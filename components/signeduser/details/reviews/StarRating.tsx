import React from "react";
import { images } from "@/constants";
import { View, TouchableOpacity, Image } from "react-native";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
  containerClassName?: string;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className = "w-4 h-4",
  onRatingChange,
  readonly = false,
  containerClassName,
}) => {
  return (
    <View className={`flex-row ${containerClassName}`}>
      {[...Array(maxRating)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => !readonly && onRatingChange?.(index + 1)}
          disabled={readonly}
          className="mr-1"
        >
          <Image
            source={images.largeStarImage}
            resizeMode="contain"
            className={`${className}`}
            tintColor={index < rating ? "#D3AC2A" : "#E7E7E7"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

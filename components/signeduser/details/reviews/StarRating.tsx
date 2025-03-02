import React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";

interface StarRatingProps {
  rating: number;
  maxRating?: number;
  className?: string;
  onRatingChange?: (rating: number) => void;
  readonly?: boolean;
}

export const StarRating: React.FC<StarRatingProps> = ({
  rating,
  maxRating = 5,
  className = "w-4 h-4",
  onRatingChange,
  readonly = false,
}) => {
  return (
    <View className="flex-row">
      {[...Array(maxRating)].map((_, index) => (
        <TouchableOpacity
          key={index}
          onPress={() => !readonly && onRatingChange?.(index + 1)}
          disabled={readonly}
          className="mr-1"
        >
          <Image
            source={signeduser.starIcon}
            resizeMode="contain"
            className={`${className}`}
            tintColor={index < rating ? "#D3AC2A" : "#E7E7E7"}
          />
        </TouchableOpacity>
      ))}
    </View>
  );
};

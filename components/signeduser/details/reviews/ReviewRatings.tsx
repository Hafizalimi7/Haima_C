import React, { useMemo } from "react";
import { ProductType, Review } from "@/types/product";
import { View, Text } from "react-native";
import { StarRating } from "./StarRating";
import ReviewProgressBar from "./ReviewProgressBar";

interface ReviewRatingsProps {
  data: ProductType;
  reviews: Review[];
  averageRating: number;
}

interface RatingStats {
  count: number;
  percentage: number;
}

const ReviewRatings: React.FC<ReviewRatingsProps> = ({
  reviews,
  averageRating,
}) => {
  const ratingStats = useMemo(() => {
    const stats: Record<number, RatingStats> = {
      5: { count: 0, percentage: 0 },
      4: { count: 0, percentage: 0 },
      3: { count: 0, percentage: 0 },
      2: { count: 0, percentage: 0 },
      1: { count: 0, percentage: 0 },
    };

    // Count reviews for each rating
    reviews.forEach((review) => {
      if (stats[review.rating]) {
        stats[review.rating].count += 1;
      }
    });

    // Calculate percentages
    const totalReviews = reviews.length;
    Object.keys(stats).forEach((rating) => {
      const count = stats[Number(rating)].count;
      stats[Number(rating)].percentage =
        totalReviews > 0 ? (count / totalReviews) * 100 : 0;
    });

    return stats;
  }, [reviews]);

  return (
    <View className="px-4 pb-4 w-full">
      <View className="w-full flex-row items-center justify-start gap-x-4">
        <Text className="text-secondary text-[64px] font-extrabold leading-[76px]">
          {averageRating.toFixed(1)}
        </Text>
        <View className="flex-col items-start justify-start gap-y-2">
          <Text className="text-sm font-normal text-primary">
            Average rating
          </Text>
          <View className="flex-row items-center justify-start gap-x-2">
            <StarRating rating={averageRating} readonly />
            <Text className="text-sm font-medium text-grey-800">
              ({reviews.length})
            </Text>
          </View>
        </View>
      </View>
      <View className="flex-col items-start justify-start w-[95%] gap-y-3">
        {[5, 4, 3, 2, 1].map((rating) => (
          <View
            key={rating}
            className="w-full flex-row items-center justify-between gap-x-4"
          >
            <View className="flex-row items-center gap-x-2 w-20">
              <StarRating rating={rating} readonly />
              <Text className="text-sm font-medium text-grey-800">
                ({ratingStats[rating].count})
              </Text>
            </View>

            <View className="flex-1 max-w-[147px]">
              <ReviewProgressBar
                progress={ratingStats[rating].percentage}
                duration={1000}
              />
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ReviewRatings;

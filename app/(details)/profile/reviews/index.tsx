import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import {
  ReviewComments,
  ReviewRatings,
} from "@/components/signeduser/details/reviews";
import { products, sampleReviews } from "@/data/products";
import { SafeAreaView } from "react-native-safe-area-context";

export default function UserReviewsScreen() {
  const calculateAverageRating = () => {
    if (sampleReviews.length === 0) return 0;
    const sum = sampleReviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / sampleReviews.length;
  };

  return (
    <SafeAreaView className="flex-1 bg-white pb-10">
      <DetailHeader title="Reviews" showShareIcon={false} />
      <ReviewRatings
        data={products[0]}
        reviews={sampleReviews}
        averageRating={calculateAverageRating()}
      />
      <ReviewComments data={products[0]} reviews={sampleReviews} />
    </SafeAreaView>
  );
}

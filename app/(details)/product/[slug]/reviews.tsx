import React, { useState } from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { useLocalSearchParams } from "expo-router";
import { ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { products, sampleReviews } from "@/data/products";
import {
  CreateReviews,
  ReviewComments,
  ReviewRatings,
} from "@/components/signeduser/details/reviews";
import { Review, ReviewFormValues } from "@/types/product";

export default function ReviewsScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const data = products.find((item) => item.id === slug);
  const [reviews, setReviews] = useState<Review[]>(sampleReviews);

  if (!data) return;

  const calculateAverageRating = () => {
    if (reviews.length === 0) return 0;
    const sum = reviews.reduce((acc, review) => acc + review.rating, 0);
    return sum / reviews.length;
  };

  const addReview = (values: ReviewFormValues) => {
    // Here you would typically make an API call to save the review
    const newReview: Review = {
      id: Date.now().toString(),
      ...values,
      userId: data.id,
      userName: "Current User",
      createdAt: new Date().toISOString(),
    };

    setReviews([newReview, ...reviews]);
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <ScrollView
        contentContainerStyle={{
          paddingBottom: 15,
        }}
      >
        <DetailHeader title="Reviews" showShareIcon={false} />
        <CreateReviews data={data} addReview={addReview} />
        <ReviewRatings
          data={data}
          reviews={reviews}
          averageRating={calculateAverageRating()}
        />
        <ReviewComments data={data} reviews={reviews} />
      </ScrollView>
    </SafeAreaView>
  );
}

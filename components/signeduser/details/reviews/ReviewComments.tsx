import React from "react";
import { ProductType, Review } from "@/types/product";
import { View, Text, FlatList } from "react-native";
import { StarRating } from "./StarRating";
import { formatReviewDate } from "@/helpers/date";

interface ReviewCommentsProps {
  data: ProductType;
  reviews: Review[];
}

const ReviewComments: React.FC<ReviewCommentsProps> = ({ data, reviews }) => {
  return (
    <View className="px-4 w-full py-4 flex-col items-start justify-start gap-y-4">
      <Text className="text-base font-semibold text-primary">
        Comments ({reviews.length})
      </Text>
      <FlatList
        data={reviews}
        renderItem={({ item }) => <ReviewCommentItem item={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const ReviewCommentItem = ({ item }: { item: Review }) => (
  <View className="py-4 border-b border-gray-100 flex-col items-start justify-start gap-y-3 w-full">
    <View className="flex-row justify-between items-center w-full">
      <StarRating rating={item.rating} readonly />
      <Text className="text-sm font-normal text-grey-800">
        {formatReviewDate(item.createdAt)}
      </Text>
    </View>

    <Text className="text-base font-normal text-gray-700">{item.comment}</Text>

    <View className="flex-row justify-start gap-x-3 items-center">
      <View className="w-10 h-10 rounded-full flex-row items-center justify-center bg-[#E4EAFF]">
        <Text className="font-bold text-sm text-primary">
          {item.userName.slice(0, 2)}
        </Text>
      </View>
      <Text className="font-semibold text-sm text-primary">
        {item.userName}
      </Text>
    </View>
  </View>
);

export default ReviewComments;

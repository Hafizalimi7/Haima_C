import React from "react";
import { ProductType, ReviewFormValues } from "@/types/product";
import { View, Text, TouchableOpacity, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import useBooleanControl from "@/hooks/useBooleanControl";
import { ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import CreateReviewForm from "./CreateReviewForm";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { useAuth } from "@/contexts/AuthContext";

interface CreateReviewsProps {
  data: ProductType;
  addReview: (values: ReviewFormValues) => void;
}

const CreateReviews: React.FC<CreateReviewsProps> = ({ addReview }) => {
  const { openAuthSheet } = useBottomSheet();
  const { isAuthenticated } = useAuth();
  const {
    state: showCreateReview,
    setTrue: setShowCreateReviewTrue,
    setFalse: setShowCreateReviewFalse,
  } = useBooleanControl();

  const handleReview = () => {
    if (isAuthenticated) {
      setShowCreateReviewTrue();
    }
    if (!isAuthenticated) {
      openAuthSheet();
    }
  };
  return (
    <View className="px-4 w-full my-4">
      <TouchableOpacity
        onPress={handleReview}
        className="w-full bg-grey-100 border border-grey px-4 py-4 rounded-full flex-row items-center justify-between"
      >
        <Text className="text-base font-semibold text-grey-800">
          Give your rating and review
        </Text>
        <Image
          source={signeduser.chevronarrowIcon}
          resizeMode="contain"
          className="w-6 h-6"
        />
      </TouchableOpacity>
      <ModalPopUp visible={showCreateReview} className="!px-0 !py-0">
        <View className="w-full flex-row items-center justify-between px-3 py-3 border-b border-grey">
          <Text className="text-base font-medium text-primary">
            Rate and Review
          </Text>
          <TouchableOpacity onPress={setShowCreateReviewFalse}>
            <Image
              source={icons.closeIcon}
              resizeMode="contain"
              className="w-6 h-6"
            />
          </TouchableOpacity>
        </View>
        <CreateReviewForm
          setShowCreateReviewFalse={setShowCreateReviewFalse}
          addReview={addReview}
        />
      </ModalPopUp>
    </View>
  );
};

export default CreateReviews;

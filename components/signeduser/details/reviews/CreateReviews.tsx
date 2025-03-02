import React from "react";
import { ProductType, ReviewFormValues } from "@/types/product";
import { View, Text, TouchableOpacity, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import useBooleanControl from "@/hooks/useBooleanControl";
import { CustomButton, ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import { Formik } from "formik";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { FormFieldInput } from "@/components/ui/inputs";
import { StarRating } from "./StarRating";
import { TextInput } from "react-native";

interface CreateReviewsProps {
  data: ProductType;
  addReview: (values: ReviewFormValues) => void;
}

const CreateReviews: React.FC<CreateReviewsProps> = ({ addReview }) => {
  const {
    state: showCreateReview,
    setTrue: setShowCreateReviewTrue,
    setFalse: setShowCreateReviewFalse,
  } = useBooleanControl();

  return (
    <View className="px-4 w-full my-4">
      <TouchableOpacity
        onPress={setShowCreateReviewTrue}
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

interface CreateReviewFormProps {
  setShowCreateReviewFalse: () => void;
  addReview: (values: ReviewFormValues) => void;
}

const CreateReviewForm: React.FC<CreateReviewFormProps> = ({
  setShowCreateReviewFalse,
  addReview,
}) => {
  const initialValues: ReviewFormValues = {
    rating: 0,
    comment: "",
  };

  const handleSubmit = (values: ReviewFormValues) => {
    console.log("🚀 ~ handleSubmit ~ values:", values);
    addReview(values);
    setShowCreateReviewFalse();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={reviewValidationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
        handleChange,
      }) => (
        <View className="px-5 py-5 w-full flex-col items-center justify-start gap-y-5">
          <View className="flex-col items-center justify-center gap-y-3">
            <Text className="text-center text-base font-normal text-grey-800 w-[190px]">
              How do you like the items and service rendered?
            </Text>
            <StarRating
              rating={values.rating}
              onRatingChange={(rating) => setFieldValue("rating", rating)}
              className="w-12 h-12"
            />
            {touched.rating && errors.rating && (
              <Text className="text-danger text-xs mt-1">{errors.rating}</Text>
            )}
          </View>
          <View className="w-full flex-col items-start justify-start gap-y-2">
            <TextInput
              className="border border-grey rounded-xl p-3 h-36 text-base font-normal w-full"
              multiline
              placeholder="Write your review here (optional)"
              value={values.comment}
              onChangeText={handleChange("comment")}
              style={{ textAlignVertical: "top" }}
            />
            {touched.comment && errors.comment && (
              <Text className="text-red-500 text-xs mt-1">
                {errors.comment}
              </Text>
            )}
          </View>
          <View className="w-full flex-col items-center justify-center gap-y-2">
            <CustomButton
              handlePress={() => handleSubmit()}
              className="w-full bg-primary"
            >
              <Text className="text-base text-white font-semibold">Submit</Text>
            </CustomButton>
          </View>
        </View>
      )}
    </Formik>
  );
};

export default CreateReviews;

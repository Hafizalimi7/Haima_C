import { Formik } from "formik";
import { reviewValidationSchema } from "@/schemas/review.schema";
import { StarRating } from "./StarRating";
import { Text, TextInput, View } from "react-native";
import { ReviewFormValues } from "@/types/product";
import { CustomButton } from "@/components/ui";

type ReviewType = "product" | "notification";

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
              containerClassName="gap-x-4"
            />
            {touched.rating && errors.rating && (
              <Text className="text-danger text-xs mt-1">{errors.rating}</Text>
            )}
          </View>
          <View className="w-full flex-col items-start justify-start gap-y-2">
            <TextInput
              className="border border-grey rounded-xl p-3 h-36 text-base font-normal w-full focus:border-primary"
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

export default CreateReviewForm;

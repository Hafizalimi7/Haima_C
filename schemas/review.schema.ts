import * as yup from "yup";

export const reviewValidationSchema = yup.object().shape({
  rating: yup
    .number()
    .required("Rating is required")
    .min(1, "Rating must be at least 1")
    .max(5, "Rating must not exceed 5"),
  comment: yup.string().notRequired(),
});

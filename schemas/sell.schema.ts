import * as yup from "yup";

const imageSchema = yup.object().shape({
  uri: yup.string().required("Image URI is required"),
  name: yup.string().required("Image name is required"),
  type: yup.string().required("Image type is required"),
});

export const sellFormSchema = yup.object().shape({
  images: yup
    .array()
    .of(imageSchema)
    .min(1, "At least one image is required")
    .required("Please select an image"),
  item_name: yup.string().required("Item name is required"),
  item_description: yup.string().required("Item description is required"),
  category: yup.string().required("Please select a category"),
  price: yup.string().required("Price is required"),
  brand: yup.string().required("Please select a brand"),
  condition: yup.string().required("Please select a condition"),
  colour: yup
    .array()
    .of(
      yup.object().shape({
        name: yup.string().required(),
        hex: yup.string().required(),
      })
    )
    .notRequired(),
  size: yup.string().notRequired(),
});

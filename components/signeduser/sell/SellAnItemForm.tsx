import React from "react";
import { Formik, FormikHelpers } from "formik";
import { View, TextInput } from "react-native";
import UploadProductImages from "./UploadProductImages";
import { sellItemFormValue } from "@/types/sell";
import { sellFormSchema } from "@/schemas/sell.schema";
import { FormFieldInput } from "@/components/ui/inputs";
import CategoryOption from "./CategoryOption";
import BrandOption from "./BrandOption";
import SizeOption from "./SizeOption";
import ColourOption from "./ColourOption";
import ConditionOption from "./ConditionOption";

interface SellAnItemFormProps {
  setFormSubmit: (submit: () => void) => void;
  onSubmit: (values: sellItemFormValue) => void;
}

const SellAnItemForm: React.FC<SellAnItemFormProps> = ({
  setFormSubmit,
  onSubmit,
}) => {
  const initialValues: sellItemFormValue = {
    images: [],
    item_name: "",
    item_description: "",
    category: "",
    price: "",
    brand: "",
    condition: "",
    colour: [],
    size: "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={sellFormSchema}
      onSubmit={onSubmit}
    >
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
      }) => {
        setFormSubmit(handleSubmit);
        const getError = (key: keyof sellItemFormValue): string | undefined => {
          return touched[key] && errors[key]
            ? (errors[key] as string)
            : undefined;
        };

        return (
          <View className="w-full px-4 flex-col items-start justify-start gap-y-2">
            <UploadProductImages
              values={values}
              setFieldValue={setFieldValue}
              error={getError("images")}
            />
            <FormFieldInput
              labelShow={false}
              value={values.item_name}
              handleChangeText={handleChange("item_name")}
              onBlur={handleBlur("item_name")}
              placeholder="Item Name"
              containerClassName=""
              errorClass={`${
                getError("item_name") ? "border-danger" : "border-grey"
              }`}
            />
            <TextInput
              className={`border rounded-xl p-3 h-36 text-sm font-normal w-full focus:border-primary ${
                getError("item_name") ? "border-danger" : "border-grey"
              }`}
              multiline
              placeholder="Description"
              value={values.item_description}
              onChangeText={handleChange("item_description")}
              style={{ textAlignVertical: "top" }}
            />
            <CategoryOption
              values={values}
              setFieldValue={setFieldValue}
              error={getError("category")}
            />
            <FormFieldInput
              labelShow={false}
              value={values.price}
              handleChangeText={handleChange("price")}
              onBlur={handleBlur("price")}
              keyboardType="numeric"
              placeholder="Price"
              containerClassName=""
              errorClass={`${
                getError("price") ? "border-danger" : "border-grey"
              }`}
            />
            <BrandOption
              values={values}
              setFieldValue={setFieldValue}
              error={getError("brand")}
            />
            <ConditionOption
              values={values}
              setFieldValue={setFieldValue}
              error={getError("condition")}
            />
            <ColourOption values={values} setFieldValue={setFieldValue} />
            <SizeOption values={values} setFieldValue={setFieldValue} />
          </View>
        );
      }}
    </Formik>
  );
};

export default SellAnItemForm;

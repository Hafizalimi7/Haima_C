import React, { useCallback } from "react";
import { Formik } from "formik";
import { View, TextInput, Text, ScrollView } from "react-native";
import UploadProductImages from "./UploadProductImages";
import { sellItemFormValue } from "@/types/sell";
import { FormFieldInput } from "@/components/ui/inputs";
import CategoryOption from "./CategoryOption";
import BrandOption from "./BrandOption";
import SizeOption from "./SizeOption";
import ColourOption from "./ColourOption";
import ConditionOption from "./ConditionOption";
import useBooleanControl from "@/hooks/useBooleanControl";
import ProceedModal from "./ProceedModal";
import { CustomButton } from "@/components/ui";

const SellAnItemForm: React.FC = () => {
  const {
    state: isProceedModalVisible,
    setTrue: setIsProceedModalVisibleTrue,
    setFalse: setIsProceedModalVisibleFalse,
  } = useBooleanControl();

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

  const handleAcceptSubmit = async (values: sellItemFormValue) => {
    console.log("🚀 ~ handleSubmit ~ values:", values);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleAcceptSubmit}>
      {({
        handleChange,
        handleBlur,
        values,
        errors,
        touched,
        setFieldValue,
        handleSubmit,
      }) => {
        const requiredFields = [
          "item_name",
          "item_description",
          "category",
          "price",
          "brand",
          "condition",
          "images",
        ];

        const isFormIncomplete = requiredFields.some((field) => {
          const value = values[field as keyof sellItemFormValue];
          return value === "" || (Array.isArray(value) && value.length === 0);
        });
        const getError = useCallback(
          (key: keyof sellItemFormValue): string | undefined => {
            return touched[key] && errors[key]
              ? (errors[key] as string)
              : undefined;
          },
          [touched, errors]
        );

        return (
          <React.Fragment>
            <ScrollView
              contentContainerStyle={{
                paddingBottom: 15,
                flexGrow: 1,
              }}
            >
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
                    getError("item_description")
                      ? "border-danger"
                      : "border-grey"
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
            </ScrollView>
            <View
              className="w-full px-4 py-6 bg-white"
              style={{
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: -4,
                },
                shadowOpacity: 0.04,
                shadowRadius: 3.7,
                elevation: 4,
              }}
            >
              <CustomButton
                handlePress={setIsProceedModalVisibleTrue}
                className="w-full bg-primary border border-primary disabled:bg-grey disabled:border-grey group"
                disabled={isFormIncomplete}
              >
                <Text className="text-sm text-white font-semibold group-disabled:text-grey-800">
                  Upload Item
                </Text>
              </CustomButton>
            </View>
            <ProceedModal
              show={isProceedModalVisible}
              onClose={setIsProceedModalVisibleFalse}
              handleSubmit={handleSubmit}
            />
          </React.Fragment>
        );
      }}
    </Formik>
  );
};

export default SellAnItemForm;

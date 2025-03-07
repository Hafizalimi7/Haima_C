import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { CustomButton } from "@/components/ui";
import { Checkbox, FormFieldInput } from "@/components/ui/inputs";
import { icons } from "@/constants";
import { useShipping } from "@/contexts/ShippingProvider";
import { ShippingFormValue } from "@/types/billing";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { CountrySelector } from "./CountrySelector";

const validationSchema = Yup.object().shape({
  fullname: Yup.string().required("Full name is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  country: Yup.string().required("Country is required"),
  address1: Yup.string().required("Address is required"),
  address2: Yup.string().notRequired(),
  postalCode: Yup.string().required("Postal code is required"),
  city: Yup.string().required("City is required"),
  setDefault: Yup.boolean(),
});

const emptyInitialValues: ShippingFormValue = {
  fullname: "",
  phoneNumber: "",
  country: "",
  address1: "",
  address2: "",
  postalCode: "",
  city: "",
  setDefault: false,
};

const CreateShippingAddressForm: React.FC = () => {
  const { back } = useRouter();
  const { addShippingAddress, addressToEdit } = useShipping();
  const initialValues = addressToEdit || emptyInitialValues;

  const handleSubmit = (values: ShippingFormValue) => {
    addShippingAddress({
      ...values,
      id: addressToEdit?.id,
    });
    back();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        isSubmitting,
        setFieldValue,
      }) => {
        const getError = (key: keyof ShippingFormValue): string | undefined => {
          return touched[key] && errors[key]
            ? (errors[key] as string)
            : undefined;
        };
        return (
          <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between pb-4">
            <View className="gap-y-3 flex-col items-start w-full">
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.fullname}
                  handleChangeText={handleChange("fullname")}
                  onBlur={handleBlur("fullname")}
                  placeholder="Full name"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("fullname") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.userIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.phoneNumber}
                  handleChangeText={handleChange("phoneNumber")}
                  onBlur={handleBlur("phoneNumber")}
                  placeholder="Phone number"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("phoneNumber") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.phoneIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>

              <View className="w-full relative">
                <CountrySelector
                  value={values.country}
                  onChange={(country) => setFieldValue("country", country)}
                  error={ getError("country")}
                />
                <View className="flex-row items-center justify-start absolute top-[18px] left-[20px]">
                  <Image
                    source={icons.locationIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.address1}
                  handleChangeText={handleChange("address1")}
                  onBlur={handleBlur("address1")}
                  placeholder="Address line 1 e.g 22 downing street"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("address1") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.locationIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.address2}
                  handleChangeText={handleChange("address2")}
                  onBlur={handleBlur("address2")}
                  placeholder="Address line 2 e.g Block 3 , flat 2"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("address2") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.locationIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.postalCode}
                  handleChangeText={handleChange("postalCode")}
                  onBlur={handleBlur("postalCode")}
                  placeholder="Post Code e.g M1 1AA"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("postalCode") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.locationIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.city}
                  handleChangeText={handleChange("city")}
                  onBlur={handleBlur("city")}
                  placeholder="City/Town"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("city") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.locationIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
                  />
                </View>
              </View>
              <View className="flex-row items-start justify-start gap-x-2 w-full pt-4 px-2">
                <Checkbox
                  className=""
                  checked={values.setDefault}
                  onPress={() =>
                    setFieldValue("setDefault", !values.setDefault)
                  }
                />

                <Text className="text-sm font-normal text-grey-800">
                  Set as default address
                </Text>
              </View>
            </View>
            <View className="w-full flex-col items-center justify-center gap-y-2">
              <CustomButton
                handlePress={() => {
                  handleSubmit();
                }}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={isSubmitting}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  {addressToEdit ? "Update Address" : "Add Address"}
                </Text>
              </CustomButton>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default CreateShippingAddressForm;

import React from "react";
import { Formik } from "formik";
import * as Yup from "yup";
import { usePayment } from "@/contexts/PaymentProvider";
import { PaymentCard } from "@/types/billing";
import { useRouter } from "expo-router";
import { View, Text, Image, Dimensions } from "react-native";
import { CustomButton } from "@/components/ui";
import { Checkbox, FormFieldInput } from "@/components/ui/inputs";
import { icons, images } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { MaterialIcons } from "@expo/vector-icons";
import {
  cardNumberFormatter,
  expirationDateFormatter,
} from "@/helpers/currency";

const validationSchema = Yup.object().shape({
  cardHolderName: Yup.string().required("Card holder name is required"),
  cardNumber: Yup.string().required("Card number is required"),
  expiryDate: Yup.string().required("Expire Date is required"),
  cvv: Yup.string().required("CVV is required"),
  setDefault: Yup.boolean(),
});

const initialValues: PaymentCard = {
  cardHolderName: "",
  cardNumber: "",
  expiryDate: "",
  cvv: "",
  setDefault: false,
};

const { width } = Dimensions.get("window");
const COLUMN_GAP = 10;

const ITEM_WIDTH = (width - COLUMN_GAP * (2 + 1)) / 2;

const CreateCardForm: React.FC = () => {
  const { back } = useRouter();
  const { addCard } = usePayment();

  const handleSubmit = (values: PaymentCard) => {
    console.log("🚀 ~ handleSubmit ~ values:", values);
    addCard({
      ...values,
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
        const getError = (key: keyof PaymentCard): string | undefined => {
          return touched[key] && errors[key]
            ? (errors[key] as string)
            : undefined;
        };
        return (
          <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between pb-4 px-2">
            <View className="gap-y-3 flex-col items-start w-full">
              <View className="w-full flex-col items-start justify-start gap-y-2">
                <Text className="text-sm font-medium text-primary">
                  Card Holder Name
                </Text>
                <View className="w-full relative">
                  <FormFieldInput
                    labelShow={false}
                    value={values.cardHolderName}
                    handleChangeText={handleChange("cardHolderName")}
                    onBlur={handleBlur("cardHolderName")}
                    placeholder="Full name"
                    containerClassName=""
                    className="pl-10"
                    errorClass={`${
                      getError("cardHolderName")
                        ? "border-danger"
                        : "border-grey"
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
              </View>
              <View className="w-full flex-col items-start justify-start gap-y-2">
                <Text className="text-sm font-medium text-primary">
                  Card Number
                </Text>
                <View className="w-full relative">
                  <FormFieldInput
                    labelShow={false}
                    value={values.cardNumber}
                    handleChangeText={(text) => {
                      const newValue = cardNumberFormatter(
                        values.cardNumber,
                        text
                      );
                      setFieldValue("cardNumber", newValue);
                    }}
                    onBlur={handleBlur("cardNumber")}
                    placeholder="0000    0000   0000    0000"
                    containerClassName=""
                    keyboardType="numeric"
                    className="pl-10"
                    errorClass={`${
                      getError("cardNumber") ? "border-danger" : "border-grey"
                    }`}
                  />
                  <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                    <Image
                      source={images.cardImage}
                      resizeMode="contain"
                      className="w-5 h-5 object-contain"
                    />
                  </View>
                </View>
              </View>

              <View className="flex-row items-start justify-start gap-x-2">
                <View
                  className="flex-col items-start justify-start gap-y-2"
                  style={{ width: ITEM_WIDTH }}
                >
                  <Text className="text-sm font-medium text-primary">
                    Expiry Date
                  </Text>
                  <View className="w-full relative">
                    <FormFieldInput
                      labelShow={false}
                      value={values.expiryDate}
                      handleChangeText={(text) => {
                        const newValue = expirationDateFormatter(
                          values.expiryDate,
                          text
                        );
                        setFieldValue("expiryDate", newValue);
                      }}
                      onBlur={handleBlur("expiryDate")}
                      placeholder="M  M  /  Y  Y"
                      keyboardType="numeric"
                      containerClassName=""
                      className="pl-10"
                      errorClass={`${
                        getError("expiryDate") ? "border-danger" : "border-grey"
                      }`}
                    />
                    <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                      <MaterialIcons
                        name="date-range"
                        size={20}
                        color="#717171"
                      />
                    </View>
                  </View>
                </View>
                <View
                  className="flex-col items-start justify-start gap-y-2"
                  style={{ width: ITEM_WIDTH }}
                >
                  <Text className="text-sm font-medium text-primary">CVV</Text>
                  <View className="w-full relative">
                    <FormFieldInput
                      labelShow={false}
                      value={values.cvv}
                      handleChangeText={handleChange("cvv")}
                      onBlur={handleBlur("cvv")}
                      placeholder="3 digits"
                      keyboardType="numeric"
                      containerClassName=""
                      className="pl-10"
                      maxLength={3}
                      errorClass={`${
                        getError("cvv") ? "border-danger" : "border-grey"
                      }`}
                    />
                    <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                      <Image
                        source={signeduser.cvvIcon}
                        resizeMode="contain"
                        className="w-5 h-5 object-contain"
                      />
                    </View>
                  </View>
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
                  Set as default card details
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
                  Save Card
                </Text>
              </CustomButton>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default CreateCardForm;

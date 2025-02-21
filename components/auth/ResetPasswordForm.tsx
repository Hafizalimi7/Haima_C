import React from "react";
import { View, Text } from "react-native";
import { CustomButton, ModalPopUp } from "../ui";
import { Formik } from "formik";
import { useRouter } from "expo-router";
import { ResetPasswordFormValues } from "@/types/auth";
import { ResetPasswordSchema } from "@/schemas/auth.schema";
import { FormFieldInput } from "../ui/inputs";
import { Image } from "react-native";
import { icons } from "@/constants";
import PasswordRequirements from "./PasswordRequirements";
import useBooleanControl from "@/hooks/useBooleanControl";

const ResetPasswordForm: React.FC = () => {
  const { push } = useRouter();
  const {
    state: successModal,
    setTrue: setSuccessModalTrue,
    setFalse: setSuccessModalFalse,
  } = useBooleanControl();

  const initialValues: ResetPasswordFormValues = {
    new_password: "",
    confirm_password: "",
  };

  const handleSubmit = (values: ResetPasswordFormValues) => {
    // Handle form submission here
    console.log("Form values:", values);
    setSuccessModalTrue()
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={ResetPasswordSchema}
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
        }) => {
          const getError = (
            key: keyof ResetPasswordFormValues
          ): string | undefined => {
            return touched[key] && errors[key]
              ? (errors[key] as string)
              : undefined;
          };

          return (
            <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
              <View className="gap-y-3 flex-col items-start w-full">
                <View className="w-full relative">
                  <FormFieldInput
                    labelShow={false}
                    type="Password"
                    value={values.new_password}
                    handleChangeText={handleChange("new_password")}
                    onBlur={handleBlur("new_password")}
                    placeholder="Enter new password"
                    containerClassName=""
                    className="pl-10"
                    errorClass={`${
                      getError("new_password") ? "border-danger" : "border-grey"
                    }`}
                  />
                  <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                    <Image
                      source={icons.lockIcon}
                      resizeMode="contain"
                      className="w-5 h-5"
                    />
                  </View>
                  <PasswordRequirements password={values.new_password} />
                </View>
                <View className="w-full relative">
                  <FormFieldInput
                    labelShow={false}
                    type="Password"
                    value={values.confirm_password}
                    handleChangeText={handleChange("confirm_password")}
                    onBlur={handleBlur("confirm_password")}
                    placeholder="Confrim your password"
                    containerClassName=""
                    className="pl-10"
                    errorClass={`${
                      getError("confirm_password")
                        ? "border-danger"
                        : "border-grey"
                    }`}
                  />
                  <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                    <Image
                      source={icons.lockIcon}
                      resizeMode="contain"
                      className="w-5 h-5"
                    />
                  </View>
                </View>
              </View>
              <View className="w-full flex-col items-center justify-center gap-y-2">
                <CustomButton
                  handlePress={() => handleSubmit()}
                  className="w-full bg-primary disabled:bg-grey group"
                  disabled={isSubmitting}
                >
                  <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                    Reset Password
                  </Text>
                </CustomButton>
              </View>
            </View>
          );
        }}
      </Formik>
      <ModalPopUp visible={successModal} className="">
        <View className="items-center flex-col justify-center gap-y-6">
          <Image
            source={icons.successIcon}
            resizeMode="contain"
            className="w-16 h-16 rounded-full"
          />
          <Text className="text-2xl font-semibold text-primary text-center">
            Reset Successful!
          </Text>
          <Text className="text-base font-normal text-grey-800 text-center max-w-[299px]">
            Your password has been successfully reset. Proceed to sign in{" "}
          </Text>
          <View className="w-full">
            <CustomButton
              handlePress={() => {
                push("/auth/sign-in");
                setSuccessModalFalse();
              }}
              className="w-full bg-primary"
            >
              <Text className="text-base text-white font-semibold">
                Sign in
              </Text>
            </CustomButton>
          </View>
        </View>
      </ModalPopUp>
    </React.Fragment>
  );
};

export default ResetPasswordForm;

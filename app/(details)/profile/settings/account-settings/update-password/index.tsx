import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import { View, Text, ScrollView, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useRouter } from "expo-router";
import { UpdatePasswordFormValues } from "@/types/auth";
import { Formik } from "formik";
import { UpdatePasswordSchema } from "@/schemas/auth.schema";
import { CustomButton } from "@/components/ui";
import { icons } from "@/constants";
import { FormFieldInput } from "@/components/ui/inputs";
import { PasswordRequirements } from "@/components/auth";

export default function UpdatePasswordScreen() {
  const { back } = useRouter();

  const initialValues: UpdatePasswordFormValues = {
    current_password: "",
    new_password: "",
    confirm_new_password: "",
  };

  const handleSubmit = (values: UpdatePasswordFormValues) => {
    // Handle form submission here
    console.log("Form values:", values);
    back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Change Password" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={UpdatePasswordSchema}
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
              key: keyof UpdatePasswordFormValues
            ): string | undefined => {
              return touched[key] && errors[key]
                ? (errors[key] as string)
                : undefined;
            };

            const disableButton =
              !values.current_password ||
              !!errors.current_password ||
              !values.new_password ||
              !!errors.new_password ||
              !values.confirm_new_password ||
              !!errors.confirm_new_password ||
              isSubmitting;

            return (
              <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
                <View className="gap-y-3 flex-col items-start w-full">
                  <View className="w-full relative">
                    <FormFieldInput
                      labelShow={false}
                      type="Password"
                      value={values.current_password}
                      handleChangeText={handleChange("current_password")}
                      onBlur={handleBlur("current_password")}
                      placeholder="Enter current password"
                      containerClassName=""
                      className="pl-10"
                      errorClass={`${
                        getError("current_password")
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
                        getError("new_password")
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
                    <PasswordRequirements password={values.new_password} />
                  </View>
                  <View className="w-full relative">
                    <FormFieldInput
                      labelShow={false}
                      type="Password"
                      value={values.confirm_new_password}
                      handleChangeText={handleChange("confirm_new_password")}
                      onBlur={handleBlur("confirm_new_password")}
                      placeholder="Confrim your new password"
                      containerClassName=""
                      className="pl-10"
                      errorClass={`${
                        getError("confirm_new_password")
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
                    disabled={disableButton}
                  >
                    <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                      Change Password
                    </Text>
                  </CustomButton>
                </View>
              </View>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

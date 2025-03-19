import React from "react";
import { EditProfileFormValues } from "@/types/profile";
import { useRouter } from "expo-router";
import { View, Text, Image } from "react-native";
import { Formik } from "formik";
import { CustomButton } from "@/components/ui";
import { FormFieldInput } from "@/components/ui/inputs";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";

interface EditProfileFormProps {}

const EditProfileForm: React.FC<EditProfileFormProps> = () => {
  const { push } = useRouter();

  const initialValues: EditProfileFormValues = {
    first_name: "",
    last_name: "",
    username: "",
    email: "",
    phoneNumber: "",
    date_of_birth: "",
  };

  const handleSubmit = (values: EditProfileFormValues) => {
    console.log("Form values:", values);
    push("/profile/settings");
  };

  return (
    <Formik
      initialValues={initialValues}
      // validationSchema={CreateProfileSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
        setFieldValue,
      }) => {
        const getError = (
          key: keyof EditProfileFormValues
        ): string | undefined => {
          return touched[key] && errors[key]
            ? (errors[key] as string)
            : undefined;
        };

        const disableButton =
          !values.first_name ||
          !!errors.first_name ||
          !values.last_name ||
          !!errors.last_name ||
          !values.username ||
          !!errors.username ||
          !values.email ||
          !!errors.email ||
          !values.date_of_birth ||
          !!errors.date_of_birth;

        return (
          <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
            <View className="gap-y-3 flex-col items-start w-full">
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.first_name}
                  handleChangeText={handleChange("first_name")}
                  onBlur={handleBlur("first_name")}
                  placeholder="First name"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("first_name") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.userIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.last_name}
                  handleChangeText={handleChange("last_name")}
                  onBlur={handleBlur("last_name")}
                  placeholder="Last name"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("last_name") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.userIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.username}
                  handleChangeText={handleChange("username")}
                  onBlur={handleBlur("username")}
                  placeholder="Username"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("username") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.userIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.email}
                  handleChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Email address"
                  containerClassName=""
                  className="px-10"
                  errorClass={`${
                    getError("email") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] right-[20px]">
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.emailIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
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
                  className="px-10"
                  errorClass={`${
                    getError("phoneNumber") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] right-[20px]">
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.phoneIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.date_of_birth}
                  handleChangeText={handleChange("date_of_birth")}
                  onBlur={handleBlur("date_of_birth")}
                  placeholder="Date of birth"
                  containerClassName=""
                  className="px-10"
                  errorClass={`${
                    getError("date_of_birth") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.dateIcon}
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
                  Save Changes
                </Text>
              </CustomButton>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default EditProfileForm;

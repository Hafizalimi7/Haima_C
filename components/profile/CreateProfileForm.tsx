import { CreateProfileSchema } from "@/schemas/auth.schema";
import { CreateProfileFormValues } from "@/types/profile";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { View, Text, Image } from "react-native";
import { CustomButton } from "../ui";
import { Checkbox, FormFieldInput } from "../ui/inputs";
import { icons } from "@/constants";
import { PasswordRequirements } from "../auth";

const CreateProfileForm: React.FC = () => {
  const { push } = useRouter();

  const initialValues: CreateProfileFormValues = {
    first_name: "",
    last_name: "",
    username: "",
    password: "",
    agreeToTerms: false,
  };

  const handleSubmit = (values: CreateProfileFormValues) => {
    console.log("Form values:", values);
    push("/profile-setup/profile-interest");
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={CreateProfileSchema}
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
          key: keyof CreateProfileFormValues
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
          !values.password ||
          !!errors.password ||
          !values.agreeToTerms ||
          !!errors.agreeToTerms;

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
                  type="Password"
                  value={values.password}
                  handleChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  placeholder="Enter your password"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("password") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.lockIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
                <PasswordRequirements password={values.password} />
              </View>
              <View className="flex-row items-start justify-start gap-x-2 w-full pt-4">
                <Checkbox
                  className=""
                  checked={values.agreeToTerms}
                  onPress={() =>
                    setFieldValue("agreeToTerms", !values.agreeToTerms)
                  }
                />

                <Text className="text-sm font-normal text-grey-800">
                  By signing up, you agree to{" "}
                  <Text className="text-sm font-normal text-secondary">
                    {" "}
                    Terms of Services & Privacy policy
                  </Text>
                </Text>
              </View>
            </View>
            <View className="w-full flex-col items-center justify-center gap-y-2">
              <CustomButton
                handlePress={() => handleSubmit()}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={disableButton}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  Complete Setup
                </Text>
              </CustomButton>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default CreateProfileForm;

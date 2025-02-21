import { SignInSchema } from "@/schemas/auth.schema";
import { SignInFormValues } from "@/types/auth";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { View, Text, Image } from "react-native";
import { FormFieldInput } from "../ui/inputs";
import { CustomButton } from "../ui";
import { TouchableOpacity } from "react-native";
import { icons } from "@/constants";
import SocialAuthOptions from "./SocialAuthOptions";

const SignInForm: React.FC = () => {
  const { push } = useRouter();

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = (values: SignInFormValues) => {
    // Handle form submission here
    console.log("Form values:", values);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignInSchema}
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
        const getError = (key: keyof SignInFormValues): string | undefined => {
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
                  value={values.email}
                  handleChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Enter your e-mail"
                  keyboardType="email-address"
                  containerClassName=""
                  errorClass={`${
                    getError("email") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[15%] left-[20px]">
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
                <View className="flex-row items-center justify-start absolute top-[15%] left-[20px]">
                  <Image
                    source={icons.lockIcon}
                    resizeMode="contain"
                    className="w-5 h-5"
                  />
                </View>
              </View>
              <View className="w-full flex-row items-center justify-end">
                <TouchableOpacity onPress={() => push("/auth/forget-password")}>
                  <Text className="text-sm font-semibold text-secondary">
                    Forgot password?
                  </Text>
                </TouchableOpacity>
              </View>
              <SocialAuthOptions />
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
                  Sign In
                </Text>
              </CustomButton>
              <View className="flex-row items-center gap-x-2">
                <Text className="text-base font-normal text-grey-800">
                  Don't have an account?
                </Text>
                <TouchableOpacity onPress={() => push("/auth/sign-up")}>
                  <Text className="text-base font-semibold text-primary">
                    Sign up here
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        );
      }}
    </Formik>
  );
};

export default SignInForm;

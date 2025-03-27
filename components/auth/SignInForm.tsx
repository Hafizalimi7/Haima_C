import { SignInSchema } from "@/schemas/auth.schema";
import { SignInFormValues } from "@/types/auth";
import { useRouter } from "expo-router";
import { Formik } from "formik";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FormFieldInput } from "../ui/inputs";
import { CustomButton } from "../ui";
import { icons } from "@/constants";
import SocialAuthOptions from "./SocialAuthOptions";
import { useAuth } from "@/contexts/AuthContext";
import { useState } from "react";
import { DUMMY_USERS } from "@/data/auth";

const SignInForm: React.FC = () => {
  const { push } = useRouter();
  const { login } = useAuth();
  const [error, setError] = useState<string>("");

  const initialValues: SignInFormValues = {
    email: "",
    password: "",
  };

  const handleSubmit = async (values: SignInFormValues) => {
    try {
      // Simulate API call with dummy data
      const user = DUMMY_USERS[values.email as keyof typeof DUMMY_USERS];

      if (!user || user.password !== values.password) {
        setError("Invalid email or password");
        return;
      }

      // Login with the user's role
      await login(user.role);

      // Store the current timestamp
      const currentTime = new Date("2025-03-11T23:43:56");

      // Log successful login
      console.log({
        timestamp: currentTime.toISOString(),
        user: {
          id: user.id,
          username: user.username,
          role: user.role,
        },
        loginSuccess: true,
      });

      // Navigate to home screen
      push("/home");
    } catch (error) {
      setError("An error occurred during sign in");
      console.error("Login error:", error);
    }
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
              {error && (
                <Text className="text-red-500 mb-4 text-center">{error}</Text>
              )}
              <View className="w-full relative">
                <FormFieldInput
                  labelShow={false}
                  value={values.email}
                  handleChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  placeholder="Enter your e-mail"
                  keyboardType="email-address"
                  containerClassName=""
                  className="pl-10"
                  errorClass={`${
                    getError("email") ? "border-danger" : "border-grey"
                  }`}
                />
                <View className="flex-row items-center justify-start absolute top-[13px] left-[20px]">
                  <Image
                    source={icons.emailIcon}
                    resizeMode="contain"
                    className="w-5 h-5 object-contain"
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

import { SignupSchema } from "@/schemas/auth.schema";
import { SignUpFormValues } from "@/types/auth";
import { Formik } from "formik";
import { Text, View } from "react-native";
import { FormFieldInput } from "../ui/inputs";
import { CustomButton } from "../ui";
import { TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

const SignUpForm: React.FC = () => {
  const { push } = useRouter();
  const initialValues: SignUpFormValues = {
    email: "",
  };

  const handleSubmit = (values: SignUpFormValues) => {
    // Handle form submission here
    console.log("Form values:", values);
    push(`/auth/verification/${values.email}`);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={SignupSchema}
      onSubmit={handleSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => {
        const getError = (key: keyof SignUpFormValues): string | undefined => {
          return touched[key] && errors[key]
            ? (errors[key] as string)
            : undefined;
        };

        return (
          <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
            <View className="w-full">
              <FormFieldInput
                labelShow={false}
                value={values.email}
                handleChangeText={handleChange("email")}
                onBlur={handleBlur("email")}
                placeholder="Enter email address or phone number"
                keyboardType="email-address"
                containerClassName=""
                errorClass={`${
                  getError("email") ? "border-danger" : "border-grey"
                }`}
              />
            </View>
            <View className="w-full flex-col items-center justify-center gap-y-2">
              <CustomButton
                handlePress={() => handleSubmit()}
                className="w-full bg-primary disabled:bg-grey group"
                disabled={!values.email || !!errors.email}
              >
                <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                  Sign Up
                </Text>
              </CustomButton>
              <View className="flex-row items-center gap-x-2">
                <Text className="text-base font-normal text-grey-800">
                  Already have an account?
                </Text>
                <TouchableOpacity>
                  <Text className="text-base font-semibold text-primary">
                    Sign in here
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

export default SignUpForm;

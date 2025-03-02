import React, { useEffect, useState } from "react";
import { Formik } from "formik";
import { VerificationSchema } from "@/schemas/auth.schema";
import { VerificationFormValue } from "@/types/auth";
import { useRouter } from "expo-router";
import { View, Text, Image, Alert } from "react-native";
import { CustomButton, ModalPopUp } from "../ui";
import useBooleanControl from "@/hooks/useBooleanControl";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import { TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { icons } from "@/constants";

interface VerificationFormProps {
  email: string | undefined;
  type: string | undefined;
}

const CELL_COUNT = 4;

const VerificationForm: React.FC<VerificationFormProps> = ({
  email,
  type = "verification",
}) => {
  const { push } = useRouter();
  const [resendCountdown, setResendCountdown] = useState(60);
  const { state: resendEnabled, setState: setResendEnabled } =
    useBooleanControl();
  const {
    state: successModal,
    setTrue: setSuccessModalTrue,
    setFalse: setSuccessModalFalse,
  } = useBooleanControl();

  const initialValues: VerificationFormValue = {
    otp: "",
  };

  const handleSubmit = (values: VerificationFormValue) => {
    console.log("🚀 ~ handleSubmit ~ values:", values)
    try {
      if (type === "reset-password") {
        push("/auth/reset-password");
        return;
      }
      setSuccessModalTrue();
    } catch (error) {
      Alert.alert("Error", "Something went wrong. Please try again.");
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    if (resendCountdown > 0) {
      timer = setTimeout(() => {
        setResendCountdown(resendCountdown - 1);
      }, 1000);
    } else {
      setResendEnabled(true);
    }
    return () => clearTimeout(timer);
  }, [resendCountdown]);

  const handleResendCode = async () => {
    if (!email) return;
    if (resendEnabled) {
      try {
        setResendCountdown(60);
        setResendEnabled(false);
      } catch (error) {
        console.log(error);
      }
    } else {
      console.log("Sending");
    }
  };

  return (
    <React.Fragment>
      <Formik
        initialValues={initialValues}
        validationSchema={VerificationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue, handleSubmit, values, errors }) => {
          const ref = useBlurOnFulfill({
            value: values.otp,
            cellCount: CELL_COUNT,
          });

          const [props, getCellOnLayoutHandler] = useClearByFocusCell({
            value: values.otp,
            setValue: (code) => setFieldValue("otp", code),
          });

          return (
            <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
              <View className="w-full flex-col gap-y-3">
                <View className="w-full">
                  <CodeField
                    ref={ref}
                    {...props}
                    value={values.otp}
                    onChangeText={(code) => setFieldValue("otp", code)}
                    cellCount={CELL_COUNT}
                    rootStyle={styles.codeFiledRoot}
                    keyboardType="number-pad"
                    textContentType="oneTimeCode"
                    renderCell={({ index, symbol, isFocused }) => (
                      <Text
                        key={index}
                        style={[styles.cell, isFocused && styles.focusCell]}
                        onLayout={getCellOnLayoutHandler(index)}
                      >
                        {symbol || (isFocused ? <Cursor /> : null)}
                      </Text>
                    )}
                  />
                </View>
                <View className="flex-row items-center justify-start gap-x-1 py-3">
                  <Text className="text-sm font-normal text-grey-800">
                    Didn’t receive any code?{" "}
                  </Text>
                  <TouchableOpacity onPress={handleResendCode}>
                    <Text className="text-sm font-semibold text-secondary">
                      {resendEnabled
                        ? "Resend code"
                        : ` ${Math.floor(resendCountdown / 60)}:${String(
                            resendCountdown % 60
                          ).padStart(2, "0")} left`}
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View className="w-full flex-col items-center justify-center gap-y-2">
                <CustomButton
                  handlePress={() => handleSubmit()}
                  className="w-full bg-primary disabled:bg-grey group"
                  disabled={!values.otp || !!errors.otp}
                >
                  <Text className="text-base text-white font-semibold group-disabled:text-grey-800">
                    Verify Account
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
            Account Verified!
          </Text>
          <Text className="text-base font-normal text-grey-800 text-center max-w-[299px]">
            Your account has been verified. Proceed to set up your profile.
          </Text>
          <View className="w-full">
            <CustomButton
              handlePress={() => {
                push("/profile-setup/create-profile");
                setSuccessModalFalse();
              }}
              className="w-full bg-primary"
            >
              <Text className="text-base text-white font-semibold">
                Continue
              </Text>
            </CustomButton>
          </View>
        </View>
      </ModalPopUp>
    </React.Fragment>
  );
};

const styles = StyleSheet.create({
  codeFiledRoot: { marginTop: 10 },
  cell: {
    width: 64,
    height: 64,
    lineHeight: 48,
    fontSize: 32,
    borderWidth: 1,
    borderColor: "#CECECE",
    backgroundColor: "#FFF",
    borderRadius: 6,
    textAlign: "center",
    shadowColor: "#1018280D",
  },
  focusCell: {
    borderColor: "#0F1225",
    color: "#0F1225",
  },
});

export default VerificationForm;

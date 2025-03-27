import React from "react";
import { Formik } from "formik";
import { CustomButton, ModalPopUp } from "@/components/ui";
import { DetailHeader } from "@/components/signeduser/details";
import { DeleteAccountFormValue } from "@/types/profile";
import { useRouter } from "expo-router";
import { View, Text, ScrollView, TextInput, Image } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import useBooleanControl from "@/hooks/useBooleanControl";
import { DeleteAccountSchema } from "@/schemas/auth.schema";
import { Checkbox } from "@/components/ui/inputs";
import signeduser from "@/constants/icons/signeduser";

export default function DeleteAccountScreen() {
  const { back } = useRouter();
  const {
    state: deleteModal,
    setTrue: setDeleteModalTrue,
    setFalse: setDeleteModalFalse,
  } = useBooleanControl();

  const initialValues: DeleteAccountFormValue = {
    reason: "",
    agreeToTerms: false,
  };

  const handleSubmit = (values: DeleteAccountFormValue) => {
    // Handle form submission here
    console.log("Form values:", values);
    back();
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Delete Account" showShareIcon={false} />
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingVertical: 10,
          flex: 1,
        }}
      >
        <Formik
          initialValues={initialValues}
          validationSchema={DeleteAccountSchema}
          onSubmit={handleSubmit}
        >
          {({
            handleChange,
            handleSubmit,
            values,
            errors,
            touched,
            isSubmitting,
            setFieldValue,
          }) => {
            const getError = (
              key: keyof DeleteAccountFormValue
            ): string | undefined => {
              return touched[key] && errors[key]
                ? (errors[key] as string)
                : undefined;
            };

            const disableButton =
              !values.reason ||
              !!errors.reason ||
              !values.agreeToTerms ||
              !!errors.agreeToTerms ||
              isSubmitting;

            return (
              <React.Fragment>
                <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
                  <View className="gap-y-3 flex-col items-start w-full">
                    <View className="w-full flex-col items-start justify-start gap-y-2">
                      <Text className="text-base font-normal text-grey-800">
                        Help us improve
                      </Text>
                      <TextInput
                        className="border border-grey rounded-xl p-3 h-40 text-sm font-normal w-full focus:border-primary"
                        multiline
                        placeholder="Tell us why you are leaving"
                        value={values.reason}
                        onChangeText={handleChange("reason")}
                        style={{ textAlignVertical: "top" }}
                      />
                      {getError("reason") && (
                        <Text className="text-red-500 text-xs mt-1">
                          {errors.reason}
                        </Text>
                      )}
                    </View>
                    <View className="flex-row items-start justify-start gap-x-2 w-full pt-2">
                      <Checkbox
                        className=""
                        checked={values.agreeToTerms}
                        onPress={() =>
                          setFieldValue("agreeToTerms", !values.agreeToTerms)
                        }
                      />

                      <Text className="text-base font-normal text-grey-800 max-w-[280px] -translate-y-1">
                        I confirm that all my transactions are completed
                      </Text>
                    </View>
                  </View>
                  <View className="w-full flex-col items-center justify-center gap-y-2">
                    <CustomButton
                      handlePress={setDeleteModalTrue}
                      className="bg-danger w-full disabled:bg-danger/50 group"
                      disabled={disableButton}
                    >
                      <Text className="text-base text-white font-semibold group-disabled:text-primary">
                        Delete Account
                      </Text>
                    </CustomButton>
                  </View>
                </View>
                <ModalPopUp visible={deleteModal} className="">
                  <View className="items-center flex-col justify-center gap-y-6 py-12">
                    <Image
                      source={signeduser.reasonIcon}
                      resizeMode="contain"
                      className="w-16 h-16 rounded-full"
                    />
                    <Text className="text-2xl font-semibold text-primary text-center">
                      Are you sure?
                    </Text>
                    <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
                      You wont be able to recover this account once its deleted
                    </Text>
                    <View className="w-full px-5 flex-row items-center justify-between gap-x-3">
                      <CustomButton
                        handlePress={setDeleteModalFalse}
                        className="bg-white border-grey border w-2/4"
                      >
                        <Text className="text-base text-grey-800 font-semibold">
                          Cancel
                        </Text>
                      </CustomButton>
                      <CustomButton
                        handlePress={() => handleSubmit()}
                        className="bg-danger w-2/4"
                      >
                        <Text className="text-base text-white font-semibold">
                          Delete
                        </Text>
                      </CustomButton>
                    </View>
                  </View>
                </ModalPopUp>
              </React.Fragment>
            );
          }}
        </Formik>
      </ScrollView>
    </SafeAreaView>
  );
}

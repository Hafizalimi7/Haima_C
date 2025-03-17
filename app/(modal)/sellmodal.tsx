import React from "react";
import { DetailHeader } from "@/components/signeduser/details";
import {
  View,
  Text,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CustomButton } from "@/components/ui";
import { ProceedModal, SellAnItemForm } from "@/components/signeduser/sell";
import { sellItemFormValue } from "@/types/sell";
import useBooleanControl from "@/hooks/useBooleanControl";

export default function SellAnItemModal() {
  const {
    state: isProceedModalVisible,
    setTrue: setIsProceedModalVisibleTrue,
    setFalse: setIsProceedModalVisibleFalse,
  } = useBooleanControl();

  const onSubmit = (payload: sellItemFormValue) => {
    console.log(payload);
    // Form submission logic here
  };

  let formSubmit: (() => void) | null = null;

  const handleUploadSubmit = () => {
    if (formSubmit) {
      setIsProceedModalVisibleTrue();
    }
  };

  const handleAcceptSubmit = () => {
    if (formSubmit) {
      formSubmit();
    }
  };

  return (
    <SafeAreaView className="flex-1 bg-white">
      <DetailHeader title="Sell item" showShareIcon={false} />
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <ScrollView
          contentContainerStyle={{
            paddingBottom: 15,
          }}
        >
          <SellAnItemForm
            setFormSubmit={(submit: () => void) => (formSubmit = submit)}
            onSubmit={onSubmit}
          />
        </ScrollView>
      </KeyboardAvoidingView>
      <View
        className="w-full px-4 py-6 bg-white"
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: -4,
          },
          shadowOpacity: 0.04,
          shadowRadius: 3.7,
          elevation: 4,
        }}
      >
        <CustomButton
          handlePress={() => handleUploadSubmit()}
          className="w-full bg-primary border border-primary"
        >
          <Text className="text-sm text-white font-semibold">Upload Item</Text>
        </CustomButton>
      </View>
      <ProceedModal
        show={isProceedModalVisible}
        onClose={setIsProceedModalVisibleFalse}
        handleSubmit={handleAcceptSubmit}
      />
    </SafeAreaView>
  );
}

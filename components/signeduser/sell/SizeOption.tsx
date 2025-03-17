import React from "react";
import { sellItemFormValue } from "@/types/sell";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import { FormikErrors } from "formik";
import signeduser from "@/constants/icons/signeduser";
import useBooleanControl from "@/hooks/useBooleanControl";
import { icons } from "@/constants";
import { sizes } from "@/data/categories";

interface SizeOptionProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: keyof sellItemFormValue,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
}

const SizeOption: React.FC<SizeOptionProps> = ({ values, setFieldValue }) => {
  const {
    state: isSizeModalVisible,
    setTrue: setIsSizeModalVisibleTrue,
    setFalse: setIsSizeModalVisibleFalse,
  } = useBooleanControl();

  const handleSizeSelect = (size: string) => {
    setFieldValue("size", size);
    setIsSizeModalVisibleFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setIsSizeModalVisibleTrue}>
        <View className="w-full flex-row items-center justify-between h-12 px-4 bg-white rounded-full border border-grey">
          <Text className="text-sm font-normal text-grey-800">
            {values.size ? values.size : "Size (optional)"}
          </Text>
          <Image
            source={signeduser.chevronarrowIcon}
            resizeMode="contain"
            className="w-6 h-6 rotate-90"
            tintColor={"#717171"}
          />
        </View>
      </TouchableOpacity>
      <Modal
        visible={isSizeModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={setIsSizeModalVisibleFalse}
        className="!px-0 !py-0"
      >
        <View className="flex-1 bg-black/50">
          <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
            <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
              <Text className="text-base font-medium text-primary">Size</Text>
              <TouchableOpacity onPress={setIsSizeModalVisibleFalse}>
                <Image
                  source={icons.closeIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ maxHeight: 600 }}
              contentContainerStyle={{
                paddingBottom: 15,
                paddingHorizontal: 15,
              }}
            >
              {sizes.map((size) => (
                <TouchableOpacity
                  key={size.text}
                  onPress={() => handleSizeSelect(size.value)}
                >
                  <View className="flex-row items-center justify-between py-4">
                    <Text className="text-sm font-normal text-grey-800">
                      {size.text}
                    </Text>
                    {values.size === size.value && (
                      <Image
                        source={icons.tickIcon}
                        resizeMode="contain"
                        className="w-6 h-6"
                      />
                    )}
                  </View>
                </TouchableOpacity>
              ))}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

export default SizeOption;

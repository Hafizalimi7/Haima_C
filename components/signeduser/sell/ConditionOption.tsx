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
import { conditions } from "@/data/categories";

interface ConditionOptionProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: keyof sellItemFormValue,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
  error?: string;
}

const ConditionOption: React.FC<ConditionOptionProps> = ({
  values,
  setFieldValue,
  error,
}) => {
  const {
    state: isConditionModalVisible,
    setTrue: setIsConditionModalVisibleTrue,
    setFalse: setIsConditionModalVisibleFalse,
  } = useBooleanControl();

  const handleConditionSelect = (condition: string) => {
    setFieldValue("condition", condition);
    setIsConditionModalVisibleFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setIsConditionModalVisibleTrue}>
        <View
          className={`w-full flex-row items-center justify-between h-12 px-4 bg-white rounded-full border  ${
            error ? "border-danger" : "border-grey"
          }`}
        >
          <Text className="text-sm font-normal text-grey-800">
            {values.condition ? values.condition : "Condition"}
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
        visible={isConditionModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={setIsConditionModalVisibleFalse}
        className="!px-0 !py-0"
      >
        <View className="flex-1 bg-black/50">
          <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
            <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
              <Text className="text-base font-medium text-primary">
                Conditions
              </Text>
              <TouchableOpacity onPress={setIsConditionModalVisibleFalse}>
                <Image
                  source={icons.closeIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              </TouchableOpacity>
            </View>
            <ScrollView
              style={{ maxHeight: 478 }}
              contentContainerStyle={{
                paddingBottom: 15,
                paddingHorizontal: 15,
              }}
            >
              {conditions.map((condition) => (
                <TouchableOpacity
                  key={condition.id}
                  onPress={() => handleConditionSelect(condition.title)}
                >
                  <View className="flex-col items-start justify-start w-full py-4">
                    <View className="w-full flex-row items-center justify-between">
                      <Text className="text-base font-semibold text-grey-800">
                        {condition.title}
                      </Text>
                      {values.condition === condition.title && (
                        <Image
                          source={icons.tickIcon}
                          resizeMode="contain"
                          className="w-6 h-6"
                        />
                      )}
                    </View>
                    <Text className="text-sm font-normal text-grey-800">
                      {condition.description}
                    </Text>
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

export default ConditionOption;

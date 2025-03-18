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
import { colours } from "@/data/categories";
import { CustomButton } from "@/components/ui";

interface ColourOptionProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: keyof sellItemFormValue,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
}

const ColourOption: React.FC<ColourOptionProps> = ({
  values,
  setFieldValue,
}) => {
  const {
    state: isColourModalVisible,
    setTrue: setIsColourModalVisibleTrue,
    setFalse: setIsColourModalVisibleFalse,
  } = useBooleanControl();

  const handleColourSelect = (colour: { name: string; hex: string }) => {
    const isAlreadySelected = values.colour.some(
      (col) => col.hex === colour.hex
    );
    const updatedColours = isAlreadySelected
      ? values.colour.filter((col) => col.hex !== colour.hex)
      : values.colour.length < 3
      ? [...values.colour, colour]
      : values.colour;
    setFieldValue("colour", updatedColours);
  };

  const handleDone = () => {
    setIsColourModalVisibleFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setIsColourModalVisibleTrue}>
        <View className="w-full flex-row items-center justify-between h-12 px-4 bg-white rounded-full border border-grey">
          <View className="flex-row">
            {values.colour && values.colour.length > 0 ? (
              values.colour.map((colour) => (
                <View
                  key={colour.name}
                  className="flex-row items-center justify-start gap-x-2 px-1"
                >
                  <View
                    className="w-4 h-4 rounded-full"
                    style={{ backgroundColor: colour.hex }}
                  />
                  <Text className="text-sm font-normal text-grey-800">
                    {colour.name}
                  </Text>
                </View>
              ))
            ) : (
              <Text className="text-sm font-normal text-grey-800">
                Colour (optional)
              </Text>
            )}
          </View>
          <Image
            source={signeduser.chevronarrowIcon}
            resizeMode="contain"
            className="w-6 h-6 rotate-90"
            tintColor={"#717171"}
          />
        </View>
      </TouchableOpacity>
      {isColourModalVisible && (
        <Modal
          visible={isColourModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={setIsColourModalVisibleFalse}
          className="!px-0 !py-0"
        >
          <View className="flex-1 bg-black/50">
            <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
              <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
                <Text className="text-base font-medium text-primary">
                  Colours
                </Text>
                <TouchableOpacity onPress={setIsColourModalVisibleFalse}>
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
                {colours.map((colour) => (
                  <TouchableOpacity
                    key={colour.hex}
                    onPress={() => handleColourSelect(colour)}
                  >
                    <View className="flex-row items-center justify-between py-4">
                      <View className="flex-row items-center gap-x-2">
                        <View
                          className="w-6 h-6 rounded-full"
                          style={{ backgroundColor: colour.hex }}
                        />
                        <Text className="text-sm font-normal">
                          {colour.name}
                        </Text>
                      </View>
                      {values.colour.some((col) => col.hex === colour.hex) && (
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
                  handlePress={handleDone}
                  disabled={values.colour.length === 0}
                  className="w-full bg-primary border border-primary group disabled:bg-grey disabled:border-grey"
                >
                  <Text className="text-sm text-white font-semibold group-disabled:text-grey-800">
                    Done
                  </Text>
                </CustomButton>
              </View>
            </View>
          </View>
        </Modal>
      )}
    </React.Fragment>
  );
};

export default ColourOption;

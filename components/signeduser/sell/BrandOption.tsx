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
import { productBrands } from "@/data/categories";

interface BrandOptionProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: keyof sellItemFormValue,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
  error?: string;
}

const BrandOption: React.FC<BrandOptionProps> = ({
  values,
  setFieldValue,
  error,
}) => {
  const {
    state: isBrandModalVisible,
    setTrue: setIsBrandModalVisibleTrue,
    setFalse: setIsBrandModalVisibleFalse,
  } = useBooleanControl();

  const handleBrandSelect = (brand: string) => {
    setFieldValue("brand", brand);
    setIsBrandModalVisibleFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setIsBrandModalVisibleTrue}>
        <View
          className={`w-full flex-row items-center justify-between h-12 px-4 bg-white rounded-full border  ${
            error ? "border-danger" : "border-grey"
          }`}
        >
          <Text className="text-sm font-normal text-grey-800">
            {values.brand ? values.brand : "Brand"}
          </Text>
          <Image
            source={signeduser.chevronarrowIcon}
            resizeMode="contain"
            className="w-6 h-6 rotate-90"
            tintColor={"#717171"}
          />
        </View>
      </TouchableOpacity>
      {isBrandModalVisible && (
        <Modal
          visible={isBrandModalVisible}
          animationType="slide"
          transparent={true}
          onRequestClose={setIsBrandModalVisibleFalse}
          className="!px-0 !py-0"
        >
          <View className="flex-1 bg-black/50">
            <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
              <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
                <Text className="text-base font-medium text-primary">
                  Brand
                </Text>
                <TouchableOpacity onPress={setIsBrandModalVisibleFalse}>
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
                {productBrands.map((brand) => (
                  <TouchableOpacity
                    key={brand.id}
                    onPress={() => handleBrandSelect(brand.title)}
                  >
                    <View className="flex-row items-center justify-between py-4">
                      <Text className="text-sm font-normal text-grey-800">
                        {brand.title}
                      </Text>
                      {values.brand === brand.title && (
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
      )}
    </React.Fragment>
  );
};

export default BrandOption;

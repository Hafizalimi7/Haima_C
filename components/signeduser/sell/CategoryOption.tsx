import React, { useState } from "react";
import { sellItemFormValue } from "@/types/sell";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
} from "react-native";
import { FormikErrors } from "formik";
import signeduser from "@/constants/icons/signeduser";
import useBooleanControl from "@/hooks/useBooleanControl";
import { icons } from "@/constants";
import { productCategories, subCats } from "@/data/categories";

interface CategoryOptionProps {
  values: sellItemFormValue;
  setFieldValue: (
    field: keyof sellItemFormValue,
    value: any,
    shouldValidate?: boolean
  ) => Promise<void | FormikErrors<sellItemFormValue>>;
  error?: string;
}

const CategoryOption: React.FC<CategoryOptionProps> = ({
  values,
  setFieldValue,
  error,
}) => {
  const {
    state: isCategoryModalVisible,
    setTrue: setIsCategoryModalVisibleTrue,
    setFalse: setIsCategoryModalVisibleFalse,
  } = useBooleanControl();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category);
  };

  const handleSubCategorySelect = (subCategory: string) => {
    setFieldValue("category", `${selectedCategory} - ${subCategory}`);
    setIsCategoryModalVisibleFalse();
  };

  return (
    <React.Fragment>
      <TouchableOpacity onPress={setIsCategoryModalVisibleTrue}>
        <View
          className={`w-full flex-row items-center justify-between h-12 px-4 bg-white rounded-full border  ${
            error ? "border-danger" : "border-grey"
          }`}
        >
          <Text className="text-sm font-normal text-grey-800">
            {values.category ? values.category : "Category"}
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
        visible={isCategoryModalVisible}
        animationType="slide"
        transparent={true}
        onRequestClose={setIsCategoryModalVisibleFalse}
        className="!px-0 !py-0"
      >
        <View className="flex-1 bg-black/50">
          <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
            <View className="w-full flex-row items-center justify-between px-4 py-4 border-b border-grey">
              {selectedCategory ? (
                <TouchableOpacity onPress={() => setSelectedCategory(null)}>
                  <View className="flex-row items-center justify-start gap-x-2">
                    <Image
                      source={icons.backarrowIcon}
                      alt="back icon"
                      resizeMode="contain"
                      className="w-8 h-8"
                    />
                    <Text className="text-base font-medium text-primary">
                      {selectedCategory}
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <Text className="text-base font-medium text-primary">
                  Category
                </Text>
              )}
              <TouchableOpacity onPress={setIsCategoryModalVisibleFalse}>
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
              {selectedCategory ? (
                <RenderSubCategory
                  values={values}
                  handleSubCategorySelect={handleSubCategorySelect}
                  selectedCategory={selectedCategory}
                />
              ) : (
                productCategories.map((category) => (
                  <TouchableOpacity
                    key={category.id}
                    onPress={() => handleCategorySelect(category.title)}
                  >
                    <View className="flex-row items-center justify-between py-4">
                      <Text className="text-sm font-normal text-grey-800">
                        {category.title}
                      </Text>
                      {values.category?.startsWith(category.title) ? (
                        <Image
                          source={icons.tickIcon}
                          resizeMode="contain"
                          className="w-6 h-6"
                        />
                      ) : (
                        <Image
                          source={signeduser.chevronarrowIcon}
                          resizeMode="contain"
                          className="w-6 h-6"
                        />
                      )}
                    </View>
                  </TouchableOpacity>
                ))
              )}
            </ScrollView>
          </View>
        </View>
      </Modal>
    </React.Fragment>
  );
};

interface RenderSubCategoryProps {
  values: sellItemFormValue;
  selectedCategory: string | null;
  handleSubCategorySelect: (category: string) => void;
}

const RenderSubCategory: React.FC<RenderSubCategoryProps> = ({
  values,
  selectedCategory,
  handleSubCategorySelect,
}) => {
  return (
    <React.Fragment>
      {subCats.map((subCat) => (
        <TouchableOpacity
          key={subCat.keyword}
          onPress={() => handleSubCategorySelect(subCat.text)}
          className="w-full"
        >
          <View className="flex-row items-center justify-between py-4 w-full">
            <Text className="text-sm font-normal">{subCat.text}</Text>
            {values.category === `${selectedCategory} - ${subCat.text}` && (
              <Image
                source={icons.tickIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            )}
          </View>
        </TouchableOpacity>
      ))}
    </React.Fragment>
  );
};

export default CategoryOption;

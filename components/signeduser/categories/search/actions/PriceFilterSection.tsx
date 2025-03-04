import React, { useState, useEffect } from "react";
import { useFilter } from "@/contexts/FilterProvider";
import { View, Text, TouchableOpacity, TextInput } from "react-native";
import RangeSlider from "./RangeSlider";
import { CurrencySymbol } from "@/helpers/currency";

interface PriceFilterSectionProps {
  onClose: () => void;
}

export const PriceFilterSection: React.FC<PriceFilterSectionProps> = ({
  onClose,
}) => {
  const { filters, updatePriceRange } = useFilter();
  const [localPrice, setLocalPrice] = useState(filters.price);
  const [inputValues, setInputValues] = useState({
    min: filters.price.min ? filters.price.min.toString() : "",
    max: filters.price.max ? filters.price.max.toString() : "",
  });

  useEffect(() => {
    setLocalPrice(filters.price);
  }, [filters.price]);

  const handleInputChange = (text: string, field: "min" | "max") => {
    const sanitizedText = text.replace(/[^0-9]/g, "");
    const numValue = parseInt(sanitizedText, 10);

    setInputValues((prev) => ({
      ...prev,
      [field]: sanitizedText,
    }));

    if (!isNaN(numValue)) {
      setLocalPrice((prev) => ({
        ...prev,
        [field]: numValue,
      }));
    }
  };

  const handleSliderChange = (range: { min: number; max: number }) => {
    setLocalPrice(range);
    setInputValues({
      min: range.min.toString(),
      max: range.max.toString(),
    });
  };

  const handleSave = () => {
    const finalValues = {
      min: Number(inputValues.min) || 0,
      max: Number(inputValues.max) || 2000,
    };

    // Ensure min is not greater than max
    if (finalValues.min > finalValues.max) {
      const temp = finalValues.min;
      finalValues.min = finalValues.max;
      finalValues.max = temp;
    }

    updatePriceRange(finalValues);
    onClose();
  };

  return (
    <View className="h-full flex-col items-start justify-between">
      <View className="flex-col items-start justify-start gap-y-5 w-full">
        <RangeSlider
          sliderWidth={300}
          min={0}
          max={2000}
          step={1}
          initialValues={localPrice}
          onValueChange={handleSliderChange}
        />
        <View className="flex-row items-center justify-between mb-8 gap-x-5">
          <View className="flex-1">
            <Text className="text-sm text-gray-500 mb-2">From</Text>
            <View className="relative">
              <TextInput
                className="border border-gray-300 rounded-lg pl-8 py-3 focus:border-primary"
                keyboardType="numeric"
                value={inputValues.min}
                onChangeText={(text) => handleInputChange(text, "min")}
                placeholder="0"
                maxLength={10}
              />
              <View className="flex-row items-center justify-start absolute top-[10px] left-[13px]">
                <Text className="text-base select-none text-grey-800 font-bold">
                  {CurrencySymbol}
                </Text>
              </View>
            </View>
          </View>
          <View className="flex-1">
            <Text className="text-sm text-gray-500 mb-2">To</Text>
            <View className="relative">
              <TextInput
                className="border border-gray-300 rounded-lg pl-8 py-3 focus:border-primary"
                keyboardType="numeric"
                value={inputValues.max}
                onChangeText={(text) => handleInputChange(text, "max")}
                placeholder="2000"
                maxLength={10}
              />
              <View className="flex-row items-center justify-start absolute top-[10px] left-[13px]">
                <Text className="text-base select-none text-grey-800 font-bold">
                  {CurrencySymbol}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      <View className="flex-row mt-8 gap-x-4 relative">
        <TouchableOpacity
          className="flex-1 py-4 rounded-full bg-black"
          onPress={handleSave}
        >
          <Text className="text-white text-center">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

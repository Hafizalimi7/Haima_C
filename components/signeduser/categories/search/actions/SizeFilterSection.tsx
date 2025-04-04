import React, { useEffect, useState } from "react";
import { Dimensions, Image, TouchableOpacity, View, Text } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import { useFilter } from "@/contexts/FilterProvider";
import { icons } from "@/constants";
import { sizes } from "@/data/categories";

interface SizeFilterSectionProps {
  onClose: () => void;
}

const { height } = Dimensions.get("window");

const SizeFilterSection: React.FC<SizeFilterSectionProps> = ({ onClose }) => {
  const { filters, updateSize } = useFilter();
  const [selectedSize, setSelectedSize] = useState<string>(filters.size);

  useEffect(() => {
    setSelectedSize(filters.size);
  }, [filters.rating]);

  const toggleSize = (size: string) => {
    setSelectedSize(size);
    updateSize(size);
  };

  const handleSave = () => {
    updateSize(selectedSize);
    onClose();
  };

  return (
    <View
      className="flex-col items-start justify-between pb-4"
      style={{ height: height / 1.1 }}
    >
      <View className="pb-24 w-full">
        {sizes.map((size) => (
          <TouchableOpacity
            key={size.value}
            className="flex-row items-center justify-between py-4"
            onPress={() => toggleSize(size.value)}
          >
            <Text className="text-base font-normal text-grey-800">
              {size.text}
            </Text>
            {selectedSize === size.value && (
              <Image
                source={icons.tickIcon}
                className="w-6 h-6"
                resizeMode="contain"
              />
            )}
          </TouchableOpacity>
        ))}
      </View>
      {/* Fixed bottom save button */}
      <View className="w-full">
        <TouchableOpacity
          className="w-full py-4 rounded-full bg-black"
          onPress={handleSave}
        >
          <Text className="text-white text-center">Save</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SizeFilterSection;

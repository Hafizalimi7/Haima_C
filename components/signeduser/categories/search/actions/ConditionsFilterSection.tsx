import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { icons } from "@/constants";
import { useFilter } from "@/contexts/FilterProvider";

const CONDITIONS = [
  "Brand New",
  "Like New",
  "Used - excellent",
  "Used - good",
  "Used - fair",
];

interface ConditionsFilterSectionProps {
  onClose: () => void;
}

const { height } = Dimensions.get("window");

export const ConditionsFilterSection: React.FC<
  ConditionsFilterSectionProps
> = ({ onClose }) => {
  const { filters, updateConditions } = useFilter();
  const [selectedConditions, setSelectedConditions] = useState<string[]>(
    filters.conditions
  );

  useEffect(() => {
    setSelectedConditions(filters.conditions);
  }, [filters.conditions]);

  const toggleCondition = (condition: string) => {
    setSelectedConditions((prev) => {
      const updatedConditions = prev.includes(condition)
        ? prev.filter((c) => c !== condition)
        : [...prev, condition];

      updateConditions(updatedConditions);
      return updatedConditions;
    });
  };

  const handleSave = () => {
    updateConditions(selectedConditions);
    onClose();
  };

  return (
    <View
      className="flex-col items-start justify-between pb-4"
      style={{ height: height / 1.1 }}
    >
      <View className="pb-24 w-full">
        {CONDITIONS.map((condition) => (
          <TouchableOpacity
            key={condition}
            className="flex-row items-center justify-between py-4"
            onPress={() => toggleCondition(condition)}
          >
            <Text className="text-base">{condition}</Text>
            {selectedConditions.includes(condition) && (
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
          <Text className="text-white text-center">
            Save{" "}
            {selectedConditions.length > 0 && `(${selectedConditions.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

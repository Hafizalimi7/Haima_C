import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, Dimensions } from "react-native";
import { icons } from "@/constants";
import { useFilter } from "@/contexts/FilterProvider";
import { colours } from "@/data/categories";

interface ColourFilterSectionProps {
  onClose: () => void;
}

const { height } = Dimensions.get("window");

const ColourFilterSection: React.FC<ColourFilterSectionProps> = ({
  onClose,
}) => {
  const { filters, updateColors } = useFilter();
  const [selectedColour, setSelectedColour] = useState<string[]>(
    filters.colors
  );

  useEffect(() => {
    setSelectedColour(filters.conditions);
  }, [filters.conditions]);

  const toggleColours = (colour: string) => {
    setSelectedColour((prev) => {
      const updatedColour = prev.includes(colour)
        ? prev.filter((c) => c !== colour)
        : [...prev, colour];

      updateColors(updatedColour);
      return updatedColour;
    });
  };

  const handleSave = () => {
    updateColors(selectedColour);
    onClose();
  };

  return (
    <View
      className="flex-col items-start justify-between pb-4"
      style={{ height: height / 1.1 }}
    >
      <View className="pb-24 w-full">
        {colours.map((colour) => (
          <TouchableOpacity
            key={colour.hex}
            onPress={() => toggleColours(colour.name)}
          >
            <View className="flex-row items-center justify-between py-4">
              <View className="flex-row items-center gap-x-2">
                <View
                  className="w-6 h-6 rounded-full"
                  style={{ backgroundColor: colour.hex }}
                />
                <Text className="text-sm font-normal">{colour.name}</Text>
              </View>
              {selectedColour.some((col) => col === colour.name) && (
                <Image
                  source={icons.tickIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              )}
            </View>
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
            Save {selectedColour.length > 0 && `(${selectedColour.length})`}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ColourFilterSection;

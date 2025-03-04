import React from "react";
import { useFilter } from "@/contexts/FilterProvider";
import { Text, TouchableOpacity } from "react-native";

interface ResetFilterStateProps {
  activeSection: string;
}

const ResetFilterState: React.FC<ResetFilterStateProps> = ({
  activeSection,
}) => {
  const {
    updatePriceRange,
    updateConditions,
    updateSizes,
    updateColors,
    updateRatings,
    filters,
  } = useFilter();

  // Check if reset should be disabled based on active section
  const isResetDisabled = () => {
    switch (activeSection) {
      case "Price":
        return filters.price.min === 0 && filters.price.max === 0;
      case "Conditions":
        return filters.conditions.length === 0;
      case "Size":
        return filters.sizes.length === 0;
      case "Colour":
        return filters.colors.length === 0;
      case "Rating":
        return filters.ratings.length === 0;
      default:
        return true;
    }
  };

  return (
    <TouchableOpacity
      onPress={() => {
        switch (activeSection) {
          case "Price":
            updatePriceRange({ min: 0, max: 0 });
            break;
          case "Conditions":
            updateConditions([]);
            break;
          case "Size":
            updateSizes([]);
            break;
          case "Colour":
            updateColors([]);
            break;
          case "Rating":
            updateRatings([]);
            break;
        }
      }}
      disabled={isResetDisabled()}
    >
      <Text
        className={`text-base font-semibold ${
          isResetDisabled() ? "text-gray-300" : "text-primary"
        }`}
      >
        Reset
      </Text>
    </TouchableOpacity>
  );
};

export default ResetFilterState;

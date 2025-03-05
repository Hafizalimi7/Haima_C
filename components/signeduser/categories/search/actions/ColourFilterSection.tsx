import React from "react";
import { View, Text } from "react-native";

interface ColourFilterSectionProps {
    onClose: () => void;
  }

const ColourFilterSection: React.FC<ColourFilterSectionProps> = () => {
  return (
    <View>
      <Text>ColourFilterSection</Text>
    </View>
  );
};

export default ColourFilterSection;

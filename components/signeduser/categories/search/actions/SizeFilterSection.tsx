import React from "react";
import { View, Text } from "react-native";

interface SizeFilterSectionProps {
  onClose: () => void;
}

const SizeFilterSection: React.FC<SizeFilterSectionProps> = () => {
  return (
    <View>
      <Text>SizeFilterSection</Text>
    </View>
  );
};

export default SizeFilterSection;

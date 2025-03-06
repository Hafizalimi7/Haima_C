import React from "react";
import { View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface RadioButtonProps {
  selected: boolean;
}

const RadioButton: React.FC<RadioButtonProps> = ({ selected }) => {
  return (
    <View className="w-6 h-6 border-2 border-black rounded-full flex items-center justify-center">
      {selected && <Ionicons name="ellipse" size={16} color="black" />}
    </View>
  );
};

export default RadioButton;

import React from "react";
import { Modal, View, Text, TouchableOpacity, Image } from "react-native";
import { icons } from "@/constants";
import { SortOption } from "@/types/product";


interface SortModalProps {
  isVisible: boolean;
  onClose: () => void;
  onSort: (option: SortOption) => void;
  currentSort?: SortOption;
}

const SORT_OPTIONS: SortOption[] = [
  "Recommended",
  "Recently added",
  "Best rating",
  "Lowest to highest price",
  "Highest to lowest price",
];

export const SortModal: React.FC<SortModalProps> = ({
  isVisible,
  onClose,
  onSort,
  currentSort,
}) => {
  const handleSelect = (option: SortOption) => {
    onSort(option);
    onClose();
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={onClose}
    >
      <View className="flex-1 bg-black/50">
        <View className="absolute bottom-0 w-full bg-white rounded-t-3xl">
          {/* Header */}
          <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
            <Text className="text-lg font-medium">Sort by</Text>
            <TouchableOpacity onPress={onClose}>
              <Image
                source={icons.closeIcon}
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>

          {/* Options */}
          <View className="p-4">
            {SORT_OPTIONS.map((option) => (
              <TouchableOpacity
                key={option}
                className="flex-row items-center justify-between py-4"
                onPress={() => handleSelect(option)}
              >
                <Text
                  className={`text-base ${
                    currentSort === option ? "text-primary font-semibold" : ""
                  }`}
                >
                  {option}
                </Text>
                {currentSort === option && (
                  <Image
                    source={icons.tickIcon}
                    className="w-6 h-6"
                    resizeMode="contain"
                  />
                )}
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </Modal>
  );
};

import * as React from "react";
import { useFilter } from "@/contexts/FilterProvider";
import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { PriceFilterSection } from "./PriceFilterSection";
import ResetFilterState from "./ResetFilterState";
import { ConditionsFilterSection } from "./ConditionsFilterSection";
import { CurrencySymbol } from "@/helpers/currency";
import SizeFilterSection from "./SizeFilterSection";
import ColourFilterSection from "./ColourFilterSection";
import RatingFilterSection from "./RatingFilterSection";

interface FilterModalProps {
  isVisible: boolean;
  onClose: () => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({
  isVisible,
  onClose,
}) => {
  const { filters, clearFilters, activeFiltersCount } = useFilter();
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const handleBack = () => {
    if (activeSection) {
      setActiveSection(null);
    } else {
      onClose();
    }
  };

  return (
    <Modal
      visible={isVisible}
      animationType="slide"
      transparent={true}
      onRequestClose={handleBack}
    >
      <View className="flex-1 bg-white">
        <View className="flex-row items-center justify-between p-4 border-b border-gray-200">
          <View className="flex-row items-center justify-start gap-x-4">
            <TouchableOpacity onPress={handleBack}>
              {!activeSection ? (
                <Image
                  source={icons.closeIcon}
                  resizeMode="contain"
                  className="w-6 h-6"
                />
              ) : (
                <Image
                  source={icons.backarrowIcon}
                  alt="back icon logo"
                  resizeMode="contain"
                  className="w-8 h-8"
                />
              )}
            </TouchableOpacity>
            <Text className="text-lg font-medium">
              {activeSection || "Filter By"}
            </Text>
          </View>
          {!activeSection ? (
            <TouchableOpacity onPress={clearFilters}>
              <Text className="text-danger text-base font-semibold">
                clear filter
              </Text>
            </TouchableOpacity>
          ) : (
            <ResetFilterState activeSection={activeSection} />
          )}
        </View>

        <ScrollView className="flex-1">
          {!activeSection ? (
            // Main Filter Menu
            <View className="p-4">
              <TouchableOpacity
                className="flex-row justify-between items-center py-4"
                onPress={() => setActiveSection("Price")}
              >
                <Text className="text-base">Price</Text>
                <View className="flex-row items-center justify-end gap-x-3">
                  {filters.price.min === 0 ? null : (
                    <Text className="text-sm font-bold text-secondary">
                      {CurrencySymbol}
                      {filters.price.min} - {CurrencySymbol}
                      {filters.price.max}
                    </Text>
                  )}
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                className="flex-row justify-between items-center py-4"
                onPress={() => setActiveSection("Conditions")}
              >
                <Text className="text-base">Conditions</Text>
                <View className="flex-row items-center justify-end gap-x-3">
                  <Text className="text-sm font-bold text-secondary">
                    {filters.conditions.length
                      ? ` ${filters.conditions
                          .slice(0, 3)
                          .join(", ")
                          .slice(0, 38)}...`
                      : ""}
                  </Text>
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row justify-between items-center py-4"
                onPress={() => setActiveSection("Size")}
              >
                <Text className="text-base">Size</Text>
                <View className="flex-row items-center justify-end gap-x-3">
                  <Text className="text-sm font-bold text-secondary truncate">
                    {filters.sizes.length
                      ? ` ${filters.sizes
                          .slice(0, 3)
                          .join(", ")
                          .slice(0, 10)}...`
                      : ""}
                  </Text>
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row justify-between items-center py-4"
                onPress={() => setActiveSection("Colour")}
              >
                <Text className="text-base">Colour</Text>
                <View className="flex-row items-center justify-end gap-x-3">
                  <Text className="text-sm font-bold text-secondary truncate">
                    {filters.colors.length ? filters.colors : ""}
                  </Text>
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                className="flex-row justify-between items-center py-4"
                onPress={() => setActiveSection("Rating")}
              >
                <Text className="text-base">Rating</Text>
                <View className="flex-row items-center justify-end gap-x-3">
                  <Text className="text-sm font-bold text-secondary">
                    {filters.rating !== 0
                      ? `${filters.rating.toFixed(1)} and above`
                      : ""}
                  </Text>
                  <Image
                    source={signeduser.chevronarrowIcon}
                    resizeMode="contain"
                    className="w-6 h-6"
                  />
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            // Filter Section Content
            <View className="h-full p-4">
              {activeSection === "Price" && (
                <PriceFilterSection onClose={() => setActiveSection(null)} />
              )}
              {activeSection === "Conditions" && (
                <ConditionsFilterSection
                  onClose={() => setActiveSection(null)}
                />
              )}
              {activeSection === "Size" && (
                <SizeFilterSection onClose={() => setActiveSection(null)} />
              )}
              {activeSection === "Colour" && (
                <ColourFilterSection onClose={() => setActiveSection(null)} />
              )}
              {activeSection === "Rating" && (
                <RatingFilterSection onClose={() => setActiveSection(null)} />
              )}
            </View>
          )}
        </ScrollView>

        {!activeSection && (
          <View className="p-4 border-t border-gray-200">
            <TouchableOpacity
              className="bg-black py-4 rounded-full"
              onPress={onClose}
            >
              <Text className="text-white text-center font-medium">
                Apply Filters ({activeFiltersCount})
              </Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </Modal>
  );
};

import React, { useEffect, useState } from "react";
import { Dimensions, Image, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import signeduser from "@/constants/icons/signeduser";
import { useFilter } from "@/contexts/FilterProvider";
import { icons } from "@/constants";

interface RatingFilterSectionProps {
  onClose: () => void;
}

const RATINGS = [4, 3, 2, 1];

const { height } = Dimensions.get("window");

const RatingFilterSection: React.FC<RatingFilterSectionProps> = ({
  onClose,
}) => {
  const { filters, updateRating } = useFilter();
  const [selectedRating, setSelectedRating] = useState<number>(filters.rating);

  useEffect(() => {
    setSelectedRating(filters.rating);
  }, [filters.rating]);

  const toggleRating = (rate: number) => {
    setSelectedRating(rate);
    updateRating(rate);
  };

  const handleSave = () => {
    updateRating(selectedRating);
    onClose();
  };

  return (
    <View
      className="flex-col items-start justify-between pb-4"
      style={{ height: height / 1.1 }}
    >
      <View className="pb-24 w-full">
        {RATINGS.map((rate) => (
          <TouchableOpacity
            key={rate}
            className="flex-row items-center justify-between py-4"
            onPress={() => toggleRating(rate)}
          >
            <View className="flex-row items-center justify-start gap-x-3">
              <Image
                source={signeduser.starIcon}
                resizeMode="contain"
                className="w-4 h-4"
              />
              <Text className="text-base font-normal text-grey-800">
                {rate.toFixed(1)} and above
              </Text>
            </View>
            {selectedRating === rate && (
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

export default RatingFilterSection;

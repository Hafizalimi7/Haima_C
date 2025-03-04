import React from "react";
import signeduser from "@/constants/icons/signeduser";
import { useFilter } from "@/contexts/FilterProvider";
import useBooleanControl from "@/hooks/useBooleanControl";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { FilterModal } from "./actions/FilterModal";

const SearchActions: React.FC = () => {
  const {
    state: isFilterModalVisible,
    setTrue: setIsFilterModalVisibleTrue,
    setFalse: setIsFilterModalVisibleFalse,
  } = useBooleanControl();
  const { activeFiltersCount } = useFilter();

  return (
    <React.Fragment>
      <View className="w-full flex-row items-center justify-between bg-lightGrey2 rounded-full h-12 px-4">
        <TouchableOpacity
          onPress={setIsFilterModalVisibleTrue}
          className="w-[151px] h-full flex flex-row items-center justify-center gap-x-2"
        >
          {activeFiltersCount > 0 && (
            <View className="w-5 h-5 bg-danger rounded-full flex-row items-center justify-center text-center">
              <Text className="text-white text-xs font-black">
                {activeFiltersCount}
              </Text>
            </View>
          )}
          <Text className="text-base font-normal text-grey-800">Filter</Text>
          <Image
            source={signeduser.filterIcon}
            resizeMode="contain"
            className="w-4 h-4"
          />
        </TouchableOpacity>
        <View className="w-0.5 h-6" />
        <TouchableOpacity className="w-[151px] h-full flex flex-row items-center justify-center gap-x-2">
          <Text className="text-base font-normal text-grey-800">Sort</Text>
          <Image
            source={signeduser.sortIcon}
            resizeMode="contain"
            className="w-4 h-4"
          />
        </TouchableOpacity>
      </View>
      <FilterModal
        isVisible={isFilterModalVisible}
        onClose={() => setIsFilterModalVisibleFalse()}
      />
    </React.Fragment>
  );
};

export default SearchActions;

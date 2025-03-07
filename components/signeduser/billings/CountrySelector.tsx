import React from "react";
import { Image, View } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { countries } from "@/data/countries";
import signeduser from "@/constants/icons/signeduser";

interface CountrySelectorProps {
  value: string;
  onChange: (country: string) => void;
  error?: string;
}

export function CountrySelector({
  value,
  onChange,
  error,
}: CountrySelectorProps) {
  return (
    <View className="relative">
      <SelectList
        setSelected={(val: string) => onChange(val)}
        data={countries}
        save="value"
        defaultOption={{ key: value, value: value }}
        search={true}
        boxStyles={{
          borderRadius: 60,
          borderWidth: 1,
          borderColor: error ? "#EF4444" : "#D1D5DB",
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 4,
        }}
        inputStyles={{
          fontSize: 14,
          color: "#717171",
          paddingLeft: 32,
        }}
        dropdownStyles={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: "#D1D5DB",
          marginTop: 4,
        }}
        dropdownItemStyles={{
          paddingVertical: 12,
          paddingHorizontal: 16,
        }}
        dropdownTextStyles={{
          fontSize: 14,
          color: "#717171",
        }}
        searchPlaceholder="Search countries..."
        searchicon={
          <Image
            source={signeduser.searchIcon}
            className="w-5 h-6 pr-4"
            resizeMode="contain"
          />
        }
        placeholder="Country"
      />
      {/* {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>} */}
    </View>
  );
}

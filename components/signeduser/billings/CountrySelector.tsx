import React from "react";
import { View, Text } from "react-native";
import { SelectList } from "react-native-dropdown-select-list";
import { countries } from "@/data/countries";

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
    <View>
      <SelectList
        setSelected={(val: string) => onChange(val)}
        data={countries}
        save="value"
        defaultOption={{ key: value, value: value }}
        search={true}
        boxStyles={{
          borderRadius: 8,
          borderWidth: 1,
          borderColor: error ? "#EF4444" : "#D1D5DB",
          paddingVertical: 12,
          paddingHorizontal: 16,
          marginTop: 4,
        }}
        inputStyles={{
          fontSize: 16,
          color: "#000",
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
          fontSize: 16,
          color: "#000",
        }}
        searchPlaceholder="Search countries..."
        placeholder="Country"
      />
      {error && <Text className="text-red-500 text-sm mt-1">{error}</Text>}
    </View>
  );
}

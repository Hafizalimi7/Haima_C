import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { CustomButton } from "../ui";
import { useRouter } from "expo-router";
import { useAuth } from "@/contexts/AuthContext";
import { DUMMY_USERS } from "@/data/auth";

const categories = [
  "Tops",
  "Bottoms",
  "Footwear",
  "Dresses",
  "Nightwear",
  "Coats and Jackets",
  "Accessories",
  "Modest wears",
];

const brands = [
  "Nike",
  "Adidas",
  "Shein",
  "H&M",
  "ASOS",
  "Zara",
  "Levi's",
  "Dior",
  "Gucci",
  "Louis Vuitton",
  "Fashion Nova",
  "Prada",
  "Balenciaga",
  "Versace",
  "Puma",
  "Chanel",
];

const ChooseProductCategory: React.FC = () => {
  const { push } = useRouter();
  const { login } = useAuth();
  const [selectedCategory, setSelectedCategory] = useState<string[]>([]);
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);

  const toggleCategorySelection = (category: string) => {
    setSelectedCategory((prev) =>
      prev.includes(category)
        ? prev.filter((b) => b !== category)
        : [...prev, category]
    );
  };

  const toggleBrandSelection = (brand: string) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
  };

  const handleContinue = async () => {
    try {
      const user = DUMMY_USERS["buyer@example.com"];
      await login(user.role);
      push("/home");
    } catch (error) {
      console.log("🚀 ~ handleContinue ~ error:", error);
    }
  };

  return (
    <View className="w-full flex-grow gap-y-2 flex-col items-start justify-between">
      <View className="flex-col items-start justify-start gap-y-4">
        <SelectableList
          title="Categories"
          items={categories}
          isSelectable
          selectedItems={selectedCategory}
          onSelect={toggleCategorySelection}
        />
        <SelectableList
          title="Brands"
          items={brands}
          isSelectable
          selectedItems={selectedBrands}
          onSelect={toggleBrandSelection}
        />
      </View>
      <View className="w-full flex-col items-center justify-center gap-y-2">
        <CustomButton
          handlePress={() => handleContinue()}
          className="w-full bg-primary"
        >
          <Text className="text-base text-white font-semibold">Continue</Text>
        </CustomButton>
      </View>
    </View>
  );
};

interface SelectableListProps {
  title: string;
  items: string[];
  isSelectable?: boolean;
  selectedItems?: string[];
  onSelect?: (item: string) => void;
}

const SelectableList: React.FC<SelectableListProps> = ({
  title,
  items,
  isSelectable = false,
  selectedItems = [],
  onSelect,
}) => {
  return (
    <View className="border border-[#F3F3F3] bg-[#F3F3F3] p-4 rounded-lg flex-col items-start justify-start gap-y-4">
      <Text className="font-semibold text-sm text-grey-800">{title}</Text>
      <View className="flex-row flex-wrap items-start justify-start gap-2">
        {items.map((item) => (
          <TouchableOpacity
            key={item}
            className={`px-4 py-2 rounded-lg ${
              isSelectable && selectedItems.includes(item)
                ? "bg-primary"
                : "bg-lightGrey"
            }`}
            onPress={() => isSelectable && onSelect && onSelect(item)}
            disabled={!isSelectable}
          >
            <Text
              className={
                isSelectable && selectedItems.includes(item)
                  ? "text-white"
                  : "text-gray-700"
              }
            >
              {item}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default ChooseProductCategory;

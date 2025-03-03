import { Link } from "expo-router";
import React from "react";
import { View, Text } from "react-native";

interface CategoryTabsProps {
  tab: string;
}

const categoriesTabs = [
  {
    path: "categories",
    text: "All Categories",
  },
  {
    path: "brands",
    text: "All Brands",
  },
];

const CategoryTabs: React.FC<CategoryTabsProps> = ({ tab }) => {
  return (
    <View className="w-full bg-[#0F12251A] h-12 rounded-full flex-row items-center justify-between p-1">
      {categoriesTabs.map((navigation, index) => (
        <Link
          href={`/categories?tab=${navigation.path}`}
          key={index}
          className={`w-2/4 h-full text-center rounded-full ${
            navigation.path === tab ? "bg-primary" : "bg-transparent"
          }`}
        >
          <View className="flex-row items-center justify-center h-full">
            <Text
              className={`text-base font-normal  ${
                navigation.path === tab ? "text-white" : "text-primary"
              }`}
            >
              {navigation.text}
            </Text>
          </View>
        </Link>
      ))}
    </View>
  );
};

export default CategoryTabs;

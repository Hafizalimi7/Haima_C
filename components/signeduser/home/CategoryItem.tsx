import { View, Text, TouchableOpacity, Image } from "react-native";
import { CategoryItemType } from "@/types/product";
import { useRouter } from "expo-router";

interface CategoryItemProps {
  category: CategoryItemType;
}

const CategoryItem: React.FC<CategoryItemProps> = ({ category }) => {
  const { push } = useRouter();

  return (
    <View className="first:ml-6 mx-2 pb-3">
      <TouchableOpacity
        accessible={true}
        accessibilityRole="button"
        accessibilityLabel={`Navigate to ${category.title} search`}
        onPress={() => push(`/category/${encodeURIComponent(category.title)}`)}
        className="flex flex-col items-center justify-center gap-y-2"
      >
        <View className="bg-[#F5F5F5] w-16 h-16 rounded-full flex-row items-center justify-center">
          <Image
            source={category.catgoryImage}
            resizeMode="contain"
            className="w-10 h-10"
            testID="category-image"
          />
        </View>
        <Text className="text-center text-xs font-normal text-grey-800">
          {category.title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default CategoryItem;

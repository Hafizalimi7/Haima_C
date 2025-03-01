import signeduser from "@/constants/icons/signeduser";
import { View, Text, TouchableOpacity, Image } from "react-native";

const HomeInfoHeading: React.FC = () => {
  return (
    <View className="w-full flex-row items-center justify-between px-4">
      <View className="flex-col items-start justify-start gap-y-1">
        <Text className="text-xl font-semibold text-primary">
          Welcome, Aisha
        </Text>
        <Text className="text-sm font-normal text-grey-800">
          Explore the marketplace for items.
        </Text>
      </View>
      <View className="flex-row items-center justify-end gap-x-5">
        <TouchableOpacity>
          <Image
            source={signeduser.heartIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image
            source={signeduser.bellIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeInfoHeading;

import { icons } from "@/constants";
import { useRouter } from "expo-router";
import { Image, Text, TouchableOpacity, View } from "react-native";

interface AuthHeaderProps {
  title: string;
  subtitle: string;
  showBackButton: boolean;
}

const AuthHeader: React.FC<AuthHeaderProps> = ({
  title,
  subtitle,
  showBackButton = true,
}) => {
  const { back } = useRouter();
  return (
    <View className="w-full flex-col items-start justify-start gap-y-5">
      {showBackButton && (
        <TouchableOpacity onPress={() => back()}>
          <Image
            source={icons.backarrowIcon}
            alt="back icon logo"
            resizeMode="contain"
            className="w-8 h-8"
          />
        </TouchableOpacity>
      )}
      <View className="flex-col items-start justify-start gap-y-2">
        <Text className="text-2xl font-semibold text-primary">{title}</Text>
        <Text className="text-base font-normal text-grey-800">{subtitle}</Text>
      </View>
    </View>
  );
};

export default AuthHeader;

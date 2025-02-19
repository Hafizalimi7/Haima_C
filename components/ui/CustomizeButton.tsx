import { icons } from "@/constants";
import {
  TouchableOpacity,
  Image,
  View,
  GestureResponderEvent,
  TouchableOpacityProps,
} from "react-native";

type CustomizeBtn = TouchableOpacityProps & {
  children: React.ReactNode;
  handlePress?: (event: GestureResponderEvent) => void;
  isLoading?: boolean;
  disabled?: boolean;
};

const CustomButton: React.FC<CustomizeBtn> = ({
  children,
  handlePress,
  className = "",
  isLoading,
  disabled,
  ...props
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      accessibilityRole="button"
      testID="custom-button"
      className={`rounded-full min-h-12 flex-row space-x-2 justify-center items-center ${className} ${
        isLoading || disabled ? "opacity-90 cursor-not-allowed" : ""
      }`}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading && (
        <Image
          source={icons.whiteLoadingIcon}
          resizeMode="cover"
          className="w-6 h-6"
          accessibilityRole="image"
          testID="loading-image"
        />
      )}
      <View className="w-fit">{children}</View>
    </TouchableOpacity>
  );
};

export default CustomButton;

import { Image, ImageSourcePropType, View } from "react-native";

type tabIconType = {
  icon: ImageSourcePropType | undefined;
  color?: string;
  className?: string;
  focused?: boolean;
};

const NavigationTabIcon: React.FC<tabIconType> = ({
  icon,
  color,
  focused,
  className,
}) => {
  return (
    <View
      testID="icon-view"
      style={{
        backgroundColor: focused ? "#FFFFFF40" : "transparent",
      }}
      className={`flex-row items-center justify-center transition-all duration-300 w-12 h-12 rounded-full`}
    >
      <Image
        source={icon}
        resizeMode="contain"
        testID="icon-image"
        className={`${className} object-contain`}
      />
    </View>
  );
};

export default NavigationTabIcon;

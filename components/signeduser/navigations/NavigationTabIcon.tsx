import { Image, ImageSourcePropType, View } from "react-native";

type tabIconType = {
  icon: ImageSourcePropType | undefined;
  color: string;
  focused: boolean;
};

const NavigationTabIcon: React.FC<tabIconType> = ({ icon, color, focused }) => (
  <View
    className={`flex-row items-center justify-center transition-all duration-300 w-9 h-9 rounded-full ${
      focused ? "bg-black/10" : "bg-transparent"
    }`}
  >
    <Image source={icon} resizeMode="contain" tintColor={color} />
  </View>
);

export default NavigationTabIcon;

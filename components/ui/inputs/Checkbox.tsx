import { icons } from "@/constants";
import { Image, TouchableOpacity } from "react-native";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  className: string;
  testID?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  onPress,
  className,
  testID,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      className={`${className}`}
      testID={testID}
    >
      {!checked ? (
        <Image
          source={icons.checkboxIcon}
          resizeMode="contain"
          className="w-5 h-5"
        />
      ) : (
        <Image
          source={icons.checkedBoxIcon}
          resizeMode="contain"
          className="w-6 h-6"
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

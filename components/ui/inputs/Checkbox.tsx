import { icons } from "@/constants";
import { Image, TouchableOpacity } from "react-native";

interface CheckboxProps {
  checked: boolean;
  onPress: () => void;
  className: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ checked, onPress, className }) => {
  return (
    <TouchableOpacity onPress={onPress} className={`${className}`}>
      {checked ? (
        <Image
          source={icons.checkboxIcon}
          resizeMode="contain"
          className="w-4 h-4"
        />
      ) : (
        <Image
          source={icons.checkedBoxIcon}
          resizeMode="contain"
          className="w-4 h-4"
        />
      )}
    </TouchableOpacity>
  );
};

export default Checkbox;

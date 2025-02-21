import { icons } from "@/constants";
import useBooleanControl from "@/hooks/useBooleanControl";
import {
  View,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardTypeOptions,
  StyleProp,
  TextStyle,
  ViewStyle,
  NativeSyntheticEvent,
  TextInputFocusEventData,
} from "react-native";

type FormType = {
  label?: React.ReactNode;
  type?: "Password" | "Text";
  labelShow: boolean;
  value: string | undefined;
  placeholder: string;
  handleChangeText: (text: string) => void;
  onBlur?: (e: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  containerClassName: string;
  className?: string;
  keyboardType?: KeyboardTypeOptions;
  errorClass?: string;
  multiline?: boolean;
  numberOfLines?: number;
  maxLength?: number;
  style?: StyleProp<TextStyle>;
};

const FormFieldInput: React.FC<FormType> = ({
  label,
  type,
  labelShow,
  value,
  placeholder,
  handleChangeText,
  containerClassName,
  errorClass,
  keyboardType,
  onBlur,
  multiline,
  numberOfLines,
  className,
  maxLength,
  style,
}) => {
  const { state: showPassword, toggle: togglePassword } = useBooleanControl();

  return (
    <View className={`space-y-2 ${containerClassName}`} testID="form-field">
      {labelShow === true && <View className="w-full">{label}</View>}

      <View
        className={`w-full h-12 px-4 bg-white rounded-full border focus:border-primary items-center flex-row transition-all duration-300 ${errorClass}`}
        testID="input-container"
      >
        <TextInput
          className={`flex-1 text-primary font-normal text-sm h-full w-full ${className}`}
          value={value}
          placeholder={placeholder}
          placeholderTextColor="#717171"
          onChangeText={handleChangeText}
          onBlur={onBlur}
          secureTextEntry={type === "Password" && !showPassword}
          keyboardType={keyboardType}
          multiline={multiline}
          numberOfLines={numberOfLines}
          maxLength={maxLength}
          testID="text-input"
          style={style}
        />
        {type === "Password" && (
          <TouchableOpacity
            onPress={togglePassword}
            testID="toggle-password-visibility"
          >
            <Image
              source={!showPassword ? icons.eyeIcon : icons.eyeIcon}
              className="w-5 h-5"
              resizeMode="contain"
              tintColor="#000000"
              testID="password-icon"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormFieldInput;

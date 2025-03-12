import React, { ReactNode, useEffect, useRef, useState } from "react";
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  Animated,
  Easing,
} from "react-native";

interface ModalProp {
  visible: boolean;
  children: ReactNode;
  className?: string;
  onClose?: () => void;
}

const ModalPopUp: React.FC<ModalProp> = ({
  visible,
  children,
  className = "py-5 px-6",
  onClose,
}) => {
  const translateY = useRef(new Animated.Value(-300)).current;
  const [modalVisible, setModalVisible] = useState(visible);

  useEffect(() => {
    if (visible) {
      setModalVisible(true);
      Animated.spring(translateY, {
        toValue: 0,
        friction: 8,
        tension: 40,
        useNativeDriver: true, // Important for performance
      }).start();
    } else {
      Animated.timing(translateY, {
        toValue: -300,
        duration: 300,
        easing: Easing.ease,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }
  }, [visible]);

  if (!modalVisible && !visible) return null;

  return (
    <Modal
      transparent
      visible={modalVisible}
      animationType="none"
      statusBarTranslucent
      onRequestClose={onClose}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
        keyboardVerticalOffset={Platform.OS === "ios" ? 40 : 0}
      >
        <TouchableWithoutFeedback
          onPress={() => {
            Keyboard.dismiss();
            if (onClose) onClose();
          }}
        >
          <View className="flex-1 bg-black/30 items-center justify-center">
            <TouchableWithoutFeedback onPress={(e) => e.stopPropagation()}>
              <Animated.View
                style={[
                  {
                    transform: [{ translateY: translateY }],
                  },
                ]}
                className={`w-[347px] bg-white rounded-3xl ${className}`}
              >
                {children}
              </Animated.View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </Modal>
  );
};

export default ModalPopUp;
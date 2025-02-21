import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Modal, View } from "react-native";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withTiming,
  useSharedValue,
} from "react-native-reanimated";

interface ModalProp {
  visible: boolean;
  children: ReactNode;
  className?: string;
}

const ModalPopUp: React.FC<ModalProp> = ({ visible, children, className }) => {
  const scale = useSharedValue(0);

  useEffect(() => {
    if (visible) {
      scale.value = withSpring(1);
    } else {
      scale.value = withTiming(0, { duration: 300 });
    }
  }, [visible]);

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  if (!visible) return null;

  return (
    <Modal transparent visible={visible}>
      <View className="flex-1 bg-black/30 items-center justify-center">
        <Animated.View
          style={[animatedStyle]}
          className={`w-[347px] bg-white py-5 px-6 rounded-3xl ${className}`}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalPopUp;

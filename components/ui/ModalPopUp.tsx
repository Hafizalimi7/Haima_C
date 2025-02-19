import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Modal } from "react-native";
import { View, Animated } from "react-native";

interface ModalProp {
  visible: boolean;
  children: ReactNode;
  className?: string;
}

const ModalPopUp: React.FC<ModalProp> = ({ visible, children, className }) => {
  const [showModal, setShowModal] = useState(visible);
  const scaleValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };

  return (
    <Modal transparent visible={showModal}>
      <View className="flex-1 bg-black/30 items-center justify-center">
        <Animated.View
          style={[{ transform: [{ scale: scaleValue }] }]}
          className={`w-[347px] bg-white py-5 px-6 rounded-3xl ${className}`}
        >
          {children}
        </Animated.View>
      </View>
    </Modal>
  );
};

export default ModalPopUp;

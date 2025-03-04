import React, { useEffect } from "react";
import { GestureDetector, Gesture } from "react-native-gesture-handler";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
  runOnJS,
} from "react-native-reanimated";
import { View, StyleSheet } from "react-native";

interface RangeSliderProps {
  sliderWidth: number;
  min: number;
  max: number;
  step: number;
  initialValues?: { min: number; max: number };
  onValueChange: (range: { min: number; max: number }) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({
  sliderWidth,
  min,
  max,
  step,
  initialValues,
  onValueChange,
}) => {
  const getXForValue = (value: number) => {
    return ((value - min) / (max - min)) * sliderWidth;
  };

  const getValueForX = (x: number) => {
    const rawValue = min + (x / sliderWidth) * (max - min);
    return Math.round(rawValue / step) * step;
  };

  const leftPosition = useSharedValue(
    initialValues ? getXForValue(initialValues.min) : 0
  );
  const rightPosition = useSharedValue(
    initialValues ? getXForValue(initialValues.max) : sliderWidth
  );

  useEffect(() => {
    if (initialValues) {
      leftPosition.value = withSpring(getXForValue(initialValues.min));
      rightPosition.value = withSpring(getXForValue(initialValues.max));
    }
  }, [initialValues]);

  const updateValues = () => {
    const minValue = getValueForX(leftPosition.value);
    const maxValue = getValueForX(rightPosition.value);
    onValueChange({ min: minValue, max: maxValue });
  };

  const leftThumbGesture = Gesture.Pan()
    .onStart(() => {
      "worklet";
    })
    .onUpdate((event) => {
      const newPosition = Math.min(
        Math.max(0, leftPosition.value + event.translationX),
        rightPosition.value - step
      );
      leftPosition.value = newPosition;
      runOnJS(updateValues)();
    });

  const rightThumbGesture = Gesture.Pan()
    .onStart(() => {
      "worklet";
    })
    .onUpdate((event) => {
      const newPosition = Math.max(
        Math.min(sliderWidth, rightPosition.value + event.translationX),
        leftPosition.value + step
      );
      rightPosition.value = newPosition;
      runOnJS(updateValues)();
    });

  const leftThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftPosition.value }],
  }));

  const rightThumbStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: rightPosition.value }],
  }));

  const activeLineStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: leftPosition.value }],
    width: rightPosition.value - leftPosition.value,
  }));

  return (
    <View style={styles.container}>
      <View style={styles.trackContainer}>
        {/* Background track */}
        <View style={styles.track} />

        {/* Active track */}
        <Animated.View style={[styles.activeTrack, activeLineStyle]} />

        {/* Thumbs */}
        <GestureDetector gesture={leftThumbGesture}>
          <Animated.View style={[styles.thumb, leftThumbStyle]} />
        </GestureDetector>

        <GestureDetector gesture={rightThumbGesture}>
          <Animated.View style={[styles.thumb, rightThumbStyle]} />
        </GestureDetector>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 40,
    justifyContent: "center",
    overflow: "hidden",
  },
  trackContainer: {
    height: 40,
    width: "100%",
    position: "relative",
    justifyContent: "center",
  },
  track: {
    height: 4,
    width: "100%",
    backgroundColor: "#E5E7EB",
    borderRadius: 2,
    position: "absolute",
  },
  activeTrack: {
    height: 4,
    backgroundColor: "#c29734",
    borderRadius: 2,
    position: "absolute",
  },
  thumb: {
    position: "absolute",
    width: 24,
    height: 24,
    borderRadius: 12,
    backgroundColor: "#c29734",
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    zIndex: 1,
    top: 8,
  },
});

export default RangeSlider;

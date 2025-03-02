import * as React from "react";
import { View, StyleSheet, ViewStyle, Animated } from "react-native";

interface ReviewProgressBarProps {
  progress: number; // Progress value between 0 and 100
  height?: number; // Height of the progress bar
  backgroundColor?: string; // Background color of the progress track
  progressColor?: string; // Color of the progress bar
  borderRadius?: number; // Border radius of the progress bar
  animated?: boolean; // Whether to animate the progress
  duration?: number; // Animation duration in milliseconds
  style?: ViewStyle; // Additional styles for the container
}

const ReviewProgressBar: React.FC<ReviewProgressBarProps> = ({
  progress,
  height = 6,
  backgroundColor = "#E8E8E8",
  progressColor = "#D3AC2A",
  borderRadius = 100,
  animated = true,
  duration = 500,
  style,
}) => {
  const normalizedProgress = Math.min(Math.max(progress, 0), 100);
  const animatedValue = React.useRef(new Animated.Value(0)).current;

  React.useEffect(() => {
    if (animated) {
      Animated.timing(animatedValue, {
        toValue: normalizedProgress,
        duration: duration,
        useNativeDriver: false,
      }).start();
    } else {
      animatedValue.setValue(normalizedProgress);
    }
  }, [normalizedProgress, animated, duration]);

  const width = animatedValue.interpolate({
    inputRange: [0, 100],
    outputRange: ["0%", "100%"],
  });

  return (
    <View
      style={[
        styles.container,
        {
          height,
          backgroundColor,
          borderRadius,
        },
        style,
      ]}
    >
      <Animated.View
        style={[
          styles.progressBar,
          {
            width,
            height: "100%",
            backgroundColor: progressColor,
            borderRadius,
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    overflow: "hidden",
  },
  progressBar: {
    position: "absolute",
  },
});

export default ReviewProgressBar;

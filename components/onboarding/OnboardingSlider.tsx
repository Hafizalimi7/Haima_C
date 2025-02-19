import React, { useRef, useState } from "react";
import { FlatList, ScrollView, Dimensions } from "react-native";
import { onBoardingDataSlides } from "@/data/onboarding";
import { SafeAreaView } from "react-native-safe-area-context";
import Slide from "./Slide";

const { width } = Dimensions.get("window");

const OnboardingSlider: React.FC = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const ref = useRef<FlatList>(null);

  const updateCurrentSlideIndex = (e: any) => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = () => {
    if (ref.current) {
      const nextSlideIndex = currentSlideIndex + 1;
      if (nextSlideIndex != onBoardingDataSlides.length) {
        const offset = nextSlideIndex * width;
        ref.current.scrollToOffset({ offset });
        setCurrentSlideIndex(currentSlideIndex + 1);
      }
    }
  };

  const skipToLastSlide = () => {
    if (ref.current) {
      const lastSlideIndex = onBoardingDataSlides.length - 1;
      const offset = lastSlideIndex * width;
      ref.current.scrollToOffset({ offset });
      setCurrentSlideIndex(lastSlideIndex);
    }
  };

  return (
    <SafeAreaView className="bg-primary flex-1">
      <ScrollView
        contentContainerStyle={{
          width: "100%",
          height: "100%",
        }}
      >
        <FlatList
          ref={ref}
          testID="onboarding-slider"
          onMomentumScrollEnd={updateCurrentSlideIndex}
          contentContainerStyle={{ height: "100%" }}
          showsHorizontalScrollIndicator={false}
          horizontal
          data={onBoardingDataSlides}
          pagingEnabled
          initialNumToRender={onBoardingDataSlides.length}
          renderItem={({ item }) => (
            <Slide
              currentSlideIndex={currentSlideIndex}
              goToNextSlide={goToNextSlide}
              slide={item}
              handleSkip={skipToLastSlide}
            />
          )}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
export default OnboardingSlider;

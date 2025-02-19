import { onBoardingDataSlides, onBoardType } from "@/data/onboarding";
import {
  Dimensions,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from "react-native";
import CustomButton from "../ui/CustomizeButton";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { AuthOptionsSheet } from "./bottomsheet";

const { width, height } = Dimensions.get("window");

interface SlideProp {
  slide: onBoardType;
  currentSlideIndex: number;
  goToNextSlide: () => void;
  handleSkip: () => void;
}

const Slide: React.FC<SlideProp> = ({
  slide,
  currentSlideIndex,
  goToNextSlide,
  handleSkip,
}) => {
  const { openAuthSheet } = useBottomSheet();

  return (
    <>
      <View
        testID={`slide-container-${slide.id}`}
        style={{ width: width }}
        className="relative bg-primary-800"
      >
        {currentSlideIndex != onBoardingDataSlides.length - 1 && (
          <View className="absolute z-10 right-5 top-5">
            <CustomButton
              testID="skip-button"
              handlePress={handleSkip}
              className="bg-[#FFFFFF1A] px-6 py-1.5 min-h-7"
            >
              <Text className="text-base font-semibold text-white">Skip</Text>
            </CustomButton>
          </View>
        )}

        <ImageBackground
          source={slide.backgroundImage}
          style={styles.backgroundImage}
        >
          <View className="px-1 w-full flex-col items-start justify-start">
            <View className="flex-row justify-start items-center my-6 gap-1">
              {onBoardingDataSlides.map((_, index) => (
                <View
                  key={index}
                  className={`h-2 rounded-full w-6 ${
                    currentSlideIndex == index ? "bg-secondary" : "w-2 bg-white"
                  }`}
                />
              ))}
            </View>
            <View className="w-full flex-col gap-y-4 items-start justify-start">
              <Text className="text-[28px] leading-9 font-normal text-white text-start">
                {slide.title}
              </Text>
              <Text className="text-start text-[21px] font-normal text-white">
                {slide.description}
              </Text>
            </View>
            <View className="w-full flex-col items-start justify-start space-y-6">
              {currentSlideIndex == onBoardingDataSlides.length - 1 ? (
                <View className="w-full pt-10">
                  <CustomButton
                    handlePress={openAuthSheet}
                    className="bg-secondary w-full px-3"
                  >
                    <Text className="text-base font-semibold text-primary">
                      Get started
                    </Text>
                  </CustomButton>
                </View>
              ) : (
                <View className="w-full pt-10">
                  <CustomButton
                    testID="continue-button"
                    handlePress={() => goToNextSlide()}
                    className="bg-secondary w-full px-3"
                  >
                    <Text className="text-base font-semibold text-primary">
                      Continue
                    </Text>
                  </CustomButton>
                </View>
              )}
            </View>
          </View>
        </ImageBackground>
      </View>

      <AuthOptionsSheet />
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width,
    height,
    justifyContent: "flex-end",
    alignItems: "flex-end",
    paddingBottom: 80,
  },
});

export default Slide;

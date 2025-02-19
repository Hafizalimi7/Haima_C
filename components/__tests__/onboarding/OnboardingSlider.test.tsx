
import { render } from "@testing-library/react-native";
import { OnboardingSlider } from "@/components/onboarding";

jest.mock("@/components/onboarding/Slide", () => "Slide");
jest.mock("@/contexts/BottomSheetProvider", () => ({
  useBottomSheet: () => ({
    openAuthSheet: jest.fn(),
  }),
}));

describe("OnboardingSlider Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(<OnboardingSlider />);
    expect(getByTestId("onboarding-slider")).toBeTruthy();
  });
});

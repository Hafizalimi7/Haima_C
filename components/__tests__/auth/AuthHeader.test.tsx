import { fireEvent, render } from "@testing-library/react-native";
import AuthHeader from "@/components/auth/AuthHeader";

describe("AuthHeader", () => {
  const mockProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    showBackButton: true,
  };

  it("renders correctly with all props", () => {
    const { getByText, getByRole } = render(<AuthHeader {...mockProps} />);

    expect(getByText("Test Title")).toBeTruthy();
    expect(getByText("Test Subtitle")).toBeTruthy();
    expect(getByRole("image", { name: "back icon logo" })).toBeTruthy();
  });

  it("renders without back button when showBackButton is false", () => {
    const { queryByRole } = render(
      <AuthHeader {...mockProps} showBackButton={false} />
    );

    expect(queryByRole("image", { name: "back icon logo" })).toBeNull();
  });

  it("renders title and subtitle with correct styles", () => {
    const { getByText } = render(<AuthHeader {...mockProps} />);

    const title = getByText("Test Title");
    const subtitle = getByText("Test Subtitle");

    expect(title.props.className).toContain(
      "text-2xl font-semibold text-primary"
    );
    expect(subtitle.props.className).toContain(
      "text-base font-normal text-grey-800"
    );
  });

  it("calls back function when back button is pressed", () => {
    const mockBack = jest.fn();
    jest.mock("expo-router", () => ({
      useRouter: () => ({
        back: mockBack,
      }),
    }));

    const { getByRole } = render(<AuthHeader {...mockProps} />);
    const backButton = getByRole("button");

    fireEvent.press(backButton);

    expect(mockBack).toHaveBeenCalled();
  });
});

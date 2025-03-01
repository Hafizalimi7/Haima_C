import { NavigationTabIcon } from "@/components/signeduser/navigations";
import { render } from "@testing-library/react-native";

describe("NavigationTabIcon", () => {
  const mockIcon = { uri: "test-image.png" };

  it("renders correctly with default props", () => {
    const { getByTestId } = render(<NavigationTabIcon icon={mockIcon} />);
    expect(getByTestId("icon-view")).toHaveStyle({
      backgroundColor: "transparent",
    });
  });

  it("renders with focused background when focused prop is true", () => {
    const { getByTestId } = render(
      <NavigationTabIcon icon={mockIcon} focused={true} />
    );
    expect(getByTestId("icon-view")).toHaveStyle({
      backgroundColor: "#FFFFFF40",
    });
  });

  it("renders image with correct source and className", () => {
    const { getByTestId } = render(
      <NavigationTabIcon icon={mockIcon} className="test-class" />
    );
    const image = getByTestId("icon-image");
    expect(image.props.source).toBe(mockIcon);
    expect(image.props.className).toContain("test-class");
    expect(image.props.className).toContain("object-contain");
  });

  it("handles undefined icon prop", () => {
    const { getByTestId } = render(<NavigationTabIcon icon={undefined} />);
    const image = getByTestId("icon-image");
    expect(image.props.source).toBeUndefined();
  });
});

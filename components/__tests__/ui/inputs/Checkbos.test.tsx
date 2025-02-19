import { render, fireEvent } from "@testing-library/react-native";
import { icons } from "@/constants";
import Checkbox from "@/components/ui/inputs/Checkbox";

describe("Checkbox", () => {
  const mockOnPress = jest.fn();
  const defaultProps = {
    checked: false,
    onPress: mockOnPress,
    className: "test-class",
  };

  beforeEach(() => {
    mockOnPress.mockClear();
  });

  test("renders unchecked state correctly", () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />);
    const image = getByTestId("checkbox-image");
    expect(image.props.source).toBe(icons.checkedBoxIcon);
  });

  test("renders checked state correctly", () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} checked={true} />
    );
    const image = getByTestId("checkbox-image");
    expect(image.props.source).toBe(icons.checkboxIcon);
  });

  test("calls onPress when clicked", () => {
    const { getByTestId } = render(<Checkbox {...defaultProps} />);
    const checkbox = getByTestId("checkbox");
    fireEvent.press(checkbox);
    expect(mockOnPress).toHaveBeenCalledTimes(1);
  });

  test("applies custom className", () => {
    const { getByTestId } = render(
      <Checkbox {...defaultProps} className="custom-class" />
    );
    const checkbox = getByTestId("checkbox");
    expect(checkbox.props.className).toBe("custom-class");
  });
});

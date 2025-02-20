import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import FormFieldInput from "@/components/ui/inputs/FormFieldInput";

// Mock the icons constant
jest.mock("@/constants", () => ({
  icons: {
    eyeIcon: require("@/assets/icons/eye.png"),
  },
}));

jest.mock("@/hooks/useBooleanControl", () => () => ({
  state: false,
  toggle: jest.fn(),
}));

describe("FormFieldInput Component", () => {
  const defaultProps = {
    labelShow: false,
    value: "",
    placeholder: "Test placeholder",
    handleChangeText: jest.fn(),
    containerClassName: "container-class",
  };

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with basic props", () => {
    const { getByTestId } = render(<FormFieldInput {...defaultProps} />);

    const formField = getByTestId("form-field");
    const inputContainer = getByTestId("input-container");
    const textInput = getByTestId("text-input");

    expect(formField).toBeTruthy();
    expect(inputContainer).toBeTruthy();
    expect(textInput).toBeTruthy();
  });

  it("handles text input correctly", () => {
    const handleChangeText = jest.fn();
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} handleChangeText={handleChangeText} />
    );

    const textInput = getByTestId("text-input");
    fireEvent.changeText(textInput, "test input");

    expect(handleChangeText).toHaveBeenCalledWith("test input");
  });

  it("renders password type input correctly", () => {
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} type="Password" />
    );

    const toggleButton = getByTestId("toggle-password-visibility");
    const passwordIcon = getByTestId("password-icon");

    expect(toggleButton).toBeTruthy();
    expect(passwordIcon).toBeTruthy();
  });

  it("applies custom className correctly", () => {
    const customClassName = "custom-class";
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} className={customClassName} />
    );

    const textInput = getByTestId("text-input");
    expect(textInput.props.className).toContain(customClassName);
  });

  it("handles onBlur event correctly", () => {
    const onBlur = jest.fn();
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} onBlur={onBlur} />
    );

    const textInput = getByTestId("text-input");
    fireEvent(textInput, "blur");

    expect(onBlur).toHaveBeenCalled();
  });

  it("applies error class when provided", () => {
    const errorClass = "error-class";
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} errorClass={errorClass} />
    );

    const inputContainer = getByTestId("input-container");
    expect(inputContainer.props.className).toContain(errorClass);
  });

  it("handles multiline input correctly", () => {
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} multiline={true} numberOfLines={3} />
    );

    const textInput = getByTestId("text-input");
    expect(textInput.props.multiline).toBe(true);
    expect(textInput.props.numberOfLines).toBe(3);
  });

  it("respects maxLength constraint", () => {
    const maxLength = 10;
    const { getByTestId } = render(
      <FormFieldInput {...defaultProps} maxLength={maxLength} />
    );

    const textInput = getByTestId("text-input");
    expect(textInput.props.maxLength).toBe(maxLength);
  });
});

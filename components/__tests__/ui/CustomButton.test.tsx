import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { CustomButton } from "@/components/ui";

describe("CustomButton Component", () => {
  it("renders correctly", () => {
    const { getByTestId } = render(
      <CustomButton className="bg-primary">Click Me</CustomButton>
    );
    expect(getByTestId("custom-button")).toBeTruthy();
  });

  it("calls handlePress when clicked", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <CustomButton handlePress={mockPress} className="bg-primary">
        Click Me
      </CustomButton>
    );

    fireEvent.press(getByTestId("custom-button"));
    expect(mockPress).toHaveBeenCalled();
  });

  it("shows loading icon when isLoading is true", () => {
    const { getByTestId } = render(
      <CustomButton isLoading className="bg-primary">
        Loading
      </CustomButton>
    );

    expect(getByTestId("loading-image")).toBeTruthy();
  });

  it("disables button when disabled is true", () => {
    const mockPress = jest.fn();
    const { getByTestId } = render(
      <CustomButton disabled handlePress={mockPress} className="bg-primary">
        Disabled
      </CustomButton>
    );

    fireEvent.press(getByTestId("custom-button"));
    expect(mockPress).not.toHaveBeenCalled();
  });
});

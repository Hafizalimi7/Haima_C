import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import CustomizeSwitch from "@/components/ui/inputs/CustomizeSwitch";

describe("CustomizeSwitch Component", () => {
  it("calls onToggle when pressed", () => {
    const mockToggle = jest.fn();
    const { getByTestId } = render(
      <CustomizeSwitch isOn={true} onToggle={mockToggle} />
    );

    const switchElement = getByTestId("custom-switch");
    fireEvent.press(switchElement);
    expect(mockToggle).toHaveBeenCalledTimes(1);
  });
});

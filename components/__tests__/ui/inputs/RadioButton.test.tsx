import React from "react";
import { render } from "@testing-library/react-native";
import { RadioButton } from "@/components/ui/inputs";

describe("RadioButton", () => {
  it("renders without icon when not selected", () => {
    const { queryByTestId } = render(<RadioButton selected={false} />);
    expect(queryByTestId("ionicons")).toBeNull();
  });

  it("renders with correct style classes", () => {
    const { UNSAFE_getByProps } = render(<RadioButton selected={false} />);
    const view = UNSAFE_getByProps({
      className:
        "w-6 h-6 border-2 border-black rounded-full flex items-center justify-center",
    });
    expect(view).toBeTruthy();
  });
});

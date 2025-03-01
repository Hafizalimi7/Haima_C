import { BrandItem } from "@/components/signeduser/products";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";

// Mock the router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("BrandItem", () => {
  const mockPush = jest.fn();
  const mockBrand = {
    id: "1",
    title: "Test Brand",
    brandImage: require("@/assets/images/signeduser/brands/zara.png"),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders brand title correctly", () => {
    const { getByText } = render(<BrandItem brand={mockBrand} />);
    expect(getByText("Test Brand")).toBeTruthy();
  });

  it("renders brand image correctly", () => {
    const { getByTestId } = render(<BrandItem brand={mockBrand} />);
    const image = getByTestId("brand-image");
    expect(image.props.source).toBe(mockBrand.brandImage);
  });

  it("navigates to search page when pressed", () => {
    const { getByRole } = render(<BrandItem brand={mockBrand} />);
    fireEvent.press(getByRole("button"));
    expect(mockPush).toHaveBeenCalledWith("/search/Test Brand");
  });
});

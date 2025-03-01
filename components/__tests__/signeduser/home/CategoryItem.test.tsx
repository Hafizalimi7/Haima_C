
import { CategoryItem } from "@/components/signeduser/home";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";

// Mock the router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

describe("CategoryItem", () => {
  const mockPush = jest.fn();
  const mockCategory = {
    id: "1",
    title: "Test Category",
    catgoryImage: require("@/assets/images/signeduser/tops.png"),
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders category title correctly", () => {
    const { getByText } = render(<CategoryItem category={mockCategory} />);
    expect(getByText("Test Category")).toBeTruthy();
  });

  it("renders category image correctly", () => {
    const { getByTestId } = render(<CategoryItem category={mockCategory} />);
    const image = getByTestId("category-image");
    expect(image.props.source).toBe(mockCategory.catgoryImage);
  });

  it("navigates to search page when pressed", () => {
    const { getByRole } = render(<CategoryItem category={mockCategory} />);
    fireEvent.press(getByRole("button"));
    expect(mockPush).toHaveBeenCalledWith("/search/Test Category");
  });
});

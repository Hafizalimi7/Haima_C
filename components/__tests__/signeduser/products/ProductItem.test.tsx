import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import { useRouter } from "expo-router";
import signeduser from "@/constants/icons/signeduser";
import { ProductType } from "@/types/product";
import { ProductItem } from "@/components/signeduser/products";

// Mock the router
jest.mock("expo-router", () => ({
  useRouter: jest.fn(),
}));

// Mock the currency helper
jest.mock("@/helpers/currency", () => ({
  formatCurrency: jest.fn((amount) => `$${amount}`),
}));

describe("ProductItem", () => {
  const mockPush = jest.fn();

  const mockProduct: ProductType = {
    id: "1",
    title: "Test Product",
    desc: "Product Description",
    price: 100,
    productImage: require("@/assets/images/signeduser/products/bag.png"),
    discount: false,
    discount_percentage: null,
    discount_price: null,
    images: [require("@/assets/images/signeduser/products/bag.png")],
    preposition: "in",
    review: 4.5,
    category: "Clothing",
    colour: "Blue",
    brand: "Test Brand",
  };

  const mockProductWithDiscount: ProductType = {
    ...mockProduct,
    discount: true,
    discount_percentage: 20,
    discount_price: 80,
  };

  beforeEach(() => {
    (useRouter as jest.Mock).mockReturnValue({ push: mockPush });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("Basic Rendering", () => {
    it("renders product title correctly", () => {
      const { getByText } = render(<ProductItem product={mockProduct} />);
      expect(getByText("Test Product")).toBeTruthy();
    });

    it("renders product image correctly", () => {
      const { getByTestId } = render(<ProductItem product={mockProduct} />);
      const image = getByTestId("product-image");
      expect(image.props.source).toBe(mockProduct.productImage);
    });

    it("renders product description correctly", () => {
      const { getByText } = render(<ProductItem product={mockProduct} />);
      expect(getByText("Product Description")).toBeTruthy();
    });

  });

  describe("Price Display", () => {
    it("renders normal price without discount", () => {
      const { getByText } = render(<ProductItem product={mockProduct} />);
      expect(getByText("$100")).toBeTruthy();
    });

    describe("with discount", () => {
      it("renders discount percentage badge", () => {
        const { getByText } = render(
          <ProductItem product={mockProductWithDiscount} />
        );
        expect(getByText("-20%")).toBeTruthy();
      });

      it("renders both original and discounted price", () => {
        const { getByText } = render(
          <ProductItem product={mockProductWithDiscount} />
        );
        expect(getByText("$80")).toBeTruthy(); // Discounted price
        expect(getByText("$100")).toBeTruthy(); // Original price
      });

      it("applies line-through style to original price", () => {
        const { getByText } = render(
          <ProductItem product={mockProductWithDiscount} />
        );
        const originalPrice = getByText("$100");
        expect(originalPrice.props.style).toHaveProperty(
          "textDecorationLine",
          "line-through"
        );
      });
    });
  });

  describe("Navigation and Interaction", () => {
    it("navigates to product details when pressed", () => {
      const { getByRole } = render(<ProductItem product={mockProduct} />);
      fireEvent.press(getByRole("button"));
      expect(mockPush).toHaveBeenCalledWith("/product/1/item");
    });

    it("has correct accessibility label", () => {
      const { getByRole } = render(<ProductItem product={mockProduct} />);
      const button = getByRole("button");
      expect(button.props.accessibilityLabel).toBe(
        "Navigate to Test Product search"
      );
    });
  });

  describe("UI Elements", () => {
    it("renders heart icon", () => {
      const { UNSAFE_getAllByProps } = render(
        <ProductItem product={mockProduct} />
      );
      const heartIcon = UNSAFE_getAllByProps({
        source: signeduser.heartIcon,
      })[0];
      expect(heartIcon).toBeTruthy();
    });

    it("renders shield icon", () => {
      const { UNSAFE_getAllByProps } = render(
        <ProductItem product={mockProduct} />
      );
      const shieldIcon = UNSAFE_getAllByProps({
        source: signeduser.shieldIcon,
      })[0];
      expect(shieldIcon).toBeTruthy();
    });
  });

  describe("Layout and Styling", () => {

    it("limits product title to one line", () => {
      const { getByText } = render(<ProductItem product={mockProduct} />);
      const title = getByText("Test Product");
      expect(title.props.numberOfLines).toBe(1);
    });

    it("limits description to one line", () => {
      const { getByText } = render(<ProductItem product={mockProduct} />);
      const desc = getByText("Product Description");
      expect(desc.props.numberOfLines).toBe(1);
    });
  });

  describe("Edge Cases", () => {
    it("handles missing discount percentage when discount is true", () => {
      const productWithoutPercentage = {
        ...mockProduct,
        discount: true,
        discount_percentage: null,
        discount_price: 80,
      };
      const { queryByText } = render(
        <ProductItem product={productWithoutPercentage} />
      );
      expect(queryByText(/-\d+%/)).toBeNull();
    });
  });
});

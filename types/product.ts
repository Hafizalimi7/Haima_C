import { ImageSourcePropType } from "react-native";

export type ImageType = ImageSourcePropType | undefined;

export interface CategoryItemType {
  id: string;
  title: string;
  catgoryImage: ImageType;
}

export interface BrandItemType {
  id: string;
  title: string;
  brandImage: ImageType;
}

export interface ProductType {
  id: string;
  title: string;
  desc: string;
  price: number;
  discount_price: number | null;
  discount: boolean;
  discount_percentage: number | null;
  productImage: ImageType;
  images: ImageType[];
  preposition: string;
  review: number;
  category: string;
  colour: string;
  brand: string;
}

export interface Review {
  id: string;
  rating: number;
  comment: string;
  userId: string;
  userName: string;
  createdAt: string;
}

export interface ReviewFormValues {
  rating: number;
  comment: string;
}

export type SortOption =
  | "Recommended"
  | "Recently added"
  | "Best rating"
  | "Lowest to highest price"
  | "Highest to lowest price";

export interface ShippingFormValue {
  first_name: string;
  phoneNumber: string;
}

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

import { ColourType } from "./product";

export interface UploadImageType {
  uri: string;
  name: string;
  type: string;
}

export interface sellItemFormValue {
  images: UploadImageType[];
  item_name: string;
  item_description: string;
  category: string;
  price: string;
  brand: string;
  condition: string;
  colour: ColourType[];
  size: string;
}

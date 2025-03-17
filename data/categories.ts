import {
  BrandItemType,
  CategoryItemType,
  ColourType,
  ConditionItemType,
  SizeItemType,
} from "@/types/product";

export const productCategories: CategoryItemType[] = [
  {
    id: "01",
    title: "Tops",
    catgoryImage: require("@/assets/images/signeduser/tops.png"),
  },
  {
    id: "02",
    title: "Bottoms",
    catgoryImage: require("@/assets/images/signeduser/bottoms.png"),
  },
  {
    id: "03",
    title: "Modest Wear",
    catgoryImage: require("@/assets/images/signeduser/modern-wear.png"),
  },
  {
    id: "04",
    title: "Footwear",
    catgoryImage: require("@/assets/images/signeduser/foot-wear.png"),
  },
  {
    id: "05",
    title: "Accessories",
    catgoryImage: require("@/assets/images/signeduser/accessories.png"),
  },
  {
    id: "06",
    title: "Dresses",
    catgoryImage: require("@/assets/images/signeduser/dresses.png"),
  },
  {
    id: "07",
    title: "Nightwear",
    catgoryImage: require("@/assets/images/signeduser/night-wear.png"),
  },
  {
    id: "08",
    title: "Coats and Jackets",
    catgoryImage: require("@/assets/images/signeduser/coat.png"),
  },
];

export const subCats = [
  {
    keyword: "T-shirts",
    text: "T-shirts",
  },
  {
    keyword: "Hoodies",
    text: "Hoodies",
  },
  {
    keyword: "Jumpers",
    text: "Jumpers",
  },
  {
    keyword: "Cardigans",
    text: "Cardigans",
  },
  {
    keyword: "Blouses",
    text: "Blouses",
  },
  {
    keyword: "Shirts",
    text: "Shirts",
  },
];

export const productBrands: BrandItemType[] = [
  {
    id: "01",
    title: "ZARA",
    brandImage: require("@/assets/images/signeduser/brands/zara.png"),
  },
  {
    id: "02",
    title: "Asos",
    brandImage: require("@/assets/images/signeduser/brands/asos.png"),
  },
  {
    id: "03",
    title: "Nike",
    brandImage: require("@/assets/images/signeduser/brands/nike.png"),
  },
  {
    id: "04",
    title: "Shein",
    brandImage: require("@/assets/images/signeduser/brands/shein.png"),
  },
  {
    id: "05",
    title: "Adidas",
    brandImage: require("@/assets/images/signeduser/brands/adidas.png"),
  },
  {
    id: "06",
    title: "Gucci",
    brandImage: require("@/assets/images/signeduser/brands/gucci.png"),
  },
  {
    id: "07",
    title: "H&M",
    brandImage: require("@/assets/images/signeduser/brands/hm.png"),
  },
  {
    id: "08",
    title: "Forever 21",
    brandImage: require("@/assets/images/signeduser/brands/forever21.png"),
  },
  {
    id: "09",
    title: "Madewell",
    brandImage: require("@/assets/images/signeduser/brands/madewell.png"),
  },
  {
    id: "10",
    title: "Banana Republic",
    brandImage: require("@/assets/images/signeduser/brands/banana-republic.png"),
  },
  {
    id: "11",
    title: "Boohoo",
    brandImage: require("@/assets/images/signeduser/brands/boohoo.png"),
  },
  {
    id: "12",
    title: "Mango",
    brandImage: require("@/assets/images/signeduser/brands/mango.png"),
  },
  {
    id: "13",
    title: "Prada",
    brandImage: require("@/assets/images/signeduser/brands/prada.png"),
  },
  {
    id: "14",
    title: "Chanel",
    brandImage: require("@/assets/images/signeduser/brands/chanel.png"),
  },
  {
    id: "15",
    title: "Puma",
    brandImage: require("@/assets/images/signeduser/brands/puma.png"),
  },
  {
    id: "16",
    title: "Saint Laurent",
    brandImage: require("@/assets/images/signeduser/brands/saint-laurent.png"),
  },
  {
    id: "17",
    title: "Versace",
    brandImage: require("@/assets/images/signeduser/brands/versace.png"),
  },
  {
    id: "18",
    title: "Bershka",
    brandImage: require("@/assets/images/signeduser/brands/bershka.png"),
  },
  {
    id: "19",
    title: "Missguided",
    brandImage: require("@/assets/images/signeduser/brands/misguided.png"),
  },
  {
    id: "20",
    title: "Dior",
    brandImage: require("@/assets/images/signeduser/brands/dior.png"),
  },
  {
    id: "21",
    title: "Fashion Nova",
    brandImage: require("@/assets/images/signeduser/brands/versace.png"),
  },
  {
    id: "22",
    title: "Levi’s ",
    brandImage: require("@/assets/images/signeduser/brands/levis.png"),
  },
  {
    id: "23",
    title: "Gap",
    brandImage: require("@/assets/images/signeduser/brands/gap.png"),
  },
  {
    id: "24",
    title: "Balenciaga",
    brandImage: require("@/assets/images/signeduser/brands/balenciaga.png"),
  },
  {
    id: "25",
    title: "Louis Vuitton",
    brandImage: require("@/assets/images/signeduser/brands/versace.png"),
  },
  {
    id: "26",
    title: "Lululemon",
    brandImage: require("@/assets/images/signeduser/brands/bershka.png"),
  },
  {
    id: "27",
    title: "Reformation",
    brandImage: require("@/assets/images/signeduser/brands/misguided.png"),
  },
  {
    id: "28",
    title: "Everlane",
    brandImage: require("@/assets/images/signeduser/brands/dior.png"),
  },
];

export const colours: ColourType[] = [
  { name: "Black", hex: "#000000" },
  { name: "Grey", hex: "#CECECE" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Red", hex: "#DB2121" },
  { name: "Blue", hex: "#2C8ED9" },
  { name: "Green", hex: "#1CB374" },
  { name: "Yellow", hex: "#FCD668" },
  { name: "Purple", hex: "#9747FF" },
  { name: "Orange", hex: "#FB8C04" },
  { name: "Pink", hex: "#FC1EAA" },
];

export const conditions: ConditionItemType[] = [
  {
    id: "01",
    title: "Brand New",
    description: "Unused with original packaging or tag",
  },
  {
    id: "02",
    title: "Like New",
    description: "Mint condition pre-owned or new without tags",
  },
  {
    id: "03",
    title: "Used - Excellent",
    description: "Lightly used but no noticeable flaws",
  },
  {
    id: "04",
    title: "Used - Good",
    description:
      "Minor flaws or signs of wear and tear to be noted in the description or photos",
  },
  {
    id: "05",
    title: "Used - Fair",
    description:
      "Obvious flaws or signs of wear ad tear, to be noted in the description or photos",
  },
];

export const sizes: SizeItemType[] = [
  {
    text: "One size",
    value: "One size",
  },
  {
    text: "4",
    value: "4",
  },
  {
    text: "6",
    value: "6",
  },
  {
    text: "8",
    value: "8",
  },
  {
    text: "10",
    value: "10",
  },
  {
    text: "12",
    value: "12",
  },
  {
    text: "16",
    value: "16",
  },
  {
    text: "XXS",
    value: "XXS",
  },
  {
    text: "XS",
    value: "XS",
  },
  {
    text: "S",
    value: "S",
  },
  {
    text: "M",
    value: "M",
  },
];

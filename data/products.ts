import { ProductType, Review } from "@/types/product";

export const products: ProductType[] = [
  {
    id: "01",
    title: "Classic Brown Bag",
    desc: "This classic brown bag women's single shoulder indentation women's bag single room square bag. The fabric is made of PU leather, which is durable.",
    price: 40,
    discount_price: 36,
    discount: true,
    discount_percentage: 10,
    productImage: require("@/assets/images/signeduser/products/bag.png"),
    images: [
      require("@/assets/images/signeduser/products/bag.png"),
      require("@/assets/images/signeduser/products/bag.png"),
      require("@/assets/images/signeduser/products/bag.png"),
    ],
    preposition: "£37.23 Incl. buyer p...",
    review: 4.5,
    category: "Accessories",
    colour: "Brown",
    brand: "Other",
  },
  {
    id: "02",
    title: "Thrift wears",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 3,
    discount_price: null,
    discount: false,
    discount_percentage: null,
    productImage: require("@/assets/images/signeduser/products/top.png"),
    images: [
      require("@/assets/images/signeduser/products/top.png"),
      require("@/assets/images/signeduser/products/top.png"),
      require("@/assets/images/signeduser/products/top.png"),
    ],
    preposition: "£4.00 Incl. buyer pr...",
    review: 4.5,
    category: "Tops",
    colour: "white",
    brand: "Other",
  },
  {
    id: "03",
    title: "Sleek Heels",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 12,
    discount_price: null,
    discount: false,
    discount_percentage: null,
    productImage: require("@/assets/images/signeduser/products/heel.png"),
    images: [
      require("@/assets/images/signeduser/products/heel.png"),
      require("@/assets/images/signeduser/products/heel.png"),
      require("@/assets/images/signeduser/products/heel.png"),
    ],
    preposition: "£13.30 Incl. buyer pr...",
    review: 4.5,
    category: "Footwear",
    colour: "red",
    brand: "Other",
  },
  {
    id: "04",
    title: "Makeup fixer",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 6.12,
    discount_price: 5.12,
    discount: true,
    discount_percentage: 10,
    productImage: require("@/assets/images/signeduser/products/make-up-fixer.png"),
    images: [
      require("@/assets/images/signeduser/products/make-up-fixer.png"),
      require("@/assets/images/signeduser/products/make-up-fixer.png"),
      require("@/assets/images/signeduser/products/make-up-fixer.png"),
    ],
    preposition: "£5.90 Incl. buyer pr...",
    review: 4.5,
    category: "Accessories",
    colour: "black",
    brand: "Other",
  },
  {
    id: "05",
    title: "Nude foundation",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 40,
    discount_price: 36,
    discount: true,
    discount_percentage: 25,
    productImage: require("@/assets/images/signeduser/products/nude-makeup.png"),
    images: [
      require("@/assets/images/signeduser/products/nude-makeup.png"),
      require("@/assets/images/signeduser/products/nude-makeup.png"),
      require("@/assets/images/signeduser/products/nude-makeup.png"),
    ],
    preposition: "£37.13 Incl. buyer pr...",
    review: 4.5,
    category: "Accessories",
    colour: "black",
    brand: "Other",
  },
  {
    id: "06",
    title: "Pink Foundation Makeup",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 12,
    discount_price: null,
    discount: false,
    discount_percentage: null,
    productImage: require("@/assets/images/signeduser/products/pink-makeup.png"),
    images: [
      require("@/assets/images/signeduser/products/pink-makeup.png"),
      require("@/assets/images/signeduser/products/pink-makeup.png"),
      require("@/assets/images/signeduser/products/pink-makeup.png"),
    ],
    preposition: "£13.11 Incl. buyer pr...",
    review: 4.5,
    category: "Accessories",
    colour: "black",
    brand: "Other",
  },
  {
    id: "07",
    title: "Grey Adidas Sneakers",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 12,
    discount_price: null,
    discount: false,
    discount_percentage: null,
    productImage: require("@/assets/images/signeduser/products/sneakers.png"),
    images: [
      require("@/assets/images/signeduser/products/sneakers.png"),
      require("@/assets/images/signeduser/products/sneakers.png"),
      require("@/assets/images/signeduser/products/sneakers.png"),
    ],
    preposition: "£13.30 Incl. buyer pr...",
    review: 4.5,
    category: "Footwear",
    colour: "grey",
    brand: "Other",
  },
  {
    id: "08",
    title: "Grey Adidas Sneakers",
    desc: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloremque, sapiente ratione? Reprehenderit.",
    price: 12,
    discount_price: null,
    discount: false,
    discount_percentage: null,
    productImage: require("@/assets/images/signeduser/products/addias-sneakers.png"),
    images: [
      require("@/assets/images/signeduser/products/addias-sneakers.png"),
      require("@/assets/images/signeduser/products/addias-sneakers.png"),
      require("@/assets/images/signeduser/products/addias-sneakers.png"),
    ],
    preposition: "£13.30 Incl. buyer pr...",
    review: 4.5,
    category: "Footwear",
    colour: "grey",
    brand: "Other",
  },
];

export const sampleReviews: Review[] = [
  {
    id: "1",
    rating: 4,
    comment: "Great product! Very satisfied with the quality.",
    userId: "user1",
    userName: "John Doe",
    createdAt: "2025-03-01T12:00:00Z",
  },
];

import { ImageSourcePropType } from "react-native";

export const onBoardingDataSlides: onBoardType[] = [
  {
    id: 1,
    backgroundImage: require("@/assets/images/onboarding/onboard1.png"),
    title: "Explore our secure market for women!",
    description:
      "Find your perfect match: Explore chic modest wear, accessories, beauty, and lifestyle essentials.",
  },
  {
    id: 2,
    backgroundImage: require("@/assets/images/onboarding/onboard2.png"),
    title: "Shop Your Values, Embrace Your Style",
    description:
      "Discover unique items from women you can proudly support and get your items from.",
  },
  {
    id: 3,
    backgroundImage: require("@/assets/images/onboarding/onboard3.png"),
    title: "Verified Connections, Authentic Voice",
    description:
      "Multi-layered security: Only verified women are welcomed, creating a trusted and supportive community.",
  },
];

export interface onBoardType {
  id: number;
  backgroundImage: ImageSourcePropType | undefined;
  title: string;
  description: string;
}

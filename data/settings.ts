import { ImageType } from "@/types/product";

export type RoutePath =
  | string
  | {
      pathname: string;
      params?: Record<string, string>;
    };

export type SettingsOption = {
  id: string;
  icon: ImageType;
  title: string;
  href?: Parameters<typeof import("expo-router").router.push>[0];
};

export const settingsOptions: SettingsOption[] = [
  {
    id: "01",
    icon: require("@/assets/icons/user.png"),
    title: "Edit Profile",
    href: "/profile/settings/edit-profile",
  },
  {
    id: "02",
    icon: require("@/assets/images/signeduser/billings/payment/wallet.png"),
    title: "Wallet",
    href: "/profile/settings/user-wallet",
  },
  {
    id: "03",
    icon: require("@/assets/icons/signeduser/soldItem.png"),
    title: "Sold items",
    href: "/profile/settings/sold-items",
  },
  {
    id: "04",
    icon: require("@/assets/icons/signeduser/setting.png"),
    title: "Account Settings",
    href: "/profile/settings/account-settings",
  },
  {
    id: "05",
    icon: require("@/assets/icons/signeduser/mode.png"),
    title: "Turn on night mode",
    href: undefined,
  },
  {
    id: "06",
    icon: require("@/assets/icons/signeduser/term.png"),
    title: "Terms and conditions",
    href: "/profile/settings/terms-conditons",
  },
  {
    id: "07",
    icon: require("@/assets/icons/signeduser/help.png"),
    title: "Help Center",
    href: "/profile/settings/help-center",
  },
];

export const accountSettingsOptions: SettingsOption[] = [
  {
    id: "01",
    icon: require("@/assets/icons/lock.png"),
    title: "Change Password",
    href: "/profile/settings/account-settings/update-password",
  },
  {
    id: "02",
    icon: require("@/assets/icons/trash.png"),
    title: "Delete Account",
    href: "/profile/settings/account-settings/delete-account",
  },
];

export type SubCategory = {
  id: string;
  title: string;
  description: string;
};

export interface Category {
  id: string;
  title: string;
  subCategories: SubCategory[];
}

export type HelpCenterCategory = {
  id: string;
  title: string;
  categories: Category[];
};

export const helpCenterData: HelpCenterCategory[] = [
  {
    id: "get-started-haima",
    title: "Get Started",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "selling",
    title: "Selling",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "buying",
    title: "Buying",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "shipping",
    title: "Shipping",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "wallet",
    title: "Wallet",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "trust-Safety",
    title: "Trust & Safety",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "not-logged-in",
    title: "Not logged in",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
  {
    id: "my-account-Settings",
    title: "My Account & Settings",
    categories: [
      {
        id: "01",
        title: "Selling step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "02",
        title: "What you can sell on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "03",
        title: "How shipping works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "04",
        title: "What is item bump",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "05",
        title: "HAIMA wallet - How it works",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "06",
        title: "Paying through HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "07",
        title: "Buying step by step",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "08",
        title: "Recommended content on HAIMA",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
      {
        id: "09",
        title: "Buyer protection",
        subCategories: [
          {
            id: "1",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "2",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "3",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
          {
            id: "4",
            title: "Lorem Ipsum Dolor",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque euismod, nisl at consequat efficitur, elit erat ullamcorper nisl, non accumsan tortor sapien eget metus.",
          },
        ],
      },
    ],
  },
];

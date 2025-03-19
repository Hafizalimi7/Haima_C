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

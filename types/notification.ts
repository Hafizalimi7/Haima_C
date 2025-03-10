import { ImageType } from "./product";

export type NotificationType =
  | "order"
  | "offer_accepted"
  | "new_offer"
  | "delivery";

export interface Notification {
  id: string;
  type: NotificationType;
  message: string;
  timestamp: Date;
  isRead: boolean; // Add this field
  // For order notifications
  productImage?: ImageType;
  deliveryWindow?: {
    start: Date;
    end: Date;
  };
  // For offer notifications
  shopName?: string;
  // For delivery notifications
  canReview?: boolean;
  hasReviewed?: boolean;
}

export interface GroupedNotifications {
  title: string;
  data: Notification[];
}

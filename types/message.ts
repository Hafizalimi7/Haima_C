export interface User {
  id: string;
  username: string;
  role?: "BUYER" | "SELLER";
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: Date;
  isRead: boolean;
}

export interface Conversation {
  id: string;
  participants: User[];
  lastMessage: Message;
  unreadCount: number;
}

export type MessageContentType = "text" | "offer" | "image_with_text";

export interface ImageWithText {
  imageUrl: string;
  text: string;
  link?: string;
}

export interface ProductOffer {
  productId: string;
  productName: string;
  productImage: string;
  originalPrice: number;
  offerPrice: number;
  sellerId: string;
  status: "OFFER_SENT" | "OFFER_UPDATED" | "OFFER_ACCEPTED" | "OFFER_REJECTED";
}

export interface OfferData {
  senderId: string;
  receiverId: string;
  senderName: string;
  receiverName: string;
  conversationId: string;
  content: MessageContent; 
}

export interface MessageContent {
  type: MessageContentType;
  text?: string; // For simple text messages
  offer?: ProductOffer; // For offer negotiations
  imageWithText?: ImageWithText; // For image + text + optional link messages
}

export interface ChatMessage {
  id: string;
  content: MessageContent;
  senderId: string;
  timestamp: Date;
}

export type ChatMessagesState = {
  [conversationId: string]: ChatMessage[];
};

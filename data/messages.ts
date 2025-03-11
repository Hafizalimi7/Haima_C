import { ChatMessage } from "@/types/message";
import { parseISO } from "date-fns";

export const currentUser = "gift56";

// Mock messages data
export const messages: ChatMessage[] = [
  {
    id: "1",
    content: {
      type: "text",
      text: "Hello I want to make an enquiry about a item 🤔",
    },
    senderId: currentUser,
    timestamp: parseISO("2025-03-10T21:30:00"),
  },
  {
    id: "2",
    content: {
      type: "image_with_text",
      imageWithText: {
        imageUrl: "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
        text: "Hello 👋, new products are available want to check it out",
        link: "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
      },
    },
    senderId: "other_user",
    timestamp: parseISO("2025-03-10T21:31:00"),
  },
  {
    id: "3",
    content: {
      type: "offer",
      offer: {
        productId: "123",
        productName: "Sleek Heels",
        productImage: "https://placehold.co/600x400/1a1a1a/FFFFFF.png",
        originalPrice: 14.0,
        offerPrice: 10.0,
        status: "OFFER_SENT",
      },
    },
    senderId: currentUser,
    timestamp: parseISO("2025-03-10T21:32:00"),
  },
];

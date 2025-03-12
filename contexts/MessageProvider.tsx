import React, { createContext, useContext, useState, useEffect } from "react";
import {
  ChatMessage,
  ChatMessagesState,
  Conversation,
  MessageContent,
  OfferData,
} from "@/types/message";
import { useAuth } from "./AuthContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Alert } from "react-native";

const STORAGE_KEYS = {
  CONVERSATIONS: "conversations",
  CHAT_MESSAGES: "chat_messages",
};

interface MessageContextType {
  conversations: Conversation[];
  setConversations: React.Dispatch<React.SetStateAction<Conversation[]>>;
  filteredConversations: Conversation[];
  selectedConversations: string[];
  isSelectionMode: boolean;
  isLoading: boolean;
  error: string | null;
  toggleConversationSelection: (conversationId: string) => void;
  selectAllConversations: () => void;
  deselectAllConversations: () => void;
  deleteSelectedConversations: () => Promise<void>;
  startSelectionMode: () => void;
  exitSelectionMode: () => void;
  searchContacts: (query: string) => void;

  // New chat message functionality
  chatMessages: { [conversationId: string]: ChatMessage[] };
  addMessage: (data: MessageContent | OfferData) => void;
  getMessagesForChat: (conversationId: string) => ChatMessage[];
}

const MessageContext = createContext<MessageContextType | undefined>(undefined);

export const useMessages = () => {
  const context = useContext(MessageContext);
  if (!context) {
    throw new Error("useMessages must be used within a MessageProvider");
  }
  return context;
};

export const MessageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const { currentUser } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversations, setSelectedConversations] = useState<string[]>(
    []
  );
  const [filteredConversations, setFilteredConversations] = useState<
    Conversation[]
  >([]);
  const [chatMessages, setChatMessages] = useState<ChatMessagesState>({});
  const [searchQuery, setSearchQuery] = useState("");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadUserData = async () => {
    try {
      if (!currentUser) return;

      console.log("Loading data for user:", currentUser.id);

      const [storedConversations, storedMessages] = await Promise.all([
        AsyncStorage.getItem(`${STORAGE_KEYS.CONVERSATIONS}_${currentUser.id}`),
        AsyncStorage.getItem(`${STORAGE_KEYS.CHAT_MESSAGES}_${currentUser.id}`),
      ]);

      console.log("Stored conversations:", storedConversations);
      console.log("Stored messages:", storedMessages);

      if (storedConversations) {
        const parsedConversations = JSON.parse(storedConversations).map(
          (conv: Conversation) => ({
            ...conv,
            lastMessage: {
              ...conv.lastMessage,
              timestamp: new Date(conv.lastMessage.timestamp),
            },
          })
        );
        setConversations(parsedConversations);
      }

      if (storedMessages) {
        const parsedMessages = JSON.parse(storedMessages);
        const convertedMessages: ChatMessagesState = {};

        Object.keys(parsedMessages).forEach((convId) => {
          convertedMessages[convId] = parsedMessages[convId].map(
            (msg: ChatMessage) => ({
              ...msg,
              timestamp: new Date(msg.timestamp),
            })
          );
        });

        console.log("Converted messages:", convertedMessages);
        setChatMessages(convertedMessages);
      }
    } catch (error) {
      console.error("Error loading user data:", error);
    }
  };

  useEffect(() => {
    if (currentUser) {
      loadUserData();
    }
  }, [currentUser]);

  // Save conversations to storage whenever they change
  useEffect(() => {
    if (currentUser) {
      AsyncStorage.setItem(
        `${STORAGE_KEYS.CONVERSATIONS}_${currentUser.id}`,
        JSON.stringify(conversations)
      );
    }
  }, [conversations, currentUser]);

  // Save messages to storage whenever they change
  useEffect(() => {
    if (currentUser) {
      AsyncStorage.setItem(
        `${STORAGE_KEYS.CHAT_MESSAGES}_${currentUser.id}`,
        JSON.stringify(chatMessages)
      );
    }
  }, [chatMessages, currentUser]);

  // Update ConversationItem to use currentUser
  const searchContacts = (query: string) => {
    if (!currentUser) return;

    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredConversations(conversations);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = conversations.filter((conversation) => {
      const otherParticipant = conversation.participants.find(
        (p) => p.id !== currentUser.id
      );
      return otherParticipant?.username.toLowerCase().includes(lowercaseQuery);
    });

    setFilteredConversations(filtered);
  };

  // Initialize filtered conversations
  useEffect(() => {
    setFilteredConversations(conversations);
  }, [conversations]);

  useEffect(() => {
    if (isSelectionMode && selectedConversations.length === 0) {
      setIsSelectionMode(false);
    }
  }, [selectedConversations, isSelectionMode]);

  const toggleConversationSelection = (conversationId: string) => {
    setSelectedConversations((prev) => {
      const newSelection = prev.includes(conversationId)
        ? prev.filter((id) => id !== conversationId)
        : [...prev, conversationId];
      return newSelection;
    });
  };

  const selectAllConversations = () => {
    setSelectedConversations(conversations.map((conv) => conv.id));
  };

  const deselectAllConversations = () => {
    setSelectedConversations([]);
  };

  const deleteSelectedConversations = async () => {
    if (!currentUser) return;

    try {
      // Get storage keys
      const conversationsKey = `${STORAGE_KEYS.CONVERSATIONS}_${currentUser.id}`;
      const messagesKey = `${STORAGE_KEYS.CHAT_MESSAGES}_${currentUser.id}`;

      // Get current stored data
      const [storedConversations, storedMessages] = await Promise.all([
        AsyncStorage.getItem(conversationsKey).then((data) =>
          JSON.parse(data || "[]")
        ),
        AsyncStorage.getItem(messagesKey).then((data) =>
          JSON.parse(data || "{}")
        ),
      ]);

      // Filter out selected conversations
      const updatedConversations = storedConversations.filter(
        (conv: Conversation) => !selectedConversations.includes(conv.id)
      );

      // Remove messages for deleted conversations
      const updatedMessages = { ...storedMessages };
      selectedConversations.forEach((convId) => {
        delete updatedMessages[convId];
      });

      // Update AsyncStorage
      await Promise.all([
        AsyncStorage.setItem(
          conversationsKey,
          JSON.stringify(updatedConversations)
        ),
        AsyncStorage.setItem(messagesKey, JSON.stringify(updatedMessages)),
      ]);

      // Also delete from other participants' storage
      await Promise.all(
        selectedConversations.map(async (convId) => {
          const conversation = conversations.find((c) => c.id === convId);
          if (!conversation) return;

          // Get other participant
          const otherParticipant = conversation.participants.find(
            (p) => p.id !== currentUser.id
          );
          if (!otherParticipant) return;

          // Get other participant's storage keys
          const otherConversationsKey = `${STORAGE_KEYS.CONVERSATIONS}_${otherParticipant.id}`;
          const otherMessagesKey = `${STORAGE_KEYS.CHAT_MESSAGES}_${otherParticipant.id}`;

          // Get their stored data
          const [otherStoredConversations, otherStoredMessages] =
            await Promise.all([
              AsyncStorage.getItem(otherConversationsKey).then((data) =>
                JSON.parse(data || "[]")
              ),
              AsyncStorage.getItem(otherMessagesKey).then((data) =>
                JSON.parse(data || "{}")
              ),
            ]);

          // Update their data
          const updatedOtherConversations = otherStoredConversations.filter(
            (conv: Conversation) => conv.id !== convId
          );
          const updatedOtherMessages = { ...otherStoredMessages };
          delete updatedOtherMessages[convId];

          // Save their updated data
          await Promise.all([
            AsyncStorage.setItem(
              otherConversationsKey,
              JSON.stringify(updatedOtherConversations)
            ),
            AsyncStorage.setItem(
              otherMessagesKey,
              JSON.stringify(updatedOtherMessages)
            ),
          ]);
        })
      );

      // Update state
      setConversations((prev) =>
        prev.filter((conv) => !selectedConversations.includes(conv.id))
      );
      setChatMessages((prev) => {
        const updated = { ...prev };
        selectedConversations.forEach((convId) => {
          delete updated[convId];
        });
        return updated;
      });

      // Reset selection state
      setSelectedConversations([]);
      setIsSelectionMode(false);

      // Optional: Show success message
      Alert.alert("Success", "Selected conversations have been deleted", [
        { text: "OK" },
      ]);
    } catch (err) {
      console.error("Error deleting conversations:", err);
      setError(
        err instanceof Error ? err.message : "Failed to delete conversations"
      );

      // Show error to user
      Alert.alert(
        "Error",
        "Failed to delete conversations. Please try again.",
        [{ text: "OK" }]
      );
    }
  };

  const startSelectionMode = () => {
    setIsSelectionMode(true);
  };

  const exitSelectionMode = () => {
    setIsSelectionMode(false);
    setSelectedConversations([]);
  };

  const getMessagesForChat = (conversationId: string) => {
    if (!conversationId || !chatMessages) return [];

    console.log("Getting messages for:", conversationId);
    console.log("Available messages:", chatMessages);

    const messages = chatMessages[conversationId] || [];
    console.log("Found messages:", messages);

    return messages;
  };

  const addMessage = async (data: MessageContent | OfferData) => {
    if (!currentUser) return;

    const timestamp = new Date("2025-03-12 05:35:08");

    // If it's an OfferData
    if (!("type" in data)) {
      const {
        senderId,
        receiverId,
        senderName,
        receiverName,
        conversationId,
        content,
      } = data;

      const newMessage: ChatMessage = {
        id: Date.now().toString(),
        content,
        senderId,
        timestamp,
      };

      // Update messages in memory
      setChatMessages((prev) => {
        const updated = {
          ...prev,
          [conversationId]: [...(prev[conversationId] || []), newMessage],
        };
        return updated;
      });

      // Create conversation message content based on user role and offer status
      const getOfferMessageContent = (
        content: MessageContent,
        isSender: boolean
      ) => {
        if (content.type === "offer") {
          if (content.offer?.status === "OFFER_UPDATED") {
            return isSender ? "Updated the offer" : "Counter offer received";
          } else if (content.offer?.status === "OFFER_SENT") {
            return isSender ? "Sent an offer" : "Offer received";
          } else if (content.offer?.status === "OFFER_ACCEPTED") {
            return "Offer accepted";
          } else if (content.offer?.status === "OFFER_REJECTED") {
            return "Offer rejected";
          }
        }
        return content.text || "";
      };

      // Create conversation object
      const newConversation: Conversation = {
        id: conversationId,
        participants: [
          { id: senderId, username: senderName },
          { id: receiverId, username: receiverName },
        ],
        lastMessage: {
          id: newMessage.id,
          senderId,
          receiverId,
          content: getOfferMessageContent(content, currentUser.id === senderId),
          timestamp,
          isRead: false,
        },
        unreadCount: currentUser.id === receiverId ? 1 : 0,
      };

      // Update conversations in memory
      setConversations((prev) => {
        const exists = prev.find((c) => c.id === conversationId);
        if (!exists) {
          return [newConversation, ...prev];
        }
        return prev.map((c) => (c.id === conversationId ? newConversation : c));
      });

      try {
        // Keys for storage
        const senderMsgKey = `${STORAGE_KEYS.CHAT_MESSAGES}_${senderId}`;
        const receiverMsgKey = `${STORAGE_KEYS.CHAT_MESSAGES}_${receiverId}`;
        const senderConvKey = `${STORAGE_KEYS.CONVERSATIONS}_${senderId}`;
        const receiverConvKey = `${STORAGE_KEYS.CONVERSATIONS}_${receiverId}`;

        // Store message for sender
        const senderMessages = JSON.parse(
          (await AsyncStorage.getItem(senderMsgKey)) || "{}"
        );
        senderMessages[conversationId] = [
          ...(senderMessages[conversationId] || []),
          newMessage,
        ];
        await AsyncStorage.setItem(
          senderMsgKey,
          JSON.stringify(senderMessages)
        );

        // Store message for receiver
        const receiverMessages = JSON.parse(
          (await AsyncStorage.getItem(receiverMsgKey)) || "{}"
        );
        receiverMessages[conversationId] = [
          ...(receiverMessages[conversationId] || []),
          newMessage,
        ];
        await AsyncStorage.setItem(
          receiverMsgKey,
          JSON.stringify(receiverMessages)
        );

        // Store conversation for sender
        const senderConvs = JSON.parse(
          (await AsyncStorage.getItem(senderConvKey)) || "[]"
        );
        const updatedSenderConvs = updateConversationList(
          senderConvs,
          newConversation
        );
        await AsyncStorage.setItem(
          senderConvKey,
          JSON.stringify(updatedSenderConvs)
        );

        // Store conversation for receiver
        const receiverConvs = JSON.parse(
          (await AsyncStorage.getItem(receiverConvKey)) || "[]"
        );
        const receiverConversation = {
          ...newConversation,
          unreadCount: 1,
        };
        const updatedReceiverConvs = updateConversationList(
          receiverConvs,
          receiverConversation
        );
        await AsyncStorage.setItem(
          receiverConvKey,
          JSON.stringify(updatedReceiverConvs)
        );

        console.log("Successfully stored message and conversations");
      } catch (error) {
        console.error("Error storing message:", error);
      }
    }
  };

  const updateConversationList = (
    convs: Conversation[],
    newConv: Conversation
  ) => {
    const index = convs.findIndex((c) => c.id === newConv.id);
    if (index > -1) {
      convs[index] = newConv;
      return convs;
    }
    return [newConv, ...convs];
  };

  return (
    <MessageContext.Provider
      value={{
        conversations,
        setConversations,
        filteredConversations,
        selectedConversations,
        isSelectionMode,
        isLoading,
        error,
        toggleConversationSelection,
        selectAllConversations,
        deselectAllConversations,
        deleteSelectedConversations,
        startSelectionMode,
        exitSelectionMode,
        searchContacts,

        chatMessages,
        addMessage,
        getMessagesForChat,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

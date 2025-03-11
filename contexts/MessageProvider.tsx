import React, { createContext, useContext, useState, useEffect } from "react";
import { Conversation, Message } from "@/types/message";

interface MessageContextType {
  conversations: Conversation[];
  filteredConversations: Conversation[];
  selectedConversations: string[];
  isSelectionMode: boolean;
  isLoading: boolean;
  error: string | null;
  fetchConversations: () => Promise<void>;
  toggleConversationSelection: (conversationId: string) => void;
  selectAllConversations: () => void;
  deselectAllConversations: () => void;
  deleteSelectedConversations: () => Promise<void>;
  startSelectionMode: () => void;
  exitSelectionMode: () => void;
  searchContacts: (query: string) => void;
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
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selectedConversations, setSelectedConversations] = useState<string[]>(
    []
  );
  const [filteredConversations, setFilteredConversations] = useState<
    Conversation[]
  >([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isSelectionMode, setIsSelectionMode] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const searchContacts = (query: string) => {
    setSearchQuery(query);
    if (!query.trim()) {
      setFilteredConversations(conversations);
      return;
    }

    const lowercaseQuery = query.toLowerCase();
    const filtered = conversations.filter((conversation) => {
      const otherParticipant = conversation.participants.find(
        (p) => p.username !== "gift56"
      );
      return otherParticipant?.username.toLowerCase().includes(lowercaseQuery);
    });

    setFilteredConversations(filtered);
  };

  // Initialize filtered conversations
  useEffect(() => {
    setFilteredConversations(conversations);
  }, [conversations]);

  const fetchConversations = async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Replace with your actual API call
      const mockConversations: Conversation[] = [
        {
          id: "1",
          participants: [
            { id: "1", username: "Thrift Shop" },
            { id: "2", username: "gift56" },
          ],
          lastMessage: {
            id: "1",
            senderId: "1",
            receiverId: "2",
            content: "Hey watsup",
            timestamp: new Date(),
            isRead: false,
          },
          unreadCount: 3,
        },
        {
          id: "2",
          participants: [
            { id: "1", username: "Women Stores" },
            { id: "2", username: "gift56" },
          ],
          lastMessage: {
            id: "1",
            senderId: "1",
            receiverId: "2",
            content: "Hey watsup",
            timestamp: new Date(),
            isRead: false,
          },
          unreadCount: 0,
        },
        {
          id: "3",
          participants: [
            { id: "1", username: "Cynthia Daniels" },
            { id: "2", username: "gift56" },
          ],
          lastMessage: {
            id: "1",
            senderId: "1",
            receiverId: "2",
            content: "Hey watsup",
            timestamp: new Date(),
            isRead: false,
          },
          unreadCount: 0,
        },
      ];
      setConversations(mockConversations);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to fetch conversations"
      );
    } finally {
      setIsLoading(false);
    }
  };

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
    try {
      // Replace with your actual API call
      await Promise.all(
        selectedConversations.map(async (id) => {
          // Delete conversation API call would go here
        })
      );

      setConversations((prev) =>
        prev.filter((conv) => !selectedConversations.includes(conv.id))
      );
      setSelectedConversations([]);
      setIsSelectionMode(false);
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "Failed to delete conversations"
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

  useEffect(() => {
    fetchConversations();
  }, []);

  return (
    <MessageContext.Provider
      value={{
        conversations,
        filteredConversations,
        selectedConversations,
        isSelectionMode,
        isLoading,
        error,
        fetchConversations,
        toggleConversationSelection,
        selectAllConversations,
        deselectAllConversations,
        deleteSelectedConversations,
        startSelectionMode,
        exitSelectionMode,
        searchContacts,
      }}
    >
      {children}
    </MessageContext.Provider>
  );
};

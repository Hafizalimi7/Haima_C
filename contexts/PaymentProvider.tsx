import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { PaymentCard, PaymentContextType } from "@/types/billing";

const CARDS_STORAGE_KEY = "@payment_cards";
const SELECTED_CARD_KEY = "@selected_card";

const PaymentContext = createContext<PaymentContextType | undefined>(undefined);

export const PaymentProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [cards, setCards] = useState<PaymentCard[]>([]);
  const [selectedCardId, setSelectedCardId] = useState<string>();
  const [cardToEdit, setCardToEdit] = useState<PaymentCard | null>(null);

  // Function to mask card number
  const maskCardNumber = (cardNumber: string): string => {
    // Remove any spaces and non-numeric characters
    const cleanNumber = cardNumber.replace(/\D/g, "");

    if (cleanNumber.length === 0) return "";

    // Get the last 4 digits
    const lastFourDigits = cleanNumber.slice(-4);

    // Create the mask
    const maskedPart = "*".repeat(cleanNumber.length - 4);

    return maskedPart + lastFourDigits;
  };

  useEffect(() => {
    loadSavedCards();
  }, []);

  const loadSavedCards = async () => {
    try {
      const [cardsStr, selectedIdStr] = await Promise.all([
        AsyncStorage.getItem(CARDS_STORAGE_KEY),
        AsyncStorage.getItem(SELECTED_CARD_KEY),
      ]);

      if (cardsStr) {
        const savedCards = JSON.parse(cardsStr);
        // Add masked numbers to saved cards
        const cardsWithMaskedNumbers = savedCards.map((card: PaymentCard) => ({
          ...card,
          maskedCardNumber:
            card.maskedCardNumber || maskCardNumber(card.cardNumber),
        }));
        setCards(cardsWithMaskedNumbers);
      }
      if (selectedIdStr) setSelectedCardId(selectedIdStr);
    } catch (error) {
      console.error("Error loading payment cards:", error);
    }
  };

  const addCard = async (card: PaymentCard) => {
    // Create a new card object with both full and masked numbers
    const newCard = {
      ...card,
      id: card.id || Date.now().toString(),
      maskedCardNumber: maskCardNumber(card.cardNumber),
      // Store the original card number (in a real app, this should be encrypted)
      cardNumber: maskCardNumber(card.cardNumber.replace(/\s/g, "")),
      cvv: card.cvv, // In a real app, don't store CVV
    };

    const updatedCards = (prev: PaymentCard[]) => {
      if (card.id) {
        return prev.map((c) => (c.id === card.id ? newCard : c));
      }

      if (prev.length === 0 || card.setDefault) {
        return prev
          .map((c) => ({ ...c, setDefault: false }))
          .concat({ ...newCard, setDefault: true });
      }
      return [...prev, newCard];
    };

    const newCards = updatedCards(cards);
    setCards(newCards);
    setSelectedCardId(newCard.id);
    setCardToEdit(null);

    try {
      // Only store the masked version in AsyncStorage for security
      const cardsForStorage = newCards.map((card) => ({
        ...card,
        cardNumber: card.maskedCardNumber, // Only store masked number
        cvv: "***", // Don't store actual CVV
      }));
      await AsyncStorage.setItem(
        CARDS_STORAGE_KEY,
        JSON.stringify(cardsForStorage)
      );
      await AsyncStorage.setItem(SELECTED_CARD_KEY, newCard.id);
    } catch (error) {
      console.error("Error saving payment card:", error);
    }
  };

  const removeCard = async (id: string) => {
    const newCards = cards.filter((card) => card.id !== id);
    setCards(newCards);

    if (selectedCardId === id) {
      setSelectedCardId(undefined);
      await AsyncStorage.removeItem(SELECTED_CARD_KEY);
    }

    try {
      await AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(newCards));
    } catch (error) {
      console.error("Error removing payment card:", error);
    }
  };

  const setDefaultCard = async (id: string) => {
    const newCards = cards.map((card) => ({
      ...card,
      setDefault: card.id === id,
    }));

    setCards(newCards);
    setSelectedCardId(id);

    try {
      await AsyncStorage.setItem(CARDS_STORAGE_KEY, JSON.stringify(newCards));
      await AsyncStorage.setItem(SELECTED_CARD_KEY, id);
    } catch (error) {
      console.error("Error setting default card:", error);
    }
  };

  const editCard = (card: PaymentCard) => {
    setCardToEdit(card);
  };

  return (
    <PaymentContext.Provider
      value={{
        cards,
        selectedCardId,
        cardToEdit,
        addCard,
        removeCard,
        setDefaultCard,
        editCard,
        setSelectedCardId,
        maskCardNumber,
      }}
    >
      {children}
    </PaymentContext.Provider>
  );
};

export const usePayment = () => {
  const context = useContext(PaymentContext);
  if (context === undefined) {
    throw new Error("usePayment must be used within a PaymentProvider");
  }
  return context;
};

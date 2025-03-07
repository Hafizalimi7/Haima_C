export interface ShippingFormValue {
  fullname: string;
  phoneNumber: string;
  country: string;
  address1: string;
  address2?: string;
  postalCode: string;
  city: string;
  setDefault: boolean;
  id?: string;
}

export type ShippingMethod = "HOME_DELIVERY" | "PICKUP_LOCATION";

export interface ShippingContextType {
  selectedMethod: ShippingMethod;
  shippingAddresses: ShippingFormValue[];
  selectedAddressId?: string;
  addressToEdit: ShippingFormValue | null;
  setSelectedMethod: (method: ShippingMethod) => void;
  addShippingAddress: (address: ShippingFormValue) => void;
  removeShippingAddress: (id: string) => void;
  setSelectedAddressId: (id: string) => void;
  setDefaultAddress: (id: string) => void;
  editAddress: (address: ShippingFormValue) => void;
}

export interface PaymentCard {
  id?: string;
  cardHolderName: string;
  cardNumber: string;
  maskedCardNumber?: string;
  expiryDate: string;
  cvv: string;
  setDefault: boolean;
}

export interface PaymentContextType {
  cards: PaymentCard[];
  selectedCardId?: string;
  cardToEdit: PaymentCard | null;
  addCard: (card: PaymentCard) => Promise<void>;
  removeCard: (id: string) => Promise<void>;
  setDefaultCard: (id: string) => Promise<void>;
  editCard: (card: PaymentCard) => void;
  setSelectedCardId: (id: string) => void;
  maskCardNumber: (cardNumber: string) => string;
}

import React, { createContext, useContext, useState } from "react";
import {
  ShippingContextType,
  ShippingFormValue,
  ShippingMethod,
} from "@/types/billing";

const ShippingContext = createContext<ShippingContextType | undefined>(
  undefined
);

export const ShippingProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [selectedMethod, setSelectedMethod] =
    useState<ShippingMethod>("HOME_DELIVERY");
  const [shippingAddresses, setShippingAddresses] = useState<
    ShippingFormValue[]
  >([]);
  const [selectedAddressId, setSelectedAddressId] = useState<string>();
  const [addressToEdit, setAddressToEdit] = useState<ShippingFormValue | null>(
    null
  );

  const addShippingAddress = (address: ShippingFormValue) => {
    const newAddress = {
      ...address,
      id: address.id || Date.now().toString(),
    };

    setShippingAddresses((prev) => {
      // If editing existing address
      if (address.id) {
        return prev.map((addr) => (addr.id === address.id ? newAddress : addr));
      }

      // If this is the first address or setDefault is true, make it default
      if (prev.length === 0 || address.setDefault) {
        return prev
          .map((addr) => ({ ...addr, setDefault: false }))
          .concat({ ...newAddress, setDefault: true });
      }
      return [...prev, newAddress];
    });
    setSelectedAddressId(newAddress.id);
    setAddressToEdit(null);
  };

  const editAddress = (address: ShippingFormValue) => {
    setAddressToEdit(address);
  };

  const removeShippingAddress = (id: string) => {
    setShippingAddresses((prev) => prev.filter((addr) => addr.id !== id));
    if (selectedAddressId === id) {
      setSelectedAddressId(undefined);
    }
  };

  const setDefaultAddress = (id: string) => {
    setShippingAddresses((prev) =>
      prev.map((addr) => ({
        ...addr,
        setDefault: addr.id === id,
      }))
    );
    setSelectedAddressId(id);
  };

  return (
    <ShippingContext.Provider
      value={{
        selectedMethod,
        shippingAddresses,
        selectedAddressId,
        addressToEdit,
        setSelectedMethod,
        addShippingAddress,
        removeShippingAddress,
        setSelectedAddressId,
        setDefaultAddress,
        editAddress,
      }}
    >
      {children}
    </ShippingContext.Provider>
  );
};

export const useShipping = () => {
  const context = useContext(ShippingContext);
  if (context === undefined) {
    throw new Error("useShipping must be used within a ShippingProvider");
  }
  return context;
};

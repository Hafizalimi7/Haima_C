import React, { createContext, useContext, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  ShippingContextType,
  ShippingFormValue,
  ShippingMethod,
} from "@/types/billing";

const SHIPPING_STORAGE_KEY = "@shipping_addresses";
const SELECTED_METHOD_KEY = "@selected_method";
const SELECTED_METHOD_DELIEVRY_KEY = "@selected_key";
const SELECTED_ADDRESS_KEY = "@selected_address";

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
  const [selectedDelievryAddressId, setSelectedDelievryAddressId] =
    useState<string>();
  const [addressToEdit, setAddressToEdit] = useState<ShippingFormValue | null>(
    null
  );

  // Load saved data on mount
  useEffect(() => {
    loadSavedData();
  }, []);

  const loadSavedData = async () => {
    try {
      const [addressesStr, methodStr, selectedIdStr] = await Promise.all([
        AsyncStorage.getItem(SHIPPING_STORAGE_KEY),
        AsyncStorage.getItem(SELECTED_METHOD_KEY),
        AsyncStorage.getItem(SELECTED_ADDRESS_KEY),
      ]);

      if (addressesStr) setShippingAddresses(JSON.parse(addressesStr));
      if (methodStr) setSelectedMethod(methodStr as ShippingMethod);
      if (selectedIdStr) setSelectedAddressId(selectedIdStr);
    } catch (error) {
      console.error("Error loading shipping data:", error);
    }
  };

  const addShippingAddress = async (address: ShippingFormValue) => {
    const newAddress = {
      ...address,
      id: address.id || Date.now().toString(),
    };

    const updatedAddresses = (prev: ShippingFormValue[]) => {
      if (address.id) {
        return prev.map((addr) => (addr.id === address.id ? newAddress : addr));
      }

      if (prev.length === 0 || address.setDefault) {
        return prev
          .map((addr) => ({ ...addr, setDefault: false }))
          .concat({ ...newAddress, setDefault: true });
      }
      return [...prev, newAddress];
    };

    const newAddresses = updatedAddresses(shippingAddresses);
    setShippingAddresses(newAddresses);
    setSelectedAddressId(newAddress.id);
    setAddressToEdit(null);

    try {
      await AsyncStorage.setItem(
        SHIPPING_STORAGE_KEY,
        JSON.stringify(newAddresses)
      );
      await AsyncStorage.setItem(SELECTED_ADDRESS_KEY, newAddress.id);
    } catch (error) {
      console.error("Error saving shipping address:", error);
    }
  };

  const editAddress = (address: ShippingFormValue) => {
    setAddressToEdit(address);
  };

  const handleHomeDeliverySelect = async (id: string) => {
    setSelectedDelievryAddressId(id);
    try {
      await AsyncStorage.setItem(SELECTED_METHOD_DELIEVRY_KEY, id);
    } catch (error) {
      console.error("Error saving selected method:", error);
    }
  };

  const resetAddressState = () => {
    setAddressToEdit(null);
  };

  const removeShippingAddress = async (id: string) => {
    const newAddresses = shippingAddresses.filter((addr) => addr.id !== id);
    setShippingAddresses(newAddresses);

    if (selectedAddressId === id) {
      setSelectedAddressId(undefined);
      await AsyncStorage.removeItem(SELECTED_ADDRESS_KEY);
    }

    try {
      await AsyncStorage.setItem(
        SHIPPING_STORAGE_KEY,
        JSON.stringify(newAddresses)
      );
    } catch (error) {
      console.error("Error removing shipping address:", error);
    }
  };

  const setDefaultAddress = async (id: string) => {
    const newAddresses = shippingAddresses.map((addr) => ({
      ...addr,
      setDefault: addr.id === id,
    }));

    setShippingAddresses(newAddresses);
    setSelectedAddressId(id);

    try {
      await AsyncStorage.setItem(
        SHIPPING_STORAGE_KEY,
        JSON.stringify(newAddresses)
      );
      await AsyncStorage.setItem(SELECTED_ADDRESS_KEY, id);
    } catch (error) {
      console.error("Error setting default address:", error);
    }
  };

  const updateSelectedMethod = async (method: ShippingMethod) => {
    setSelectedMethod(method);
    try {
      await AsyncStorage.setItem(SELECTED_METHOD_KEY, method);
    } catch (error) {
      console.error("Error saving selected method:", error);
    }
  };

  return (
    <ShippingContext.Provider
      value={{
        selectedMethod,
        shippingAddresses,
        selectedAddressId,
        addressToEdit,
        setSelectedMethod: updateSelectedMethod,
        addShippingAddress,
        removeShippingAddress,
        setSelectedAddressId,
        setDefaultAddress,
        editAddress,
        resetAddressState,
        selectedDelievryAddressId,
        handleHomeDeliverySelect
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

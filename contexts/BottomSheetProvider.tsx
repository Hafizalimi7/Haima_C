import React, { createContext, useCallback, useContext, useRef } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";

interface BottomSheetContextType {
  openAuthSheet: () => void;
  closeAuthSheet: () => void;
  bottomSheetRef: React.RefObject<BottomSheetModal>;
}

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const openAuthSheet = useCallback(() => {
    bottomSheetRef.current?.present();
  }, []);

  const closeAuthSheet = useCallback(() => {
    bottomSheetRef.current?.dismiss();
  }, []);

  return (
    <BottomSheetContext.Provider
      value={{ openAuthSheet, closeAuthSheet, bottomSheetRef }}
    >
      {children}
    </BottomSheetContext.Provider>
  );
};

export const useBottomSheet = () => {
  const context = useContext(BottomSheetContext);
  if (!context) {
    throw new Error("useBottomSheet must be used within a BottomSheetProvider");
  }
  return context;
};

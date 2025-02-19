import React, { createContext, useCallback, useContext, useRef, useEffect } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { usePathname } from "expo-router";

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
  const pathname = usePathname();

  // Automatically close bottom sheet when navigating to auth routes
  useEffect(() => {
    if (pathname.includes("/auth/")) {
      bottomSheetRef.current?.dismiss();
    }
  }, [pathname]);

  const openAuthSheet = useCallback(() => {
    if (!pathname.includes("/auth/")) {
      bottomSheetRef.current?.present();
    }
  }, [pathname]);

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
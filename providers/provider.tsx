import { AuthProvider } from "@/contexts/AuthContext";
import { BottomSheetProvider } from "@/contexts/BottomSheetProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <BottomSheetModalProvider>
      <BottomSheetProvider>
        <AuthProvider>{children}</AuthProvider>
      </BottomSheetProvider>
    </BottomSheetModalProvider>
  );
}

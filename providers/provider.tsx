import { AuthProvider } from "@/contexts/AuthContext";
import { BottomSheetProvider } from "@/contexts/BottomSheetProvider";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import {
  configureReanimatedLogger,
  ReanimatedLogLevel,
} from "react-native-reanimated";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  configureReanimatedLogger({
    level: ReanimatedLogLevel.warn,
    strict: false, // Reanimated runs in strict mode by default
  });
  
  return (
    <BottomSheetModalProvider>
      <BottomSheetProvider>
        <AuthProvider>{children}</AuthProvider>
      </BottomSheetProvider>
    </BottomSheetModalProvider>
  );
}

import React from "react";
import { Text, View } from "react-native";
import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useBottomSheet } from "@/contexts/BottomSheetProvider";
import { CustomButton } from "@/components/ui";
import { useRouter } from "expo-router";
import { SocialAuthOptions } from "@/components/auth";
import { useAuth } from "@/contexts/AuthContext";
import { usePathname } from "expo-router";
import NotAuthenticatedUser from "../NotAuthenticatedUser";

interface AuthOptionSheetProps {}

const AuthOptionSheet: React.FC<AuthOptionSheetProps> = () => {
  const { bottomSheetRef, closeAuthSheet } = useBottomSheet();
  const { isAuthenticated } = useAuth();
  const { push } = useRouter();
  const pathname = usePathname();
  
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <BottomSheetModal ref={bottomSheetRef} snapPoints={["60%"]}>
        <BottomSheetView className="flex-1 p-5">
          {pathname !== "/" && !isAuthenticated && <NotAuthenticatedUser />}
          <View className="w-full pt-4 pb-2">
            <CustomButton
              handlePress={() => {
                closeAuthSheet();

                setTimeout(() => {
                  push("/auth/sign-up");
                }, 100);
              }}
              className="bg-primary w-full"
            >
              <Text className="text-base font-semibold text-white">
                Sign up
              </Text>
            </CustomButton>
          </View>
          {pathname === "/" && !isAuthenticated && (
            <CustomButton
              handlePress={() => {
                closeAuthSheet();

                setTimeout(() => {
                  push("/home");
                }, 100);
              }}
              className="bg-white border border-primary w-full"
            >
              <Text className="text-base font-semibold text-primary">
                Continue as Guest
              </Text>
            </CustomButton>
          )}

          <SocialAuthOptions />
        </BottomSheetView>
      </BottomSheetModal>
    </View>
  );
};

export default AuthOptionSheet;

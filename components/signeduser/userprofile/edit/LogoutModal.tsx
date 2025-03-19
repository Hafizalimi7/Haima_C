import { CustomButton, ModalPopUp } from "@/components/ui";
import signeduser from "@/constants/icons/signeduser";
import { useAuth } from "@/contexts/AuthContext";
import { useRouter } from "expo-router";
import React from "react";
import { View, Text, Image } from "react-native";

interface LogoutModalProps {
  show: boolean;
  onClose: () => void;
}

const LogoutModal: React.FC<LogoutModalProps> = ({ show, onClose }) => {
  const { logout } = useAuth();
  const { replace } = useRouter();

  const handleLogout = () => {
    logout();
    replace("/auth/sign-in");
  };

  return (
    <ModalPopUp visible={show} className="">
      <View className="items-center flex-col justify-center gap-y-6 py-12">
        <View className="w-16 h-16 bg-primary/20 rounded-full flex-row items-center justify-center">
          <Image
            source={signeduser.logoutIcon}
            resizeMode="contain"
            className="w-9 h-9"
          />
        </View>
        <Text className="text-2xl font-semibold text-primary text-center">
          Log out of HAIMA
        </Text>
        <Text className="text-base font-normal text-grey-800 text-center max-w-[290px]">
          Are you sure you want log out HAIMA?
        </Text>
        <View className="w-full px-5 flex-row items-center justify-between gap-x-3">
          <CustomButton
            handlePress={onClose}
            className="bg-white border-grey border w-2/4"
          >
            <Text className="text-base text-grey-800 font-semibold">
              Cancel
            </Text>
          </CustomButton>
          <CustomButton handlePress={handleLogout} className="bg-primary w-2/4">
            <Text className="text-base text-white font-semibold">Delete</Text>
          </CustomButton>
        </View>
      </View>
    </ModalPopUp>
  );
};

export default LogoutModal;

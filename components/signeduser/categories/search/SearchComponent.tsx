import React from "react";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, Image } from "react-native";
import signeduser from "@/constants/icons/signeduser";

const SearchComponent: React.FC = () => {
  const { push } = useRouter();

  return (
    <TouchableOpacity
      onPress={() => push("/search")}
      className="w-full border border-grey rounded-full min-h-12 px-5 flex flex-row items-center justify-start gap-x-3 my-5"
    >
      <Image
        source={signeduser.searchIcon}
        resizeMode="contain"
        className="w-5 h-5"
      />
      <Text className="text-sm font-normal text-grey-800">
        Search items, vendors etc.
      </Text>
    </TouchableOpacity>
  );
};

export default SearchComponent;

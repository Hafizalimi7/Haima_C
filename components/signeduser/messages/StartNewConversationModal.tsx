import React, { useEffect, useRef, useState } from "react";
import { ModalPopUp } from "@/components/ui";
import { icons } from "@/constants";
import signeduser from "@/constants/icons/signeduser";
import { useMessages } from "@/contexts/MessageProvider";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { useRouter } from "expo-router";
import { EmptyUI } from "@/components/ui/emptyUi";
import { getInitials } from "@/helpers/string";

interface StartNewConversationModalProps {
  show: boolean;
  onClose: () => void;
}

const StartNewConversationModal: React.FC<StartNewConversationModalProps> = ({
  show,
  onClose,
}) => {
  const { push } = useRouter();
  const { filteredConversations, isLoading, error, searchContacts } =
    useMessages();
  const [isFocused, setIsFocused] = useState(false);
  const [searchText, setSearchText] = useState("");
  const searchTimeout = useRef<NodeJS.Timeout>();

  const handleSearch = (text: string) => {
    setSearchText(text);

    // Clear the previous timeout
    if (searchTimeout.current) {
      clearTimeout(searchTimeout.current);
    }

    // Set a new timeout
    searchTimeout.current = setTimeout(() => {
      searchContacts(text);
    }, 300);
  };

  useEffect(() => {
    return () => {
      if (searchTimeout.current) {
        clearTimeout(searchTimeout.current);
      }
    };
  }, []);

  return (
    <ModalPopUp visible={show} className="!px-0 !py-0">
      <View className="w-full flex-row items-center justify-between px-3 py-3 border-b border-grey">
        <Text className="text-base font-medium text-primary">New Message</Text>
        <TouchableOpacity onPress={onClose}>
          <Image
            source={icons.closeIcon}
            resizeMode="contain"
            className="w-6 h-6"
          />
        </TouchableOpacity>
      </View>
      <View
        className={`flex-1 border rounded-full min-h-12 px-5 flex-row items-center gap-x-3 my-5 overflow-hidden ${
          isFocused ? "border-primary" : "border-grey"
        }`}
      >
        <Image
          source={signeduser.searchIcon}
          resizeMode="contain"
          className="w-5 h-5"
        />
        <TextInput
          className="bg-white pr-12 h-full text-sm font-normal w-[80%]"
          placeholder="Search contact"
          placeholderTextColor="#98A2B3"
          returnKeyType="search"
          value={searchText}
          onChangeText={handleSearch}
          autoCapitalize="none"
          autoCorrect={false}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
        />
      </View>
      <FlatList
        data={filteredConversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => {
          const otherParticipant = item.participants.find(
            (p) => p.username !== "gift56"
          );
          const initials = getInitials(otherParticipant?.username || "");

          return (
            <TouchableOpacity
              onPress={() => {
                if (!otherParticipant) return;
                push({
                  pathname: "/messages/[id]",
                  params: {
                    id: item.id,
                    participantUsername: otherParticipant.username,
                  },
                });
              }}
            >
              <View className="flex-row justify-start items-center gap-x-4 px-4 py-3">
                <View className="w-12 h-12 rounded-full bg-gray-200 justify-center items-center mr-3">
                  <Text className="text-lg font-medium">{initials}</Text>
                </View>
                <Text className="text-base font-medium text-primary">
                  {otherParticipant?.username}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={
          <React.Fragment>
            {isLoading && (
              <ActivityIndicator
                size="large"
                color="#0000ff"
                className="my-3"
              />
            )}

            {error && (
              <Text className="text-red-500 px-5 my-3">Error: {error}</Text>
            )}
          </React.Fragment>
        }
        ListEmptyComponent={
          !isLoading && !error ? (
            <EmptyUI
              iconSource={signeduser.messageIcon}
              content="You don’t have any message"
            />
          ) : null
        }
      />
    </ModalPopUp>
  );
};

export default StartNewConversationModal;

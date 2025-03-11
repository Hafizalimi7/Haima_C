import React from "react";
import { MessageHeading } from "@/components/signeduser/messages";
import { SafeAreaView } from "react-native-safe-area-context";
import { useMessages } from "@/contexts/MessageProvider";
import { FlatList, Text, View } from "react-native";
import { ConversationItem } from "@/components/signeduser/messages/ConversationItem";
import { ActivityIndicator } from "react-native";
import { EmptyUI } from "@/components/ui/emptyUi";
import signeduser from "@/constants/icons/signeduser";

export default function MessagesScreen() {
  const { conversations, isLoading, error } = useMessages();

  return (
    <SafeAreaView className="flex-1 bg-white">
      <MessageHeading />
      <FlatList
        data={conversations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <ConversationItem conversation={item} />}
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
    </SafeAreaView>
  );
}

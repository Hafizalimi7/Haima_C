import React, { useRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  KeyboardAvoidingView,
  Platform,
  Modal,
} from "react-native";
import { icons } from "@/constants";
import { MessageContent } from "@/types/message";
import signeduser from "@/constants/icons/signeduser";
import { FlatList } from "react-native";
import { EMOJIS } from "@/data/emojis";

interface MessageInputProps {
  onSendMessage: (content: MessageContent) => void;
  onImagePick: () => void;
  selectedImage: string | null;
  removeSelectedImage: () => void;
}

const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  onImagePick,
  selectedImage,
  removeSelectedImage,
}) => {
  const [message, setMessage] = useState("");
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);
  const [cursorPosition, setCursorPosition] = useState(0);
  const inputRef = useRef<TextInput>(null);

  const onEmojiSelect = (emoji: string) => {
    const newMessage =
      message.slice(0, cursorPosition) + emoji + message.slice(cursorPosition);

    setMessage(newMessage);

    const newPosition = cursorPosition + emoji.length;
    setCursorPosition(newPosition);

    setTimeout(() => {
      inputRef.current?.focus();
      inputRef.current?.setNativeProps({
        selection: { start: newPosition, end: newPosition },
      });
    }, 100);
  };

  const handleSend = () => {
    if (!message.trim()) return;

    if (selectedImage) {
      onSendMessage({
        type: "image_with_text",
        imageWithText: {
          imageUrl: selectedImage,
          text: message.trim(),
          link: "",
        },
      });
    } else {
      onSendMessage({
        type: "text",
        text: message.trim(),
      });
    }

    setMessage("");
    removeSelectedImage();
    setShowEmojiPicker(false);
  };

  const renderEmojiItem = ({ item }: { item: string }) => (
    <TouchableOpacity
      onPress={() => onEmojiSelect(item)}
      className="p-2 items-center justify-center"
    >
      <Text className="text-2xl">{item}</Text>
    </TouchableOpacity>
  );

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      {selectedImage && (
        <View className="px-4 py-2 border-t border-gray-200">
          <View className="flex-row items-center bg-gray-100 rounded-lg p-2">
            <Image
              source={{ uri: selectedImage }}
              className="w-12 h-12 rounded-lg"
              resizeMode="cover"
            />
            <Text className="flex-1 ml-2 text-sm text-gray-600 font-medium">
              Selected Image
            </Text>
            <TouchableOpacity onPress={removeSelectedImage} className="p-2">
              <Text className="text-red-500">✕</Text>
            </TouchableOpacity>
          </View>
        </View>
      )}
      <View className="flex-row items-center px-4 py-2 border-t border-gray-200">
        <View className="flex-row items-center flex-1 bg-gray-100 rounded-full px-2 mr-2">
          <View className="flex-row items-center justify-start gap-x-0.5">
            <TouchableOpacity
              onPress={() => setShowEmojiPicker(!showEmojiPicker)}
              className="p-2"
            >
              <Text className="text-xl">😊</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={onImagePick} className="p-2">
              <Image
                source={icons.imageIcon}
                alt="add image"
                resizeMode="contain"
                className="w-6 h-6"
              />
            </TouchableOpacity>
          </View>

          <TextInput
            ref={inputRef}
            className="flex-1 min-h-12 px-2"
            placeholder="Type a message..."
            value={message}
            onChangeText={setMessage}
            onSelectionChange={(event) => {
              setCursorPosition(event.nativeEvent.selection.start);
            }}
            multiline
          />
        </View>

        <TouchableOpacity
          onPress={handleSend}
          disabled={!message.trim()}
          className={`w-12 h-12 rounded-full justify-center items-center ${
            message.trim() ? "bg-primary" : "bg-gray-300"
          }`}
        >
          <Image
            source={signeduser.sendIcon}
            alt="send"
            resizeMode="contain"
            className="w-full h-full"
          />
        </TouchableOpacity>
      </View>

      <Modal visible={showEmojiPicker} transparent={true} animationType="slide">
        <View className="flex-1 bg-white pt-2">
          <View className="flex-row justify-between items-center px-4 pb-2">
            <Text className="text-lg font-medium">Select Emoji</Text>
            <TouchableOpacity onPress={() => setShowEmojiPicker(false)}>
              <Text className="text-primary text-lg">Done</Text>
            </TouchableOpacity>
          </View>
          <FlatList
            data={EMOJIS}
            renderItem={renderEmojiItem}
            keyExtractor={(item) => item}
            numColumns={8}
            className="px-2"
            showsVerticalScrollIndicator={false}
          />
        </View>
      </Modal>
    </KeyboardAvoidingView>
  );
};

export default MessageInput;

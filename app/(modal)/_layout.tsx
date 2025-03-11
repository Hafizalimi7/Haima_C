import { MessageProvider } from "@/contexts/MessageProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ModalLayout() {
  return (
    <MessageProvider>
      <Stack>
        <Stack.Screen
          name="sellmodal"
          options={{
            presentation: "modal",
            animation: "slide_from_bottom",
            headerShown: false,
            headerTransparent: true,
          }}
        />
        <Stack.Screen name="messages/index" options={{ headerShown: false }} />
        <Stack.Screen name="messages/[id]" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </MessageProvider>
  );
}

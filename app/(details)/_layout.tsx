import { MessageProvider } from "@/contexts/MessageProvider";
import { NotificationProvider } from "@/contexts/NotificationProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HaimaDetailLayout() {
  return (
    <MessageProvider>
      <NotificationProvider>
        <Stack>
          <Stack.Screen
            name="product/[slug]/item"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="product/[slug]/reviews"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="notifications/index"
            options={{ headerShown: false }}
          />
        </Stack>
        <StatusBar backgroundColor="#FFFFFF" style="dark" />
      </NotificationProvider>
    </MessageProvider>
  );
}

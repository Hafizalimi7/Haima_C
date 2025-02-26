import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HaimaDetailLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="product/[slug]/item"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="product/[slug]/reviews"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
}

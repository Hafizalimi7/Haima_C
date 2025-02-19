import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function AuthLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen name="auth/sign-up" options={{ headerShown: false }} />
        <Stack.Screen
          name="auth/verification/[email]"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
}

import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function ProfileSetUpLayout() {
  return (
    <>
      <Stack>
        <Stack.Screen
          name="profile-setup/create-profile"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="profile-setup/profile-interest"
          options={{ headerShown: false }}
        />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </>
  );
}

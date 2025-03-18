import { MessageProvider } from "@/contexts/MessageProvider";
import { NotificationProvider } from "@/contexts/NotificationProvider";
import { PaymentProvider } from "@/contexts/PaymentProvider";
import { ShippingProvider } from "@/contexts/ShippingProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HaimaDetailLayout() {
  return (
    <ShippingProvider>
      <PaymentProvider>
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
                name="product/order/[id]"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="notifications/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/follower/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/following/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/reviews/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/account-settings/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/account-settings/update-password/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/account-settings/delete-account/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/edit-profile/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/help-center/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/help-center/[id]/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/user-wallet/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/user-wallet/top-up/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/user-wallet/transaction/index"
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="profile/settings/terms-conditons"
                options={{ headerShown: false }}
              />
            </Stack>
            <StatusBar backgroundColor="#FFFFFF" style="dark" />
          </NotificationProvider>
        </MessageProvider>
      </PaymentProvider>
    </ShippingProvider>
  );
}

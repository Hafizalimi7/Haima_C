import { ShippingProvider } from "@/contexts/ShippingProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HaimaBillingInfoLayout() {
  return (
    <ShippingProvider>
      <Stack>
        <Stack.Screen name="checkout/[id]/detail" options={{ headerShown: false }} />
        <Stack.Screen name="payments/create-card" options={{ headerShown: false }} />
        <Stack.Screen name="payments/payment-gateway" options={{ headerShown: false }} />
        <Stack.Screen name="shipping-detail/create-shipping-address" options={{ headerShown: false }} />
        <Stack.Screen name="shipping-detail/info" options={{ headerShown: false }} />
      </Stack>
      <StatusBar backgroundColor="#FFFFFF" style="dark" />
    </ShippingProvider>
  );
}

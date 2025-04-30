import { Stack } from "expo-router";
import CartProvider from "./cart-context";
import { View } from "react-native";

export default function RootLayout() {
  return (
    <CartProvider>
      <Stack>
        <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
        <Stack.Screen
          name="product/[id]"
          options={{ title: "Product Details" }}
        />
      </Stack>
    </CartProvider>
  );
}

import React from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useLocalSearchParams } from "expo-router";
import { products } from "@/data/products";

export default function ProductItemScreen() {
  const { slug } = useLocalSearchParams<{ slug?: string }>();
  const data = products.find((item) => item.id === slug);

  if (!data) return;

  return (
    <SafeAreaView>
      <Text>ProductItemScreen</Text>
    </SafeAreaView>
  );
}

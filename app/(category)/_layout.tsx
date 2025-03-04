import { FilterProvider } from "@/contexts/FilterProvider";
import { SearchProvider } from "@/contexts/SearchProvider";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";

export default function HaimaCategoryLayout() {
  return (
    <FilterProvider>
      <SearchProvider>
        <Stack>
          <Stack.Screen name="search/index" options={{ headerShown: false }} />
          <Stack.Screen
            name="search/[searchTerm]"
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="category/[query]"
            options={{ headerShown: false }}
          />
        </Stack>
        <StatusBar backgroundColor="#FFFFFF" style="dark" />
      </SearchProvider>
    </FilterProvider>
  );
}

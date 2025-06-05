import { CartProvider } from "@/context/cartContext";
import { DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
  });

  if (!loaded) {
    return null;
  }

  return (
    <ThemeProvider value={DefaultTheme}>
      <CartProvider>
        <Stack>
          <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
          <Stack.Screen
            name="details"
            options={{
              presentation: "transparentModal",
              headerShown: false,
              animation: "slide_from_bottom",
            }}
          />
        </Stack>
        <StatusBar style="auto" />
      </CartProvider>
    </ThemeProvider>
  );
}

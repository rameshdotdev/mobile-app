import { Stack } from "expo-router";
import "./globals.css";
export default function RootLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="empty-state"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="add-drug"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="medication-schedule"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="alert"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}

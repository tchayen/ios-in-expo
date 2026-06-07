import { Stack } from "expo-router";
import { PlatformColor } from "react-native";

import { NewEventHeader } from "@/components/new-event-header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerLargeTitleEnabled: true, headerBackButtonDisplayMode: "minimal" }}
    >
      <Stack.Screen name="index" options={{ title: "Examples" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen
        name="personal-hotspot"
        options={{
          title: "Personal Hotspot",
          headerLargeTitleEnabled: false,
          headerTransparent: true,
        }}
      />
      <Stack.Screen name="placeholder" options={{ title: "Placeholder" }} />
      <Stack.Screen name="health" options={{ headerShown: false }} />
      <Stack.Screen
        name="tf-onboarding"
        options={{
          presentation: "modal",
          headerShown: false,
          contentStyle: { backgroundColor: PlatformColor("systemBackground") },
        }}
      />
      <Stack.Screen
        name="new-event"
        options={{
          title: "New",
          presentation: "formSheet",
          headerLargeTitleEnabled: false,
          headerTransparent: true,
          contentStyle: { backgroundColor: PlatformColor("systemGroupedBackground") },
          sheetAllowedDetents: [1.0],
          sheetGrabberVisible: false,
          header: () => <NewEventHeader />,
        }}
      />
      <Stack.Screen
        name="sign-in"
        options={{
          presentation: "modal",
          headerShown: false,
          contentStyle: { backgroundColor: PlatformColor("systemBackground") },
        }}
      />
    </Stack>
  );
}

import { router, Stack } from "expo-router";
import { PlatformColor } from "react-native";

import { NewEventHeader } from "@/components/new-event-header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerBackButtonDisplayMode: "minimal", headerLargeTitleEnabled: true }}
    >
      <Stack.Screen name="index" options={{ title: "iOS in Expo" }} />
      <Stack.Screen name="settings" options={{ title: "Settings" }} />
      <Stack.Screen
        name="personal-hotspot"
        options={{
          headerLargeTitleEnabled: false,
          headerTransparent: true,
          title: "Personal Hotspot",
        }}
      />
      <Stack.Screen name="placeholder" options={{ title: "Placeholder" }} />
      <Stack.Screen name="health" options={{ headerShown: false }} />
      <Stack.Screen
        name="tf-onboarding"
        options={{
          contentStyle: { backgroundColor: PlatformColor("systemBackground") },
          headerShown: false,
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="new-event"
        options={{
          contentStyle: { backgroundColor: PlatformColor("systemGroupedBackground") },
          header: () => <NewEventHeader />,
          headerLargeTitleEnabled: false,
          headerTransparent: true,
          presentation: "formSheet",
          sheetAllowedDetents: [1.0],
          sheetGrabberVisible: false,
          title: "New",
        }}
      />
      <Stack.Screen
        name="view-options"
        options={{
          contentStyle: { backgroundColor: PlatformColor("systemGroupedBackground") },
          headerLargeTitleEnabled: false,
          presentation: "formSheet",
          sheetAllowedDetents: [0.6],
          sheetGrabberVisible: false,
          title: "View Options",
        }}
      >
        <Stack.Toolbar placement="right">
          <Stack.Toolbar.Button
            icon="checkmark"
            variant="prominent"
            accessibilityLabel="Done"
            onPress={() => router.back()}
          />
        </Stack.Toolbar>
      </Stack.Screen>
      <Stack.Screen
        name="sign-in"
        options={{
          contentStyle: { backgroundColor: PlatformColor("systemBackground") },
          headerShown: false,
          presentation: "modal",
        }}
      />
    </Stack>
  );
}

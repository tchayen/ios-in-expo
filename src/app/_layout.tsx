import { router, Stack } from "expo-router";
import { PlatformColor } from "react-native";

import { NewEventHeader } from "@/components/new-event-header";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerLargeTitleEnabled: true, headerBackButtonDisplayMode: "minimal" }}
    >
      <Stack.Screen name="index" options={{ title: "iOS in Expo" }} />
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
        name="view-options"
        options={{
          title: "View Options",
          presentation: "formSheet",
          headerLargeTitleEnabled: false,
          contentStyle: { backgroundColor: PlatformColor("systemGroupedBackground") },
          sheetAllowedDetents: [0.6],
          sheetGrabberVisible: false,
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
          presentation: "modal",
          headerShown: false,
          contentStyle: { backgroundColor: PlatformColor("systemBackground") },
        }}
      />
    </Stack>
  );
}

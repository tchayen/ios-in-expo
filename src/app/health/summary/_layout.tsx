import { Stack } from "expo-router/stack";
import { PlatformColor } from "react-native";

export default function SummaryStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerBlurEffect: "none",
        headerLargeStyle: { backgroundColor: "transparent" },
        headerLargeTitle: true,
        headerLargeTitleShadowVisible: false,
        headerShadowVisible: false,
        headerTitleStyle: { color: PlatformColor("label") },
        headerTransparent: true,
      }}
    >
      <Stack.Screen name="index" options={{ title: "Summary" }} />
    </Stack>
  );
}

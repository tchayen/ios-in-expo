import { Stack } from "expo-router/stack";
import { PlatformColor } from "react-native";

export default function SummaryStackLayout() {
  return (
    <Stack
      screenOptions={{
        headerLargeTitle: true,
        headerTransparent: true,
        headerShadowVisible: false,
        headerLargeTitleShadowVisible: false,
        headerLargeStyle: { backgroundColor: "transparent" },
        headerBlurEffect: "none",
        headerTitleStyle: { color: PlatformColor("label") },
      }}
    >
      <Stack.Screen name="index" options={{ title: "Summary" }} />
    </Stack>
  );
}

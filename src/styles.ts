import { foregroundStyle, tint } from "@expo/ui/swift-ui/modifiers";
import { PlatformColor } from "react-native";

export const secondaryText = foregroundStyle({ style: "secondary", type: "hierarchical" });

// Grays a menu picker's value and chevron instead of the default accent.
export const menuTint = tint(PlatformColor("secondaryLabel"));

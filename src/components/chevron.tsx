import { Image } from "@expo/ui/swift-ui";
import { PlatformColor } from "react-native";

// The disclosure indicator on navigable list rows.
export function Chevron() {
  return <Image systemName="chevron.forward" size={14} color={PlatformColor("tertiaryLabel")} />;
}

import { Image } from "@expo/ui/swift-ui";
import { PlatformColor } from "react-native";

/**
 * The disclosure indicator used on navigable list rows, matching the iOS system
 * chevron: a small `chevron.forward` in the tertiary system gray.
 */
export function Chevron() {
  return <Image systemName="chevron.forward" size={14} color={PlatformColor("tertiaryLabel")} />;
}

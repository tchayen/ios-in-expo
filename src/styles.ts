import { foregroundStyle } from "@expo/ui/swift-ui/modifiers";

/**
 * Muted secondary text styling, matching iOS `secondaryLabel`.
 */
export const secondaryText = foregroundStyle({ type: "hierarchical", style: "secondary" });

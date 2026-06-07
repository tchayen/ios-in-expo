import { Button, HStack, Spacer, Text } from "@expo/ui/swift-ui";
import { buttonStyle, contentShape, foregroundStyle, shapes } from "@expo/ui/swift-ui/modifiers";

import { Chevron } from "@/components/chevron";

/**
 * A tappable list row with a title, optional trailing value, and a disclosure
 * chevron. The `contentShape` makes the whole row (including the `Spacer` gap)
 * hit-testable, not just the rendered text.
 */
export function LinkRow({
  title,
  value,
  onPress,
}: {
  title: string;
  value?: string;
  onPress: () => void;
}) {
  return (
    <Button modifiers={[buttonStyle("plain")]} onPress={onPress}>
      <HStack spacing={6} modifiers={[contentShape(shapes.rectangle())]}>
        <Text>{title}</Text>
        <Spacer />
        {value ? (
          <Text modifiers={[foregroundStyle({ type: "hierarchical", style: "secondary" })]}>
            {value}
          </Text>
        ) : null}
        <Chevron />
      </HStack>
    </Button>
  );
}

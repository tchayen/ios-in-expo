import { Button, HStack, Spacer, Text } from "@expo/ui/swift-ui";
import { buttonStyle, contentShape, shapes } from "@expo/ui/swift-ui/modifiers";

import { Chevron } from "@/components/chevron";
import { secondaryText } from "@/styles";

// `contentShape` makes the whole row (including the `Spacer` gap) hit-testable,
// not just the rendered text.
export function LinkRow({
  onPress,
  title,
  value,
}: {
  onPress: () => void;
  title: string;
  value?: string;
}) {
  return (
    <Button modifiers={[buttonStyle("plain")]} onPress={onPress}>
      <HStack spacing={6} modifiers={[contentShape(shapes.rectangle())]}>
        <Text>{title}</Text>
        <Spacer />
        {value ? <Text modifiers={[secondaryText]}>{value}</Text> : null}
        <Chevron />
      </HStack>
    </Button>
  );
}

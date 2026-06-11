import { Button, Host, HStack, Image, Picker, Spacer, Text, VStack } from "@expo/ui/swift-ui";
import {
  buttonStyle,
  disabled,
  font,
  frame,
  glassEffect,
  padding,
  pickerStyle,
  tag,
} from "@expo/ui/swift-ui/modifiers";
import { router } from "expo-router";
import type { SFSymbol } from "expo-symbols";
import { useState } from "react";
import { PlatformColor } from "react-native";

const BUTTON_SIZE = 44;

// Header overlays the content, so the screen pads its top by this: top padding +
// button row + VStack spacing + segmented control + bottom padding.
export const NEW_EVENT_HEADER_HEIGHT = 16 + BUTTON_SIZE + 10 + 18 + 8;

function HeaderButton({
  isDisabled = false,
  onPress,
  prominent = false,
  systemName,
}: {
  isDisabled?: boolean;
  onPress: () => void;
  prominent?: boolean;
  systemName: SFSymbol;
}) {
  const glassTint = isDisabled
    ? PlatformColor("systemGray3")
    : prominent
      ? PlatformColor("systemBlue")
      : undefined;

  return (
    <Button onPress={onPress} modifiers={[buttonStyle("plain"), disabled(isDisabled)]}>
      <Image
        systemName={systemName}
        size={22}
        color={prominent ? "white" : PlatformColor("label")}
        modifiers={[
          frame({ height: BUTTON_SIZE, width: BUTTON_SIZE }),
          glassEffect({
            glass: {
              interactive: true,
              variant: "regular",
              ...(glassTint ? { tint: glassTint } : {}),
            },
            shape: "circle",
          }),
        ]}
      />
    </Button>
  );
}

// Set as the screen's `header`, replacing the native navigation bar.
export function NewEventHeader() {
  const [kind, setKind] = useState<"event" | "reminder">("event");

  return (
    <Host matchContents={{ vertical: true }}>
      <VStack spacing={10} modifiers={[padding({ bottom: 8, horizontal: 16, top: 16 })]}>
        <HStack>
          <HeaderButton systemName="xmark" onPress={() => router.back()} />
          <Spacer />
          <Text modifiers={[font({ size: 17, weight: "semibold" })]}>New</Text>
          <Spacer />
          <HeaderButton systemName="checkmark" prominent isDisabled onPress={() => router.back()} />
        </HStack>

        <Picker selection={kind} onSelectionChange={setKind} modifiers={[pickerStyle("segmented")]}>
          <Text modifiers={[tag("event")]}>Event</Text>
          <Text modifiers={[tag("reminder")]}>Reminder</Text>
        </Picker>
      </VStack>
    </Host>
  );
}

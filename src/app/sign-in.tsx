import {
  Button,
  Divider,
  Host,
  SecureField,
  Spacer,
  Text,
  TextField,
  VStack,
} from "@expo/ui/swift-ui";
import {
  autocorrectionDisabled,
  background,
  buttonStyle,
  clipShape,
  font,
  foregroundStyle,
  frame,
  keyboardType,
  padding,
  shadow,
  shapes,
  textContentType,
  textInputAutocapitalization,
} from "@expo/ui/swift-ui/modifiers";
import { router } from "expo-router";
import { useState } from "react";
import { PlatformColor, useWindowDimensions } from "react-native";

const fieldPadding = padding({ horizontal: 16, vertical: 16 });

/**
 * A full-width solid capsule button matching the iOS App Store sign-in sheet.
 * `prominent` is the filled blue primary action with white text; otherwise it is
 * the white Cancel pill. Built as a solid fill clipped to a capsule rather than a
 * system glass style, because the reference sheet predates liquid glass and the
 * `glassProminent`/`glass` styles add a specular rim that does not match it.
 */
function SheetButton({
  title,
  onPress,
  prominent = false,
}: {
  title: string;
  onPress: () => void;
  prominent?: boolean;
}) {
  const { width } = useWindowDimensions();

  return (
    <Button modifiers={[buttonStyle("plain")]} onPress={onPress}>
      <Text
        modifiers={[
          font({ size: 18, weight: "semibold" }),
          foregroundStyle(prominent ? "white" : PlatformColor("label")),
          frame({ maxWidth: width }),
          padding({ vertical: 16 }),
          background(prominent ? PlatformColor("systemBlue") : PlatformColor("systemBackground")),
          clipShape("capsule"),
          shadow({ radius: 10, y: 3, color: "rgba(0, 0, 0, 0.12)" }),
        ]}
      >
        {title}
      </Text>
    </Button>
  );
}

export default function SignInScreen() {
  const { width } = useWindowDimensions();
  const [email, setEmail] = useState("");

  const hasEmail = email.trim().length > 0;

  return (
    <Host style={{ flex: 1 }}>
      <VStack
        alignment="leading"
        spacing={28}
        modifiers={[
          padding({ horizontal: 20, top: 88 }),
          frame({ maxWidth: width, maxHeight: 10000 }),
        ]}
      >
        <Text modifiers={[font({ size: 24, weight: "bold" })]}>Sign In to Complete Purchase</Text>

        <VStack
          spacing={0}
          modifiers={[
            background(
              PlatformColor("systemGray6"),
              shapes.roundedRectangle({ cornerRadius: 26, roundedCornerStyle: "continuous" }),
            ),
          ]}
        >
          <TextField
            placeholder="Email or Phone Number"
            autoFocus
            onTextChange={setEmail}
            modifiers={[
              fieldPadding,
              keyboardType("email-address"),
              textContentType("username"),
              textInputAutocapitalization("never"),
              autocorrectionDisabled(),
            ]}
          />
          {hasEmail ? (
            <>
              <Divider modifiers={[padding({ leading: 16 })]} />
              <SecureField
                placeholder="Password"
                modifiers={[fieldPadding, textContentType("password")]}
              />
            </>
          ) : null}
        </VStack>

        <Text modifiers={[font({ size: 17 }), foregroundStyle(PlatformColor("link"))]}>
          Forgot password?
        </Text>

        <VStack spacing={12} modifiers={[frame({ maxWidth: width }), padding({ horizontal: 20 })]}>
          <SheetButton title="Sign In" prominent onPress={() => router.back()} />
          <SheetButton title="Cancel" onPress={() => router.back()} />
        </VStack>

        <Spacer />
      </VStack>
    </Host>
  );
}

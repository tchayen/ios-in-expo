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
import { PlatformColor } from "react-native";

const fieldPadding = padding({ horizontal: 16, vertical: 16 });

// Solid capsule fill rather than a `glass`/`glassProminent` style: the App Store
// sign-in sheet predates liquid glass, and those styles add a specular rim.
function SheetButton({
  onPress,
  prominent = false,
  title,
}: {
  onPress: () => void;
  prominent?: boolean;
  title: string;
}) {
  return (
    <Button modifiers={[buttonStyle("plain")]} onPress={onPress}>
      <Text
        modifiers={[
          font({ size: 18, weight: "semibold" }),
          foregroundStyle(prominent ? "white" : PlatformColor("label")),
          frame({ maxWidth: Infinity }),
          padding({ vertical: 16 }),
          background(prominent ? PlatformColor("systemBlue") : PlatformColor("systemBackground")),
          clipShape("capsule"),
          shadow({ color: "rgba(0, 0, 0, 0.12)", radius: 10, y: 3 }),
        ]}
      >
        {title}
      </Text>
    </Button>
  );
}

export default function SignInScreen() {
  const [email, setEmail] = useState("");

  const hasEmail = email.trim().length > 0;

  return (
    <Host style={{ flex: 1 }}>
      <VStack
        alignment="leading"
        spacing={28}
        modifiers={[
          padding({ horizontal: 20, top: 88 }),
          frame({ maxHeight: Infinity, maxWidth: Infinity }),
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

        <VStack
          spacing={12}
          modifiers={[frame({ maxWidth: Infinity }), padding({ horizontal: 20 })]}
        >
          <SheetButton title="Sign In" prominent onPress={() => router.back()} />
          <SheetButton title="Cancel" onPress={() => router.back()} />
        </VStack>

        <Spacer />
      </VStack>
    </Host>
  );
}

import { Button, Host, HStack, Image, Spacer, Text, VStack } from "@expo/ui/swift-ui";
import {
  buttonStyle,
  controlSize,
  font,
  foregroundStyle,
  frame,
  padding,
} from "@expo/ui/swift-ui/modifiers";
import { router } from "expo-router";
import { type ComponentProps } from "react";
import { PlatformColor, useWindowDimensions } from "react-native";

import { secondaryText } from "@/styles";

type SymbolName = NonNullable<ComponentProps<typeof Image>["systemName"]>;

function Feature({
  subtitle,
  systemName,
  title,
}: {
  subtitle: string;
  systemName: SymbolName;
  title: string;
}) {
  return (
    <HStack alignment="top" spacing={16}>
      <Image
        systemName={systemName}
        size={30}
        color={PlatformColor("systemBlue")}
        modifiers={[frame({ width: 44 })]}
      />
      <VStack alignment="leading" spacing={2}>
        <Text modifiers={[font({ size: 19, weight: "semibold" })]}>{title}</Text>
        <Text modifiers={[font({ size: 16 }), secondaryText]}>{subtitle}</Text>
      </VStack>
    </HStack>
  );
}

export default function TestFlightOnboardingScreen() {
  const { width } = useWindowDimensions();

  return (
    <Host style={{ backgroundColor: PlatformColor("systemBackground"), flex: 1 }}>
      <VStack
        alignment="leading"
        spacing={28}
        modifiers={[
          padding({ bottom: 24, horizontal: 32, top: 64 }),
          frame({ maxHeight: Infinity, maxWidth: Infinity }),
        ]}
      >
        <VStack alignment="leading" spacing={2}>
          <Text modifiers={[font({ size: 28, weight: "bold" })]}>Welcome to TestFlight</Text>
          <Text modifiers={[font({ size: 26 }), secondaryText]}>See what’s new</Text>
        </VStack>

        <VStack alignment="leading" spacing={22}>
          <Feature
            systemName="envelope.open.fill"
            title="Accept Invites"
            subtitle="Accept invites to beta programs and install the latest beta software."
          />
          <Feature
            systemName="app.fill"
            title="Test Beta Apps"
            subtitle="Test out the new functionality before it’s released in the App Store."
          />
          <Feature
            systemName="star.fill"
            title="Provide Feedback"
            subtitle="Help developers build better apps by providing feedback and reporting bugs."
          />
        </VStack>

        <Spacer />

        <VStack alignment="leading" spacing={6}>
          <Image systemName="person.2.fill" size={24} color={PlatformColor("systemBlue")} />
          <Text modifiers={[font({ size: 13, weight: "medium" }), secondaryText]}>
            Your crash logs, usage information, and feedback may be used by the Application Provider
            to improve their app and related products. Crash logs and usage information may also be
            used by Apple to improve the TestFlight app and for fraud prevention purposes.
          </Text>
          <Text
            modifiers={[
              font({ size: 13, weight: "semibold" }),
              foregroundStyle(PlatformColor("link")),
            ]}
          >
            See how your data is managed...
          </Text>
        </VStack>

        <HStack modifiers={[frame({ maxWidth: Infinity })]}>
          <Spacer />
          <Button
            onPress={() => router.back()}
            modifiers={[buttonStyle("glassProminent"), controlSize("large")]}
          >
            <Text
              modifiers={[frame({ maxWidth: width - 150 }), font({ size: 17, weight: "medium" })]}
            >
              Continue
            </Text>
          </Button>
          <Spacer />
        </HStack>
      </VStack>
    </Host>
  );
}

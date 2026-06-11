import { Form, Host, Image, Section, Text, Toggle, VStack } from "@expo/ui/swift-ui";
import {
  background,
  cornerRadius,
  font,
  foregroundStyle,
  frame,
} from "@expo/ui/swift-ui/modifiers";
import { router } from "expo-router";
import { useState } from "react";
import { PlatformColor } from "react-native";

import { LinkRow } from "@/components/link-row";
import { secondaryText } from "@/styles";

export default function PersonalHotspotScreen() {
  const [allowOthers, setAllowOthers] = useState(false);
  const [maximizeCompatibility, setMaximizeCompatibility] = useState(false);

  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <VStack alignment="leading" spacing={10}>
            <Image
              systemName="link"
              size={30}
              color="white"
              modifiers={[
                frame({ height: 60, width: 60 }),
                background(PlatformColor("systemGray")),
                cornerRadius(14),
              ]}
            />
            <Text modifiers={[font({ size: 28, weight: "bold" })]}>Personal Hotspot</Text>
            <Text modifiers={[secondaryText]}>
              Personal Hotspot allows you to share a cellular internet connection from your iPhone
              to other nearby devices.
            </Text>
            <Text modifiers={[foregroundStyle(PlatformColor("link"))]}>Learn more...</Text>
          </VStack>
        </Section>

        <Section
          footer={
            <Text>
              Allow other users or devices not signed into iCloud to look for your shared network
              "Tomkofon" when you are in Personal Hotspot settings or when you turn it on in Control
              Center.
            </Text>
          }
        >
          <Toggle isOn={allowOthers} onIsOnChange={setAllowOthers} label="Allow Others to Join" />
          <LinkRow
            title="Wi-Fi Password"
            value="password"
            onPress={() => router.push("/placeholder")}
          />
        </Section>

        <Section
          footer={
            <Text>
              Internet performance may be reduced for devices connected to your hotspot when turned
              on.
            </Text>
          }
        >
          <Toggle
            isOn={maximizeCompatibility}
            onIsOnChange={setMaximizeCompatibility}
            label="Maximize Compatibility"
          />
        </Section>

        <Section>
          <LinkRow title="Data Usage" value="206 GB" onPress={() => router.push("/placeholder")} />
        </Section>
      </Form>
    </Host>
  );
}

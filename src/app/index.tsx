import { Form, Host, Section } from "@expo/ui/swift-ui";
import { router } from "expo-router";

import { LinkRow } from "@/components/link-row";

export default function Index() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <LinkRow title="Settings" onPress={() => router.push("/settings")} />
          <LinkRow title="Health Summary" onPress={() => router.push("/health/summary")} />
          <LinkRow title="TestFlight Onboarding" onPress={() => router.push("/tf-onboarding")} />
          <LinkRow title="New Event" onPress={() => router.push("/new-event")} />
          <LinkRow title="Sign In" onPress={() => router.push("/sign-in")} />
          <LinkRow title="View Options" onPress={() => router.push("/view-options")} />
        </Section>
      </Form>
    </Host>
  );
}

import { Form, Host, Section, Text } from "@expo/ui/swift-ui";

export default function PlaceholderScreen() {
  return (
    <Host style={{ flex: 1 }}>
      <Form>
        <Section>
          <Text>Placeholder</Text>
        </Section>
      </Form>
    </Host>
  );
}

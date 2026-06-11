import { Form, Host, Picker, Section, Text, Toggle } from "@expo/ui/swift-ui";
import { pickerStyle, tag } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";

import { menuTint } from "@/styles";

export default function ViewOptionsScreen() {
  const [sortBy, setSortBy] = useState("Name");
  const [groupBy, setGroupBy] = useState("None");
  const [size, setSize] = useState("Default");
  const [showExtensions, setShowExtensions] = useState(false);

  return (
    <Host style={{ backgroundColor: "transparent", flex: 1 }}>
      <Form>
        <Section>
          <Picker
            label="Sort By"
            selection={sortBy}
            onSelectionChange={setSortBy}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("Name")]}>Name</Text>
            <Text modifiers={[tag("Kind")]}>Kind</Text>
            <Text modifiers={[tag("Date")]}>Date</Text>
            <Text modifiers={[tag("Size")]}>Size</Text>
            <Text modifiers={[tag("Tags")]}>Tags</Text>
          </Picker>
          <Picker
            label="Group By"
            selection={groupBy}
            onSelectionChange={setGroupBy}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("None")]}>None</Text>
            <Text modifiers={[tag("Kind")]}>Kind</Text>
            <Text modifiers={[tag("Date")]}>Date</Text>
            <Text modifiers={[tag("Size")]}>Size</Text>
          </Picker>
        </Section>

        <Section>
          <Picker
            label="Icon and List Size"
            selection={size}
            onSelectionChange={setSize}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("Default")]}>Default</Text>
            <Text modifiers={[tag("Small")]}>Small</Text>
            <Text modifiers={[tag("Medium")]}>Medium</Text>
            <Text modifiers={[tag("Large")]}>Large</Text>
          </Picker>
        </Section>

        <Section
          title="Advanced"
          footer={
            <Text>
              If you change a filename extension, you may no longer be able to open the file with
              the app that was used to create it.
            </Text>
          }
        >
          <Toggle
            isOn={showExtensions}
            onIsOnChange={setShowExtensions}
            label="Show All Filename Extensions"
          />
        </Section>
      </Form>
    </Host>
  );
}

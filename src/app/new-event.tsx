import {
  Button,
  DatePicker,
  Host,
  HStack,
  Image,
  List,
  Picker,
  Section,
  Spacer,
  Text,
  TextField,
  Toggle,
} from "@expo/ui/swift-ui";
import {
  buttonStyle,
  datePickerStyle,
  listRowInsets,
  listSectionMargins,
  listStyle,
  padding,
  pickerStyle,
  tag,
} from "@expo/ui/swift-ui/modifiers";
import { router } from "expo-router";
import { useState } from "react";
import { PlatformColor } from "react-native";

import { LinkRow } from "@/components/link-row";
import { NEW_EVENT_HEADER_HEIGHT } from "@/components/new-event-header";
import { menuTint, secondaryText } from "@/styles";

const ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

// Trim the row toward the classic grouped-table height (iOS 16+ List rows are
// taller than Calendar's) and inset the cards further from the edges (iOS 26+);
// `listSectionMargins` only applies per-section, not from the List.
const SECTION_MODS = [
  listRowInsets({ bottom: 7, leading: 16, top: 7, trailing: 16 }),
  listSectionMargins({ edges: "horizontal", length: 22 }),
];

function MenuChevron() {
  return (
    <Image systemName="chevron.up.chevron.down" size={12} color={PlatformColor("systemGray")} />
  );
}

export default function NewEventScreen() {
  const [allDay, setAllDay] = useState(false);
  const now = new Date();
  const [startsAt, setStartsAt] = useState(now);
  const [endsAt, setEndsAt] = useState(new Date(now.getTime() + ONE_HOUR_IN_MILLISECONDS));
  const [travelTime, setTravelTime] = useState("None");
  const [repeat, setRepeat] = useState("Never");
  const [alert, setAlert] = useState("None");

  const dateComponents = allDay ? (["date"] as const) : (["date", "hourAndMinute"] as const);

  return (
    <Host style={{ backgroundColor: "transparent", flex: 1 }}>
      <List modifiers={[listStyle("insetGrouped"), padding({ top: NEW_EVENT_HEADER_HEIGHT })]}>
        <Section modifiers={SECTION_MODS}>
          <TextField placeholder="Title" />
          <TextField placeholder="Location or Video Call" />
        </Section>

        <Section modifiers={SECTION_MODS}>
          <Toggle isOn={allDay} onIsOnChange={setAllDay} label="All-day" />
          <DatePicker
            title="Starts"
            displayedComponents={[...dateComponents]}
            selection={startsAt}
            onDateChange={setStartsAt}
            modifiers={[datePickerStyle("compact")]}
          />
          <DatePicker
            title="Ends"
            displayedComponents={[...dateComponents]}
            selection={endsAt}
            onDateChange={setEndsAt}
            modifiers={[datePickerStyle("compact")]}
          />
          <Picker
            label="Travel Time"
            selection={travelTime}
            onSelectionChange={setTravelTime}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("None")]}>None</Text>
            <Text modifiers={[tag("15 minutes")]}>15 minutes</Text>
            <Text modifiers={[tag("30 minutes")]}>30 minutes</Text>
            <Text modifiers={[tag("1 hour")]}>1 hour</Text>
          </Picker>
        </Section>

        <Section modifiers={SECTION_MODS}>
          <Picker
            label="Repeat"
            selection={repeat}
            onSelectionChange={setRepeat}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("Never")]}>Never</Text>
            <Text modifiers={[tag("Every Day")]}>Every Day</Text>
            <Text modifiers={[tag("Every Week")]}>Every Week</Text>
            <Text modifiers={[tag("Every Month")]}>Every Month</Text>
            <Text modifiers={[tag("Every Year")]}>Every Year</Text>
          </Picker>
        </Section>

        <Section modifiers={SECTION_MODS}>
          <Button modifiers={[buttonStyle("plain")]} onPress={() => router.push("/placeholder")}>
            <HStack spacing={8}>
              <Text>Calendar</Text>
              <Spacer />
              <Image systemName="circle.fill" size={10} color={PlatformColor("systemBlue")} />
              <Text modifiers={[secondaryText]}>Dom</Text>
              <MenuChevron />
            </HStack>
          </Button>
          <LinkRow title="Invitees" value="None" onPress={() => router.push("/placeholder")} />
        </Section>

        <Section modifiers={SECTION_MODS}>
          <Picker
            label="Alert"
            selection={alert}
            onSelectionChange={setAlert}
            modifiers={[pickerStyle("menu"), menuTint]}
          >
            <Text modifiers={[tag("None")]}>None</Text>
            <Text modifiers={[tag("At time of event")]}>At time of event</Text>
            <Text modifiers={[tag("5 minutes before")]}>5 minutes before</Text>
            <Text modifiers={[tag("30 minutes before")]}>30 minutes before</Text>
          </Picker>
        </Section>

        <Section modifiers={SECTION_MODS}>
          <Button
            label="Add attachment"
            onPress={() => router.push("/placeholder")}
            modifiers={[buttonStyle("plain"), secondaryText]}
          />
        </Section>
      </List>
    </Host>
  );
}

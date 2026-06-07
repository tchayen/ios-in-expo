import {
  Button,
  Form,
  Host,
  HStack,
  Image,
  Picker,
  Section,
  Spacer,
  Text,
  TextField,
  Toggle,
} from "@expo/ui/swift-ui";
import { buttonStyle, padding, pickerStyle, tag, tint } from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
import { PlatformColor } from "react-native";

import { DateTimeRow } from "@/components/date-time-row";
import { LinkRow } from "@/components/link-row";
import { NEW_EVENT_HEADER_HEIGHT } from "@/components/new-event-header";
import { secondaryText } from "@/styles";

const menuTint = tint(PlatformColor("secondaryLabel"));

const ONE_HOUR_IN_MILLISECONDS = 60 * 60 * 1000;

// Up and down chevron for menu-style value rows.
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

  return (
    <Host style={{ flex: 1, backgroundColor: "transparent" }}>
      <Form modifiers={[padding({ top: NEW_EVENT_HEADER_HEIGHT })]}>
        <Section>
          <TextField placeholder="Title" />
          <TextField placeholder="Location or Video Call" />
        </Section>

        <Section>
          <Toggle isOn={allDay} onIsOnChange={setAllDay} label="All-day" />
          <DateTimeRow label="Starts" value={startsAt} allDay={allDay} onChange={setStartsAt} />
          <DateTimeRow label="Ends" value={endsAt} allDay={allDay} onChange={setEndsAt} />
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

        <Section>
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

        <Section>
          <Button modifiers={[buttonStyle("plain")]} onPress={() => {}}>
            <HStack spacing={8}>
              <Text>Calendar</Text>
              <Spacer />
              <Image systemName="circle.fill" size={10} color={PlatformColor("systemBlue")} />
              <Text modifiers={[secondaryText]}>Dom</Text>
              <MenuChevron />
            </HStack>
          </Button>
          <LinkRow title="Invitees" value="None" onPress={() => {}} />
        </Section>

        <Section>
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
      </Form>
    </Host>
  );
}

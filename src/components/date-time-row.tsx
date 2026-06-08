import { Button, DatePicker, HStack, Spacer, Text } from "@expo/ui/swift-ui";
import {
  background,
  buttonStyle,
  cornerRadius,
  datePickerStyle,
  foregroundStyle,
  padding,
} from "@expo/ui/swift-ui/modifiers";
import { useState } from "react";
import { PlatformColor } from "react-native";

type Mode = "none" | "date" | "time";

function Pill({ label, active, onPress }: { label: string; active: boolean; onPress: () => void }) {
  return (
    <Button modifiers={[buttonStyle("plain")]} onPress={onPress}>
      <Text
        modifiers={[
          padding({ horizontal: 12, vertical: 6 }),
          background(PlatformColor("systemGray5")),
          cornerRadius(8),
          foregroundStyle(active ? PlatformColor("systemBlue") : PlatformColor("label")),
        ]}
      >
        {label}
      </Text>
    </Button>
  );
}

// A date/time row whose pills reveal an inline graphical picker, like the iOS
// Calendar event editor.
export function DateTimeRow({
  label,
  value,
  allDay,
  onChange,
}: {
  label: string;
  value: Date;
  allDay: boolean;
  onChange: (date: Date) => void;
}) {
  const [mode, setMode] = useState<Mode>("none");

  const dateLabel = value.toLocaleDateString(undefined, {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  const timeLabel = value.toLocaleTimeString(undefined, { hour: "2-digit", minute: "2-digit" });

  return (
    <>
      <HStack spacing={8}>
        <Text>{label}</Text>
        <Spacer />
        <Pill
          label={dateLabel}
          active={mode === "date"}
          onPress={() => setMode(mode === "date" ? "none" : "date")}
        />
        {!allDay && (
          <Pill
            label={timeLabel}
            active={mode === "time"}
            onPress={() => setMode(mode === "time" ? "none" : "time")}
          />
        )}
      </HStack>
      {mode === "date" && (
        <DatePicker
          selection={value}
          displayedComponents={["date"]}
          onDateChange={onChange}
          modifiers={[datePickerStyle("graphical")]}
        />
      )}
      {mode === "time" && (
        <DatePicker
          selection={value}
          displayedComponents={["hourAndMinute"]}
          onDateChange={onChange}
          modifiers={[datePickerStyle("wheel")]}
        />
      )}
    </>
  );
}

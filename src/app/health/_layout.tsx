import { NativeTabs } from "expo-router/unstable-native-tabs";

export default function HealthTabsLayout() {
  return (
    <NativeTabs>
      <NativeTabs.Trigger name="summary">
        <NativeTabs.Trigger.Icon sf="heart.fill" />
        <NativeTabs.Trigger.Label>Summary</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="sharing">
        <NativeTabs.Trigger.Icon sf="person.2.fill" />
        <NativeTabs.Trigger.Label>Sharing</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
      <NativeTabs.Trigger name="search" role="search">
        <NativeTabs.Trigger.Label>Search</NativeTabs.Trigger.Label>
      </NativeTabs.Trigger>
    </NativeTabs>
  );
}

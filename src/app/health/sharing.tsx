import { ContentUnavailableView, Host } from "@expo/ui/swift-ui";

export default function HealthSharingScreen() {
  return (
    <Host style={{ flex: 1, backgroundColor: "#F2F2F7" }}>
      <ContentUnavailableView
        title="Sharing"
        systemImage="person.2.fill"
        description="People who share their health data with you appear here."
      />
    </Host>
  );
}

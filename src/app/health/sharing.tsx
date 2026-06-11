import { ContentUnavailableView, Host } from "@expo/ui/swift-ui";

export default function HealthSharingScreen() {
  return (
    <Host style={{ backgroundColor: "#F2F2F7", flex: 1 }}>
      <ContentUnavailableView
        title="Sharing"
        systemImage="person.2.fill"
        description="People who share their health data with you appear here."
      />
    </Host>
  );
}

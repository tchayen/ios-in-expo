import { ContentUnavailableView, Host } from "@expo/ui/swift-ui";

export default function HealthSearchScreen() {
  return (
    <Host style={{ flex: 1, backgroundColor: "#F2F2F7" }}>
      <ContentUnavailableView
        title="Search Health Data"
        systemImage="magnifyingglass"
        description="Find your health categories and data sources."
      />
    </Host>
  );
}

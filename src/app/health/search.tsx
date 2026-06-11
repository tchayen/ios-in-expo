import { ContentUnavailableView, Host } from "@expo/ui/swift-ui";

export default function HealthSearchScreen() {
  return (
    <Host style={{ backgroundColor: "#F2F2F7", flex: 1 }}>
      <ContentUnavailableView
        title="Search Health Data"
        systemImage="magnifyingglass"
        description="Find your health categories and data sources."
      />
    </Host>
  );
}

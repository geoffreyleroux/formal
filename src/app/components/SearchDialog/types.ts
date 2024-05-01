export type Tabs = "All" | "Data" | "Security" | "Store" | "Tools" | "Settings";

export type TabButton = {
  title: Tabs;
  className: string;
  backgroundColor: string;
  icon?: string;
};

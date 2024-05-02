export enum Tabs {
  All = "All",
  Data = "Data",
  Security = "Security",
  Store = "Store",
  Tools = "Tools",
  Settings = "Settings",
}

export type TabButton = {
  title: Tabs;
  className: string;
  backgroundColor: string;
  icon?: string;
};

export interface Application {
  title: string;
  description: string;
  icon: string;
  shortcut: (string | number)[];
}
export interface Category {
  title: Tabs;
  color: string;
  applications: Application[];
}

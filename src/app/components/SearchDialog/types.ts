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
  className?: string;
  color: string;
  icon?: string;
};

export interface Application {
  title: string;
  description: string;
  icon: string;
  shortcut: (string | number)[];
}
export interface Command {
  title: string;
  description: string;
  icon: string;
  badges: {
    color: string;
    label: string;
  }[];
}

export type Action = Application | Command;

export type Actions = Action[];
export interface Category {
  title: Tabs;
  color: string;
  applications: Application[];
  commands: Command[];
}

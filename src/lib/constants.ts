import { BoxProps } from "@/app/components/Box/Box";
import { Category, TabButton, Tabs } from "@/app/components/SearchDialog/types";

export const cards: BoxProps[] = [
  {
    title: "Logs",
    lastUpdated: "Updated 15 minutes ago",
    logsCount: 12,
    chart: {
      header: "Logs / Time",
      footer: "Jan 2, 08:18:00",
      type: "bar",
      data: [
        {
          goal: 400,
        },
        {
          goal: 380,
        },
        {
          goal: 370,
        },
        {
          goal: 350,
        },
        {
          goal: 320,
        },
        {
          goal: 308,
        },
        {
          goal: 289,
        },
        {
          goal: 259,
        },
        {
          goal: 240,
        },
        {
          goal: 150,
        },
        {
          goal: 120,
        },
        {
          goal: 99,
        },
        {
          goal: 49,
        },
      ],
    },
  },
  {
    title: "Sidecars",
    lastUpdated: "Updated 15 minutes ago",
    logsCount: 4,
    chart: {
      header: "Queries in database",
      footer: "Jan 2, 08:18:00",
      type: "line",
      data: [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ],
    },
  },
  {
    title: "Access",
    lastUpdated: "Updated 15 minutes ago",

    logsCount: 4,
    chart: {
      header: "Access over 30 days",
      footer: "Total views",
      type: "pie",
      data: [
        {
          name: "Group A",
          value: 400,
        },
        {
          name: "Group B",
          value: 300,
        },
        {
          name: "Group C",
          value: 300,
        },
        {
          name: "Group D",
          value: 200,
        },
        {
          name: "Group E",
          value: 278,
        },
        {
          name: "Group F",
          value: 189,
        },
      ],
    },
  },
  {
    title: "Logs",
    lastUpdated: "Updated 15 minutes ago",
    logsCount: 12,
    chart: {
      header: "Logs / Time",
      footer: "Jan 2, 08:18:00",
      type: "bar",
      data: [
        {
          goal: 400,
        },
        {
          goal: 380,
        },
        {
          goal: 370,
        },
        {
          goal: 350,
        },
        {
          goal: 320,
        },
        {
          goal: 308,
        },
        {
          goal: 289,
        },
        {
          goal: 259,
        },
        {
          goal: 240,
        },
        {
          goal: 150,
        },
        {
          goal: 120,
        },
        {
          goal: 99,
        },
        {
          goal: 49,
        },
      ],
    },
  },
  {
    title: "Sidecars",
    lastUpdated: "Updated 15 minutes ago",
    logsCount: 4,
    chart: {
      header: "Queries in database",
      footer: "Jan 2, 08:18:00",
      type: "line",
      data: [
        {
          name: "Page A",
          uv: 4000,
          pv: 2400,
          amt: 2400,
        },
        {
          name: "Page B",
          uv: 3000,
          pv: 1398,
          amt: 2210,
        },
        {
          name: "Page C",
          uv: 2000,
          pv: 9800,
          amt: 2290,
        },
        {
          name: "Page D",
          uv: 2780,
          pv: 3908,
          amt: 2000,
        },
        {
          name: "Page E",
          uv: 1890,
          pv: 4800,
          amt: 2181,
        },
        {
          name: "Page F",
          uv: 2390,
          pv: 3800,
          amt: 2500,
        },
        {
          name: "Page G",
          uv: 3490,
          pv: 4300,
          amt: 2100,
        },
      ],
    },
  },
  {
    title: "Access",
    lastUpdated: "Updated 15 minutes ago",

    logsCount: 4,
    chart: {
      header: "Access over 30 days",
      footer: "Total views",
      type: "pie",
      data: [
        {
          name: "Group A",
          value: 400,
        },
        {
          name: "Group B",
          value: 300,
        },
        {
          name: "Group C",
          value: 300,
        },
        {
          name: "Group D",
          value: 200,
        },
        {
          name: "Group E",
          value: 278,
        },
        {
          name: "Group F",
          value: 189,
        },
      ],
    },
  },
];

export const categories: Category[] = [
  {
    title: Tabs.Data,
    color: "blue-500",
    applications: [
      {
        title: "Catalog",
        description: "Description of application",
        icon: "Folder",
        shortcut: ["Alt", "C"],
      },
      {
        title: "Observability",
        description: "Description of application",
        icon: "ScanEye",
        shortcut: ["Alt", "O"],
      },
      {
        title: "Lineage",
        description: "Description of application",
        icon: "Cable",
        shortcut: ["Alt", "L"],
      },
      {
        title: "ETL",
        description: "Description of application",
        icon: "Repeat",
        shortcut: ["Alt", "E"],
      },
    ],
  },
  {
    title: Tabs.Security,
    color: "purple-500",
    applications: [
      {
        title: "Access",
        description: "Description of application",
        icon: "Users",
        shortcut: ["Alt", "A"],
      },
      {
        title: "Logs",
        description: "Description of application",
        icon: "FileClock",
        shortcut: ["Alt", "G"],
      },
      {
        title: "Discovery",
        description: "Description of application",
        icon: "Gauge",
        shortcut: ["Alt", "D"],
      },
      {
        title: "Policies",
        description: "Description of application",
        icon: "FileSpreadsheet",
        shortcut: ["Alt", "P"],
      },
      {
        title: "Compliance",
        description: "Description of application",
        icon: "CircleGauge",
        shortcut: ["Alt", "Q"],
      },
    ],
  },
  {
    title: Tabs.Store,
    color: "green-500",
    applications: [
      {
        title: "AWS",
        description: "Description of application",
        icon: "aws",
        shortcut: ["Alt", "Shift", "A"],
      },
      {
        title: "Datadog",
        description: "Description of application",
        icon: "Dog",
        shortcut: ["Alt", "Shift", "D"],
      },
      {
        title: "Splunk",
        description: "Description of application",
        icon: "splunk",
        shortcut: ["Alt", "Shift", "S"],
      },
      {
        title: "S3",
        description: "Description of application",
        icon: "s3",
        shortcut: ["Alt", "Shift", 3],
      },
      {
        title: "Github",
        description: "Description of application",
        icon: "github",
        shortcut: ["Alt", "Shift", "G"],
      },
      {
        title: "Datahub",
        description: "Description of application",
        icon: "datahub",
        shortcut: ["Alt", "Shift", "H"],
      },
      {
        title: "Manage Store apps",
        description: "Description of application",
        icon: "CirclePlus",
        shortcut: ["Alt", "Shift", "M"],
      },
    ],
  },
  {
    title: Tabs.Tools,
    color: "red-500",
    applications: [
      {
        title: "Api Keys",
        description: "Description of application",
        icon: "Key",
        shortcut: ["Alt", "K"],
      },
      {
        title: "Sigma",
        description: "Description of application",
        icon: "Sigma",
        shortcut: ["Alt", "S"],
      },
      {
        title: "Workflow",
        description: "Description of application",
        icon: "Workflow",
        shortcut: ["Alt", "W"],
      },
    ],
  },
  {
    title: Tabs.Settings,
    color: "yellow-500",
    applications: [
      {
        title: "Profil",
        description: "Description of application",
        icon: "",
        shortcut: ["Alt", "Shift", "P"],
      },
      {
        title: "Company",
        description: "Description of application",
        icon: "",
        shortcut: ["Alt", "Shift", "C"],
      },
      {
        title: "Users",
        description: "Description of application",
        icon: "",
        shortcut: ["Alt", "Shift", "U"],
      },
    ],
  },
];

export const queryExamples = [
  {
    description: "How many times user X has made Y?",
  },
  {
    description: "How many times has user group X made Y query?",
  },
  {
    description: "How many times query Y has been made?",
  },
];

export const tabButtons: TabButton[] = [
  {
    title: Tabs.All,
    backgroundColor: "bg-gray-500",
    className: "focus:bg-gray-500 active:bg-gray-500 p-3 ",
  },
  {
    title: Tabs.Data,
    icon: "Database",
    backgroundColor: "bg-blue-500",
    className: "focus:bg-blue-500 active:bg-blue-500",
  },
  {
    title: Tabs.Security,
    icon: "Lock",
    backgroundColor: "bg-purple-500",
    className: "focus:bg-purple-500 active:bg-purple-500",
  },
  {
    title: Tabs.Store,
    icon: "Puzzle",
    backgroundColor: "bg-green-500",
    className: "focus:bg-green-500 active:bg-green-500",
  },
  {
    title: Tabs.Tools,
    icon: "PencilRuler",
    backgroundColor: "bg-red-500",
    className: "focus:bg-red-500 active:bg-red-500",
  },
  {
    title: Tabs.Settings,
    icon: "Settings",
    backgroundColor: "bg-yellow-500",
    className: "focus:bg-yellow-500 active:bg-yellow-500",
  },
];

import { BoxProps } from "@/app/components/Box/Box";
import { Category } from "@/app/components/SearchDialog/Categories/Categories";
import { TabButton } from "@/app/components/SearchDialog/types";

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

export const responses: Category[] = [
  {
    title: "Data",
    color: "bg-red-500",
    data: [
      {
        title: "Catalog",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Observability",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Lineage",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "ETL",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
    ],
  },
  {
    title: "Security",
    color: "bg-purple-500",

    data: [
      {
        title: "Access",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Logs",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Discovery",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Policies",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Compliance",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
    ],
  },
  {
    title: "Store",
    color: "bg-green-500",
    data: [
      {
        title: "AWS",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Datadog",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Splunk",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "S3",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Github",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Datahub",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
    ],
  },
  {
    title: "Tools",
    color: "bg-red-500",
    data: [
      {
        title: "Api Keys",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Sigma",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Workflow",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
    ],
  },
  {
    title: "Settings",
    color: "bg-yellow-500",
    data: [
      {
        title: "Profil",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Company",
        description: "Description of application",
        icon: "",
        shortcut: "",
      },
      {
        title: "Users",
        description: "Description of application",
        icon: "",
        shortcut: "",
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
    title: "All",
    backgroundColor: "bg-gray-500",
    className: "focus:bg-gray-500 hover:bg-gray-500 active:bg-gray-500 p-3 ",
  },
  {
    title: "Data",
    icon: "Database",
    backgroundColor: "bg-blue-500",
    className: "focus:bg-blue-500 hover:bg-blue-500 active:bg-blue-500",
  },
  {
    title: "Security",
    icon: "Lock",
    backgroundColor: "bg-purple-500",
    className: "focus:bg-purple-500 hover:bg-purple-500 active:bg-purple-500",
  },
  {
    title: "Store",
    icon: "Puzzle",
    backgroundColor: "bg-green-500",
    className: "focus:bg-green-500 hover:bg-green-500 active:bg-green-500",
  },
  {
    title: "Tools",
    icon: "PencilRuler",
    backgroundColor: "bg-red-500",
    className: "focus:bg-red-500 hover:bg-red-500 active:bg-red-500",
  },
  {
    title: "Settings",
    icon: "Settings",
    backgroundColor: "bg-yellow-500",
    className: "focus:bg-yellow-500 hover:bg-yellow-500 active:bg-yellow-500",
  },
];

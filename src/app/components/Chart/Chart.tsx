"use client";

import * as React from "react";
import {
  Bar,
  LineChart,
  Line,
  BarChart,
  Pie,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  PieChart,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import {
  BarChartProps,
  LineChartProps,
  PieChartProps,
  ChartProps,
} from "./types";

const BChart: React.FC<Omit<BarChartProps, "type">> = ({ data }) => {
  console.log(data);
  return (
    <ResponsiveContainer height={100} width={"100%"}>
      <BarChart data={data}>
        <Bar
          dataKey="goal"
          style={
            {
              fill: "#8884d8",
              opacity: 0.9,
            } as React.CSSProperties
          }
        />
      </BarChart>
    </ResponsiveContainer>
  );
};

const LChart: React.FC<Omit<LineChartProps, "type">> = ({ data }) => {
  return (
    <ResponsiveContainer height={100} width={"100%"}>
      <LineChart data={data} compact>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="pv"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
};

const PChart: React.FC<Omit<PieChartProps, "type">> = ({ data }) => {
  return (
    <ResponsiveContainer height={100} width={"100%"}>
      <PieChart compact>
        <Pie
          data={data}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius={50}
          fill="#8884d8"
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

const Chart: React.FC<ChartProps> = ({ data, type, header, footer }) => {
  return (
    <div className="px-2 size-full">
      <p className="py-2 pl-1 text-zinc-400 text-sm">{header}</p>
      {type === "bar" && <BChart data={data} />}
      {type === "pie" && <PChart data={data} />}
      {type === "line" && <LChart data={data} />}
      <p className="py-2 pl-1 text-zinc-300 text-xs">{footer}</p>
    </div>
  );
};

export default Chart;

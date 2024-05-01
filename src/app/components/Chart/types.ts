export interface BarChartProps {
  type: "bar";
  data: { goal: number }[];
}
export interface PieChartProps {
  type: "pie";
  data: { value: number; name: string }[];
}
export interface LineChartProps {
  type: "line";
  data: {
    name: string;
    uv: number;
    pv: number;
    amt: number;
  }[];
}
export type ChartProps = (BarChartProps | PieChartProps | LineChartProps) & {
  header: string;
  footer: string;
};

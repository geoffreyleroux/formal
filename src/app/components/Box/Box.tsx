import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/lib/design-system/card";
import * as React from "react";
import { cn } from "@/lib/utils";
import { ChartProps } from "../Chart/types";
import Chart from "../Chart/Chart";
import { BadgeInfo } from "lucide-react";

export interface BoxProps {
  title: string;
  lastUpdated: string;
  logsCount?: number;
  chart?: ChartProps;
}

const Box: React.FC<BoxProps> = ({ title, lastUpdated, logsCount, chart }) => {
  return (
    <Card className="w-[500px] h-[200px] flex-col border-b-2 border-r-2">
      <CardContent>
        <div
          className={cn(
            "flex-col flex justify-between",
            chart ? "w-4/12" : "w-full"
          )}
        >
          <div className="flex-row">
            <CardTitle className="pb-2 text-gray-500 text-lg font-medium">
              {title}
            </CardTitle>
            <CardDescription className="text-xs text-gray-400">
              {lastUpdated}
            </CardDescription>
          </div>
          <div className="flex flex-row text-2xs text-gray-300 items-center">
            <BadgeInfo size={16}/>
            <p className="pl-1">{logsCount} News logs since update</p>
          </div>
        </div>

        {chart && (
          <div className="w-8/12 bg-white rounded-lg">
            <Chart {...chart}></Chart>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default Box;

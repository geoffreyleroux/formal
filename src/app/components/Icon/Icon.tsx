"use client";
import { Badge } from "@/lib/design-system/badge";
import { cn } from "@/lib/utils";
import {
  Database,
  LayoutGrid,
  Command,
  Lock,
  Puzzle,
  PencilRuler,
  Settings,
  X,
  ArrowDownUp,
  ArrowLeftRight,
  LucideProps,
  Folder,
  CornerDownLeft,
  Sparkle,
  Option,
  ArrowUp,
  Search,
  ScanEye,
  View,
  Cable,
  Repeat,
  Users,
  FileClock,
  Gauge,
  FileSpreadsheet,
  CircleGauge,
  Dog,
  CirclePlus,
  Key,
  Sigma,
  Workflow,
} from "lucide-react";
import * as React from "react";

const getIconFromName = (iconName: string, rest: LucideProps) => {
  switch (iconName) {
    case "Database":
      return <Database {...rest} />;
    case "Lock":
      return <Lock {...rest} />;
    case "Puzzle":
      return <Puzzle {...rest} />;
    case "PencilRuler":
      return <PencilRuler {...rest} />;
    case "Settings":
      return <Settings {...rest} />;
    case "Folder":
      return <Folder {...rest} />;
    case "X":
      return <X {...rest} />;
    case "ArrowLeftRight":
      return <ArrowLeftRight {...rest} />;
    case "CornerDownLeft":
      return <CornerDownLeft {...rest} />;
    case "ArrowDownUp":
      return <ArrowDownUp {...rest} />;
    case "Sparkle":
      return <Sparkle {...rest} />;
    case "Search":
      return <Search {...rest} />;
    case "Option":
      return <Option {...rest} />;
    case "ArrowUp":
      return <ArrowUp {...rest} />;
    case "ScanEye":
      return <ScanEye {...rest} />;
    case "Cable":
      return <Cable {...rest} />;
    case "Repeat":
      return <Repeat {...rest} />;
    case "Users":
      return <Users {...rest} />;
    case "FileClock":
      return <FileClock {...rest} />;
    case "Gauge":
      return <Gauge {...rest} />;
    case "FileSpreadsheet":
      return <FileSpreadsheet {...rest} />;
    case "CircleGauge":
      return <CircleGauge {...rest} />;
    case "Dog":
      return <Dog {...rest} />;
    case "CirclePlus":
      return <CirclePlus {...rest} />;
    case "Key":
      return <Key {...rest} />;
    case "Sigma":
      return <Sigma {...rest} />;
    case "Workflow":
      return <Workflow {...rest} />;
    case "View":
      return <View {...rest} />;
    case "LayoutGrid":
      return <LayoutGrid {...rest} />;
    case "Command":
      return <Command {...rest} />;
    default:
      return (
        <Badge
          className={cn(
            rest.className,
            "text-2xs p-2 h-[32px] w-[32px] text-white text-center overflow-hidden"
          )}
        >
          {iconName}
        </Badge>
      );
  }
};

interface IconProps extends LucideProps {
  iconName: string;
}

const Icon: React.FC<IconProps> = ({ iconName, ...rest }) => {
  return <>{getIconFromName(iconName, rest)}</>;
};

export default Icon;

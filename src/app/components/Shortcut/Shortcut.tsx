"use client";
import { Badge } from "@/lib/design-system/badge";
import { cn } from "@/lib/utils";
import { Folder } from "lucide-react";
import * as React from "react";

export interface ShortcutProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string;
}
const Shortcut: React.FC<React.PropsWithChildren<ShortcutProps>> = ({
  children,
  label,
  className
}) => {
  return (
    <div className={cn(className, "flex flex-row")}>
      {children ? (
        <>
          {children}
          {label}
        </>
      ) : (
        <Badge className="">{label}</Badge>
      )}
    </div>
  );
};

export default Shortcut;

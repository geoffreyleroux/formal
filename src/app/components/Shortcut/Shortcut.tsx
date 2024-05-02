"use client";
import { Badge } from "@/lib/design-system/badge";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import { cn } from "@/lib/utils";
import * as React from "react";
import Icon from "../Icon/Icon";

export interface ShortcutProps extends React.HTMLAttributes<HTMLDivElement> {
  label?: string | number;
  alt?: boolean;
  shift?: boolean;
  onKeyDown?: () => void;
}
const Shortcut: React.FC<React.PropsWithChildren<ShortcutProps>> = ({
  children,
  label,
  onKeyDown,
  className,
  alt = false,
  shift = false,
}) => {
  if (label && onKeyDown) {
    const key = isNaN(Number(label))
      ? `Key${String(label).toUpperCase()}`
      : `Digit${label}`;
    useKeyboardShortcut({
      key,
      shift,
      alt,
      onKeyDown,
    });
  }
  return (
    <div className={cn(className, "flex flex-row items-center")}>
      {alt && (
        <Icon iconName="Option" size={12} color="gray" className="mr-2" />
      )}
      {shift && (
        <Icon iconName="ArrowUp" size={12} color="gray" className="mr-2" />
      )}
      {children ? (
        <>
          {children}
          <span className="text-gray-400 text-xs">{label}</span>
        </>
      ) : (
        <span className="text-gray-400 text-xs">{label}</span>
      )}
    </div>
  );
};

export default Shortcut;

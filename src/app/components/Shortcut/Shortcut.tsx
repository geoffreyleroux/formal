import {
  UseKeyboardShortcutArgs,
  useKeyboardShortcut,
} from "@/lib/hooks/use-keyboard-shortcut";
import { cn } from "@/lib/utils";
import * as React from "react";
import Icon from "../Icon/Icon";

export interface ShortcutProps
  extends Omit<UseKeyboardShortcutArgs, "keyValue"> {
  label?: string;
  keyValue?: string;
  className?: string;
}
const Shortcut: React.FC<React.PropsWithChildren<ShortcutProps>> = ({
  children,
  label,
  keyValue,
  onKeyDown,
  className,
  alt = false,
  shift = false,
  ctrl = false,
  meta = false,
}) => {
  if (keyValue) {
    useKeyboardShortcut({
      keyValue,
      shift,
      meta,
      ctrl,
      alt,
      onKeyDown,
    });
  }
  return (
    <div className={cn("hidden sm:flex flex-row items-center", className)}>
      {alt && (
        <Icon iconName="Option" size={12} color="gray" className="mr-2" />
      )}
      {shift && (
        <Icon iconName="ArrowUp" size={12} color="gray" className="mr-2" />
      )}
      {children ? (
        <>
          {children}
          <span className="text-gray-400 sm:text-xs text-3xs">{label}</span>
        </>
      ) : (
        <span className="text-gray-400 sm:text-xs text-3xs">{label}</span>
      )}
    </div>
  );
};

export default Shortcut;

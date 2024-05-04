import * as React from "react";
import { cn } from "@/lib/utils";
import Shortcut from "../../Shortcut/Shortcut";
import {
  Category,
  Application as ApplicationType,
  Command,
  Action as ActionType,
} from "../types";
import Icon from "../../Icon/Icon";
import { Badge } from "@/lib/design-system/badge";

export interface CategoriesProps {
  action: ApplicationType | Command;
  showCommands: boolean;
  category: Category;
  selectedAction?: ActionType;
  onEnterPressed: () => void;
}

const Action: React.FC<CategoriesProps> = ({
  action,
  showCommands,
  category,
  selectedAction,
  onEnterPressed,
}) => {
  // load colors into tailwind
  let colors = "bg-blue-100 text-blue-800 bg-emerald-100 text-emerald-800";

  const hasShortcut = "shortcut" in action;
  const shift = hasShortcut && action.shortcut.includes("Shift");
  const alt = hasShortcut && action.shortcut.includes("Alt");
  const label = hasShortcut ? action.shortcut[action.shortcut.length - 1] : "";
  const keyValue = isNaN(Number(label))
    ? `Key${String(label).toUpperCase()}`
    : `Digit${label}`;
  return (
    <div
      className={cn(
        "flex flex-row justify-between hover:bg-white active:bg-white",
        selectedAction?.title === action.title && "bg-white"
      )}
      role="button"
      onClick={onEnterPressed}
    >
      <div className="flex flex-row items-center my-2 px-1">
        <Icon
          className={`bg-${
            showCommands ? "white ring-1 ring-gray-300" : category.color
          } p-2 mr-2 rounded-sm `}
          size={32}
          iconName={action.icon || "Folder"}
          color={showCommands ? "purple" : "white"}
        ></Icon>

        <div>
          <span className="px-2 leading-none h-[32px]">{action.title}</span>
          {"badges" in action &&
            action.badges.map((badge, index) => (
              <Badge
                key={badge.label + index}
                className={`mr-1 rounded-lg bg-${badge.color}-100 text-${badge.color}-800`}
              >
                {badge.label}
              </Badge>
            ))}
          <span className="px-2 text-gray-400 text-sm leading-none h-[32px]">
            {action.description}
          </span>
        </div>
      </div>

      {hasShortcut && (
        <div className="flex flex-row items-center">
          <Shortcut
            shift={shift}
            alt={alt}
            label={String(label)}
            keyValue={keyValue}
            onKeyDown={onEnterPressed}
            className="bg-white h-[30px] rounded-xl p-2 border-b-2 border-r-2"
          ></Shortcut>
        </div>
      )}
    </div>
  );
};
export default Action;

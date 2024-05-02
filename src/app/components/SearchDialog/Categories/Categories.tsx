"use client";

import * as React from "react";
import {
  Category,
  Application as ApplicationType,
  Command as CommandType,
  Action as ActionType,
} from "../types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/lib/design-system/scroll-area";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";

import Action from "./Action";
import { getNextAction, getPreviousAction } from "../utils";

export interface CategoriesProps {
  categories: Category[];
  showCommands: boolean;
  selectedAction?: ActionType;
  onSelect: React.Dispatch<React.SetStateAction<ActionType | undefined>>;
  onEnterPressed: () => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  showCommands,
  selectedAction,
  onSelect,
  onEnterPressed,
}) => {
  const filteredCategories = React.useMemo(() => {
    if (showCommands) return categories.filter((c) => c.commands.length);
    return categories;
  }, [showCommands, categories]);

  useKeyboardShortcut({
    key: "Enter",
    onKeyDown: () => {
      if (selectedAction) onEnterPressed();
    },
  });

  useKeyboardShortcut({
    key: "ArrowDown",
    onKeyDown: () => {
      selectedAction
        ? onSelect(
            getNextAction(
              selectedAction,
              showCommands ? "commands" : "applications",
              filteredCategories
            )
          )
        : onSelect(filteredCategories[0].applications[0]);
    },
  });

  useKeyboardShortcut({
    key: "ArrowUp",
    onKeyDown: () => {
      selectedAction
        ? onSelect(
            getPreviousAction(
              selectedAction,
              showCommands ? "commands" : "applications",
              filteredCategories
            )
          )
        : onSelect(filteredCategories[0].applications[0]);
    },
  });

  return (
    <ScrollArea className="px-3 flex flex-row flex-grow">
      <div className="flex flex-col">
        {filteredCategories?.map((category, index) => {
          return (
            <div key={category.title + index}>
              <h2 className={cn("text-gray-400", index > 0 && "mt-5")}>
                {category.title}
              </h2>

              {(showCommands ? category.commands : category.applications).map(
                (action, index) => (
                  <Action
                    key={action.title + index}
                    showCommands={showCommands}
                    category={category}
                    selectedAction={selectedAction}
                    action={action}
                    onEnterPressed={() => {
                      onSelect(action);
                      onEnterPressed();
                    }}
                  ></Action>
                )
              )}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};
export default Categories;

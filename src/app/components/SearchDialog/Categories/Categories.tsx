import * as React from "react";
import { Category, Action as ActionType } from "../types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/lib/design-system/scroll-area";
import Action from "./Action";

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

  return (
    <ScrollArea className="px-2 flex flex-row flex-grow">
      <div className="flex flex-col">
        {filteredCategories?.map((category, index) => {
          return (
            <div key={category.title + index}>
              <h2 className={cn("text-gray-400 px-1", index > 0 && "mt-5")}>
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

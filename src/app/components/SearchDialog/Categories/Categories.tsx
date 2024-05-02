"use client";
import * as React from "react";
import { Category, Application as ApplicationType } from "../types";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/lib/design-system/scroll-area";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import { getNextApp, getPreviousApp } from "../utils";
import Application from "./Application";

export interface CategoriesProps {
  categories: Category[];
  selectedApplication?: ApplicationType;
  onSelect: React.Dispatch<React.SetStateAction<ApplicationType | undefined>>;
  onEnterPressed: () => void;
}

const Categories: React.FC<CategoriesProps> = ({
  categories,
  selectedApplication,
  onSelect,
  onEnterPressed,
}) => {
  useKeyboardShortcut({
    key: "Enter",
    onKeyDown: () => {
      if (selectedApplication) onEnterPressed();
    },
  });
  useKeyboardShortcut({
    key: "ArrowDown",
    onKeyDown: () => {
      selectedApplication
        ? onSelect(getNextApp(selectedApplication, categories))
        : onSelect(categories[0].applications[0]);
    },
  });
  useKeyboardShortcut({
    key: "ArrowUp",
    onKeyDown: () => {
      selectedApplication
        ? onSelect(getPreviousApp(selectedApplication, categories))
        : onSelect(categories[0].applications[0]);
    },
  });

  return (
    <ScrollArea className="px-3 flex flex-row flex-grow">
      <div className="flex flex-col">
        {categories.map((category, index) => {
          return (
            <div key={index}>
              <h2 className={cn("text-gray-400", index > 0 && "mt-5")}>
                {category.title}
              </h2>
              {category.applications.map((app) => (
                <Application
                  key={app.title}
                  category={category}
                  selectedApplication={selectedApplication}
                  application={app}
                  onEnterPressed={() => {
                    onSelect(app);
                    onEnterPressed();
                  }}
                ></Application>
              ))}
            </div>
          );
        })}
      </div>
    </ScrollArea>
  );
};
export default Categories;

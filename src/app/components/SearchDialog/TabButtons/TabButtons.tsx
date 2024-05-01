"use client";
import { Button } from "@/lib/design-system/button";
import { cn } from "@/lib/utils";
import { Database, Lock, Puzzle, PencilRuler, Settings, X } from "lucide-react";
import * as React from "react";
import { TabButton, Tabs } from "../types";
import { tabButtons } from "@/lib/constants";

const getIconFromName = (iconName: string) => {
  switch (iconName) {
    case "Database":
      return <Database size={16} className="mx-2" />;
    case "Lock":
      return <Lock size={16} className="mx-2" />;
    case "Puzzle":
      return <Puzzle size={16} className="mx-2" />;
    case "PencilRuler":
      return <PencilRuler size={16} className="mx-2" />;
    case "Settings":
      return <Settings size={16} className="mx-2" />;
  }
};

interface TabButtonsProps {
  selected: Tabs
  onSelect: React.Dispatch<React.SetStateAction<Tabs>>;
}

const TabButtons: React.FC<TabButtonsProps> = ({ selected, onSelect }) => {
  return (
    <>
      {tabButtons.map((tabButton) => (
        <Button
          onClick={() => onSelect(tabButton.title)}
          className={cn(
            "mx-1 h-[35px] p-3 bg-white ring-1 ring-gray-200 focus:text-white hover:text-white active:text-white",
            tabButton.className,
            selected === tabButton.title &&
              cn(tabButton.backgroundColor, "text-white")
          )}
          size="secondary"
          variant="secondary"
        >
          {tabButton.icon ? (
            selected !== "All" ? (
              <>{getIconFromName(tabButton.icon)}</>
            ) : (
              <X size={16} className="mx-2" />
            )
          ) : (
            <></>
          )}

          <p>{tabButton.title}</p>
        </Button>
      ))}
    </>
  );
};
export default TabButtons;

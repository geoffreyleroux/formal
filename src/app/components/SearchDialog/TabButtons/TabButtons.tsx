"use client";
import { Button } from "@/lib/design-system/button";
import { cn } from "@/lib/utils";

import * as React from "react";
import { Tabs } from "../types";
import { tabButtons } from "@/lib/constants";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import { getNextTab, getPrevTab } from "../utils";
import Shortcut from "../../Shortcut/Shortcut";
import Icon from "../../Icon/Icon";

interface TabButtonsProps {
  selected: Tabs;
  onSelect: React.Dispatch<React.SetStateAction<Tabs>>;
}

const TabButtons: React.FC<TabButtonsProps> = ({ selected, onSelect }) => {
  useKeyboardShortcut({
    key: "Tab",
    onKeyDown: () => {
      onSelect(getNextTab(selected));
    },
  });

  useKeyboardShortcut({
    shift: true,
    key: "Tab",
    onKeyDown: () => {
      onSelect(getPrevTab(selected));
    },
  });

  return (
    <div className="flex flex-row w-full">
      <div className="flex flex-row w-full">
        {tabButtons.map((tabButton, index) => (
          <Button
            aria-keyshortcuts="tab"
            tabIndex={-1}
            key={index}
            onClick={() => onSelect(tabButton.title)}
            className={cn(
              "mx-1 h-[35px] p-3 bg-white ring-1 ring-gray-200 focus:text-white active:text-white",
              tabButton.className,
              selected === tabButton.title &&
                cn(tabButton.backgroundColor, "text-white")
            )}
            size="secondary"
            variant="secondary"
          >
            {tabButton.icon &&
              (selected !== "All" ? (
                <Icon iconName={tabButton.icon}></Icon>
              ) : (
                <Icon size={16} className="mx-2" iconName="X"></Icon>
              ))}

            <p>{tabButton.title}</p>
          </Button>
        ))}
      </div>
      <Shortcut
        className="bg-white px-2 py-3 rounded-md text-xs h-[20px] self-center"
        label="tabs"
      >
        <Icon
          iconName="ArrowLeftRight"
          size={16}
          className="pr-1"
          color="gray"
        ></Icon>
      </Shortcut>
    </div>
  );
};

export default TabButtons;

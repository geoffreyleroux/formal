"use client";
import * as React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogFooter,
} from "@/lib/design-system/dialog";

import { Badge } from "@/lib/design-system/badge";
import { categories } from "@/lib/constants";
import HeaderButton from "../HeaderButton/HeaderButton";
import Shortcut from "../Shortcut/Shortcut";
import { Action, Tabs } from "./types";
import TabButtons from "./TabButtons/TabButtons";
import QueryExamples from "./QueryExamples/QueryExamples";
import Categories from "./Categories/Categories";
import SearchBar from "./SearchBar/SearchBar";
import Icon from "../Icon/Icon";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import { getNextAction, getPreviousAction } from "./utils";
import { Button } from "@/lib/design-system/button";

const SearchDialog: React.FC = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [showCommands, setShowCommands] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<Tabs>(Tabs.All);
  const [inputValue, setInputvalue] = React.useState("");
  const [selectedAction, setSelectedAction] = React.useState<
    Action | undefined
  >();
  const inputRef = React.createRef<HTMLInputElement>()

  const filteredCategories = React.useMemo(() => {
    if (showCommands) {
      return categories.filter((c) => c.commands.length);
    }
    return selectedTab === "All"
      ? categories
      : categories.filter((c) => c.title === selectedTab);
  }, [selectedTab, showCommands]);

  React.useEffect(() => {
    const showCommands = inputValue.startsWith("/");
    setShowCommands(showCommands);
  }, [inputValue]);

  useKeyboardShortcut({
    keyValue: "ArrowDown",
    onKeyDown: () => {
      setSelectedAction(
        getNextAction(
          showCommands ? "commands" : "applications",
          filteredCategories,
          selectedAction
        )
      );
    },
  });
  useKeyboardShortcut({
    keyValue: "Slash",
    onKeyDown: () => {
      setInputvalue("/");
      inputRef.current?.focus()
    },
  });
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <HeaderButton
          onKeyboardShortcut={() => setOpen(true)}
          variant="outline"
        ></HeaderButton>
      </DialogTrigger>

      <DialogContent className="p-0 max-w-[825px] sm:w-[80%] sm:max-h-[80%] sm:h-[100%] overflow-hidden w-full h-full">
        <div className="flex flex-row">
          <div className="w-full overflow-hidden ">
            <div className="flex flex-row relative m-1 w-full">
              <SearchBar
                ref={inputRef}
                inputValue={inputValue}
                setInputvalue={setInputvalue}
              />
            </div>
            {!showCommands && (
              <>
                <div className="flex flex-row px-3 py-1 mt-1 max-w-full relative overflow-hidden">
                  <QueryExamples />
                </div>
                
                <div className="flex flex-row px-3 py-1 max-w-full relative sm:overflow-hidden overflow-auto pb-2 sm:pb0">
                  <TabButtons
                    selected={selectedTab}
                    onSelect={(value) => {
                      setSelectedAction(undefined);
                      setSelectedTab(value);
                    }}
                  ></TabButtons>
                </div>
              </>
            )}
          </div>
        </div>

        <>
          <Categories
            showCommands={showCommands}
            selectedAction={selectedAction}
            onSelect={setSelectedAction}
            onEnterPressed={() => setOpen(false)}
            categories={filteredCategories}
          ></Categories>

          <DialogFooter>
            <div className="flex flex-col">
              <Shortcut
                label="Move"
                keyValue="ArrowUp"
                onKeyDown={() => {
                  setSelectedAction(
                    getPreviousAction(
                      showCommands ? "commands" : "applications",
                      filteredCategories,
                      selectedAction
                    )
                  );
                }}
              >
                <Badge
                  variant="secondary"
                  className="bg-white hover:bg-inherit rounded-xl w-[30x] px-3 py-1 mr-2"
                >
                  <Icon iconName="ArrowDownUp" size={16} color="#9ca3af"></Icon>
                </Badge>
              </Shortcut>
            </div>
            <div className="flex flex-col">
              <div className="flex flex-row">
                <Shortcut
                  label="Open"
                  className="p-2"
                  keyValue="Enter"
                  onKeyDown={() => {
                    if (selectedAction) setOpen(false);
                  }}
                >
                  <Badge
                    variant="secondary"
                    className="bg-white hover:bg-inherit rounded-xl w-[30x] px-3 py-1 mr-2 border-none"
                  >
                    <Icon
                      iconName="CornerDownLeft"
                      size={16}
                      color="#9ca3af"
                    ></Icon>
                  </Badge>
                </Shortcut>
                <Shortcut label="Close">
                  <Badge
                    variant="secondary"
                    className="bg-white hover:bg-inherit rounded-xl w-[30x] px-3 py-1 mr-2"
                  >
                    <span className="text-gray-400">esc</span>
                  </Badge>
                </Shortcut>
                <Button
                  onClick={() => setOpen(false)}
                  variant="secondary"
                  size="sm"
                  className="flex sm:hidden ring-none bg-white "
                >
                  Close
                </Button>
              </div>
            </div>
          </DialogFooter>
        </>
      </DialogContent>
    </Dialog>
  );
};
export default SearchDialog;

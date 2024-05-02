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
import { Application, Tabs } from "./types";
import TabButtons from "./TabButtons/TabButtons";
import QueryExamples from "./QueryExamples/QueryExamples";
import Categories from "./Categories/Categories";
import SearchBar from "./SearchBar/SearchBar";
import Icon from "../Icon/Icon";

const SearchDialog: React.FC = ({}) => {
  const [open, setOpen] = React.useState<boolean>(false);
  const [showCommands, setShowCommands] = React.useState<boolean>(false);
  const [selectedTab, setSelectedTab] = React.useState<Tabs>(Tabs.All);
  const [selectedApplication, setSelectedApplication] = React.useState<Application | undefined>();

  const filteredCategories = React.useMemo(() => {
    return selectedTab === "All"
      ? categories
      : categories.filter((c) => c.title === selectedTab);
  }, [selectedTab]);

  const onCommandKeyDown = (): void => {
    setShowCommands(true);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <HeaderButton variant="outline"></HeaderButton>
      </DialogTrigger>

      <DialogContent className="p-0 max-w-[825px] w-[80%] max-h-[80%] h-[100%] overflow-hidden">
        <div className="flex flex-row">
          <div className="max-w-full overflow-hidden ">
            <div className="flex flex-row relative m-1">
              <SearchBar onCommandKeyDown={onCommandKeyDown} />
            </div>
            <div className="flex flex-row px-3 py-1 mt-1 max-w-full relative overflow-hidden">
              <QueryExamples />
            </div>
            <div className="flex flex-row px-3 py-1 max-w-full relative overflow-hidden">
              <TabButtons
                selected={selectedTab}
                onSelect={setSelectedTab}
              ></TabButtons>
            </div>
          </div>
        </div>

        <Categories
          selectedApplication={selectedApplication}
          onSelect={setSelectedApplication}
          onEnterPressed={() => setOpen(false)}
          categories={filteredCategories}
        ></Categories>

        <DialogFooter>
          <div className="flex flex-col">
            <Shortcut label="Move">
              <Badge
                variant="secondary"
                className="bg-white rounded-xl w-[30x] px-3 py-1 mr-2"
              >
                <Icon iconName="ArrowDownUp" size={16} color="#9ca3af"></Icon>
              </Badge>
            </Shortcut>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Shortcut label="Open" className="p-2">
                <Badge
                  variant="secondary"
                  className="bg-white rounded-xl w-[30x] px-3 py-1 mr-2 border-none"
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
                  className="bg-white rounded-xl w-[30x] px-3 py-1 mr-2"
                >
                  <span className="text-gray-400">esc</span>
                </Badge>
              </Shortcut>
            </div>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SearchDialog;
"use client";
import * as React from "react";

import { Button } from "@/lib/design-system/button";
import HeaderButton from "../HeaderButton/HeaderButton";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
} from "@/lib/design-system/dialog";

import { ArrowDownUp, CornerDownLeft, Search } from "lucide-react";
import { Input } from "@/lib/design-system/input";
import { ScrollArea } from "@/lib/design-system/scroll-area";

import { responses } from "@/lib/constants";
import Shortcut from "../Shortcut/Shortcut";
import { Tabs } from "./types";
import TabButtons from "./TabButtons/TabButtons";
import QueryExamples from "./QueryExamples/QueryExamples";
import Categories from "./Categories/Categories";

const SearchDialog: React.FC = ({}) => {
  const [selectedTab, setSelectedTab] = React.useState<Tabs>("All");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <HeaderButton variant="outline"></HeaderButton>
      </DialogTrigger>
      <DialogContent className="p-0 max-w-[825px] w-[80%] max-h-[80%] h-[100%] overflow-hidden">
        <DialogHeader className="max-w-full overflow-hidden">
          <div className="flex flex-row relative  m-1">
            <Search color="gray" className="absolute left-1 top-3"></Search>
            <Input
              className="p-6 pl-8 text-lg"
              placeholder="Find info, Ask question or Run queries"
            ></Input>
            <Shortcut
              className="absolute right-1 top-3"
              label="'/' for commands"
            ></Shortcut>
          </div>
          <div className="flex flex-row px-3 mt-1 max-w-full relative overflow-hidden">
            <QueryExamples />
          </div>
          <div className="flex flex-row p-3 max-w-full relative overflow-hidden">
            <TabButtons
              selected={selectedTab}
              onSelect={setSelectedTab}
            ></TabButtons>
          </div>
        </DialogHeader>

        <ScrollArea className="p-3">
          <Categories responses={responses}></Categories>
        </ScrollArea>

        <DialogFooter>
          <Button>
            <ArrowDownUp />
          </Button>
          <Button>
            <CornerDownLeft />
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default SearchDialog;

"use client";
import * as React from "react";
import Shortcut from "../../Shortcut/Shortcut";
import { Input } from "@/lib/design-system/input";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import Icon from "../../Icon/Icon";
export interface SearchBarProps {
  onCommandKeyDown: () => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onCommandKeyDown }) => {
  const [inputValue, setInputvalue] = React.useState("");
  useKeyboardShortcut({
    key: "Slash",
    onKeyDown: () => {
      setInputvalue("/");
      onCommandKeyDown();
    },
  });

  return (
    <>
      <Icon
        iconName="Search"
        color="gray"
        className="absolute left-4 h-[50px]"
      ></Icon>

      <Input
        value={inputValue}
        onChange={(e) => setInputvalue(e.currentTarget.value)}
        className="p-6 pl-12 text-lg bg-gray-200 text-gray-500"
        placeholder="Find info, Ask question or Run queries"
      ></Input>
      <Shortcut
        className="absolute right-1 top-3 rounded-sm bg-white p-2 h-[20px]"
        label="'/' for commands"
      ></Shortcut>
    </>
  );
};
export default SearchBar;

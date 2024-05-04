import * as React from "react";
import Shortcut from "../../Shortcut/Shortcut";
import { Input } from "@/lib/design-system/input";
import { useKeyboardShortcut } from "@/lib/hooks/use-keyboard-shortcut";
import Icon from "../../Icon/Icon";
export interface SearchBarProps {
  inputValue: string;
  onCommandKeyDown: () => void;
  setInputvalue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({
  inputValue,
  onCommandKeyDown,
  setInputvalue,
}) => {
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
        className="h-[50px] sm:pr-6 pr-0 pl-12 text-lg bg-gray-200 text-gray-500"
        placeholder="Find info, Ask question or Run queries"
      ></Input>
      <Shortcut
        className="absolute right-5 top-3 rounded-sm bg-white p-2 h-[20px]"
        label="'/' for commands"
      ></Shortcut>
    </>
  );
};
export default SearchBar;

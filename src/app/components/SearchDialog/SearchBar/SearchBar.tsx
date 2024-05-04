import * as React from "react";
import Shortcut from "../../Shortcut/Shortcut";
import { Input } from "@/lib/design-system/input";
import Icon from "../../Icon/Icon";
export interface SearchBarProps {
  inputValue: string;
  setInputvalue: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar = React.forwardRef<HTMLInputElement, SearchBarProps>(
  ({ inputValue, setInputvalue }, ref) => {
    return (
      <>
        <Icon
          iconName="Search"
          size={18}
          color="gray"
          className="absolute sm:left-4 left-0 h-[50px] sm:hidden flex"
        ></Icon>
        <Icon
          iconName="Search"
          color="gray"
          size={24}
          className="absolute sm:left-4 left-0 h-[50px] sm:flex hidden"
        ></Icon>
        <Input
          ref={ref}
          autoFocus={false}
          tabIndex={-1}
          value={inputValue}
          onChange={(e) => setInputvalue(e.currentTarget.value)}
          className="h-[50px] sm:pr-6 pr-0 pl-6 sm:pl-12 bg-gray-200 text-gray-500 sm:text-lg text-sm"
          placeholder="Find info, Ask question or Run queries"
        ></Input>
        <Shortcut
          className="flex absolute sm:right-5 right-2 sm:top-3 top-4 rounded-sm bg-white sm:p-2 sm:h-[20px] p-1 h-[15px]"
          label="'/' for commands"
        ></Shortcut>
      </>
    );
  }
);
export default SearchBar;

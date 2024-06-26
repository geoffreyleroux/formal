import { Button, ButtonProps } from "@/lib/design-system/button";
import * as React from "react";
import Shortcut from "../Shortcut/Shortcut";
import Icon from "../Icon/Icon";

export interface Props extends ButtonProps {
  displayClasses?: string;
  onKeyboardShortcut: () => void;
}

const HeaderButton = React.forwardRef<HTMLButtonElement, Props>(
  (
    {
      className,
      variant,
      size,
      asChild = false,
      onKeyboardShortcut,
      ...props
    },
    ref
  ) => {
    return (
      <Button
        {...props}
        variant={"secondary"}
        className="bg-gray-100 justify-between sm:px-10 px-5 h-[90px] w-full z-10 relative"
      >
        <div className="text-gray-500 text-lg font-normal ">
          Search for anything
        </div>
        <Shortcut
          onKeyDown={() => {
            onKeyboardShortcut();
          }}
          meta={true}
          keyValue="KeyE"
          className="absolute right-3 rounded-xl bg-white p-4 h-[40px] w-[80px]"
        >
          <div>
            <Icon
              iconName="LayoutGrid"
              size={24}
              className="pr-1"
              color="gray"
            ></Icon>
          </div>
          <div className="flex flex-row items-center">
            <Icon
              iconName="Command"
              size={18}
              className="pr-1"
              color="gray"
            ></Icon>
            <span> E</span>
          </div>
        </Shortcut>
      </Button>
    );
  }
);

export default HeaderButton;

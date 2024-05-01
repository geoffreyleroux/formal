import { Button, ButtonProps } from "@/lib/design-system/button";
import styles from "./styles.module.css";
import * as React from "react";

export interface Props {
  displayClasses?: string;
}

const HeaderButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button
        {...props}
        variant={"secondary"}
        className="bg-gray-100  justify-between px-10 h-[90px] w-full"
      >
        <div className="text-gray-500 text-lg font-normal ">Search for anything</div>
      </Button>
    );
  }
);

export default HeaderButton;

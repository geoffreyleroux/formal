import { cn } from "@/lib/utils";

import * as React from "react";

export interface Props {
  displayClasses?: string;
}

const Box: React.FC<React.PropsWithChildren<Props>> = ({
  displayClasses,
  children,
  ...rest
}) => {
  const classes = cn("box", displayClasses);

  return (
    <div className={classes} {...rest}>
      {children}
    </div>
  );
};

export default Box;

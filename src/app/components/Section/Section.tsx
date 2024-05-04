import * as React from "react";
import { ScrollArea, ScrollBar } from "@/lib/design-system/scroll-area";
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area";

export interface Props
  extends ScrollAreaPrimitive.ScrollAreaScrollbarVisibleProps {
  title?: string;
}

const Section: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  title,
  orientation = "horizontal",
}) => {
  return (
    <>
      <h2 className="sm:px-10 px-5 pt-10 pb-2 text-2xl text-gray-700"> {title}</h2>
      <ScrollArea className="w-full whitespace-nowrap ">
        <div className="flex w-max space-x-4 sm:px-10 px-5">{children}</div>
        <ScrollBar className="px-10" orientation={orientation} />
      </ScrollArea>
    </>
  );
};

export default Section;

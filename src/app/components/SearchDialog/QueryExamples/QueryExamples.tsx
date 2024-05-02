"use client";
import { Button } from "@/lib/design-system/button";
import * as React from "react";
import { queryExamples } from "@/lib/constants";
import { ScrollArea, ScrollBar } from "@/lib/design-system/scroll-area";
import Icon from "../../Icon/Icon";

const QueryExamples: React.FC = () => {
  return (
    <ScrollArea className="max-w-full whitespace-nowrap pb-3">
      {queryExamples.map((queryExample, index) => (
        <Button
          tabIndex={-1}
          key={index}
          className="mx-1 h-[30px] bg-gray-200 pr-4 focus:bg-gray-400 hover:bg-gray-400 focus:text-white hover:text-white"
          size="secondary"
          variant="secondary"
        >
          <Icon iconName="Sparkle" className="px-1"></Icon>

          <p>{queryExample.description}</p>
        </Button>
      ))}
      <ScrollBar className="px-10" orientation="horizontal" />
    </ScrollArea>
  );
};
export default QueryExamples;

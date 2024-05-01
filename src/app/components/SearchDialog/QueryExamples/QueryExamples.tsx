"use client";
import { Button } from "@/lib/design-system/button";
import { Sparkle } from "lucide-react";
import * as React from "react";
import { queryExamples } from "@/lib/constants";
import { ScrollArea, ScrollBar } from "@/lib/design-system/scroll-area";

const QueryExamples: React.FC = () => {
  return (
    <ScrollArea className="max-w-full whitespace-nowrap pb-3">
      {queryExamples.map((queryExample) => (
        <Button
          className="mx-1 h-[30px] pr-4 focus:bg-gray-400 hover:bg-gray-400 focus:text-white hover:text-white"
          size="secondary"
          variant="secondary"
        >
          <Sparkle className="px-1" />
          <p>{queryExample.description}</p>
        </Button>
      ))}
      <ScrollBar className="px-10" orientation="horizontal" />
    </ScrollArea>
  );
};
export default QueryExamples;

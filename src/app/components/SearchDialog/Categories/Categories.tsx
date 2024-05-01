"use client";
import * as React from "react";
import { Option, Folder } from "lucide-react";
import { ScrollArea } from "@/lib/design-system/scroll-area";
import Shortcut from "../../Shortcut/Shortcut";
import { Tabs } from "../types";

export interface Data {
  title: string;
  description: string;
  icon: string;
  shortcut: string;
}
export interface Category {
  title: Tabs;
  color: string;
  data: Data[];
}

const Categories: React.FC<{ responses: Category[] }> = ({ responses }) => {
  return (
    <div className="flex flex-col">
      {responses.map((response) => {
        return (
          <>
            <h2 className="text-gray-400 mt-5">{response.title}</h2>
            {response.data.map((d) => {
              return (
                <div className="flex flex-row justify-between">
                  <div className="flex flex-row items-center my-2">
                    <Folder
                      size={32}
                      className="bg-blue-400 p-2 mr-2 rounded-sm"
                      color="white"
                    />
                    <p className="px-2">{d.title}</p>
                    <p className="px-2 text-gray-400 text-sm">
                      {d.description}
                    </p>
                  </div>

                  <div className="flex flex-row">
                    <Shortcut label="A">
                      <Option />
                    </Shortcut>
                  </div>
                </div>
              );
            })}
          </>
        );
      })}
    </div>
  );
};
export default Categories;

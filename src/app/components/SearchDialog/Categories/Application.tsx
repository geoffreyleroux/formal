"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import Shortcut from "../../Shortcut/Shortcut";
import { Category, Application as ApplicationType} from "../types";
import Icon from "../../Icon/Icon";

export interface CategoriesProps {
  application: ApplicationType;
  category: Category;
  selectedApplication?: ApplicationType;
  onEnterPressed: () => void;
}

const Application: React.FC<CategoriesProps> = ({
  application,
  category,
  selectedApplication,
  onEnterPressed,
}) => {
  const key = application.shortcut[application.shortcut.length - 1];
  const shift = application.shortcut.includes("Shift");
  const alt = application.shortcut.includes("Alt");

  return (
    <div
      className={cn(
        "flex flex-row justify-between hover:bg-white active:bg-white",
        selectedApplication?.title === application.title && "bg-white"
      )}
      role="button"
      onClick={onEnterPressed}
    >
      <div className="flex flex-row items-center my-2">
        <Icon
          className={`bg-${category.color} p-2 mr-2 rounded-sm`}
          size={32}
          iconName={application.icon || "Folder"}
          color="white"
        ></Icon>

        <p>
          <span className="px-2 leading-none h-[32px]">
            {application.title}
          </span>
          <span className="px-2 text-gray-400 text-sm leading-none h-[32px]">
            {application.description}
          </span>
        </p>
      </div>

      <div className="flex flex-row items-center">
        <Shortcut
          shift={shift}
          alt={alt}
          label={key}
          onKeyDown={onEnterPressed}
          className="bg-white h-[30px] rounded-xl p-2 border-b-2 border-r-2"
        ></Shortcut>
      </div>
    </div>
  );
};
export default Application;

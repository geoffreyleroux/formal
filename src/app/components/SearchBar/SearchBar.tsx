"use client";
import * as React from "react";

import useDebounce from "@/lib/hooks/use-debounce";
import { Input } from "@/components/design-system/input";
import { Button } from "@/components/design-system/button";

export interface Props {
  search?: never;
  debounceMs?: number;
}

const SearchBar: React.FC<Props> = ({
  debounceMs = 300,

  ...rest
}) => {
  const [innerValue, setInnerValue] = React.useState<string>("");
  const outerValue = useDebounce(innerValue, debounceMs);

  React.useEffect(() => {
    // onChange(outerValue);
    // adding onChange to this deps can causes the infinite loop
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [outerValue]);

  return (
    <div>
      <Input
        value={innerValue}
        onChange={(val) => setInnerValue(val.currentTarget.value)}
        {...rest}
      />
      {innerValue && (
        <Button
          onClick={(e: React.MouseEvent) => {
            // If the SearchBar is inside a popover, for example,
            // this prevents the click from closing the popover
            e.stopPropagation();
            setInnerValue("");
          }}
        >
          Clear
        </Button>
      )}
    </div>
  );
};

export default SearchBar;

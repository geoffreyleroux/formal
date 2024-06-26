import { useEffect } from "react";

export interface UseKeyboardShortcutArgs {
  keyValue: string;
  shift?: boolean;
  alt?: boolean;
  ctrl?: boolean;
  meta?: boolean;
  preventDefault?: boolean;
  onKeyDown?: () => void;
}

export function useKeyboardShortcut({
  keyValue,
  shift = false,
  alt = false,
  ctrl = false,
  meta = false,
  preventDefault = true,
  onKeyDown,
}: UseKeyboardShortcutArgs) {
  function keyDownHandler(e: globalThis.KeyboardEvent) {
    if (!onKeyDown || e.code !== keyValue) return;
    if (e.shiftKey) {
      if (!shift) return;
      if (e.altKey) {
        if (!alt) return;
        preventDefault && e.preventDefault();
        onKeyDown();
      } else {
        if (alt) return;
        preventDefault && e.preventDefault();
        onKeyDown();
      }
    } else if (e.altKey) {
      if (shift) return;
      if (!alt) return;
      preventDefault && e.preventDefault();
      onKeyDown();
    } else if (e.metaKey) {
      if (!meta) return;
      preventDefault && e.preventDefault();
      onKeyDown();
    } else {
      if (shift) return;
      if (alt) return;
      preventDefault && e.preventDefault();
      onKeyDown();
    }
  }

  useEffect(() => {
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [onKeyDown]);
}

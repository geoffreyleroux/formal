import * as React from 'react'

import {ATTRIBUTE_TABLE_IDENTIFIER} from 'airship/components/PersonalizationInput/tools/AttributesTable'
import {POPOVER_IDENTIFIER} from 'airship/components/Popover/Popover'
import {OPTIONS_LIST_IDENTIFIER} from 'airship/page/app-experience-settings/components/Colors/ColorSelector/OptionsList'
import {BUTTON_IDENTIFIER} from 'airship/patterns/button/Button'
import {CHECKBOX_IDENTIFIER} from 'airship/patterns/checkbox/Checkbox'
import {MEGA_SELECT_IDENTIFIER} from 'airship/patterns/MegaSelect/components/OptionBase'
import {MODAL_IDENTIFIER} from 'airship/patterns/modal/Modal'
import {SVG_IDENTIFIER} from 'airship/patterns/svg-sprite/SvgSprite'

/**
 * Handles "dismissing" an interactive element once a click occurs outside of it
 * @param ref Ref for the element that contains the interaction
 * @param dismiss Callback to call when a click happens outside the container
 */
export default function useDismiss(
  ref:
    | React.RefObject<HTMLElement>
    | React.MutableRefObject<HTMLDivElement | undefined>,
  dismiss: () => void
): void {
  // This handles triggering `dismiss` when a click happens outside of the given element ref
  React.useEffect(() => {
    const currentRef = ref.current
    if (!currentRef) return

    document.body.addEventListener('click', close)
    return () => {
      document.body.removeEventListener('click', close)
    }
  })

  function close(ev: MouseEvent): void {
    if (!ref.current) return
    if (ev.target instanceof Node) {
      // if the click occurred within the element, ignore it

      if (
        ref.current.contains(ev.target) ||
        hasParentModalOrPopover(ev.target)
      ) {
        // this won't work if ev.target is a Popover children
        return
      }
    }

    // otherwise trigger `dismiss`
    dismiss()
  }
}

/**
 * Handles "dismissing" multiple interactive elements once a click occurs outside them
 * @param refs a list of Refs for the elements that contain the interaction
 * @param dismiss Callback to call when a click happens outside the container
 */
export function useMultiDismiss(
  refs: (
    | React.RefObject<HTMLElement>
    | React.MutableRefObject<HTMLDivElement | undefined>
  )[],
  dismiss: () => void
): void {
  // This handles triggering `dismiss` when a click happens outside of the given element ref
  React.useEffect(() => {
    if (!refs.length) return

    document.body.addEventListener('click', close)
    return () => {
      document.body.removeEventListener('click', close)
    }
  })

  function close(ev: MouseEvent): void {
    for (const ref of refs) {
      if (ref.current && ev.target instanceof Node) {
        // if the click occurred within the element, ignore it

        if (
          ref.current.contains(ev.target) ||
          hasParentModalOrPopover(ev.target)
        ) {
          // this won't work if ev.target is a Popover children
          return
        }
      }
    }

    // otherwise trigger `dismiss`
    dismiss()
  }
}

function hasParentModalOrPopover(clickTarget: Node): boolean {
  let el: HTMLElement | null = clickTarget as HTMLElement
  do {
    if (isModalOrPopover(el)) {
      return true
    }
    el = el.parentElement
  } while (el)
  return false
}
function isModalOrPopover(el: HTMLElement): boolean {
  if (el.classList.contains('ignore_modal_override')) {
    return false
  }
  return (
    el.classList.contains(MODAL_IDENTIFIER) ||
    el.classList.contains(POPOVER_IDENTIFIER) ||
    el.classList.contains(SVG_IDENTIFIER) ||
    el.classList.contains(BUTTON_IDENTIFIER) ||
    el.classList.contains(MEGA_SELECT_IDENTIFIER) ||
    el.classList.contains(CHECKBOX_IDENTIFIER) ||
    el.classList.contains(ATTRIBUTE_TABLE_IDENTIFIER) ||
    el.classList.contains(OPTIONS_LIST_IDENTIFIER) ||
    el.classList.contains('properties-tab') ||
    el.classList.contains('popover-content__list-item')
  )
}

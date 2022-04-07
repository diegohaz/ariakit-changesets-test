import { useForkRef } from "ariakit-changesets-test-utils/hooks";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Options, Props } from "ariakit-changesets-test-utils/types";
import { PopoverState } from "./popover-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component to render an element that will serve as the popover's
 * anchor. The popover will be positioned relative to this element.
 * @see https://ariakit-changesets-test.org/components/popover
 * @example
 * ```jsx
 * const state = usePopoverState();
 * const props = usePopoverAnchor({ state });
 * <Role {...props}>Anchor</Role>
 * <Popover state={state}>Popover</Popover>
 * ```
 */
export const usePopoverAnchor = createHook<PopoverAnchorOptions>(
  ({ state, ...props }) => {
    props = {
      ...props,
      ref: useForkRef(state.anchorRef, props.ref),
    };
    return props;
  }
);

/**
 * A component that renders an element that will serve as the popover's anchor.
 * The popover will be positioned relative to this element.
 * @see https://ariakit-changesets-test.org/components/popover
 * @example
 * ```jsx
 * const popover = usePopoverState();
 * <PopoverAnchor state={popover}>Anchor</PopoverAnchor>
 * <Popover state={popover}>Popover</Popover>
 * ```
 */
export const PopoverAnchor = createComponent<PopoverAnchorOptions>((props) => {
  const htmlProps = usePopoverAnchor(props);
  return createElement("div", htmlProps);
});

export type PopoverAnchorOptions<T extends As = "div"> = Options<T> & {
  /**
   * Object returned by the `usePopoverState` hook.
   */
  state: PopoverState;
};

export type PopoverAnchorProps<T extends As = "div"> = Props<
  PopoverAnchorOptions<T>
>;

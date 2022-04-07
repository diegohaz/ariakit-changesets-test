import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Props } from "ariakit-changesets-test-utils/types";
import { PopoverArrowOptions, usePopoverArrow } from "../popover/popover-arrow";
import { HovercardState } from "./hovercard-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component to render an arrow element in a hovercard.
 * @see https://ariakit-changesets-test.org/components/hovercard
 * @example
 * ```jsx
 * const state = useHovercardState();
 * const props = useHovercardArrow({ state });
 * <Hovercard state={state}>
 *   <Role {...props} />
 *   Details
 * </Hovercard>
 * ```
 */
export const useHovercardArrow = createHook<HovercardArrowOptions>((props) => {
  props = usePopoverArrow(props);
  return props;
});

/**
 * A component that renders an arrow element in a hovercard.
 * @see https://ariakit-changesets-test.org/components/hovercard
 * @example
 * ```jsx
 * const hovercard = useHovercardState();
 * <HovercardAnchor state={hovercard}>@username</HovercardAnchor>
 * <Hovercard state={hovercard}>
 *   <HovercardArrow />
 *   Details
 * </Hovercard>
 * ```
 */
export const HovercardArrow = createComponent<HovercardArrowOptions>(
  (props) => {
    const htmlProps = useHovercardArrow(props);
    return createElement("div", htmlProps);
  }
);

export type HovercardArrowOptions<T extends As = "div"> = Omit<
  PopoverArrowOptions<T>,
  "state"
> & {
  /**
   * Object returned by the `useHovercardState` hook. If not provided, the
   * parent `Hovercard` component's context will be used.
   */
  state?: HovercardState;
};

export type HovercardArrowProps<T extends As = "div"> = Props<
  HovercardArrowOptions<T>
>;

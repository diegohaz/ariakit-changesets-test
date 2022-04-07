import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Props } from "ariakit-changesets-test-utils/types";
import {
  DialogDismissOptions,
  useDialogDismiss,
} from "../dialog/dialog-dismiss";
import { PopoverState } from "./popover-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component to render a button that hides a popover.
 * @see https://ariakit-changesets-test.org/components/popover
 * @example
 * ```jsx
 * const state = usePopoverState();
 * const props = usePopoverDismiss({ state });
 * <Popover state={state}>
 *   <Role {...props} />
 * </Popover>
 * ```
 */
export const usePopoverDismiss = createHook<PopoverDismissOptions>((props) => {
  props = useDialogDismiss(props);
  return props;
});

/**
 * A component that renders a button that hides a popover.
 * @see https://ariakit-changesets-test.org/components/popover
 * @example
 * ```jsx
 * const popover = usePopoverState();
 * <Popover state={popover}>
 *   <PopoverDismiss />
 * </Popover>
 * ```
 */
export const PopoverDismiss = createComponent<PopoverDismissOptions>(
  (props) => {
    const htmlProps = usePopoverDismiss(props);
    return createElement("button", htmlProps);
  }
);

export type PopoverDismissOptions<T extends As = "button"> = Omit<
  DialogDismissOptions<T>,
  "state"
> & {
  /**
   * Object returned by the `usePopoverState` hook. If not provided, the parent
   * `Popover` component's context will be used.
   */
  state?: PopoverState;
};

export type PopoverDismissProps<T extends As = "button"> = Props<
  PopoverDismissOptions<T>
>;

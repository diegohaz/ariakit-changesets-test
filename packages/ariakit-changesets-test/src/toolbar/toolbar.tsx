import { useWrapElement } from "ariakit-changesets-test-utils/hooks";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Props } from "ariakit-changesets-test-utils/types";
import { CompositeOptions, useComposite } from "../composite/composite";
import { ToolbarContext } from "./__utils";
import { ToolbarState } from "./toolbar-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component to render a toolbar element that groups interactive
 * elements together.
 * @see https://ariakit-changesets-test.org/components/toolbar
 * @example
 * ```jsx
 * const state = useToolbarState();
 * const props = useToolbar({ state });
 * <Role {...props}>
 *   <ToolbarItem>Item 1</ToolbarItem>
 *   <ToolbarItem>Item 2</ToolbarItem>
 * </Role>
 * ```
 */
export const useToolbar = createHook<ToolbarOptions>(({ state, ...props }) => {
  const orientation =
    state.orientation === "both" ? undefined : state.orientation;

  props = useWrapElement(
    props,
    (element) => (
      <ToolbarContext.Provider value={state}>{element}</ToolbarContext.Provider>
    ),
    [state]
  );

  props = {
    role: "toolbar",
    "aria-orientation": orientation,
    ...props,
  };

  props = useComposite({ state, ...props });

  return props;
});

/**
 * A component that renders a toolbar element that groups interactive elements
 * together.
 * @see https://ariakit-changesets-test.org/components/toolbar
 * @example
 * ```jsx
 * const toolbar = useToolbarState();
 * <Toolbar state={toolbar}>
 *   <ToolbarItem>Item 1</ToolbarItem>
 *   <ToolbarItem>Item 2</ToolbarItem>
 * </Toolbar>
 * ```
 */
export const Toolbar = createComponent<ToolbarOptions>((props) => {
  const htmlProps = useToolbar(props);
  return createElement("div", htmlProps);
});

export type ToolbarOptions<T extends As = "div"> = Omit<
  CompositeOptions<T>,
  "state"
> & {
  /**
   * Object returned by the `useToolbarState` hook.
   */
  state: ToolbarState;
};

export type ToolbarProps<T extends As = "div"> = Props<ToolbarOptions<T>>;

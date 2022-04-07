import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Props } from "ariakit-changesets-test-utils/types";
import { GroupOptions, useGroup } from "../group";
import { CompositeState } from "./composite-state";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component to render a composite group.
 * @see https://ariakit-changesets-test.org/components/composite
 * @example
 * ```jsx
 * const state = useCompositeState();
 * const props = useCompositeGroup({ state });
 * <Composite state={state}>
 *   <Role {...props}>
 *     <CompositeGroupLabel>Label</CompositeGroupLabel>
 *     <CompositeItem>Item 1</CompositeItem>
 *     <CompositeItem>Item 2</CompositeItem>
 *   </Role>
 * </Composite>
 * ```
 */
export const useCompositeGroup = createHook<CompositeGroupOptions>(
  ({ state, ...props }) => {
    props = useGroup(props);
    return props;
  }
);

/**
 * A component that renders a composite group.
 * @see https://ariakit-changesets-test.org/components/composite
 * @example
 * ```jsx
 * const composite = useCompositeState();
 * <Composite state={composite}>
 *   <CompositeGroup>
 *     <CompositeGroupLabel>Label</CompositeGroupLabel>
 *     <CompositeItem>Item 1</CompositeItem>
 *     <CompositeItem>Item 2</CompositeItem>
 *   </CompositeGroup>
 * </Composite>
 * ```
 */
export const CompositeGroup = createComponent<CompositeGroupOptions>(
  (props) => {
    const htmlProps = useCompositeGroup(props);
    return createElement("div", htmlProps);
  }
);

export type CompositeGroupOptions<T extends As = "div"> = GroupOptions<T> & {
  /**
   * Object returned by the `useCompositeState` hook. If not provided, the
   * parent `Composite` component's context will be used.
   */
  state?: CompositeState;
};

export type CompositeGroupProps<T extends As = "div"> = Props<
  CompositeGroupOptions<T>
>;

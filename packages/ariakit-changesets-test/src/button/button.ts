import { useEffect, useRef, useState } from "react";
import { isButton } from "ariakit-changesets-test-utils/dom";
import { useForkRef, useTagName } from "ariakit-changesets-test-utils/hooks";
import {
  createComponent,
  createElement,
  createHook,
} from "ariakit-changesets-test-utils/system";
import { As, Props } from "ariakit-changesets-test-utils/types";
import { CommandOptions, useCommand } from "../command";

/**
 * A component hook that returns props that can be passed to `Role` or any other
 * ariakit-changesets-test component. If the element is not a native button, the hook will
 * return additional props to make sure it's accessible.
 * @see https://ariakit-changesets-test.org/components/button
 * @example
 * ```jsx
 * const props = useButton({ as: "div" });
 * <Role {...props}>Accessible button</Role>
 * ```
 */
export const useButton = createHook<ButtonOptions>((props) => {
  const ref = useRef<HTMLButtonElement>(null);
  const tagName = useTagName(ref, props.as || "button");
  const [isNativeButton, setIsNativeButton] = useState(
    () => !!tagName && isButton({ tagName, type: props.type })
  );

  useEffect(() => {
    if (!ref.current) return;
    setIsNativeButton(isButton(ref.current));
  }, []);

  props = {
    role: !isNativeButton && tagName !== "a" ? "button" : undefined,
    ...props,
    ref: useForkRef(ref, props.ref),
  };

  props = useCommand(props);

  return props;
});

/**
 * A component that renders a native accessible button. If another element is
 * passed to the `as` prop, this component will make sure the rendered element is
 * accessible.
 * @see https://ariakit-changesets-test.org/components/button
 * @example
 * ```jsx
 * <Button as="div">Accessible button</Button>
 * ```
 */
export const Button = createComponent<ButtonOptions>((props) => {
  const htmlProps = useButton(props);
  return createElement("button", htmlProps);
});

export type ButtonOptions<T extends As = "button"> = CommandOptions<T>;

export type ButtonProps<T extends As = "button"> = Props<ButtonOptions<T>>;

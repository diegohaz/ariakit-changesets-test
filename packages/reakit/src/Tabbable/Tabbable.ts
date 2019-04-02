import { unstable_createComponent } from "../utils/createComponent";
import { mergeProps } from "../utils/mergeProps";
import { unstable_useOptions } from "../system/useOptions";
import { unstable_useProps } from "../system/useProps";
import { unstable_BoxOptions, unstable_BoxProps, useBox } from "../Box/Box";
import { useLiveRef } from "../__utils/useLiveRef";
import { Keys } from "../__utils/types";

export type unstable_TabbableOptions = unstable_BoxOptions & {
  /**
   * Same as the HTML attribute.
   */
  disabled?: boolean;
  /**
   * When an element is `disabled`, it may still be `focusable`.
   * In this case, only `aria-disabled` will be set.
   */
  unstable_focusable?: boolean;
  /**
   * Keyboard keys to trigger click.
   * @default [" "] // (space)
   */
  unstable_clickKeys?: string[];
};

export type unstable_TabbableProps = unstable_BoxProps & {
  disabled?: boolean;
};

function isNativeTabbable(element: EventTarget) {
  if (element instanceof HTMLButtonElement) return true;
  if (element instanceof HTMLInputElement) return true;
  if (element instanceof HTMLSelectElement) return true;
  if (element instanceof HTMLTextAreaElement) return true;
  if (element instanceof HTMLAnchorElement) return true;
  if (element instanceof HTMLAudioElement) return true;
  if (element instanceof HTMLVideoElement) return true;
  return false;
}

export function useTabbable(
  { unstable_clickKeys = [" "], ...options }: unstable_TabbableOptions = {},
  { tabIndex = 0, onClick, disabled, ...htmlProps }: unstable_TabbableProps = {}
) {
  const clickKeysRef = useLiveRef(unstable_clickKeys);

  let _options: unstable_TabbableOptions = {
    unstable_clickKeys,
    disabled,
    ...options
  };
  _options = unstable_useOptions("useTabbable", _options, htmlProps);

  const reallyDisabled = _options.disabled && !_options.unstable_focusable;

  htmlProps = mergeProps(
    {
      disabled: reallyDisabled,
      tabIndex: reallyDisabled ? undefined : tabIndex,
      "aria-disabled": _options.disabled,
      onClick: event => {
        if (_options.disabled) {
          event.stopPropagation();
          event.preventDefault();
        } else if (onClick) {
          onClick(event);
        }
      },
      onKeyDown: event => {
        if (isNativeTabbable(event.target) || _options.disabled) return;

        if (clickKeysRef.current.indexOf(event.key) !== -1) {
          event.preventDefault();
          event.target.dispatchEvent(
            new MouseEvent("click", {
              view: window,
              bubbles: true,
              cancelable: false
            })
          );
        }
      }
    } as unstable_TabbableProps,
    htmlProps
  );

  htmlProps = useBox(_options, htmlProps);
  htmlProps = unstable_useProps("useTabbable", _options, htmlProps);
  return htmlProps;
}

const keys: Keys<unstable_TabbableOptions> = [
  ...useBox.__keys,
  "disabled",
  "unstable_focusable",
  "unstable_clickKeys"
];

useTabbable.__keys = keys;

export const Tabbable = unstable_createComponent({
  as: "button",
  useHook: useTabbable
});
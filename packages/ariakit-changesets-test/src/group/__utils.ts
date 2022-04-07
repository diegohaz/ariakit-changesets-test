import { createContext } from "react";
import { SetState } from "ariakit-changesets-test-utils/types";

export const GroupLabelContext = createContext<
  SetState<string | undefined> | undefined
>(undefined);

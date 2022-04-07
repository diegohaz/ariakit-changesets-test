import { Button } from "ariakit-changesets-test/button";
import {
  Tooltip,
  TooltipAnchor,
  useTooltipState,
} from "ariakit-changesets-test/tooltip";
import "./style.css";

export default function Example() {
  const tooltip = useTooltipState();
  return (
    <>
      <TooltipAnchor state={tooltip} as={Button} className="button">
        Hover or focus on me
      </TooltipAnchor>
      <Tooltip state={tooltip} className="tooltip">
        Tooltip
      </Tooltip>
    </>
  );
}

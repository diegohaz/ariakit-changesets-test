import { PlaygroundCode } from "ariakit-changesets-test-playground";
import theme from "ariakit-changesets-test-playground/themes/default";

const value = `function Example() {
  return <div>Hello World</div>;
}
`;

export default function PlaygroundCodeExample() {
  return (
    <PlaygroundCode theme={theme} value={value} language="jsx" lineNumbers />
  );
}

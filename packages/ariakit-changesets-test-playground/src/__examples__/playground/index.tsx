import {
  Playground,
  PlaygroundEditor,
  PlaygroundPreview,
  usePlaygroundState,
} from "ariakit-changesets-test-playground";
import theme from "ariakit-changesets-test-playground/themes/default";
import "./style.css";

const defaultValues = {
  "index.js": `export default function Example() {
  return <div>Hello World</div>;
}
`,
};

export default function Example() {
  const playground = usePlaygroundState({ defaultValues });
  return (
    <Playground state={playground} className="playground">
      <PlaygroundEditor theme={theme} file="index.js" className="editor" />
      <PlaygroundPreview className="preview" />
    </Playground>
  );
}

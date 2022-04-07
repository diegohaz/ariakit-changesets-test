import { Button } from "ariakit-changesets-test/button";
import { Group } from "ariakit-changesets-test/group";
import "./style.css";

export default function Example() {
  return (
    <Group className="group">
      <Button className="button">Bold</Button>
      <Button className="button">Italic</Button>
      <Button className="button">Underline</Button>
    </Group>
  );
}

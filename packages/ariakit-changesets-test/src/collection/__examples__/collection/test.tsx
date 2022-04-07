import { getByText, render } from "ariakit-changesets-test-test-utils";
import Example from ".";

test("render correctly", async () => {
  render(<Example />);
  expect(getByText("Items count: 3")).toBeInTheDocument();
});

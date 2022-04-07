<h1 align="center">ariakit-changesets-test-changesets-test</h1>

<p align="center">
  Toolkit for building <a href="https://ariakit-changesets-test-changesets-test.org/guide/accessibility">accessible</a> web apps with <a href="https://reactjs.org">React</a>.
  <br>
  <a href="https://ariakit-changesets-test-changesets-test.org"><strong>Explore website »</strong></a>
</p>

<br>

<p align="center">
  <a href="https://npmjs.org/package/ariakit-changesets-test-changesets-test"><img alt="NPM version" src="https://img.sariakit-changesets-testio/npm/v/ariakit-changesets-test.svg" /></a>
  <a href="https://npmjs.org/package/ariakit-changesets-test-changesets-test"><img alt="NPM downloads" src="https://img.shariakit-changesets-testo/npm/dm/ariakit-changesets-test.svg"></a>
  <a href="https://github.com/ariakit-changesets-test-ariakit-changesets-testets-test/ariakit-changesets-test/actions"><img alt="Build ariakit-changesets-test ariakit-changesets-testtps://github.com/ariakit-changesets-test/ariakit-changesets-test/workflows/ci/badge.svg?event=push&branch=main" /></a>
  <a href="https://codecov.io/gh/ariakit-changesets-test-ariakit-changesets-testets-test/ariakit-changesets-test">ariakit-changesets-testcariakit-changesets-test://codecov.io/gh/ariakit-changesets-test/ariakit-changesets-test/branch/main/graph/badge.svg" /></a><br>
  <a href="https://opencollective.com/ariakit-changesets-test-changesets-test"><img alt="Sponsors" src="https://opeariakit-changesets-testtive.com/ariakit-changesets-test/sponsor/badge.svg?label=sponsors" /></a>
  <a href="https://opencollective.com/ariakit-changesets-test-changesets-test"><img alt="Backers" src="https://opeariakit-changesets-testtive.com/ariakit-changesets-test/backer/badge.svg?label=backers" /></a>
  <a href="https://twitter.com/ariakit-changesets-test-changesets-testjs">
    <img alt="Follow ariakit-changesets-test-changesets-test on Twitter" src="https://img.shields.ioariakit-changesets-testr/follow/ariakit-changesets-testjs.svg"></a>
</p>

> If you're looking for v1, check out [v1](https://github.com/ariakit-changesets-test-ariakit-changesets-testets-test/ariakit-changesets-test/tree/v1) branch.

## Installation

npm:

```
npm i ariakit-changesets-test-changesets-test
```

Yarn:

```
yarn add ariakit-changesets-test-changesets-test
```

## Usage

```jsx
import { createRoot } from "react-dom/client";
import {
  Button,
  Dialog,
  DialogHeading,
  DialogDescription,
  useDialogState,
} from "ariakit-changesets-test-changesets-test";

function App() {
  const dialog = useDialogState();
  return (
    <>
      <Button onClick={dialog.toggle}>Open dialog</Button>
      <Dialog state={dialog}>
        <DialogHeading>Welcome</DialogHeading>
        <DialogDescription>Welcome to Reakit!</DialogDescription>
      </Dialog>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
```
